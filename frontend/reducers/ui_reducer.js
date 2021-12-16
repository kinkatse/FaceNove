import { combineReducers } from 'redux';
import colorReducer from './color_reducer'

const uiReducer = combineReducers({
    colorRed: colorReducer
})

export default uiReducer;