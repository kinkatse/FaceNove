import React from 'react';

import { appColor, inputColor } from '../../util/color_util';

class SessionForm extends React.Component {
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

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleDemo(e) {
        e.preventDefault();
        const user = { email: 'demo@mail.com', password: 'password' }
        this.props.login(user)
    }

    rendersErrors() {
        if (this.props.errors.length > 0) {
            let err = this.props.errors[0]
            return (
                <p className="log_errors">{err}</p>
            )            
        } else {
            return (
                <p className="log_errors"></p>
            )
        }
    }

    rendersLogin() {
        let redHighlight;

        if (this.props.errors.length > 0) {
            redHighlight = 'redError';
        }

        return (
            <div className="loginform">
                <input
                    className={`login ${redHighlight} ${inputColor()}`}
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.update('email')}
                />
                <input
                    className={`login ${redHighlight} ${inputColor()}`}
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                />
                <div className="logbutton">
                    <input
                        className={`logbuttontext splashbutton ${appColor()}`}
                        type="submit"
                        value="Log In"
                    />
                </div>
                {this.rendersErrors()}
            </div>
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.rendersLogin()}
                </form>
                <button
                    className={`signupbuttontext splashbutton ${appColor()}`}
                    onClick={this.props.openSignupModal}>
                        Create New Account
                </button>
                <button
                    className={`demobuttontext splashbutton ${appColor()}`}
                    onClick={this.handleDemo}>
                        Demo Login
                </button>
            </div>
        )
    }
}

export default SessionForm;