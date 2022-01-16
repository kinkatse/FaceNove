import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions'
import { updateUser, updateProfPic, updateCovPic } from '../../actions/user_actions';
import { updatePost } from '../../actions/post_actions'

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        modal: state.ui.modalRed,
        color: state.ui.colorRed.color,
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        updateUser: (user, userId) => dispatch(updateUser(user, userId)),
        updateProfPic: (user, userId) => dispatch(updateProfPic(user, userId)),
        updateCovPic: (user, userId) => dispatch(updateCovPic(user, userId)),
        updatePost: ((post, postId) => dispatch(updatePost(post, postId))),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)