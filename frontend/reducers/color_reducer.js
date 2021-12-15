import { TOGGLE_COLOR, COLOR_ERROR } from "../actions/color_actions";

const colorReducer = (state = {color: 'blue'}, action) => {
    // Reducer only takes in a state and action and will return a new state.
    // Since we don't want to modify the old state, we should try to make a
    // copy of the old one and modify the copy. So we should make sure we
    // don't modify the old state with Object.freeze and set the nextState
    // to Object.assign of the old state
    Object.freeze(state)
    // debugger
    // Here the state will end up being 'blue' when we expected it to be
    // {color: 'blue'}
    // const nextState = Object.assign({}, state)
    // Then that becomes {0: 'b', 1: 'l', 2: 'u', 3: 'e'} since the
    // Object.assign function second parameter needs to be an object
    // thus, it makes string 'blue' into an object with each char being
    // the value to its index. It's weird and idk why
    let nextState;
    debugger

    // This is where the purity of this function comes in since the action.type
    // will always be something we expect from the action and can predict the outcome
    switch(action.type) {
        case TOGGLE_COLOR:
            // Setting old State's key into color as the action.color which is
            // dependent on user choice since action only dispatches after being hit
            // on event listener

            // Attempting to have receive color before but now changed mind to toggle
            // return nextState.color = action.color;
            // Seems like we cannot key into the with nextState[color] like we are used
            // to with Ruby. In Javascript, we have two ways to add properties to an
            // object, dot notation like this or square bracket notation which is like
            // nextState["color"]. We use this below in default to examplify that

            // Why does state eventually go from {color: 'blue'} to just 'blue'?
            debugger
            if (state.color === 'blue') {
                debugger
                // return nextState.color = 'green'
                nextState = Object.assign({}, state, {color: 'green'})
                debugger
                return nextState;
            } else if (state.color === 'green') {
                // return nextState.color = 'red'
                nextState = Object.assign({}, state, {color: 'red'})
                debugger
                return nextState;
            } else {
                // return nextState.color = 'blue'
                nextState = Object.assign({}, state, {color: 'blue'})
                debugger
                return nextState;
            }
        case COLOR_ERROR:
            alert('Color theme for ' + action.error + ' is not available');
        default:
            // Return the original color theme which is blue. This is also hit when we
            // first load the app with the initial action being the
            // {type: "@@redux/INITa.t.t.a.b"} which then hits our default case
            debugger
            // return nextState.color = 'blue'
            nextState = Object.assign({}, state, {color: 'blue'})
            debugger
            return nextState;
            // return nextState["color"] = 'blue';
    }
}

export default colorReducer;