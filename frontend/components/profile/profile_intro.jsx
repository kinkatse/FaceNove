import React from 'react';

class ProfileIntro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        // Later want to implement logic to allow to show certain info fields
        let user = this.props.user;
        let bio, birthday, birthdayFormatted, gender, education,
        hometown, work, relationship, website, time;
        
        // Conditionals to make the info be default if no value
        if (user.bio) { bio = "Bio: " + user.bio }
        else { bio = "No Bio" }

        if (user.birthdate) { birthday = user.birthdate.split('-') }
        else { birthday = "Birthday not registered" }
        if (user.birthdate !== "Birthday not registered") {
            birthdayFormatted = "Born on " + birthday.reverse().join('/')
        } else { "Something unexpected happened" }

        if (user.gender) { gender = "Identify as " + user.gender }
        else { gender = "Gender not registered" }

        if (user.education) { education = "Studied at " + user.education }
        else { education = "Education not registered" }

        if (user.hometown) { hometown = "Lives in " + user.hometown }
        else { hometown = "Hometown not registered" }

        if (user.work) { work = "Works as " + user.work }
        else { work = "Work not registered" }

        if (user.relationship) { relationship = "Currently " + user.relationship }
        else { relationship = "Relationship not registered" }

        if (user.website) { website = "Website: " + user.website }
        else { website = "Website not registered" }

        return (
            <div className="profile_intro">
                <h2 className="profbodytitle">Intro</h2>
                <p className="profile_bio">{bio}</p>
                <p className="profile_info">Email me at {user.email}</p>
                <p className="profile_info">{birthdayFormatted}</p>
                <p className="profile_info">{gender}</p>
                <p className="profile_info">{education}</p>
                <p className="profile_info">{hometown}</p>
                <p className="profile_info">{work}</p>
                <p className="profile_info">{relationship}</p>
                <p className="profile_info">{website}</p>
            </div>
        )
    }
}

export default ProfileIntro;