import React from 'react';

class ModalEdit extends React.Component {
    constructor(props) {
        super(props)
        debugger
        this.state = {
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            birthdate: props.user.birthdate,
            gender: props.user.gender || "",
            bio: props.user.bio || "",
            hometown: props.user.hometown || "",
            education: props.user.education || "",
            work: props.user.work || "",
            relationship: props.user.relationship || "",
            website: props.user.website || ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        debugger
        const userData = Object.assign({}, this.state);
        this.props.updateUser(userData, this.props.user.id)
        .then(this.resetState())
    }

    resetState() {
        this.setState({
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            birthdate: this.props.user.birthdate,
            gender: this.props.user.gender,
            bio: this.props.user.bio,
            hometown: this.props.user.hometown,
            education: this.props.user.education,
            work: this.props.user.work,
            relationship: this.props.user.relationship,
            website: this.props.user.website
        })
        this.props.closeModal()
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
                            <h1>Edit Profile!</h1>
                            <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                        </div>
                        <div className="signuplinediv"></div>
                        <label className="editlabelfields">First Name</label>
                            <input
                                className="signupfirstname input"
                                type="text"
                                value={this.state.firstName}
                                placeholder={`${this.state.firstName}`}
                                onChange={this.update('firstName')}
                            />
                        <label className="editlabelfields">Last Name</label>
                            <input
                                className="signupfirstname input"
                                type="text"
                                value={this.state.lastName}
                                placeholder={`${this.state.lastName}`}
                                onChange={this.update('lastName')}
                            />
                        <label className="editlabelfields">Bio</label>
                            <textarea
                                className="editfields"
                                type="text"
                                placeholder={`${this.state.bio}`}
                                value={this.state.bio}
                                onChange={this.update('bio')}
                            ></textarea>
                        <label className="editlabelfields">Birthday</label>
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
                        <label className="editlabelfields">Gender</label>
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
                        <label className="editlabelfields">Hometown</label>
                            <input
                                className="editfields"
                                type="text"
                                placeholder={`${this.state.hometown}`}
                                value={this.state.hometown}
                                onChange={this.update('hometown')}
                            />
                        <label className="editlabelfields">Education</label>
                            <input
                                className="editfields"
                                type="text"
                                placeholder={`${this.state.education}`}
                                value={this.state.education}
                                onChange={this.update('education')}
                            />
                        <label className="editlabelfields">Work</label>
                            <input
                                className="editfields"
                                type="text"
                                placeholder={`${this.state.work}`}
                                value={this.state.work}
                                onChange={this.update('work')}
                            />
                        <label className="editlabelfields">Relationship</label>
                            <input
                                className="editfields"
                                type="text"
                                placeholder={`${this.state.relationship}`}
                                value={this.state.relationship}
                                onChange={this.update('relationship')}
                            />
                        <label className="editlabelfields">Website</label>
                            <input
                                className="editfields"
                                type="text"
                                placeholder={`${this.state.website}`}
                                value={this.state.website}
                                onChange={this.update('website')}
                            />
                        <div className="editsubmit">
                            <input className={'submitbutton splashbutton ' + colorSplash} type="submit" value="Update Info"/>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalEdit;