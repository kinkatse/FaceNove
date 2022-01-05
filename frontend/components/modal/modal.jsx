import React from 'react';

import SignupModalForm from './modal_signup';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    selectModal() {
        switch(this.props.modal.type) {
            case 'signup':
                return <SignupModalForm
                    signup={this.props.signup}
                    closeModal={this.props.closeModal}
                    color={this.props.color}
                    errors={this.props.errors}
                />
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