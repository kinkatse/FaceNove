import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
    // debugger
    return {
        formType: 'Log In',
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);