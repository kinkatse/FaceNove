import { connect } from 'react-redux';
import Splash from './splash'

// Actions
import { toggleColor } from '../../actions/color_actions';

const mapStateToProps = (state) => ({
    color: state.color
})

const mapDispatchToProps = (dispatch) => ({
    updateColor: () => dispatch(toggleColor())
})
// putting ; after line 12 or 8 here breaks, why?

export default connect(mapStateToProps, mapDispatchToProps)(Splash);