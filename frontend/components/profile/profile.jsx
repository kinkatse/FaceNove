import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ProfileBody from './profile_body';
import ProfileTop from './profile_top';

class Profile extends React.Component {
    componentDidMount() {
        debugger
        // Can't do this.props.user.id because then the user would be
        // undefined without grabbing the user first. Need just the
        // userId so we can pass that in showUser and then the
        // container will properly assign the right user
        this.props.showUser(this.props.userId)
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        // Necessary for when there is no user with that wildcard
        if (!this.props.user) {
            return null;
        }
        return (
            <div>
                <NavBarContainer />
                <br />
                <br />
                <br />
                <br />
                <h1>User {this.props.user.id}'s Profile Page</h1>
                <ProfileTop />
                <ProfileBody />
            </div>
        )
    }
}

export default Profile;