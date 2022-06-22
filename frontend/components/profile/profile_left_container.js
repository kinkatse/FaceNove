import { connect } from 'react-redux';
import { showUser, updateUser } from '../../actions/user_actions';
import { showPost, clearPosts } from '../../actions/post_actions';
import { openEditModal, openProfPicModal, openCovPicModal } from '../../actions/modal_actions';

import { withRouter } from 'react-router-dom';
// Not sure why I need withRouter here, but without it,
// it won't recognize ownProps.
import ProfileLeft from './profile_left'

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        user: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId,
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        modal: state.ui.modalRed,
        color: state.ui.colorRed.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // showUser: (userId => dispatch(showUser(userId))),
        updateUser: (user, userId) => dispatch(updateUser(user, userId)),
        // showPost: (postId => dispatch(showPost(postId))),
        // clearPosts: (() => dispatch(clearPosts())),
        openEditModal: () => dispatch(openEditModal()),
        // openProfPicModal: () => dispatch(openProfPicModal()),
        // openCovPicModal: () => dispatch(openCovPicModal())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileLeft))