// librearies
import React from 'react';
// components
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
// styles
import { SignInAndSignUpPageContainer } from './sign-in-and-sign-up.styles';


const SignInAndSignUpPage = () => (
    <SignInAndSignUpPageContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpPageContainer>
)

export default SignInAndSignUpPage;