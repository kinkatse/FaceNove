import { TOGGLE_COLOR } from "../actions/color_actions";

const colorReducer = (state = {color: 'blue'}, action) => {
    // Reducer only takes in a state and action and will return a new state.
    // Since we don't want to modify the old state, we should try to make a
    // copy of the old one and modify the copy. So we should make sure we
    // don't modify the old state with Object.freeze and set the nextState
    // to Object.assign of the old state
    Object.freeze(state)

    // This is where the purity of this function comes in since the action.type
    // will always be something we expect from the action and can predict the outcome
    switch(action.type) {
        case TOGGLE_COLOR:
            // Setting old State's key into color as the action.color which is
            // dependent on user choice since action only dispatches after being hit
            // on event listener

            if (state.color === 'blue') {
                return Object.assign({}, state, {color: 'green'})
            } else if (state.color === 'green') {
                return Object.assign({}, state, {color: 'red'})
            } else {
                return Object.assign({}, state, {color: 'blue'})
            }
        default:
            // Return the original color theme which is blue. This is also hit when we
            // first load the app with the initial action being the
            // {type: "@@redux/INITa.t.t.a.b"} which then hits our default case
            return state;
    }
}

export default colorReducer;