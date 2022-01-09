import React from 'react';
import ProfileTabs from './profile_tabs';

class ProfileTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        // debugger
        let profpicColor;
        if (this.props.color === "blue") {
            profpicColor = "profpicbluebig"
        } else if (this.props.color === "green") {
            profpicColor = "profpicgreenbig"
        } else if (this.props.color === "red") {
            profpicColor = "profpicredbig"
        }
        
        let first = this.props.user.firstName;
        let last = this.props.user.lastName;
        return (
            <div className="profile_top">
                <img className="coverpic" src={this.props.user.coverPicUrl} />
                <div className={'profilepic ' + profpicColor}>
                    <img src={this.props.user.profilePicUrl} />
                </div>
                <p className="profile_title">{first} {last}</p>
                <ProfileTabs
                    currentUserId={this.props.currentUserId}
                    userId={this.props.userId}
                    openEditModal={this.props.openEditModal}
                    color={this.props.color}
                />
            </div>
        )
    }
}

export default ProfileTop;