import React from 'react';
import ProfileIntro from './profile_intro';

class ProfileBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>------------</h1>
                <ProfileIntro user={this.props.user}/>
                {/* Posts/Photos/Friends */}
            </div>
        )
    }
}

export default ProfileBody;