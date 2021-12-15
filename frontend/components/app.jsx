import React from 'react';

import SplashContainer from './splash/splash_container'

// Possibly put background here?
class App extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <SplashContainer />
            </div>
        )
    }
    
}

export default App;