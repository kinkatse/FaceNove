import React from 'react';

class LogoSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="logo-section">
                <h1>logo</h1>
                {/* <img src={this.props.logo_src} alt="FaceNove"/> */}
                <div className="logo"></div>
            </div>
        )
    }
}

export default LogoSection;