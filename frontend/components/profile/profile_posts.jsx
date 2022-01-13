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
                    {/* <div className="posts_wall"> */}
                        {/* <ProtectedRoute path="/user/:userId" component={PostContainer}/> */}
                        {/* <p>Whats on your mind today?</p>
                        <p>Today I am sick</p>
                        <p>I like One Piece</p>
                        <p>Tennis is my favorite sport</p>
                        <p>I am a software engineer!</p>
                        <p>App Academy is where I currently work</p>
                        <p>I have a lovely girlfriend</p>
                        <p>My favorite video games is Smash Ultimate and Minecraft</p>
                        <p>Anime is a great form of entertainment</p>
                        <p>Spiderman is my favorite superhero</p>
                        <p>My favorite color is green</p>
                        <p>I like to draw</p> */}
                    {/* </div> */}
                    {/* <ProtectedRoute path="/user/:userId" component={PostContainer}/> */}
                </div>
                <ProtectedRoute path="/user/:userId" component={PostContainer}/>
            </div>
        )
    }
}

export default ProfilePosts;