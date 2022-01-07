import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../navbar/navbar';

class Profile extends React.Component {
    componentDidMount() {
        debugger
        this.props.showUser(this.props.user.id)
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <br />
                <br />
                <br />
                <br />
                <h1>User {this.props.user.id}'s Profile Page</h1>
            </div>
        )
    }
}

export default Profile;