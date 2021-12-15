import React from 'react';

import Login from './login';
import SignUp from './signup';

class AuthForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="authform">
                <div className="authform-core">
                    <Login />
                    <SignUp />
                </div>
                <p className="authform-note">Create a Page or Nove for sharing you or your interests!</p>
            </div>
        )
    }
}

export default AuthForm;