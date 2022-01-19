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
        // Should make a button to make bio just like Facebook***
        if (user.bio) { bio = "Bio: " + user.bio }
        else { bio = <em>No Bio</em> }

        // Should format birthday in English***
        if (user.birthdate) { birthday = user.birthdate.split('-') }
        else { birthday = "Birthday not registered" }
        if (user.birthdate !== "Birthday not registered") {
            let year = birthday.shift()
            birthday.push(year)
            birthdayFormatted = "Born on " + birthday.join('/')
        } else { "Something unexpected happened" }

        if (user.gender) {
            gender = ["Identify as ", <strong key={user.gender}>{user.gender}</strong>]
        } else { gender = <em>Gender not registered</em> }

        if (user.hometown) {
            hometown = ["Lives in ", <strong key={user.hometown}>{user.hometown}</strong>]
        } else { hometown = <em>Hometown not registered</em> }

        if (user.education) {
            education = ["Studied at ", <strong key={user.education}>{user.education}</strong>]
        } else { education = <em>Education not registered</em> }

        if (user.work) {
            work = ["Works as ", <strong key={user.work}>{user.work}</strong>]
        } else { work = <em>Work not registered</em> }

        if (user.relationship) {
            relationship = ["Currently ", <strong key={user.relationship}>{user.relationship}</strong>]
        } else { relationship = <em>Relationship not registered</em> }

        if (user.website) {
            website = ["Website: ", <strong key={user.website}>{user.website}</strong>]
        } else { website = <em>Website not registered</em> }

        return (
            <div className="profile_intro">
                <h2 className="profbodytitle">Intro</h2>
                <p className="profile_bio">{bio}</p>
                <p className="profile_info">Email me at <strong>{user.email}</strong></p>
                <p className="profile_info">{birthdayFormatted}</p>
                <p className="profile_info">{gender}</p>
                <p className="profile_info">{hometown}</p>
                <p className="profile_info">{education}</p>
                <p className="profile_info">{work}</p>
                <p className="profile_info">{relationship}</p>
                <p className="profile_info">{website}</p>
            </div>
        )
    }
}

export default ProfileIntro;