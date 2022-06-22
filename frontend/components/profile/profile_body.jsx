import React from 'react';
// import ProfileLeft from './profile_left';
import ProfileLeftContainer from './profile_left_container'
import ProfileRight from './profile_right';
import { ProtectedRoute } from '../../util/route_util';

const ProfileBody = (props) => {
    return (
        <div className="profile_body">
            {/* <ProfileLeft
                currentUser={props.currentUser}
                user={props.user}
                updateUser={props.updateUser}
                showPost={props.showPost}
                clearPosts={props.clearPosts}
                openEditModal={props.openEditModal}
                color={props.color}
            /> */}
            <ProfileLeftContainer />
            <ProfileRight />
        </div>
    )
}

export default ProfileBody;