import React from 'react';

import ModalContainer from './modal/modal_container';
import SplashContainer from './splash/splash_container'

// Possibly put background here?
class App extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <ModalContainer />
                <SplashContainer />
            </div>
        )
    }
    
}

export default App;