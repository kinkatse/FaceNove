import React from 'react';
import ProfileTabs from './profile_tabs';

import { bigProfPicColor, uploadPicImage, friendColor } from '../../util/color_util';

class ProfileTop extends React.Component {
    rendersProfilePic() {
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
                    className={`profilepic ${bigProfPicColor()}`}
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

    rendersCoverPicButton() {
        let eventlistener;
        let covpicbutton;
        let picbuttonactive;
        if (this.props.currentUserId === parseInt(this.props.userId)) {
            eventlistener = this.props.openCovPicModal;
            covpicbutton = (
                <div className="covpicbuttonwhole" onClick={eventlistener}>
                    <img
                        className="covpicbutton"
                        src={uploadPicImage()}
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
                {this.rendersCoverPicButton()}
                {this.rendersProfilePic()}
                <div className='profile_header'>
                    {/* <div className='empty_profile_placeholder'></div> */}
                    <p className="profile_title">{first} {last}</p>
                    {/* <button className={`profile_friend_button ${friendColor()}`}>Add Friend</button> */}
                </div>
                <ProfileTabs
                    currentUser={this.props.currentUser}
                    currentUserId={this.props.currentUserId}
                    user={this.props.user}
                    userId={this.props.userId}
                    posts={this.props.posts}
                    friends={this.props.friends}
                    requests={this.props.requests}
                    likes={this.props.likes}
                    indexLikes={this.props.indexLikes}
                    updatePost={this.props.updatePost}
                    createFriend={this.props.createFriend}
                    destroyPost={this.props.destroyPost}
                    destroyFriend={this.props.destroyFriend}
                    removePostComments={this.props.removePostComments}
                    destroyLike={this.props.destroyLike}
                    openLikesModal={this.props.openLikesModal}
                    openEditPostModal={this.props.openEditPostModal}
                    clearPosts={this.props.clearPosts}
                    clearLikes={this.props.clearLikes}
                    openEditModal={this.props.openEditModal}
                    openPicModal={this.props.openPicModal}
                    resetTabs={this.props.resetTabs}
                    setResetTabs={this.props.setResetTabs}
                />
            </div>
        )
    }
}

export default ProfileTop;