import React from 'react';
import ProfileTabs from './profile_tabs';

class ProfileTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    rendersProfilePic() {
        let profpicColor;
        if (this.props.color === "blue") {
            profpicColor = "profpicbluebig"
        } else if (this.props.color === "green") {
            profpicColor = "profpicgreenbig"
        } else if (this.props.color === "red") {
            profpicColor = "profpicredbig"
        }

        let eventlistener;
        if (this.props.currentUserId === parseInt(this.props.userId)) {
            eventlistener = this.props.openProfPicModal;
        } else {
            eventlistener = null;
        }

        return (
            <div className={'profilepic ' + profpicColor}>
                <img
                    onClick={eventlistener}
                    src={this.props.user.profilePicUrl}
                />
                {/* <h2 onClick={eventlistener}>Change Prof Pic</h2> */}
            </div>
        )
    }

    rendersCoverPic() {
        let eventlistener;
        if (this.props.currentUserId === parseInt(this.props.userId)) {
            eventlistener = this.props.openCovPicModal;
        } else {
            eventlistener = null;
        }

        return (
            <>
                <img
                    className="coverpic"
                    onClick={eventlistener}
                    src={this.props.user.coverPicUrl}
                />
                {/* <h2 onClick={eventlistener}>Change Cov Pic</h2> */}
            </>
        )
    }

    render() {
        let first = this.props.user.firstName;
        let last = this.props.user.lastName;
        return (
            <div className="profile_top">
                {this.rendersCoverPic()}
                {/* <img
                    className="coverpic"
                    onClick={this.props.openCovPicModal}
                    src={this.props.user.coverPicUrl}
                />
                <h2 onClick={this.props.openCovPicModal}>Change Cov Pic</h2> */}
                {this.rendersProfilePic()}
                {/* <div className={'profilepic ' + profpicColor}>
                    <img
                        onClick={this.props.openProfPicModal}
                        src={this.props.user.profilePicUrl}
                    />
                    <h2 onClick={this.props.openProfPicModal}>Change Prof Pic</h2>
                </div> */}
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