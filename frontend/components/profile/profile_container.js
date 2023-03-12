import { connect } from 'react-redux';
import { showUser } from '../../actions/user_actions';
import { openEditModal, openProfPicModal, openCovPicModal, openEditPostModal, openPicModal, closeModal } from '../../actions/modal_actions';
import { clearLikes, indexLikes } from '../../actions/like_actions';

import Profile from './profile';
import { clearPosts, destroyPost, indexPosts, updatePost } from '../../actions/post_actions';
import { clearComments, removePostComments } from '../../actions/comment_actions';
import { clearFriends, createFriend, destroyFriend, indexFriendRequests, indexFriends } from '../../actions/friend_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        // ownProps is from Routes built in and we access path wildcard of 'userId'
        // (from our route path in app.jsx) to key into which user of our state entities
        user: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId,
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        posts: state.entities.posts,
        friends: state.entities.friendships.friends,
        // requests: state.entities.friendships.friends,
        likes: state.entities.likes,
        modal: state.ui.modal,
        // Even though this isn't being passed anywhere, we need the
        // state to subscribe to this component or the color isnt updated
        // since localStorage wont update the page until we refresh
        color: state.ui.theme.color
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        indexPosts: ((userIds) => dispatch(indexPosts(userIds))),
        indexFriends: (userId) => dispatch(indexFriends(userId)),
        indexFriendRequests: (userId) => dispatch(indexFriendRequests(userId)),
        indexLikes: (likeData) => dispatch(indexLikes(likeData)),
        showUser: (userId => dispatch(showUser(userId))),
        updatePost: (postData, postId) => dispatch(updatePost(postData, postId)),
        createFriend: (friendData) => dispatch(createFriend(friendData)),
        removePostComments: (postId) => dispatch(removePostComments(postId)),
        destroyPost: (postId) => dispatch(destroyPost(postId)),
        destroyFriend: (friendId) => dispatch(destroyFriend(friendId)),
        destroyLike: ((like) => dispatch(destroyLike(like))),
        openLikesModal: (postId) => dispatch(openLikesModal(postId)),
        openEditModal: () => dispatch(openEditModal()),
        openEditPostModal: (postId) => dispatch(openEditPostModal(postId)),
        openProfPicModal: () => dispatch(openProfPicModal()),
        openCovPicModal: () => dispatch(openCovPicModal()),
        openPicModal: (postId, photoPostIds) => dispatch(openPicModal(postId, photoPostIds)),
        clearPosts: (() => dispatch(clearPosts())),
        clearComments: (() => dispatch(clearComments())),
        clearFriends: () => dispatch(clearFriends()),
        clearLikes: (() => dispatch(clearLikes())),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)