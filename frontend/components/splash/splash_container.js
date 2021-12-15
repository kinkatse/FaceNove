import { connect } from 'react-redux';
import Splash from './splash'

// Actions
import { toggleColor } from '../../actions/color_actions';
// debugger
const mapStateToProps = (state) => {
    debugger
    // Not sure why state which was {color: 'blue'}
    // becomes {color: {color: 'blue'} }
    return {
        color: state.color.color
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateColor: () => dispatch(toggleColor())
})
// putting ; after line 12 or 8 here breaks, why?

export default connect(mapStateToProps, mapDispatchToProps)(Splash);