import React from 'react';
import { Route, Switch } from 'react-router-dom';
// BIG HEAD ACHE ISSUE: Make sure you import Switch IF we are on react-router-dom version 5.2.0
// Otherwise, it was changed to be Routes in a later version which gives invalid import/export issue for app and causes confusion

import ModalContainer from './modal/modal_container';
import SplashContainer from './splash/splash_container';

const App = () => (
    <div className="page">
        <ModalContainer />
        <Switch>
            <Route exact path="/" component={SplashContainer}/>
        </Switch>
    </div>
)

export default App;