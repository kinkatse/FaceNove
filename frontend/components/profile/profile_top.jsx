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
                <p className="profile_title">Welcome to {first} {last}'s Profile Page</p>
                <img className="coverpic" src={this.props.user.coverPicUrl} />
                <div className={'profilepic ' + profpicColor}>
                    <img src={this.props.user.profilePicUrl} />
                </div>
                <ProfileTabs />
            </div>
        )
    }
}

export default ProfileTop;