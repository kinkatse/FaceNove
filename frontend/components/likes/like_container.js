import { connect } from 'react-redux';

import { Like } from './like';

import { indexLikes, createLike, destroyLike } from '../../actions/like_actions';
import { openLikesModal } from '../../actions/modal_actions';
// import { openCreatePostModal, openEditPostModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        likesState: state.entities.likes,
        currentUser: state.entities.users[state.session.id],
        // modal: state.ui.modal,
        // Even though this isn't being passed anywhere, we need the
        // state to subscribe to this component or the color isnt updated
        // since localStorage wont update the page until we refresh
        color: state.ui.theme.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        indexLikes: ((likeData) => dispatch(indexLikes(likeData))),
        createLike: ((likeData) => dispatch(createLike(likeData))),
        destroyLike: ((like) => dispatch(destroyLike(like))),
        openLikesModal: (postId) => dispatch(openLikesModal(postId))
        // openCreatePostModal: () => dispatch(openCreatePostModal()),
        // openEditPostModal: (postId) => dispatch(openEditPostModal(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Like)