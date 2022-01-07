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
            <div>
                <h1>Intro</h1>
                <p className="profile_intro">Bio: {user.bio}</p>
                <p className="profile_intro">Birthday: {birthdayFormatted}</p>
                <p className="profile_intro">Education: {user.education}</p>
                <p className="profile_intro">Hometown: {user.hometown}</p>
                <p className="profile_intro">Work: {user.work}</p>
                <p className="profile_intro">Relationship: {user.relationship}</p>
                <p className="profile_intro">Website: {user.website}</p>
            </div>
        )
    }
}

export default ProfileIntro;