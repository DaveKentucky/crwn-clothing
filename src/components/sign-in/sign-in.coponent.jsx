import React from "react";

import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
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

                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default SignIn;