import React from 'react';

class ProfileFriends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="profile_friends">
                <h1>Friends</h1>
                <p>Tom</p>
                <p>Jerry</p>
                <p>Mob</p>
            </div>
        )
    }
}

export default ProfileFriends;