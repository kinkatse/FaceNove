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
                <div className="profile_tabs">
                    <div className="postTab tab_active">Posts</div>    
                    <div className="aboutTab">About</div>
                    <div className="friendsTab">Friends</div>
                    <div className="photosTab">Photos</div>
                    <div className="hobbiesTab">Hobbies</div>
                </div>
                {this.rendersEdit()}
            </div>
        )
    }
}

export default ProfileTabs;