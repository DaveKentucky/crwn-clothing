// libraries
import React from "react";
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
// components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// styles
import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        } catch (error) {
            console.error(error);
        }

    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        type='email'
                        name='email'
                        value={ this.state.email }
                        required
                        handleChange={ this.handleChange }
                        label='email'/>
                    <FormInput
                        type='password'
                        name='password'
                        value={ this.state.password }
                        required
                        handleChange={ this.handleChange }
                        label='password'/>

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={ signInWithGoogle } isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;