import React from 'react';

class ProfileIntro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let user = this.props.user;
        let birthday = user.birthdate.split('-');
        let birthdayFormatted = birthday.reverse().join('/');
        // debugger
        return (
            <div className="profile_intro">
                <h1>Intro</h1>
                <p className="profile_bio">Bio: {user.bio}</p>
                <p className="profile_info">Birthday: {birthdayFormatted}</p>
                <p className="profile_info">Education: {user.education}</p>
                <p className="profile_info">Hometown: {user.hometown}</p>
                <p className="profile_info">Work: {user.work}</p>
                <p className="profile_info">Relationship: {user.relationship}</p>
                <p className="profile_info">Website: {user.website}</p>
            </div>
        )
    }
}

export default ProfileIntro;