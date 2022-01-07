import React from 'react';
import ProfileFriends from './profile_friends';
import ProfileIntro from './profile_intro';
import ProfilePhotos from './profile_photos';
import ProfilePosts from './profile_posts';

class ProfileBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="profile_body">
                <ProfileIntro user={this.props.user}/>
                <ProfilePosts />
                <ProfilePhotos />
                <ProfileFriends />
            </div>
        )
    }
}

export default ProfileBody;