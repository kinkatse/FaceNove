import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { openEditModal } from '../../actions/modal_actions';

import { withRouter } from 'react-router-dom';
// Need to have withRouter here or call the component with Route
// Those are the only two ways the container will access ownProps
import ProfileLeft from './profile_left'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId,
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        modal: state.ui.modalRed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user, userId) => dispatch(updateUser(user, userId)),
        openEditModal: () => dispatch(openEditModal())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileLeft))