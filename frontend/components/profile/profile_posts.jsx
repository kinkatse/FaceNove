import React from 'react';

class ProfilePosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="profile_posts">
                <h2 className="profbodytitle">Posts</h2>
                <p>Whats on your mind today?</p>
                <div className="posts_wall">
                    <p>Today I am sick</p>
                    <p>I like One Piece</p>
                    <p>Tennis is my favorite sport</p>
                    <p>I am a software engineer!</p>
                    <p>App Academy is where I currently work</p>
                    <p>I have a lovely girlfriend</p>
                    <p>My favorite video game is Smash Ultimate</p>
                </div>
            </div>
        )
    }
}

export default ProfilePosts;