import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal, openPicModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions'
import { updateUser, updateProfPic, updateCovPic } from '../../actions/user_actions';
import { createPost, updatePost } from '../../actions/post_actions'
import { indexComments } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        postObj: state.entities.posts[state.ui.modal.postId] ? state.entities.posts[state.ui.modal.postId] : state.entities.comments[state.ui.modal.postId],
        photoPostIds: state.ui.modal.photoPostIds ? state.ui.modal.photoPostIds : [],
        likes: state.entities.likes,
        modal: state.ui.modal,
        errors: state.errors.session,
        // Even though this isn't being passed anywhere, we need the
        // state to subscribe to this component or the color isnt updated
        // since localStorage wont update the page until we refresh
        color: state.ui.theme.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        updateUser: (user, userId) => dispatch(updateUser(user, userId)),
        updateProfPic: (user, userId) => dispatch(updateProfPic(user, userId)),
        updateCovPic: (user, userId) => dispatch(updateCovPic(user, userId)),
        createPost: (postData) => dispatch(createPost(postData)),
        updatePost: (postData, postId) => dispatch(updatePost(postData, postId)),
        indexComments: (relatedId => dispatch(indexComments(relatedId))),
        openPicModal: (postId, photoPostIds) => dispatch(openPicModal(postId, photoPostIds)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)