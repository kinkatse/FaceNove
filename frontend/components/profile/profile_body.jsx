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
                <h1>This is ProfileBody</h1>
                <ProfileIntro />
            </div>
        )
    }
}

export default ProfileBody;