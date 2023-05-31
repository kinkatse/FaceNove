import React from 'react';
import { filterUserPostsWithPhotos } from '../../util/filter_util';
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

    renderProfileFriends() {
        if (!this.props.friends) return null;

        const newFriends = []
        Object.values(this.props.friends).map((friend) => {
            if (newFriends.length < 9) newFriends.push(friend)
        })

        return (
            <>
                {newFriends.map(friend => {
                    return (<ProfileFriends
                        key={friend.id}
                        friend={friend}
                        currentUser={this.props.currentUser}
                        currentUserId={this.props.currentUserId}
                        user={this.props.user}
                        userId={parseInt(this.props.userId)}
                        fromPostsTab={"fromPostsTab"}
                    />)
                })}
            </>
        )
    }

    render() {
        
        const postsWithPhotosArr = filterUserPostsWithPhotos(this.props.posts, this.props.userId)

        let friendsLength = 0;
        if (this.props.friends) friendsLength = Object.values(this.props.friends).length

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
                    fromTab={false}
                    changeActiveTab={this.props.changeActiveTab}
                    openPicModal={this.props.openPicModal}
                />

                <div className="profile_friends">
                    <span className='friends_header'>
                        <h2 className="friends_profbodytitle">Friends</h2>
                        {this.props.friends && (
                            <h2 className="profbodyseephotos" onClick={() => this.props.changeActiveTab(1)}>See all friends</h2>
                        )}
                    </span>
                    <p className="how_many_friends">{friendsLength} friends</p>
                    <div className="friends_wall">
                        {this.renderProfileFriends()}
                    </div>
                </div>

            </div>
        )
    }
}

export default ProfileLeft;