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
            <div>
                <div className="profile_posts">
                    <h2 className="profbodytitle">Posts</h2>
                    {/* <div className="posts_wall"></div> */}
                </div>
                <ProtectedRoute path="/user/:userId" component={PostContainer}/>
            </div>
        )
    }
}

export default ProfilePosts;