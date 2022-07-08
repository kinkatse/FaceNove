import { connect } from 'react-redux';

import Like from './like';

import { indexPosts } from '../../actions/post_actions';
import { indexComments } from '../../actions/comment_actions';
import { indexLikes, createLike, destroyLike } from '../../actions/like_actions';
// import { openCreatePostModal, openEditPostModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        likesState: state.entities.likes,
        currentUser: state.entities.users[state.session.id],
        // modal: state.ui.modalRed,
        // Even though this isn't being passed anywhere, we need the
        // state to subscribe to this component or the color isnt updated
        // since localStorage wont update the page until we refresh
        color: state.ui.colorRed.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        indexPosts: ((userIds) => dispatch(indexPosts(userIds))),
        indexComments: (relatedId => dispatch(indexComments(relatedId))),
        indexLikes: ((likeData) => dispatch(indexLikes(likeData))),
        createLike: ((likeData) => dispatch(createLike(likeData))),
        destroyLike: ((like) => dispatch(destroyLike(like))),
        // openCreatePostModal: () => dispatch(openCreatePostModal()),
        // openEditPostModal: (postId) => dispatch(openEditPostModal(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Like)