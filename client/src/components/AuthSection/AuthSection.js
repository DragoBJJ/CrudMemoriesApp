import React, { useState } from 'react';
import { WrapperAuth } from './StyledAuth';
import SignUpForm from '../SignUpForm/SignUpForm';
import SignInForm from '../SignInForm/SIgnInForm';

const AuthSection = () => {
  const [signUp, setSignUp] = useState(false);

  const handleForm = () => setSignUp(!signUp);

  return (
    <WrapperAuth signUp={signUp}>
      {signUp ? <SignUpForm set={setSignUp} /> : <SignInForm set={setSignUp} />}
    </WrapperAuth>
  );
};

export default AuthSection;
