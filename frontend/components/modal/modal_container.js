import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions'
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
    return {
        user: state.entities.users[state.session.id],
        modal: state.ui.modalRed,
        color: state.ui.colorRed.color,
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        updateUser: (user, userId) => dispatch(updateUser(user, userId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)