import React from 'react';
import ProfileFriends from './profile_friends';
import ProfileIntro from './profile_intro';
import ProfilePhotos from './profile_photos';

const ProfileLeft = (props) => {
    return (
        <div className="profile_left">
            <ProfileIntro
                currentUser={props.currentUser}
                user={props.user}
                updateUser={props.updateUser}
            />
            <ProfilePhotos />
            <ProfileFriends />
        </div>
    )
}

export default ProfileLeft;