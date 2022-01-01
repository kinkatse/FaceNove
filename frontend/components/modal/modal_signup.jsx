import React from 'react';

class ModalSignup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            birthdate: "1-1-2000",
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
            birthdate: "1-1-2000",
            gender: ""
        }
        this.props.closeModal();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
        this.resetState();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    updateBirthday(datetype) {
        let birthday = this.state.birthdate.split('-');
        let idxToUpdate;
        if (datetype === 'month') {
            idxToUpdate = 0;
        } else if (datetype === 'day') {
            idxToUpdate = 1;
        } else if (datetype === 'year') {
            idxToUpdate = 2;
        }
        
        return e => {
          birthday[idxToUpdate] = e.target.value;
          this.setState({birthdate: birthday.join('-')})
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
            // <div className="signupform">
            //     <h1>Modal Open</h1>
            // </div>
            <form onSubmit={this.handleSubmit}>
                <div className="signup_modal-background">
                    <div className="signup_modal-child">
                        <div className="signuptop">
                            <h1>Sign Up!</h1>
                            <span onClick={this.props.closeModal}>X</span>
                        </div>
                        <label className="signupinput">
                            <input
                                className="signupfirstname"
                                type="firstName"
                                value={this.state.firstName}
                                placeholder="First Name"
                                onChange={this.update('firstName')}
                            />
                        </label>
                        <label className="signupinput">
                            <input
                                className="signuplastname"
                                type="lastName"
                                value={this.state.lastName}
                                placeholder="Last Name"
                                onChange={this.update('lastName')}
                            />
                        </label>
                        <label className="signupinput">
                            <input
                                className="signupemail"
                                type="text"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.update('email')}
                            />
                        </label>
                        <label className="signupinput">
                            <input
                                className="signuppassword"
                                type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update('password')}
                            />
                        </label>
                        <label className="signupbirthdaygender">Birthday</label>
                            <div className="signupbirthdaydrop">
                            <select className="drop" name='month' onChange={this.updateBirthday('month')} required defaultValue='0'>
                                <option value='0' disabled >Month</option>
                                {monthsList()}
                            </select>
                            <select className="drop" name='day' onChange={this.updateBirthday('day')} required defaultValue='0'>
                                <option value='0' disabled >Day</option>
                                {daysList()}
                            </select>
                            <select className="drop" name='year' onChange={this.updateBirthday('year')} required defaultValue='0'>
                                <option value='0' disabled >Year</option>
                                {yearsList()}
                            </select>
                            </div>
                        <br/>
                        <div className="gender">
                        <label className="signupbirthdaygender">Gender</label> 
                            <div className="signupgenderradio">
                                <div className="radio">
                                    <label>Male
                                    <input className="radiobutmale" type='radio' name='gender' value='Male' onChange={this.update('gender')}></input>
                                    </label>     
                                </div>
                                <div className="radio">
                                    <label>Female
                                    <input className="radiobutfemale" type='radio' name='gender' value='Female' onChange={this.update('gender')}></input>
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>Other
                                    <input className="radiobutother" type='radio' name='gender' value='Other' onChange={this.update('gender')}></input>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="submit">
                            <input className="submitbutton" type="submit" value={this.props.formType}/>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalSignup;