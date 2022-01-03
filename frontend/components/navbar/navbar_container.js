import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

import { toggleColor } from '../../actions/color_actions';

// Use the session.id we stored the currentUsers id from the reducer to
// key into the Users slice of state which will grant all the data of
// that user. That's why we decontruct the state to session slice of
// state and entities into users slice of state. Now calling
// users[session.id] is calling users[1] for example
const mapStateToProps = ({session, entities: { users }, ui}) => {
    return {
        currentUser: users[session.id],
        firstName: users[session.id].firstName,
        lastName: users[session.id].lastName,
        color: ui.colorRed.color
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    updateColor: () => dispatch(toggleColor())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);