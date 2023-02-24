import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ProfileTop from './profile_top';

class Profile extends React.Component {
    componentWillMount() {
        // Can't do this.props.user.id because then the user would be
        // undefined without grabbing the user first. Need just the
        // userId so we can pass that in showUser and then the
        // container will properly assign the right user
        this.props.clearLikes()
        this.props.clearComments()
        this.props.clearPosts()
        this.props.showUser(this.props.userId)
    }

    // This is necessary for us to reload after returning null
    // when user.id is undefined. This is so that after component
    // did mount and fetched the data, it will now do the following
    // when it is updating, not sure how it knows to do that
    componentDidUpdate(oldProps) {
        // debugger
        if (this.props.userId !== oldProps.userId) {
            this.props.showUser(this.props.userId);
        }
        // debugger
        if (this.props.user && oldProps.user &&
            (this.props.user.firstName !== oldProps.user.firstName ||
            this.props.user.lastName !== oldProps.user.lastName)) {
            this.props.indexPosts([this.props.userId]);
        }
    }

    render() {
        // Necessary for when there is no user with that wildcard
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
                        likes={this.props.likes}
                        indexLikes={this.props.indexLikes}
                        updatePost={this.props.updatePost}
                        destroyPost={this.props.destroyPost}
                        removePostComments={this.props.removePostComments}
                        destroyLike={this.props.destroyLike}
                        openLikesModal={this.props.openLikesModal}
                        openEditPostModal={this.props.openEditPostModal}
                        clearPosts={this.props.clearPosts}
                        clearLikes={this.props.clearLikes}
                        openCovPicModal={this.props.openCovPicModal}
                        openProfPicModal={this.props.openProfPicModal}
                        openEditModal={this.props.openEditModal}
                    />
                </div>
            </div>
        )
    }
}

export default Profile;