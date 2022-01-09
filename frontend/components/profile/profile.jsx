import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ProfileBody from './profile_body';
import ProfileTop from './profile_top';

class Profile extends React.Component {
    componentDidMount() {
        // Can't do this.props.user.id because then the user would be
        // undefined without grabbing the user first. Need just the
        // userId so we can pass that in showUser and then the
        // container will properly assign the right user
        this.props.showUser(this.props.userId)
    }

    // This is necessary for us to reload after returning null
    // when user.id is undefined. This is so that after component
    // did mount and fetched the data, it will now do the following
    // when it is updating, not sure how it knows to do that
    componentDidUpdate(oldProps) {
        if (this.props.userId !== oldProps.userId) {
            this.props.showUser(this.props.userId);
        }
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        // debugger
        // Necessary for when there is no user with that wildcard
        if (!this.props.user) {
            return null;
        }
        return (
            <div>
                <NavBarContainer />
                <img className="gradient" src={window.page_gradient_url} />
                <div className="profile_page">
                    <ProfileTop
                        currentUser={this.props.currentUser}
                        currentUserId={this.props.currentUserId}
                        user={this.props.user}
                        userId={this.props.userId}
                        openEditModal={this.props.openEditModal}
                        color={this.props.color}
                    />
                    <ProfileBody
                        currentUser={this.props.currentUser}
                        user={this.props.user}
                    />
                </div>
            </div>
        )
    }
}

export default Profile;