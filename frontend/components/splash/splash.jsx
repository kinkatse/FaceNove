import React from 'react';

import LogoSection from './logo_section';
import AuthForm from './auth_form';
import Footer from './footer'

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash">
                <div className="splash-background"></div>
                <div className="splash-core">
                    {/* <LogoSection color={this.props.color} updateColor={this.props.updateColor}/> */}
                    <LogoSection color={this.props.color} updateColor={this.props.updateColor}/>
                    <AuthForm />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Splash;