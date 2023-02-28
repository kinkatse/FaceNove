import React from 'react';
import ProfileFriends from './profile_friends';
import ProfileIntro from './profile_intro';
import ProfilePhotos from './profile_photos';

class ProfileLeft extends React.Component {
    // componentDidMount() {
    //     this.props.clearLikes()
    //     this.props.clearComments()
    //     this.props.clearPosts()
    //     this.props.showUser(this.props.userId)
    // }

    render() {
        let postArr = Object.values(this.props.posts).reverse()
        let userPostsArr = []
        for (let post of postArr) {
            if (parseInt(this.props.userId) === post.user_id) userPostsArr.push(post)
        }
        let postsWithPhotosArr = []
        for (let post of userPostsArr) {
            if (post.postPhotoUrl) postsWithPhotosArr.push(post)
        }
    
        return (
            <div className="profile_left">
                <ProfileIntro
                    currentUser={this.props.currentUser}
                    user={this.props.user}
                    updateUser={this.props.updateUser}
                    openEditModal={this.props.openEditModal}
                />
                <ProfilePhotos
                    posts={postsWithPhotosArr}
                    currentUser={this.props.currentUser}
                    userId={this.props.userId}
                    updatePost={this.props.updatePost}
                    destroyPost={this.props.destroyPost}
                    removePostComments={this.props.removePostComments}
                    openEditPostModal={this.props.openEditPostModal}
                    fromLikesTab={false}
                    changeActiveTab={this.props.changeActiveTab}
                    openPicModal={this.props.openPicModal}
                />
                <ProfileFriends />
            </div>
        )
    }
}

export default ProfileLeft;