import React from 'react';

import SignupForm from './signup_form';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        // debugger

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
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

    handleDemo(e) {
        e.preventDefault();
        const user = { email: 'demo@mail.com', password: 'password' }
        this.props.processForm(user)
    }

    rendersLogin() {
        return (
            <div className="loginform">
                <label className="loginemail">
                    <input
                        className="login"
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUpdate('email')}
                    />
                </label>
                <label className="loginpass">
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
                        className="logbuttontext splashbutton"
                        type="submit"
                        value={this.props.formType}
                    />
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="">
                <form onSubmit={this.handleSubmit}>
                    {this.rendersLogin()}
                </form>
                <div className="signup">
                    <SignupForm />
                </div>
                <button className="demo splashbutton" onClick={this.handleDemo}>Demo Login</button>
            </div>
        )
    }
}

export default LoginForm;