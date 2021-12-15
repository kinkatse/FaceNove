import React from 'react';

class LogoSection extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {

        // }
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.props.updateColor();
    // }

    render() {
        // We passed down color and updateColor() from the App to change the color of the logo
        // once we click the onClick event listener, which we handle the click with the updateColor
        // which does setState so it will rerender everything after setting state in the App and
        // all its children components will also update so the color will be updated. We can
        // change it dynamically with interpolating it in the className of the logo element
        let color = this.props.color;
        return (
            <div className="logo-section">
                {/* <h1>logo</h1> */}
                {/* <img src={this.props.logo_src} alt="FaceNove"/> */}
                {/* <div className="logo"></div> */}
                <h1 className={'front-logo ' + color} onClick={this.props.updateColor}>facenove</h1>
                <p className="under-logo-message">Connect with friends and be the face of your own page!</p>
            </div>
        )
    }
}

export default LogoSection;