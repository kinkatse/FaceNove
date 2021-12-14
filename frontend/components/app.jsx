import React from 'react';

import Splash from './splash/splash'

// Possibly put background here?
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color: 'blue'
        }
        this.updateColor = this.updateColor.bind(this);
    }

    // This is only toggling between three colors, I soon
    // want to make it be an option select of different colors
    updateColor() {
        let next_color;
        if (this.state.color === 'blue') {
            next_color = 'green'
        } else if (this.state.color === 'green') {
            next_color = 'red'
        } else {
            next_color = 'blue'
        }
        this.setState({color: next_color})
    }

    // We want the entire App to have access to changing color themes so we
    // should set state for the updateColor() and color attributes in here
    // and then pass them on as props
    render() {
        return (
            <div>
                <Splash color={this.state.color} updateColor={this.updateColor}/>
            </div>
        )
    }
    
}

export default App;