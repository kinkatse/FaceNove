import React from 'react';

class ProfileTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    rendersEdit() {
        // debugger
        if (this.props.currentUserId === parseInt(this.props.userId)) {
            return (
                <div
                    className="edit_profile"
                    onClick={this.props.openEditModal}>
                        Edit Profile
                </div>
            )
        }
    }

    render() {
        // When I get to this, should be conditionally rendered components by clicked on
        // which a variable like active will decide to render it or not
        return (
            <div className="profile_tabs_whole">
                <ul className="profile_tabs">
                    <li className="postTab tab_active">Posts</li>    
                    <li className="aboutTab">About</li>
                    <li className="friendsTab">Friends</li>
                    <li className="photosTab">Photos</li>
                    <li className="hobbiesTab">Hobbies</li>
                </ul>
                {this.rendersEdit()}
            </div>
        )
    }
}

export default ProfileTabs;