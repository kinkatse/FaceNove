import React from 'react';

class ProfileIntro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bio: props.currentUser.bio || "",
            openBio: false
        }
        // this.updateBio = this.updateBio.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openBioEdit() {
        // Need to set state for bio again since the state.bio
        // will still be the old one until it is updated.
        this.setState({
            bio: this.props.currentUser.bio || "",
            openBio: true
        })
    }

    updateBio() {
        return e => this.setState({ bio: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const userData = Object.assign({}, { bio: this.state.bio });
        this.props.updateUser(userData, this.props.currentUser.id)
        .then(this.closeBio())
    }

    closeBio() {
        this.setState({
            openBio: false
        })
    }
    
    resetState() {
        this.setState({
            bio: this.props.currentUser.bio || "",
            openBio: false
        })
    }
    
    rendersEdit() {
        if (this.props.currentUser.id === this.props.user.id) {
            return (
                <div
                    className="editprofbutton"
                    onClick={this.props.openEditModal}>
                        Edit Details
                </div>
            )
        }
    }

    render() {
        let colorSplash;
        if (this.props.color === "blue") {
            colorSplash = 'bluesplash';
        } else if (this.props.color === "green") {
            colorSplash = 'greensplash'
        } else if (this.props.color === "red") {
            colorSplash = 'redsplash'
        }

        // Later want to implement logic to allow to show certain info fields
        let user = this.props.user;
        let bioEmpty = "openedit_whole";
        let genderEmpty = "";
        let educationEmpty = "";
        let hometownEmpty = "";
        let workEmpty = "";
        let relationshipEmpty = "";
        let websiteEmpty = "";
        let bio, birthday, birthdayFormatted, gender, education,
        hometown, work, relationship, website, time;
        
        // Conditionals to make the info be default if no value
        // Should make a button to make bio just like Facebook, with better formatting too***

        let addBio;
        let editBio;
        if (user.id === this.props.currentUser.id) {
            addBio = (
                <div className="profilebiobutton" onClick={() => this.openBioEdit()}>
                    Add Bio
                </div>
            )
            editBio = (
                <div className="profilebiobutton editbiomargin" onClick={() => this.openBioEdit()}>
                    Edit Bio
                </div>
            )
        }

        if (this.state.openBio) {
            bio = (
                <form className="openedit_form" onSubmit={this.handleSubmit}>
                    <textarea
                        className="openedit_textarea"
                        type="text"
                        placeholder={`${this.state.bio}`}
                        value={this.state.bio}
                        onChange={this.updateBio()}
                    ></textarea>
                    <div className="editbio_whole">
                        <div className="prof_openbiobutton edit_bio_cancel" onClick={() => this.resetState()}>
                            Cancel
                        </div>
                        <input className={'prof_openbiobutton edit_bio_submit ' + colorSplash} type="submit" value="Save"/>
                    </div>
                </form>
            )
        } else if (user.bio) {
            bioEmpty = "profile_bio"
            bio = (
                <div className="profile_bio_div">
                    {user.bio}
                    {editBio}
                </div>
            )
        } else {
            bioEmpty = "profile_bio_empty"
            bio = addBio
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

        const daysFormat = (dayNum) => {
            let dayInt = parseInt(dayNum)
            if (dayNum.slice(-1) === "1" && dayNum !== "11") {
                return `${dayInt}st,`
            } else if (dayNum.slice(-1) === "2" && dayNum !== "12") {
                return `${dayInt}nd,`
            } else if (dayNum.slice(-1) === "3" && dayNum !== "13") {
                return `${dayInt}rd,`
            } else {
                return `${dayInt}th,`
            }
        }

        if (user.birthdate) { birthday = user.birthdate.split('-') }
        else { birthday = null }
        // else { birthday = "Birthday not registered" }
        if (user.birthdate !== "Birthday not registered") {
            let day = daysFormat(birthday.pop())
            let month = monthsObj[parseInt(birthday.pop())]
            birthday.unshift(day)
            birthday.unshift(month)
            birthdayFormatted = ["Born on ", <strong key={month}>{birthday.join(' ')}</strong>]
        } else { "Something unexpected happened" }

        if (user.gender) {
            gender = ["Identify as ", <strong key={user.gender}>{user.gender}</strong>]
        } else { genderEmpty = "profile_info_empty" }
        // } else { gender = <em>Gender not registered</em> }
        
        if (user.hometown) {
            hometown = ["Lives in ", <strong key={user.hometown}>{user.hometown}</strong>]
        } else { hometownEmpty = "profile_info_empty" }
        // } else { hometown = <em>Hometown not registered</em> }
        
        if (user.education) {
            education = ["Studied at ", <strong key={user.education}>{user.education}</strong>]
        } else { educationEmpty = "profile_info_empty" }
        // } else { education = <em>Education not registered</em> }
        
        if (user.work) {
            work = ["Works as ", <strong key={user.work}>{user.work}</strong>]
        } else { workEmpty = "profile_info_empty" }
        // } else { work = <em>Work not registered</em> }
        
        if (user.relationship) {
            relationship = ["Currently ", <strong key={user.relationship}>{user.relationship}</strong>]
        } else { relationshipEmpty = "profile_info_empty" }
        // } else { relationship = <em>Relationship not registered</em> }
        
        if (user.website) {
            website = ["Website: ", <strong key={user.website}>{user.website}</strong>]
        } else { websiteEmpty = "profile_info_empty" }
        // } else { website = <em>Website not registered</em> }

        // Cancel edit button should just be onclick to resetState()***
        return (
            <div className="profile_intro">
                <h2 className="profbodytitle">Intro</h2>
                <div className={bioEmpty}>{bio}</div>
                <p className="">Email me at <strong>{user.email}</strong></p>
                <p className="">{birthdayFormatted}</p>
                <p className={genderEmpty}>{gender}</p>
                <p className={hometownEmpty}>{hometown}</p>
                <p className={educationEmpty}>{education}</p>
                <p className={workEmpty}>{work}</p>
                <p className={relationshipEmpty}>{relationship}</p>
                <p className={websiteEmpty}>{website}</p>
                <div className="edit_prof_intro">{this.rendersEdit()}</div>
            </div>
        )
    }
}

export default ProfileIntro;