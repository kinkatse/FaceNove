import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="signupform">
                {/* <h1>signup</h1> */}
                {/* <div>Modal for signup goes here</div> */}
                <div className="signupbutton">
                    <input
                        className="signupbuttontext"
                        type="submit"
                        value={this.props.formType}
                    />
                </div>
            </div>
        )
    }
}

export default SignUp;