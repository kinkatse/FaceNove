import React from 'react';

import SignupModalForm from './modal_signup';
import EditModalForm from './modal_edit';
import ProfPicModalForm from './modal_profpic';
import CovPicModalForm from './modal_covpic';

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
            case 'edit':
                return <EditModalForm />
            case 'profilepic':
                return <ProfPicModalForm />
            case 'coverpic':
                return <CovPicModalForm />
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