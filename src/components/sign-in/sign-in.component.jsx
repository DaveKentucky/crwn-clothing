// libraries
import React, { useState } from "react";
import { connect } from 'react-redux';
// components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// styles
import { SignInContainer, ButtonsContainer } from './sign-in.styles';
// redux
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return(
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={ handleSubmit }>
                <FormInput
                    type='email'
                    name='email'
                    value={ email }
                    required
                    handleChange={ handleChange }
                    label='email'/>
                <FormInput
                    type='password'
                    name='password'
                    value={ password }
                    required
                    handleChange={ handleChange }
                    label='password'/>

                <ButtonsContainer>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton
                        type='button'
                        onClick={ googleSignInStart }
                        isGoogleSignIn>
                            Sign in with Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);