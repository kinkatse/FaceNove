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
                <h1>Posts</h1>
                <p>Today I am sick</p>
                <p>I like One Piece</p>
                <p>Tennis is my favorite sport</p>
            </div>
        )
    }
}

export default ProfilePosts;