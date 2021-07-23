const express = require('express')
var cors = require('cors')
const app = express()
const port = 3060

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/tenant/:tenantid/customer/:id', function (req, res, next) {
  res.send({birthdate: "2021-07-21",
  createdAt: "2021-07-14T22:28:43.638Z",
  createdBy: "60ef6509a0dbfd000fffda0c",
  gender: "female",
  id: "60ef651ba0dbfd000fffda13",
  name: 'Tamaraebi Egbuson',
  tenant: "60ef650da0dbfd000fffda0e",
  updatedAt: "2021-07-14T22:28:43.638Z",
  updatedBy: "60ef6509a0dbfd000fffda0c",
  __v: 0,
  _id: "60ef651ba0dbfd000fffda13"}
    
   )
})

app.get('/api/tenant/:tenantid/customer', function (req, res, next) {
  res.send(
    {rows:  [{birthdate: "2021-07-21",
    createdAt: "2021-07-14T22:28:43.638Z",
    createdBy: "60ef6509a0dbfd000fffda0c",
    gender: "female",
    id: "60ef20202022545400fffd454",
    name: 'Doyin Adegoke',
    tenant: "60ef650da0dbfd000fffda0e",
    updatedAt: "2021-07-14T22:28:43.638Z",
    updatedBy: "60ef6509a0dbfd000fffda0c",
    __v: 0,
    _id: "60ef20202022545400fffd454"},
    {birthdate: "2021-07-21",
    createdAt: "2021-07-14T22:28:43.638Z",
    createdBy: "60ef6509a0dbfd000fffda0c",
    gender: "male",
    id: "60ef651454545400fffd454",
    name: 'Goodness Ezeani',
    tenant: "60ef650da0dbfd000fffda0e",
    updatedAt: "2021-07-14T22:28:43.638Z",
    updatedBy: "60ef6509a0dbfd000fffda0c",
    __v: 0,
    _id: "60ef651454545400fffd454"},
    {birthdate: "2021-07-21",
    createdAt: "2021-07-14T22:28:43.638Z",
    createdBy: "60ef6509a0dbfd000fffda0c",
    gender: "male",
    id: "60ef651ba0dbfd000fffda13",
    name: 'Tamaraebi Egbuson',
    tenant: "60ef650da0dbfd000fffda0e",
    updatedAt: "2021-07-14T22:28:43.638Z",
    updatedBy: "60ef6509a0dbfd000fffda0c",
    __v: 0,
    _id: "60ef651ba0dbfd000fffda13"}], 
    count: 2}
    
   )
})

app.get('/api/tenant/:tenantid/customer?id', function (req, res, next) {
  res.send({birthdate: "2021-07-21",
  createdAt: "2021-07-14T22:28:43.638Z",
  createdBy: "60ef6509a0dbfd000fffda0c",
  gender: "female",
  id: "60ef651ba0dbfd000fffda13",
  name: 'Tamaraebi Egbuson',
  tenant: "60ef650da0dbfd000fffda0e",
  updatedAt: "2021-07-14T22:28:43.638Z",
  updatedBy: "60ef6509a0dbfd000fffda0c",
  __v: 0,
  _id: "60ef651ba0dbfd000fffda13"}
    
   )
})

app.get('/api/tenant/:tenantid/testing/:id', function (req, res, next) {
  res.send({birthdate: "2021-07-21",
  createdAt: "2021-07-14T22:28:43.638Z",
  createdBy: "60ef6509a0dbfd000fffda0c",
  gender: "female",
  id: "60ef651ba0dbfd000fffda13",
  name: 'Tamaraebi Egbuson',
  tenant: "60ef650da0dbfd000fffda0e",
  updatedAt: "2021-07-14T22:28:43.638Z",
  updatedBy: "60ef6509a0dbfd000fffda0c",
  __v: 0,
  _id: "60ef651ba0dbfd000fffda13"}
    
   )
})

app.get('/api/tenant/:tenantid/testing', function (req, res, next) {
  res.send(
    {rows:  [{birthdate: "2021-07-21",
    createdAt: "2021-07-14T22:28:43.638Z",
    createdBy: "60ef6509a0dbfd000fffda0c",
    gender: "female",
    id: "60ef20202022545400fffd454",
    name: 'Doyin Adegoke',
    description: 'Description',
    tenant: "60ef650da0dbfd000fffda0e",
    updatedAt: "2021-07-14T22:28:43.638Z",
    updatedBy: "60ef6509a0dbfd000fffda0c",
    __v: 0,
    _id: "60ef20202022545400fffd454"},
    {birthdate: "2021-07-21",
    createdAt: "2021-07-14T22:28:43.638Z",
    createdBy: "60ef6509a0dbfd000fffda0c",
    gender: "male",
    id: "60ef651454545400fffd454",
    name: 'Goodness Ezeani',
    description: 'Description',
    tenant: "60ef650da0dbfd000fffda0e",
    updatedAt: "2021-07-14T22:28:43.638Z",
    updatedBy: "60ef6509a0dbfd000fffda0c",
    __v: 0,
    _id: "60ef651454545400fffd454"},
    {birthdate: "2021-07-21",
    createdAt: "2021-07-14T22:28:43.638Z",
    createdBy: "60ef6509a0dbfd000fffda0c",
    gender: "male",
    id: "60ef651ba0dbfd000fffda13",
    name: 'Tamaraebi Egbuson',
    description: 'Description',
    tenant: "60ef650da0dbfd000fffda0e",
    updatedAt: "2021-07-14T22:28:43.638Z",
    updatedBy: "60ef6509a0dbfd000fffda0c",
    __v: 0,
    _id: "60ef651ba0dbfd000fffda13"}], 
    count: 2}
    
   )
})

app.get('/api/tenant/:tenantid/testing?id', function (req, res, next) {
  res.send({birthdate: "2021-07-21",
  createdAt: "2021-07-14T22:28:43.638Z",
  createdBy: "60ef6509a0dbfd000fffda0c",
  gender: "female",
  id: "60ef651ba0dbfd000fffda13",
  name: 'Tamaraebi Egbuson',
  tenant: "60ef650da0dbfd000fffda0e",
  updatedAt: "2021-07-14T22:28:43.638Z",
  updatedBy: "60ef6509a0dbfd000fffda0c",
  __v: 0,
  _id: "60ef651ba0dbfd000fffda13"}
    
   )
})


app.listen(port, () => {
  console.log(`Dummy API at http://localhost:${port}`)
})