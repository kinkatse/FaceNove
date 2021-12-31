import { combineReducers } from 'redux';
import colorReducer from './color_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
    colorRed: colorReducer,
    modal: modalReducer
})

export default uiReducer;