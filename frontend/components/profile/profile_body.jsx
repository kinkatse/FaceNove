import React from 'react';
import ProfileLeft from './profile_left';
import ProfileRight from './profile_right';

const ProfileBody = (props) => {
    return (
        <div className="profile_body">
            <ProfileLeft
                currentUser={props.currentUser}
                user={props.user}
                updateUser={props.updateUser}
                showPost={props.showPost}
                    clearPosts={props.clearPosts}
                openEditModal={props.openEditModal}
                color={props.color}
            />
            <ProfileRight />
        </div>
    )
}

export default ProfileBody;