import { connect } from 'react-redux';
import Splash from './splash'

import { toggleColor } from '../../actions/color_actions';

const mapStateToProps = (state) => {
    // This went through the root reducer which is why we need to key into
    // ui, colorRed and then color since that is the particular slice
    // of state we want
    return {
        color: state.ui.colorRed.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateColor: () => dispatch(toggleColor())
    }
}
// putting ; after line 12 or 8 here breaks, why?

export default connect(mapStateToProps, mapDispatchToProps)(Splash);