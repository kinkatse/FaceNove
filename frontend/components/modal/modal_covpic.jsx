import React from 'react';

class ModalCovPic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
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
            <form onSubmit={this.handleSubmit}>
                <div className="covpic_modal_background" onClick={this.props.closeModal}></div>
                <div className="covpic_modal_child">
                    <div className="covpictop">
                        <h1 className="covpictitle">Change Cover Picture!</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="covpiclinediv"></div>
                    <div className="covpicbody">
                    </div>
                    <div className="covpicsubmit">
                        <input className={'submitbutton splashbutton ' + colorSplash} type="submit" value="Update Info"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalCovPic;