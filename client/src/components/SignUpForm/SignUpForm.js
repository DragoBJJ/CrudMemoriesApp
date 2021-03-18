import React from 'react';

import { signUp } from 'actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FormWrapper, WrapperInput, Title, Button, FormDesc } from '../Form/StyledForm';
import MyTextField from '../Form/MyTextField';
import { Formik } from 'formik';
import * as Yup from 'yup';

const yupValidation = Yup.object({
  firstName: Yup.string().required('Is required'),
  lastName: Yup.string().required('Is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Is required'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .required('Is required'),
  confirmPassword: Yup.string()
    .min(8, 'Minimum 8 characters')
    .required('Is required'),
});

const AuthForm = ({ set }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        confirmPassword: '',
      }}
      validationSchema={yupValidation}
      onSubmit={values => {
        dispatch(signUp(values, history));
      }}
    >
      {() => (
        <FormWrapper>
          <Title>Sign Up </Title>
          <WrapperInput signUp={true}>
            <MyTextField name="firstName" type="text" label="First Name" />
            <MyTextField name="lastName" type="text" label="Last Name" />

            <MyTextField name="email" type="text" label="Email" />
            <MyTextField name="password" type="password" label="Password" />

            <MyTextField name="confirmPassword" type="password" label="Confirm Password" />
          </WrapperInput>
          <Button type="submit">Submit</Button>
          <FormDesc onClick={() => set(false)}>
            Already have an account ? <strong>Sign In</strong>
          </FormDesc>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default AuthForm;
