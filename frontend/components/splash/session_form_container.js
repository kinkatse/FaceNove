import { connect } from 'react-redux';
import { openSignupModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import SessionForm from './login_form';

const mapStateToProps = (state) => {
    return {
        formType: 'Log In',
        modal: state.ui.modalRed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(login(user)),
        openSignupModal: () => dispatch(openSignupModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);