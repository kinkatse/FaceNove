import { TOGGLE_COLOR } from "../actions/color_actions";

const colorReducer = (state = {color: 'blue'}, action) => {
    Object.freeze(state)

    switch(action.type) {
        case TOGGLE_COLOR:
            if (state.color === 'blue') {
                window.localStorage.setItem('appColor', 'green')
                return Object.assign({}, state, {color: 'green'})
            } else if (state.color === 'green') {
                window.localStorage.setItem('appColor', 'red')
                return Object.assign({}, state, {color: 'red'})
            } else {
                window.localStorage.setItem('appColor', 'blue')
                return Object.assign({}, state, {color: 'blue'})
            }
        default:
            return state;
    }
}

export default colorReducer;