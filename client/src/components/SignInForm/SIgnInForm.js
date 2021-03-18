import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn } from 'actions/auth';

import { FormWrapper, WrapperInput, Title, Button, FormDesc } from '../Form/StyledForm';
import MyTextField from '../Form/MyTextField';
import { Formik } from 'formik';
import * as Yup from 'yup';

const InitFormValue = {
  password: '',
  email: '',
};

const yupValidation = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Is required'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .required('Is required'),
});

const SignInForm = ({ set }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      validationSchema={yupValidation}
      onSubmit={values => {
        dispatch(signIn(values, history));
      }}
    >
      {() => (
        <FormWrapper>
          <Title>Sign In </Title>
          <WrapperInput signUp={false}>
            <MyTextField name="email" type="text" label="Email" />
            <MyTextField name="password" type="password" label="Password" />
          </WrapperInput>
          <Button type="submit">Submit</Button>
          <FormDesc onClick={() => set(true)}>
            Don't have an account ? <strong>Sign Un</strong>
          </FormDesc>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignInForm;
