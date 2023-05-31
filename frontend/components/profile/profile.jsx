import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ProfileTop from './profile_top';

class Profile extends React.Component {
    componentDidMount() {
        this.props.clearPosts()
        this.props.clearComments()
        this.props.clearFriends()
        this.props.clearLikes()
        this.props.closeModal()
        this.props.showUser(this.props.userId)
        this.props.indexFriends(this.props.userId)
        this.props.indexFriendRequests(this.props.currentUser.id)
    }

    componentDidUpdate(oldProps) {
        // debugger
        if (this.props.userId !== oldProps.userId) {
            this.props.closeModal()
            this.props.showUser(this.props.userId);
            this.props.indexFriends(this.props.userId);
            this.setState({resetTabs: true});
        }
        if (this.props.friends && Object.values(this.props.friends).length !== 0 &&
            (Object.values(this.props.friends).length !== Object.values(oldProps.friends).length)) {
            this.props.indexFriends(this.props.userId);
        }
        if (this.props.user && oldProps.user &&
            (this.props.user.firstName !== oldProps.user.firstName ||
            this.props.user.lastName !== oldProps.user.lastName)) {
            this.props.indexPosts([this.props.userId]);
        }
    }

    constructor () {
        super()
        this.state = {
            resetTabs: false
        }
    }

    render() {
        if (!this.props.user) {
            return null;
        }
        return (
            <div className="wholeprofilepage">
                <NavBarContainer />
                <div className="pagebackground"></div>
                <img className="gradient" src={window.page_gradient_url} />
                <div className="profile_page">
                    <ProfileTop
                        currentUser={this.props.currentUser}
                        currentUserId={this.props.currentUserId}
                        user={this.props.user}
                        userId={this.props.userId}
                        posts={this.props.posts}
                        friends={this.props.friends}
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
                        openCovPicModal={this.props.openCovPicModal}
                        openProfPicModal={this.props.openProfPicModal}
                        openEditModal={this.props.openEditModal}
                        openPicModal={this.props.openPicModal}
                        resetTabs={this.state.resetTabs}
                        setResetTabs={this.setState.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default Profile;