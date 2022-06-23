import React from 'react';
import { RECEIVE_SIGNUP_ERRORS } from '../../actions/session_actions';

import { appColor } from '../../util/color_util';

class ModalSignup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            birthdate: "2000-01-01",
            gender: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetState() {
        this.setState = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            birthdate: "2000-01-01",
            gender: ""
        }
        this.props.closeModal();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        // If signup action returns an error, this will check the type and
        // then if it is an error then it wont close modal or reset state
        // but it no error, then it will reset state and close modal
        this.props.signup(user).then(err => {
            if (err.type !== RECEIVE_SIGNUP_ERRORS) {
                this.resetState();
            }
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    updateBirthday(datetype) {
        let birthday = this.state.birthdate.split('-');
        let idxToUpdate;
        if (datetype === 'year') {
            idxToUpdate = 0;
        } else if (datetype === 'month') {
            idxToUpdate = 1;
        } else if (datetype === 'day') {
            idxToUpdate = 2;
        }
        
        return e => {
          birthday[idxToUpdate] = e.target.value;
          this.setState({birthdate: birthday.join('-')})
        }
    }

    renderError(type) {
        let errorActive = 'errorActive'
        let emailErrorActive = null;
        let firstnameErrorActive = null;
        let lastnameErrorActive = null;
        let passwordErrorActive = null;
        if (this.props.errors.responseJSON) {
            let errors = this.props.errors.responseJSON;
            if (errors.includes("Email can't be blank")) {
                emailErrorActive = 'emailErrorActive'
            }
            if (errors.includes("Firstname can't be blank")) {
                firstnameErrorActive = 'firstnameErrorActive'
            }
            if (errors.includes("Lastname can't be blank")) {
                lastnameErrorActive = 'lastnameErrorActive'
            }
            if (errors.includes("Password is too short (minimum is 6 characters)")) {
                passwordErrorActive = 'passwordErrorActive'
            }
        }
        if (emailErrorActive && type === 'email') {
            return (
                <div>
                    <p className={emailErrorActive}>Please Enter an Email</p>
                    <img className="errorActive emailError" src={error_url} />
                </div>
            )
        }
        if (firstnameErrorActive && type === 'firstname') {
            return (
                <div>
                    <p className={firstnameErrorActive}>Please Enter a First Name</p>
                    <img className="errorActive firstnameError" src={error_url} />
                </div>
            )
        }
        if (lastnameErrorActive && type === 'lastname') {
            return (
                <div>
                    <p className={lastnameErrorActive}>Please Enter a Last Name</p>
                    <img className="errorActive lastnameError" src={error_url} />
                </div>
            )
        }
        if (passwordErrorActive && type === 'password') {
            return (
                <div>
                    <p className={passwordErrorActive}>Password needs at least 6 characters</p>
                    <img className="errorActive passwordError" src={error_url} />
                </div>
            )
        }
    }

    render() {
        const monthsObj = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        }

        const monthsList = () => {
            let monthsArr = [];
            for (let i = 1; i <= 12; i++) {
                monthsArr.push(<option value={i} key={`month-${i}`}>{monthsObj[i]}</option>)
            }
            return monthsArr;
        }

        const daysList = () => {
            let daysArr = [];
            for (let i = 1; i <= 31; i++) {
                daysArr.push(<option value={i} key={`day-${i}`}>{i}</option>)
            }
            return daysArr;
        }

        const yearsList = () => {
            let yearsArr = [];
            for (let i = 1900; i <= 2022; i++) {
                yearsArr.unshift(<option value={i} key={`year-${i}`}>{i}</option>)
            }
            return yearsArr;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="signup_modal_background">
                    <div className="signup_modal_child">
                        <div className="signuptop">
                            <h1>Sign Up!</h1>
                            <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                        </div>
                        <p className="signupheader">It's fast and convenient!</p>
                        <div className="signuplinediv"></div>
                        <div className="signupname">
                            {this.renderError('firstname')}
                            <input
                                className="signupfirstname input"
                                type="text"
                                value={this.state.firstName}
                                placeholder="First Name"
                                onChange={this.update('firstName')}
                            />
                            {this.renderError('lastname')}
                            <input
                                className="signuplastname input"
                                type="text"
                                value={this.state.lastName}
                                placeholder="Last Name"
                                onChange={this.update('lastName')}
                            />
                        </div>
                        {this.renderError('email')}
                        <input
                            className="signupemail input"
                            type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.update('email')}
                        />
                        {this.renderError('password')}
                        <input
                            className="signuppassword input"
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update('password')}
                        />
                        <br/>
                        <label className="signupinfo">Birthday</label>
                            <div className="signupdrop">
                                <select name='month' onChange={this.updateBirthday('month')} required defaultValue='0'>
                                    <option value='0' disabled >Month</option>
                                    {monthsList()}
                                </select>
                                <select name='day' onChange={this.updateBirthday('day')} required defaultValue='0'>
                                    <option value='0' disabled >Day</option>
                                    {daysList()}
                                </select>
                                <select name='year' onChange={this.updateBirthday('year')} required defaultValue='0'>
                                    <option value='0' disabled >Year</option>
                                    {yearsList()}
                                </select>
                            </div>
                        <label className="signupinfo">Gender</label> 
                            <div className="signupradio">
                                <label className="radio">
                                    Male<input type='radio' name='gender' value='Male' onChange={this.update('gender')}></input>
                                </label>     
                                <label className="radio">
                                    Female<input type='radio' name='gender' value='Female' onChange={this.update('gender')}></input>
                                </label>
                                <label className="radio">
                                    Other<input type='radio' name='gender' value='Other' onChange={this.update('gender')}></input>
                                </label>
                            </div>
                        <div className="submit">
                            <input className={`submitbutton splashbutton ${appColor()}`} type="submit" value="Submit"/>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalSignup;