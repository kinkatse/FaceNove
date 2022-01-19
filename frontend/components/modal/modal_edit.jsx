import React from 'react';

class ModalEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: props.currentUser.firstName,
            lastName: props.currentUser.lastName,
            birthdate: props.currentUser.birthdate,
            gender: props.currentUser.gender || "",
            bio: props.currentUser.bio || "",
            hometown: props.currentUser.hometown || "",
            education: props.currentUser.education || "",
            work: props.currentUser.work || "",
            relationship: props.currentUser.relationship || "",
            website: props.currentUser.website || ""
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
        const userData = Object.assign({}, this.state);
        this.props.updateUser(userData, this.props.currentUser.id)
        .then(this.resetState())
    }

    resetState() {
        this.setState({
            firstName: this.props.currentUser.firstName,
            lastName: this.props.currentUser.lastName,
            birthdate: this.props.currentUser.birthdate,
            gender: this.props.currentUser.gender || "",
            bio: this.props.currentUser.bio || "",
            hometown: this.props.currentUser.hometown || "",
            education: this.props.currentUser.education || "",
            work: this.props.currentUser.work || "",
            relationship: this.props.currentUser.relationship || "",
            website: this.props.currentUser.website || ""
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
                <div className="edit_modal_background" onClick={this.props.closeModal}></div>
                <div className="edit_modal_child">
                    <div className="edittop">
                        <h1 className="edittitle">Edit Profile!</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="editlinediv"></div>
                    <div className="editbody">
                        <div className="editfieldwhole">
                            <label className="editlabelfields">First Name</label>
                            <input
                                className="editfirstname input"
                                type="text"
                                value={this.state.firstName}
                                placeholder={`${this.state.firstName}`}
                                onChange={this.update('firstName')}
                            />
                        </div>
                        <div className="editfieldwhole">
                            <label className="editlabelfields">Last Name</label>
                            <input
                                className="editlastname input"
                                type="text"
                                value={this.state.lastName}
                                placeholder={`${this.state.lastName}`}
                                onChange={this.update('lastName')}
                            />
                        </div>
                        <div className="editfieldwhole">
                            <label className="editlabelfields">Bio</label>
                            <textarea
                                className="editbio input"
                                type="text"
                                placeholder={`${this.state.bio}`}
                                value={this.state.bio}
                                onChange={this.update('bio')}
                            ></textarea>
                        </div>
                        <div className="editfieldwhole">
                            <label className="editlabelfields">Birthday</label>
                            <div className="editdrop">
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
                        </div>
                        <div className="editfieldwhole">
                            <label className="editlabelfields">Gender</label>
                            <div className="editradios">
                                <label className="editradio">
                                    Male
                                    <input type='radio' name='gender' value='Male' onChange={this.update('gender')}></input>
                                </label>     
                                <label className="editradio">
                                    Female
                                    <input type='radio' name='gender' value='Female' onChange={this.update('gender')}></input>
                                </label>
                                <label className="editradio">
                                    Other
                                    <input type='radio' name='gender' value='Other' onChange={this.update('gender')}></input>
                                </label>
                            </div>
                        </div>
                        <div className="editfieldwhole">
                            <label className="editlabelfields">Hometown</label>
                            <input
                                className="edithometown input"
                                type="text"
                                placeholder={`${this.state.hometown}`}
                                value={this.state.hometown}
                                onChange={this.update('hometown')}
                            />
                        </div>
                        <div className="editfieldwhole">
                            <label className="editlabelfields">Education</label>
                            <input
                                className="editeducation input"
                                type="text"
                                placeholder={`${this.state.education}`}
                                value={this.state.education}
                                onChange={this.update('education')}
                            />
                        </div>
                        <div className="editfieldwhole">
                            <label className="editlabelfields">Work</label>
                            <input
                                className="editwork input"
                                type="text"
                                placeholder={`${this.state.work}`}
                                value={this.state.work}
                                onChange={this.update('work')}
                            />
                        </div>
                        <div className="editfieldwhole">
                            <label className="editlabelfields">Relationship</label>
                            <input
                                className="editrelationship input"
                                type="text"
                                placeholder={`${this.state.relationship}`}
                                value={this.state.relationship}
                                onChange={this.update('relationship')}
                            />
                        </div>
                        <div className="editfieldwhole">
                            <label className="editlabelfields">Website</label>
                            <input
                                className="editwebsite input"
                                type="text"
                                placeholder={`${this.state.website}`}
                                value={this.state.website}
                                onChange={this.update('website')}
                            />
                        </div>
                    </div>
                    <div className="editsubmit">
                        <input className={'editsubmitbutton splashbutton ' + colorSplash} type="submit" value="Update Info"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalEdit;