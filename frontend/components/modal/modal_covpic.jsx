import React from 'react';

import { appColor } from '../../util/color_util';

class ModalCovPic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoUrl: null,
            photoFile: null
        }
        this.handleCovSubmit = this.handleCovSubmit.bind(this);
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

    handleCovSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[coverPicUrl]', this.state.photoFile);
        this.props.updateCovPic(formData, this.props.currentUser.id)
        .then(this.resetState())
    }

    resetState() {
        this.setState({
            photoFile: null
        })
        this.props.closeModal()
    }

    rendersPreview() {
        let preview;
        if (this.state.photoUrl) {
            preview = (
                <img
                    className="oldcovpic"
                    src={this.state.photoUrl}
                />
            )
        } else {
            preview = (
                <img
                    className="oldcovpic"
                    src={this.props.currentUser.coverPicUrl}
                />
            )
        }

        return (
            <div>
                {preview}
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.handleCovSubmit}>
                <div className="covpic_modal_background" onClick={this.props.closeModal}></div>
                <div className="covpic_modal_child">
                    <div className="covpictop">
                        <h1 className="covpictitle">Change Cover Picture!</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="covpiclinediv"></div>
                    <div className="covpic_components">
                        <label className={`covpic_filebutton splashbutton covchoose ${appColor()}`}>
                            <input type="file" onChange={this.handleFile}/>
                            Choose A File
                        </label>
                        {this.rendersPreview()}
                        <input className={`covpic_submitbutton splashbutton ${appColor()}`} type="submit" value="Update Cover Picture"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalCovPic;