import React from 'react';

import LoginForm from './login_form';
import SignupForm from './signup_form';

class AuthForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="authform">
                <div className="authform-core">
                    <LoginForm />
                    <SignupForm />
                </div>
                <p className="authform-note">Create a Page or Nove for sharing you or your interests!</p>
            </div>
        )
    }
}

export default AuthForm;