import React from 'react';

class ModalSignup extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let colorSplash;
        if (this.props.color === 'blue') {
            colorSplash = 'bluesplash';
        } else if (this.props.color === 'green') {
            colorSplash = 'greensplash'
        } else if (this.props.color === 'red') {
            colorSplash = 'redsplash'
        }
        return (
            <div className="signupform">
                {/* <div>Modal for signup goes here</div> */}
                <div className="signupbutton">
                    <input
                        className={'signupbuttontext splashbutton ' + colorSplash}
                        type="submit"
                        // value={this.props.formType}
                        value="Create A New Account"
                    />
                </div>
            </div>
        )
    }
}

export default ModalSignup;