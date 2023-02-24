import React from 'react';
import ProfileLeftContainer from './profile_left_container'
import ProfileRight from './profile_right';

const ProfileBody = (props) => {
    return (
        <div className="profile_body">
            <ProfileLeftContainer />
            <ProfileRight />
        </div>
    )
}

export default ProfileBody;