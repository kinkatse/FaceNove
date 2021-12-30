import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="signupform">
                {/* <div>Modal for signup goes here</div> */}
                <div className="signupbutton">
                    <input
                        className="signupbuttontext splashbutton"
                        type="submit"
                        // value={this.props.formType}
                        value="Create A New Account"
                    />
                </div>
            </div>
        )
    }
}

export default SignupForm;