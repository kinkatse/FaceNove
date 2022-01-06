import React from 'react';
import { Route, Switch } from 'react-router-dom';
// BIG HEAD ACHE ISSUE: Make sure you import Switch IF we are on react-router-dom version 5.2.0
// Otherwise, it was changed to be Routes in a later version which gives invalid import/export issue for app and causes confusion

import { AuthRoute, ProtectedRoute } from '../util/route_util';
    // We dont need:
    // <AuthRoute path="/login" component={}/>
    // <AuthRoute path="/signup" component={}/>
    // Because Facebook doesn't have different routes to these pages, they handle login and signup on the splash
    // Technically it does have a login page but it's already accessible on the splash so we should only care to
    // make this routes as a bonus later on

import ModalContainer from './modal/modal_container';
import SplashContainer from './splash/splash_container';
import ProfileContainer from './profile/profile_container';

const App = () => (
    <div className="page">
        <ModalContainer />
        <Switch>
            <Route exact path="/" component={SplashContainer}/>
            <ProtectedRoute path="/user/:userId" component={ProfileContainer}/>
        </Switch>
    </div>
)

export default App;