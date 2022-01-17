import React from 'react';

import SignupModalForm from './modal_signup';
import EditModalForm from './modal_edit';
import ProfPicModalForm from './modal_profpic';
import CovPicModalForm from './modal_covpic';
import EditPostModalForm from './modal_editpost';

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
                return <EditModalForm
                    currentUser={this.props.currentUser}
                    updateUser={this.props.updateUser}
                    closeModal={this.props.closeModal}
                    color={this.props.color}
                />
            case 'profilepic':
                return <ProfPicModalForm
                    currentUser={this.props.currentUser}
                    updateProfPic={this.props.updateProfPic}
                    closeModal={this.props.closeModal}
                    color={this.props.color}
                />
            case 'coverpic':
                return <CovPicModalForm
                    currentUser={this.props.currentUser}
                    updateCovPic={this.props.updateCovPic}
                    closeModal={this.props.closeModal}
                    color={this.props.color}
                />
            case 'editpost':
                // debugger
                return <EditPostModalForm
                    currentUser={this.props.currentUser}
                    postObj={this.props.postObj}
                    updatePost={this.props.updatePost}
                    closeModal={this.props.closeModal}
                    color={this.props.color}
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