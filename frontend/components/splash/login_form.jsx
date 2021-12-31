import React from 'react';

import SignupForm from './signup_form';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
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
        this.props.login(user)
    }

    rendersLogin(color, colorSplash) {
        // First argument is for login class color change, the colorSplash only changed for splashbuttons
        let colorInput;
        if (color === 'blue') {
            colorInput = 'bluelogin';
        } else if (color === 'green') {
            colorInput = 'greenlogin'
        } else if (color === 'red') {
            colorInput = 'redlogin'
        }
        return (
            <div className="loginform">
                <label className="loginemail">
                    <input
                        className={'login ' + colorInput}
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUpdate('email')}
                    />
                </label>
                <label className="loginpass">
                    <input
                        className={'login ' + colorInput}
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUpdate('password')}
                    />
                </label>
                <div className="logbutton">
                    <input
                        className={'logbuttontext splashbutton ' + colorSplash}
                        type="submit"
                        value={this.props.formType}
                    />
                </div>
            </div>
        )
    }

    render() {
        let colorSplash;
        if (this.props.color === 'blue') {
            colorSplash = 'bluesplash';
        } else if (this.props.color === 'green') {
            colorSplash = 'greensplash'
        } else if (this.props.color === 'red') {
            colorSplash = 'redsplash'
        }
        return (
            <div className="">
                <form onSubmit={this.handleSubmit}>
                    {this.rendersLogin(this.props.color, colorSplash)}
                </form>
                {/* <SignupForm colorSplash={colorSplash}/> */}
                <button
                    onClick={this.props.openSignupModal()}>
                </button>
                <button
                    className={'demo splashbutton ' + colorSplash}
                    onClick={this.handleDemo}>
                        Demo Login
                </button>
            </div>
        )
    }
}

export default LoginForm;