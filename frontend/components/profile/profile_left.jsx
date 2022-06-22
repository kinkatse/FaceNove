import React from 'react';
import ProfileFriends from './profile_friends';
import ProfileIntro from './profile_intro';
import ProfilePhotos from './profile_photos';

const ProfileLeft = (props) => {
    // debugger
    return (
        <div className="profile_left">
            <ProfileIntro
                currentUser={props.currentUser}
                user={props.user}
                updateUser={props.updateUser}
                // showPost={props.showPost}
                // clearPosts={props.clearPosts}
                openEditModal={props.openEditModal}
                color={props.color}
            />
            <ProfilePhotos />
            <ProfileFriends />
        </div>
    )
}

export default ProfileLeft;