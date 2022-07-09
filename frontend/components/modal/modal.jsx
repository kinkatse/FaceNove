import React from 'react';

import SignupModalForm from './modal_signup';
import EditModalForm from './modal_edit';
import ProfPicModalForm from './modal_profpic';
import CovPicModalForm from './modal_covpic';
import CreatePostModalForm from './modal_createpost';
import EditPostModalForm from './modal_editpost';
import LikesModal from './modal_likes';

class Modal extends React.Component {
    
    selectModal() {
        switch(this.props.modal.type) {
            case 'signup':
                return <SignupModalForm
                    signup={this.props.signup}
                    closeModal={this.props.closeModal}
                    errors={this.props.errors}
                />
            case 'edit':
                return <EditModalForm
                    currentUser={this.props.currentUser}
                    updateUser={this.props.updateUser}
                    closeModal={this.props.closeModal}
                />
            case 'profilepic':
                return <ProfPicModalForm
                    currentUser={this.props.currentUser}
                    updateProfPic={this.props.updateProfPic}
                    closeModal={this.props.closeModal}
                />
            case 'coverpic':
                return <CovPicModalForm
                    currentUser={this.props.currentUser}
                    updateCovPic={this.props.updateCovPic}
                    closeModal={this.props.closeModal}
                />
            case 'createpost':
                return <CreatePostModalForm
                    currentUser={this.props.currentUser}
                    createPost={this.props.createPost}
                    closeModal={this.props.closeModal}
                />
            case 'editpost':
                return <EditPostModalForm
                    currentUser={this.props.currentUser}
                    postObj={this.props.postObj}
                    updatePost={this.props.updatePost}
                    closeModal={this.props.closeModal}
                />
            case 'likes':
                return <LikesModal
                    currentUser={this.props.currentUser}
                    postObj={this.props.postObj}
                    closeModal={this.props.closeModal}
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