// libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// redux
import { signUpStart } from '../../redux/user/user.actions';
// styles
import { SignUpContainer, TitleContainer } from './sign-up.styles';


const SignUp = () => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { displayName, email, password, confirmPassword } = userCredentials;
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        dispatch(signUpStart({ email, password, displayName }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with an email address</span>
            <form className='sign-up-form' onSubmit={ handleSubmit }>
                <FormInput
                    type='text'
                    name='displayName'
                    value={ displayName }
                    onChange={ handleChange }
                    label='Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={ email }
                    onChange={ handleChange }
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={ password }
                    onChange={ handleChange }
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={ confirmPassword }
                    onChange={ handleChange }
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
};

export default SignUp;