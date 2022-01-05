import { connect } from 'react-redux';
import { openSignupModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modalRed,
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        openSignupModal: () => dispatch(openSignupModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);