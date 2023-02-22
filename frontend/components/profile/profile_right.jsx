import React from 'react';
import PostItem from '../posts/post_item';
import ProfilePosts from './profile_posts';

const ProfileRight = (props) => {

    return (
        <div className="profile_right">
            <ProfilePosts />
        </div>
    )
}

export default ProfileRight;