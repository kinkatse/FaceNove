import React from 'react';
import ProfileTabs from './profile_tabs';

class ProfileTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>This is ProfileTop</h1>
                <ProfileTabs />
            </div>
        )
    }
}

export default ProfileTop;