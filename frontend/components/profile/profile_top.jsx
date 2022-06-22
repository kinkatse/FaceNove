import React from 'react';
import ProfileTabs from './profile_tabs';

import { profPicColor, uploadPicImage } from '../../util/color_util';

class ProfileTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    rendersProfilePic(color) {
        let eventlistener;
        let profpicbutton;
        let picbuttonactive;
        if (this.props.currentUserId === parseInt(this.props.userId)) {
            eventlistener = this.props.openProfPicModal;
            profpicbutton = (
                <img
                    className="profpicbutton"
                    onClick={eventlistener}
                    src={uploadPicImage()}
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
                    className={`profilepic ${profPicColor()}`}
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

    rendersCoverPicButton(color) {
        let eventlistener;
        let covpicbutton;
        let picbuttonactive;
        if (this.props.currentUserId === parseInt(this.props.userId)) {
            eventlistener = this.props.openCovPicModal;
            covpicbutton = (
                <div className="covpicbuttonwhole" onClick={eventlistener}>
                    <img
                        className="covpicbutton"
                        src={uploadPicImage(color)}
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
        let first = this.props.user.firstName;
        let last = this.props.user.lastName;
        return (
            <div className="profile_top">
                {this.rendersCoverPic()}
                {this.rendersCoverPicButton(this.props.color)}
                {this.rendersProfilePic(this.props.color)}
                <p className="profile_title">{first} {last}</p>
                <ProfileTabs
                    currentUser={this.props.currentUser}
                    currentUserId={this.props.currentUserId}
                    user={this.props.user}
                    userId={this.props.userId}
                    openEditModal={this.props.openEditModal}
                    color={this.props.color}
                />
            </div>
        )
    }
}

export default ProfileTop;