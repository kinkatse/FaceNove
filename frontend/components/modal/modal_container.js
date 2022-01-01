import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modalRed,
        color: state.ui.colorRed.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)