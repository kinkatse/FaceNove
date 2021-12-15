import React from 'react';

class LogoSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let color = this.props.color;
        return (
            <div className="logo-section">
                {/* <img src={this.props.logo_src} alt="FaceNove"/> */}
                <h1 className={'front-logo ' + color} onClick={this.props.updateColor}>facenove</h1>
                <p className="under-logo-message">Connect with friends and be the face of your own page!</p>
            </div>
        )
    }
}

export default LogoSection;