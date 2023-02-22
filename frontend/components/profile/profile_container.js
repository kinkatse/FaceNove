import { connect } from 'react-redux';
import { showUser } from '../../actions/user_actions';
import { openEditModal, openProfPicModal, openCovPicModal } from '../../actions/modal_actions';
import { indexLikes } from '../../actions/like_actions';

import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        // ownProps is from Routes built in and we access path wildcard of 'userId'
        // (from our route path in app.jsx) to key into which user of our state entities
        user: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId,
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        likesState: state.entities.likes,
        modal: state.ui.modalRed,
        // Even though this isn't being passed anywhere, we need the
        // state to subscribe to this component or the color isnt updated
        // since localStorage wont update the page until we refresh
        color: state.ui.colorRed.color
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        showUser: (userId => dispatch(showUser(userId))),
        indexLikes: (likeData) => dispatch(indexLikes(likeData)),
        destroyLike: ((like) => dispatch(destroyLike(like))),
        openLikesModal: (postId) => dispatch(openLikesModal(postId)),
        openEditModal: () => dispatch(openEditModal()),
        openProfPicModal: () => dispatch(openProfPicModal()),
        openCovPicModal: () => dispatch(openCovPicModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)