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
        let profpicImage;
        if (this.props.color === "blue") {
            profpicColor = "profpicbluebig"
            profpicImage = window.image_blue_url
        } else if (this.props.color === "green") {
            profpicColor = "profpicgreenbig"
            profpicImage = window.image_green_url
        } else if (this.props.color === "red") {
            profpicColor = "profpicredbig"
            profpicImage = window.image_red_url
        }

        let eventlistener;
        let profpicbutton;
        let picbuttonactive;
        if (this.props.currentUserId === parseInt(this.props.userId)) {
            eventlistener = this.props.openProfPicModal;
            profpicbutton = (
                <img
                    className="profpicbutton"
                    onClick={eventlistener}
                    src={profpicImage}
                />
            )
            picbuttonactive = "profilepicbuttonadjustment";
        } else {
            eventlistener = null;
            profpicbutton = null;
            picbuttonactive = "";
        }

        return (
            <div className={picbuttonactive}>
                <img
                    className={'profilepic ' + profpicColor}
                    onClick={eventlistener}
                    src={this.props.user.profilePicUrl}
                />
                {profpicbutton}
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