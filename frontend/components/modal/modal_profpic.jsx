import React from 'react';

class ModalProfPic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoUrl: null,
            photoFile: null
        }
        this.handleProfSubmit = this.handleProfSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleProfSubmit(e) {
        debugger
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[profilePicUrl]', this.state.photoFile);
        this.props.updateProfPic(formData, this.props.currentUser.id)
        .then(() => this.resetState())
    }

    resetState() {
        debugger
        this.setState({
            photoFile: null
        })
        this.props.closeModal()
    }

    rendersPreview() {
        let preview;
        if (this.state.photoUrl) {
            preview =
                ( <img
                    className="oldprofpic"
                    src={this.state.photoUrl}
                /> )
        } else {
            preview =
                ( <img
                    className="oldprofpic"
                    src={this.props.currentUser.profilePicUrl}
                /> )
        }

        return ( <div>{preview}</div> )
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
            <form onSubmit={this.handleProfSubmit}>
                <div className="profpic_modal_background" onClick={this.props.closeModal}></div>
                <div className="profpic_modal_child">
                    <div className="profpictop">
                        <h1 className="profpictitle">Change Profile Picture!</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="profpiclinediv"></div>
                    <div className="profpic_components">
                        <label className={'profpic_filebutton splashbutton profchoose ' + colorSplash}>
                            <input type="file" onChange={this.handleFile}/>
                            Choose A File
                        </label>
                        {this.rendersPreview()}
                        <input className={'profpic_submitbutton splashbutton ' + colorSplash} type="submit" value="Update Profile Picture"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalProfPic;