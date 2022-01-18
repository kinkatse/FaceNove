import React from 'react';
import PostContainer from '../posts/post_container';
import { ProtectedRoute } from '../../util/route_util';

class ProfilePosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <ProtectedRoute path="/user/:userId" component={PostContainer}/>
        )
    }
}

export default ProfilePosts;