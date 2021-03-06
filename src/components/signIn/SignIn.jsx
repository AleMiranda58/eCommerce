import React from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../customButton/CustomButton';
import FormInput from '../formInput/FormInput';

import './signIn.scss'


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email:'', password:''})
        }catch(error) {
            // console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email"
                    type="email"
                    value={this.state.email}
                    label='email'
                    handleChange={this.handleChange}
                    required
                    />
                    <FormInput
                    name="password"
                    type="password"
                    value={this.state.password}
                    label='password'
                    handleChange={this.handleChange}
                    required
                    />
                    <div className='buttons'>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
