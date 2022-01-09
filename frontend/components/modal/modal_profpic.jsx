import React from 'react';

class ModalProfPic extends React.Component {
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
                <div className="profpic_modal_background" onClick={this.props.closeModal}></div>
                <div className="profpic_modal_child">
                    <div className="profpictop">
                        <h1 className="profpictitle">Change Profile Picture!</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="profpiclinediv"></div>
                    <div className="profpicbody">
                    </div>
                    <div className="profpicsubmit">
                        <input className={'submitbutton splashbutton ' + colorSplash} type="submit" value="Update Info"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalProfPic;