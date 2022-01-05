import React from 'react';
import { RECEIVE_SIGNUP_ERRORS } from '../../actions/session_actions';

class ModalSignup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            birthdate: "2000-01-01",
            gender: "",
            activeEmailError: false,
            activeFirstNameError: false,
            activeLastNameError: false,
            activePasswordError: false
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

    // renderErrors() {
    //     // responseJSON because the backend (users controller) returns
    //     // error messages so there is an extra key to grab all errors
    //     if (this.props.errors.responseJSON) {
    //         let errors = this.props.errors.responseJSON;
    //         // return (<p className="signup_error">{errors[0]}</p>)
    //         // This is an array of all the errors, we should loop through
    //         // and print each one

    //         if (errors.includes("Email can't be blank")) {
    //             this.setState({activeEmailError: 'true'})
    //         }
    //         if (errors.includes("Firstname can't be blank")) {
    //             this.setState({activeFirstNameError: 'true'})
    //         }
    //         if (errors.includes("Lastname can't be blank")) {
    //             this.setState({activeLastNameError: 'true'})
    //         }
    //         if (errors.includes("Password is too short (minimum is 6 characters)")) {
    //             this.setState({activePasswordError: 'true'})
    //         }
            
    //         return (
    //             <p className="signup_error">Seems like there are some errors</p>
    //         )
    //         // return (
    //         //     <div className="signup_errors">
    //         //         <p className="signup_error">{errors[0]}</p>
    //         //         <p className="signup_error">{errors[1]}</p>
    //         //         <p className="signup_error">{errors[2]}</p>
    //         //         <p className="signup_error">{errors[3]}</p>
    //         //     </div>
    //         // )
    //     } else {
    //         return (
    //             <p className="signupheader">It's fast and convenient!</p>
    //         )
    //     }
    // }

    renderError(type) {
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
                    {/* <img></img> */}
                </div>
            )
        }
        if (firstnameErrorActive && type === 'firstname') {
            return (
                <div>
                    <p className={firstnameErrorActive}>Please Enter a First Name</p>
                    {/* <img></img> */}
                </div>
            )
        }
        if (lastnameErrorActive && type === 'lastname') {
            return (
                <div>
                    <p className={lastnameErrorActive}>Please Enter a Last Name</p>
                    {/* <img></img> */}
                </div>
            )
        }
        if (passwordErrorActive && type === 'password') {
            return (
                <div>
                    <p className={passwordErrorActive}>Password needs at least 6 characters</p>
                    {/* <img></img> */}
                </div>
            )
        }
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

        let errorActive = 'errorActive'

        // let emailErrorActive = null;
        // let firstnameErrorActive = null;
        // let lastnameErrorActive = null;
        // let passwordErrorActive = null;
        // if (this.state.activeEmailError === true) {
        //     emailErrorActive = 'emailErrorActive';
        // }
        // if (this.state.activeFirstNameError === true) {
        //     firstnameErrorActive = 'firstnameErrorActive';
        // }
        // if (this.state.activeLastNameError === true) {
        //     lastnameErrorActive = 'lastnameErrorActive';
        // }
        // if (this.state.activePasswordError === true) {
        //     passwordErrorActive = 'passwordErrorActive';
        // }

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
                <div className="signup_modal-background">
                    <div className="signup_modal-child">
                        <div className="signuptop">
                            <h1>Sign Up!</h1>
                            <span className="X" onClick={this.props.closeModal}>X</span>
                        </div>
                        <p className="signupheader">It's fast and convenient!</p>
                        <div className="signuplinediv"></div>
                        <div className="signupname">
                            {this.renderError('firstname')}
                            <input
                                className={'signupfirstname input ' + errorActive}
                                type="text"
                                value={this.state.firstName}
                                placeholder="First Name"
                                onChange={this.update('firstName')}
                            />
                            <input
                                className="signuplastname input"
                                type="text"
                                value={this.state.lastName}
                                placeholder="Last Name"
                                onChange={this.update('lastName')}
                            />
                        </div>
                        <input
                            className="signupemail input"
                            type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.update('email')}
                        />
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
                            <input className={'submitbutton splashbutton ' + colorSplash} type="submit" value="Submit"/>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalSignup;