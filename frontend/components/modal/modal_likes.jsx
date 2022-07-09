import React from 'react';

import { appColor } from '../../util/color_util';

class LikesModal extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        // }
    }

    rendersLikers() {
    }

    render() {
        debugger
        return (
            // <h1 onClick={this.props.closeModal}>H1 from likes Modal</h1>
            <>
                <div className="profpic_modal_background" onClick={this.props.closeModal}></div>
                <div className="profpic_modal_child">
                    <div className="profpictop">
                        <h1 className="profpictitle">Likes</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="profpiclinediv"></div>
                    <h1 onClick={this.props.closeModal}>H1 from likes Modal</h1>
                </div>
            </>
        )
    }
}

export default LikesModal;