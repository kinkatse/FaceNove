import React from 'react';

import LogoSection from './logo_section';
import AuthForm from './auth_form';
import Footer from './footer'

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let splashComponent = '';
        if (this.props.currentUser.id) {
            splashComponent =
                <div className="splash">
                <div className="splash-background"></div>
                </div>
        } else {
            splashComponent =
                <div className="splash">
                <div className="splash-background"></div>
                <div className="splash-top">
                    <div className="splash-core">
                        <LogoSection color={this.props.color} updateColor={this.props.updateColor}/>
                        <AuthForm color={this.props.color}/>
                    </div>
                </div>
                <Footer />
            </div>
        }

        return (
            splashComponent
            // <div className="splash">
            //     <div className="splash-background"></div>
            //     <div className="splash-top">
            //         <div className="splash-core">
            //             <LogoSection color={this.props.color} updateColor={this.props.updateColor}/>
            //             <AuthForm color={this.props.color}/>
            //         </div>
            //     </div>
            //     <Footer />
            // </div>
        )
    }
}

export default Splash;