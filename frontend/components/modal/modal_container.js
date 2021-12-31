import { connect } from 'react-redux';
import Modal from 'modal';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal,
        color: state.ui.colorRed.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)