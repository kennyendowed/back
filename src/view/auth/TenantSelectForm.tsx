import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { i18n } from 'src/i18n';
import authSelectors from 'src/modules/auth/authSelectors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  id: yupFormSchemas.string(i18n('tenant.fields.tenantId')),
});

function TenantSelectForm(props) {
  const dispatch = useDispatch();



  const invitedTenants = useSelector(
    authSelectors.selectInvitedTenants,
  );

  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );

  const [initialValues] = useState({
    id: invitedTenants[0].id,
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ id }) => {
    const tenantUserInvitation = currentUser.tenants;

 /*    dispatch(
      actions.doAccept(
        tenantUserInvitation.invitationToken,
      ),
    ); */
  };

  return (
    <div></div>
  );
}

export default TenantSelectForm;
