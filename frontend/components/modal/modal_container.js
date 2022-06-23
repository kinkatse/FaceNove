import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions'
import { updateUser, updateProfPic, updateCovPic } from '../../actions/user_actions';
import { createPost, updatePost } from '../../actions/post_actions'

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        postObj: state.entities.posts[state.ui.modalRed.postId],
        modal: state.ui.modalRed,
        errors: state.errors.session,
        // Even though this isn't being passed anywhere, we need the
        // state to subscribe to this component or the color isnt updated
        // since localStorage wont update the page until we refresh
        color: state.ui.colorRed.color
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
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)