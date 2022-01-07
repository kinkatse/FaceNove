import React from 'react';
import ProfileTabs from './profile_tabs';

class ProfileTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let first = this.props.user.firstName;
        let last = this.props.user.lastName;
        return (
            <div className="profile_top">
                <h1>Welcome to {first} {last}'s Profile Page</h1>
                <ProfileTabs />
            </div>
        )
    }
}

export default ProfileTop;