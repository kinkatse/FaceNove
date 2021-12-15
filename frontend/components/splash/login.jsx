import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div className="loginform">
                <label className="logemail">
                    <input
                        className="login"
                        type="text"
                        placeholder="Email"
                        // value={this.state.email}
                    />
                </label>
                <label className="logpass">
                    <input
                        className="login"
                        type="password"
                        placeholder="Password"
                        // value={this.state.password}
                    />
                </label>
                <div className="logbutton">
                    <input
                        className="logbuttontext"
                        type="submit"
                        // value={this.props.formType}
                    />
                </div>
                <p className="forgot-pass">Forgot password?</p>
            </div>
        )
    }
}

export default Login;