import React from 'react';

// import LoginForm from './login_form';
import SessionFormContainer from './session_form_container';
// import SignupForm from './signup_form';

class AuthForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="authform">
                <div className="authform-core">
                    <SessionFormContainer color={this.props.color}/>
                </div>
                <p className="authform-note">Create a Page or Nove for sharing you or your interests!</p>
            </div>
        )
    }
}

export default AuthForm;