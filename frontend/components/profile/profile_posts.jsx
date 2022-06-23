import React from 'react';
import PostContainer from '../posts/post_container';
import { ProtectedRoute } from '../../util/route_util';

const ProfilePosts = (props) => {
    return (
        <ProtectedRoute path="/user/:userId" component={PostContainer}/>
    )
}

export default ProfilePosts;