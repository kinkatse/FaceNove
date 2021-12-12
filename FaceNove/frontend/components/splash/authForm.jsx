import React from 'react';

import LogIn from './logIn';
import SignUp from './signup';

class AuthForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="authform">
                <LogIn />
                <SignUp />
                <p className="authform-note">Create a page or Nove for sharing you or your interests!</p>
            </div>
        )
    }
}

export default AuthForm;