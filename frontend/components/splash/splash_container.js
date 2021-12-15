import { connect } from 'react-redux';
import Splash from './splash'

// Actions
import { toggleColor } from '../../actions/color_actions';

const mapStateToProps = (state) => {
    // This is state.color.color because of our rootReducer making an additional key to
    // color. This will be fixed once we have more in our state for different slices of state
    return {
        color: state.color.color
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateColor: () => dispatch(toggleColor())
})
// putting ; after line 12 or 8 here breaks, why?

export default connect(mapStateToProps, mapDispatchToProps)(Splash);