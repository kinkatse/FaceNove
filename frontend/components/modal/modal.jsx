import React from 'react';

import SignupModalForm from 'modal_signup';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    selectModal() {
        switch(this.props.modal.show) {
            case 'signup':
                return <SignupModalForm color={this.props.color} />
            case '':
                return null;
            default:
                return null;
        }
    }

    render() {
        let component = this.selectModal();
        return (
            <div className="">
                {component}
            </div>
        )
    }
}

export default Modal;