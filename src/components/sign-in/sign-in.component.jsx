import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',

        }
    }

    HandleSubmit = event => {
        event.preventDefault();

        this.setState({ email:'', password:'' });
    }

    HandleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.HandleSubmit}>
                    <FormInput type="email"
                        value={this.state.email}
                        name="email"
                        label='email'
                        handleChange={this.HandleChange}
                        required />
                    <FormInput 
                        type="password"
                        value={this.state.password}
                        name="password"
                        label='password'
                        handleChange={this.HandleChange}
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                    

                </form>
            </div>
        )
    }
}

export default SignIn;