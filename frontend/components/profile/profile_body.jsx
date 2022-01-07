import React from 'react';
import ProfileLeft from './profile_left';
import ProfileRight from './profile_right';

const ProfileBody = (props) => {
    return (
        <div className="profile_body">
            <ProfileLeft user={props.user} />
            <ProfileRight />
        </div>
    )
}

export default ProfileBody;