import React from 'react';
import ProfileBody from './profile_body';
import About from './profile_abouttab';
import Friends from './profile_friendstab';
import Photos from './profile_photostab';
import Likes from './profile_likestab';

import { editProfImage, friendColor, tabColor } from '../../util/color_util';
import { filterUserPostsWithPhotos } from '../../util/filter_util';

class ProfileTabs extends React.Component {

    componentDidMount() {
        this.props.indexLikes({
            liker_id: this.props.userId,
            likeable_type: "User_All"
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }
    }

    changeActiveTab(num) {
        this.setState({activeTab: num})
    }

    rendersTabs(tabs) {
        let active = this.state.activeTab;
        let tabline = tabs.map((tab, idx) => {
            let tabclassname = idx === active ? `tab_active ${tabColor()}` : 'tab_inactive';

            if (tab.title === "Friends" && !this.props.friends) return;
            if (tab.title === "Photos" && this.props.posts) {
                const postsWithPhotosArr = filterUserPostsWithPhotos(this.props.posts, this.props.userId)
                if (postsWithPhotosArr.length === 0) return;
            }
            if (tab.title === "Likes" && this.props.likes) {
                let likeArr = Object.values(this.props.likes)
                let userLikedIdCount = 0
                for (let like of likeArr) {
                    if (like.liker_id === parseInt(this.props.userId)) userLikedIdCount += 1
                }
                if (userLikedIdCount === 0) return;
            }

            return (
                <li
                    key={idx}
                    className={tabclassname}
                    onClick={ () => {this.changeActiveTab(idx)} }>
                        {tab.title}
                </li>
            )
        })
        return (
        <ul className="profile_tabs">{tabline}</ul>
        )
    }

    rendersEditOrFriend() {
        let userFriend = null;
        if (this.props.friends) {
            Object.values(this.props.friends).forEach(friend => {
                if (this.props.currentUserId === friend.id) userFriend = friend
            })
        }

        let outGoingFriend = null
        if (this.props.friends) {
            Object.values(this.props.friends).forEach(friend => {
                if (this.props.currentUserId === friend.id) userFriend = friend
            })
        }

        if (this.props.currentUserId === parseInt(this.props.userId)) {
            return this.rendersEdit()
        } else if (!userFriend) {
            return this.rendersAddFriendButton()
        } else if (outGoingFriend) {
            return this.rendersRequestSentButton()
        } else {
            return this.rendersRemoveFriendButton(userFriend)
        }
    }

    rendersEdit() {
        return (
            <div
                className="edit_profile"
                onClick={this.props.openEditModal}>
                    <img className="editicon" src={editProfImage()} />
                    Edit Profile
            </div>
        )
    }

    rendersAddFriendButton() {
        return (
            <div
                className={`profile_friend_button ${friendColor()}`}
                onClick={e => this.props.createFriend({
                    user_id: this.props.currentUserId,
                    friend_id: this.props.userId
                })}>
                    {/* <img className="editicon" src={editProfImage()} /> */}
                    Add Friend
            </div>
        )
    }

    rendersRemoveFriendButton(userFriend) {
        return (
            <div
                className={`profile_friend_button ${friendColor()}`}
                onClick={e => this.props.destroyFriend(userFriend.friend_id)}>
                    {/* <img className="editicon" src={editProfImage()} /> */}
                    Remove Friend
            </div>
        )
    }

    rendersRequestSentButton(userFriend) {
        return (
            <div
                className={`profile_friend_button ${friendColor()}`}
                onClick={e => this.props.destroyFriend(outGoingFriend.friend_id)}>
                    {/* <img className="editicon" src={editProfImage()} /> */}
                    Request Sent
            </div>
        )
    }

    render() {
        const tabs = [
            { title: "Posts",
              content: <ProfileBody
                changeActiveTab={this.changeActiveTab.bind(this)}
                />
            }, 

            // { title: "About",
            //   content: <About
            //     />
            // },

            { title: "Friends",
              content: <Friends
                friends={this.props.friends}
                currentUser={this.props.currentUser}
                currentUserId={this.props.currentUserId}
                user={this.props.user}
                userId={parseInt(this.props.userId)}
                destroyFriend={this.props.destroyFriend}
                // changeActiveTab={this.changeActiveTab.bind(this)}
                />
            },

            { title: "Photos",
              content: <Photos
                currentUser={this.props.currentUser}
                currentUserId={this.props.currentUserId}
                user={this.props.user}
                userId={parseInt(this.props.userId)}
                posts={this.props.posts}
                updatePost={this.props.updatePost}
                destroyPost={this.props.destroyPost}
                removePostComments={this.props.removePostComments}
                openEditPostModal={this.props.openEditPostModal}
                openPicModal={this.props.openPicModal}
                />
            },

            { title: "Likes",
              content: <Likes
                currentUser={this.props.currentUser}
                currentUserId={this.props.currentUserId}
                user={this.props.user}
                userId={parseInt(this.props.userId)}
                posts={this.props.posts}
                likes={this.props.likes}
                updatePost={this.props.updatePost}
                destroyPost={this.props.destroyPost}
                removePostComments={this.props.removePostComments}
                openPicModal={this.props.openPicModal}
                openEditPostModal={this.props.openEditPostModal}
                />
            }
        ]

        if (this.props.resetTabs) {
            this.changeActiveTab(0)
            this.props.setResetTabs({resetTabs: false})
        }
        let tab = tabs[this.state.activeTab]
        return (
            <div>
                <div className="profile_tabs_whole">
                    {this.rendersTabs(tabs)}
                    {this.rendersEditOrFriend()}
                </div>
                {tab.content}
            </div>
        )
    }
}

export default ProfileTabs;