'use strict';

const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const shell = require('child_process').execSync

var newentity = process.argv[2];
var os = process.argv[3];
var customer = 'customer';
console.log(newentity);


copyfile('modules',customer, newentity.toLowerCase())
Renamefiles('./src/modules/')
os.toLowerCase() === 'linux' ? ReplaceFilesLinux('./src/modules/')  : ReplaceFilesWindows('./src/modules/') ;


copyfile('view',customer, newentity)
Renamefiles('./src/view/')
os.toLowerCase() === 'linux' ? ReplaceFilesLinux('./src/view/')  : ReplaceFilesWindows('./src/view/') ;



console.log('All done you can now manuually');
console.log('1.) Add an instance of reducers to src/modules/reducers');
console.log('2.) Add an instance of translation to src/i18n/en');
console.log('3.) Add an EndPoint');


// Proper Case
function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

// Recursively get a list of filenames that meet a citeria

function walk(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        var filename = file;
        file = dir + '/' + file;
        var m = {dir, file, filename};
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else { 
            /* Is a file */
            results.push(m);
        }
    });
    return results;
}


// Copy folders
function copyfile(which, src, dest){
    src = './src/' + which + '/' + src;
    dest = './src/' + which + '/' + dest.toLowerCase();
    fse.copySync(src, dest,{ overwrite: true }, function (err) {
        if (err) {                 
          console.error(err);      
        } else {
          console.log("success!");
        }
      });
}



// recursively rename files in folder
    function Renamefiles ( dir  )  {
        
        var fileList = walk(dir + newentity)
    
        fileList.forEach(f => {
           if (f.filename.match(new RegExp('customer','g')) !== null) {
                fs.renameSync(f.file, f.dir + '/' +  f.filename.replace('customer', newentity.toLowerCase()));
           } 
           if (f.filename.match(new RegExp('Customer','g')) !== null) {
                fs.renameSync(f.file, f.dir + '/' +  f.filename.replace('Customer', toTitleCase(newentity)));   
           } 
         
            
        });
        console.log('Renamed for '+ dir);
    };
    

// find mention of Expression in Files and Replace them

    function ReplaceFilesLinux(dir){
        var fileList = walk(dir + newentity)
        console.log('Replacing Names in contents of ' +  fileList.length.toString() +  'files in  directory' + dir)
        fileList.forEach(f => {
            shell("sed -i 's!customer!" +  newentity.toLowerCase() + "!g' " + f.file);
            shell("sed -i 's!Customer!" +  toTitleCase(newentity)+ "!g' " + f.file);
            shell("sed -i 's!CUSTOMER!" + newentity.toUpperCase() + "!g' " + f.file);
        })
  
    }

    function ReplaceFilesWindows(dir){
 
        var fileList = walk(dir + newentity)
        console.log('Replacing Names in contents of ' +  fileList.length.toString() +  'files in  directory' + dir)
        fileList.forEach(f => {
            var command1 ="(Get-Content -path " +  f.file + " -Raw).Replace('customer','"+  newentity.toLowerCase() + "') | Set-Content -Path " +  f.file;
            var command2 ="(Get-Content -path " +  f.file + " -Raw).Replace('Customer','"+  toTitleCase(newentity) + "') | Set-Content -Path " +  f.file;
            var command3 ="(Get-Content -path " +  f.file + " -Raw).Replace('CUSTOMER','"+  newentity.toUpperCase() + "') | Set-Content -Path " +  f.file;

            shell(command1, {'shell':'powershell.exe'});
            shell(command2, {'shell':'powershell.exe'});
            shell(command3, {'shell':'powershell.exe'});
        })
    }