import React from 'react';
import ProfileTabs from './profile_tabs';

class ProfileTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    rendersProfilePic(profpicColor, profpicImageButton) {
        let eventlistener;
        let profpicbutton;
        let picbuttonactive;
        if (this.props.currentUserId === parseInt(this.props.userId)) {
            eventlistener = this.props.openProfPicModal;
            profpicbutton = (
                <img
                    className="profpicbutton"
                    onClick={eventlistener}
                    src={profpicImageButton}
                />
            )
            picbuttonactive = "profilepicwholeadjustment";
        } else {
            eventlistener = null;
            profpicbutton = null;
            picbuttonactive = "profilepicwhole";
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
            <img
                className="coverpic"
                onClick={eventlistener}
                src={this.props.user.coverPicUrl}
            />
        )
    }

    rendersCoverPicButton(covpicImageButton) {
        let eventlistener;
        let covpicbutton;
        let picbuttonactive;
        if (this.props.currentUserId === parseInt(this.props.userId)) {
            eventlistener = this.props.openCovPicModal;
            covpicbutton = (
                <div className="covpicbuttonwhole" onClick={eventlistener}>
                    <img
                        className="covpicbutton"
                        src={covpicImageButton}
                    />
                    <div className="editcoverpic">
                        Edit Cover Picture
                    </div>
                </div>
            )
            picbuttonactive = "coverpicbuttonadjustment";
        } else {
            eventlistener = null;
            covpicbutton = null;
            picbuttonactive = "coverpicbuttonadjustment";
        }

        return (
            <div className={picbuttonactive}>
                {covpicbutton}
            </div>
        )
    }

    render() {
        let profpicColor;
        let picImageButton;
        if (this.props.color === "blue") {
            profpicColor = "profpicbluebig"
            picImageButton = window.image_blue_url
        } else if (this.props.color === "green") {
            profpicColor = "profpicgreenbig"
            picImageButton = window.image_green_url
        } else if (this.props.color === "red") {
            profpicColor = "profpicredbig"
            picImageButton = window.image_red_url
        }

        let first = this.props.user.firstName;
        let last = this.props.user.lastName;
        return (
            <div className="profile_top">
                {this.rendersCoverPic()}
                {this.rendersCoverPicButton(picImageButton)}
                {this.rendersProfilePic(profpicColor, picImageButton)}
                <p className="profile_title">{first} {last}</p>
                <ProfileTabs
                    currentUser={this.props.currentUser}
                    currentUserId={this.props.currentUserId}
                    user={this.props.user}
                    userId={this.props.userId}
                    // updateUser={this.props.updateUser}
                    // showPost={this.props.showPost}
                    // clearPosts={this.props.clearPosts}
                    openEditModal={this.props.openEditModal}
                    color={this.props.color}
                />
            </div>
        )
    }
}

export default ProfileTop;