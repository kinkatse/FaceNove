import { combineReducers } from 'redux';
import themeucer from './color_reducer';
import modalucer from './modal_reducer';

const uiReducer = combineReducers({
    modal: modalucer,
    theme: themeucer
})

export default uiReducer;