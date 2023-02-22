import { connect } from 'react-redux';
import { openSignupModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
    return {
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
        login: user => dispatch(login(user)),
        openSignupModal: () => dispatch(openSignupModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);