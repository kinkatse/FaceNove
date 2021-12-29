import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        // debugger

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleUpdate(field) {
        // debugger
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className="loginform">
                <label className="logemail">
                    <input
                        className="login"
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUpdate('email')}
                    />
                </label>
                <label className="logpass">
                    <input
                        className="login"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUpdate('password')}
                    />
                </label>
                <div className="logbutton">
                    <input
                        className="logbuttontext"
                        type="submit"
                        value={this.props.formType}
                        onClick={this.handleSubmit}
                    />
                </div>
                <p className="forgot-pass">Forgot password?</p>
            </div>
        )
    }
}

export default LoginForm;