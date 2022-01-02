import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ModalContainer from './modal/modal_container';
import SplashContainer from './splash/splash_container';


const App = () => (
    <div className="page">
        <ModalContainer />
        <Switch>
            <SplashContainer />
        </Switch>
    </div>
)

export default App;