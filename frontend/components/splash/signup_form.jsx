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
                        className="signupbuttontext"
                        type="submit"
                        // value={this.props.formType}
                    />
                </div>
            </div>
        )
    }
}

export default SignupForm;