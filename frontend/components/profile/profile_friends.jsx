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
                <h2 className="profbodytitle">Friends</h2>
                <div className="friends_wall">
                    <p>Tom</p>
                    <p>Jerry</p>
                    <p>Mob</p>
                    <p>Carly Lau</p>
                    <p>Mochi</p>
                    <p>Luffy</p>
                    <p>Mario</p>
                    <p>Pikachu</p>
                </div>
            </div>
        )
    }
}

export default ProfileFriends;