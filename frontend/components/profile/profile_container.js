import { connect } from 'react-redux';
import { showUser } from '../../actions/user_actions';

import Profile from './profile.jsx';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        // ownProps is from Routes built in and we access path wildcard of 'userId'
        // (from our route path in app.jsx) to key into which user of our state entities
        user: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showUser: (userId => dispatch(showUser(userId)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)