
import { i18n } from 'src/i18n';

import { useSelector, useDispatch } from 'react-redux';

import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import * as yup from 'yup';

const schemaWithUrl = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('tenant.fields.tenantName'),
    {
      required: true,
      max: 50,
    },
  ),
  url: yupFormSchemas
    .string(i18n('tenant.fields.tenantUrl'), {
      required: true,
      max: 50,
    })
    .matches(
      /^[a-z0-9][-a-zA-Z0-9]*$/,
      i18n('tenant.validation.url'),
    ),
});

const schemaWithoutUrl = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('tenant.fields.tenantName'),
    {
      required: true,
      max: 50,
    },
  ),
});



function TenantNewForm(props) {
  const dispatch = useDispatch();

  return (
   <div></div>
  );
}

export default TenantNewForm;
