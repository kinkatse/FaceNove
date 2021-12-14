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
                <div className="authform-core">
                    <LogIn />
                    <SignUp />
                </div>
                <p className="authform-note">Create a Page or Nove for sharing you or your interests!</p>
            </div>
        )
    }
}

export default AuthForm;