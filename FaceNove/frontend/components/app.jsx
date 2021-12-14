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

    render() {
        return (
            <div>
                <Splash color={this.state.color} updateColor={this.updateColor}/>
            </div>
        )
    }
    
}

export default App;