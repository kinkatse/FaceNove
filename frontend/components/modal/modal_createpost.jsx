import React from 'react';

class ModalCreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: "",
            user_id: this.props.currentUser.id,
            photoUrl: null,
            photoFile: null
        }
        this.updatePostBody = this.updatePostBody.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updatePostBody() {
        return e => this.setState({ post: e.currentTarget.value })
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

    handleSubmit(e) {
        e.preventDefault();
        const postData = new FormData();
        postData.append('postData[post]', this.state.post);
        postData.append('postData[user_id]', this.state.user_id);
        if (this.state.photoFile) {
            postData.append('postData[postPhotoUrl]', this.state.photoFile);
        }
        this.props.createPost(postData)
        .then(this.resetState())
    }

    resetState() {
        this.setState({
            post: "",
            photoUrl: null,
            photoFile: null
        })
        this.props.closeModal()
    }

    rendersPreview() {
        let preview;
        if (this.state.photoUrl) {
            preview =
                ( <img
                    className="postpic_modal"
                    src={this.state.photoUrl}
                /> )
        } else {
            preview =
                ( <div> No Image Selected </div> )
        }

        return preview
    }

    render() {
        let colorSplash;
        let profpicColor;
        if (this.props.color === "blue") {
            colorSplash = 'bluesplash';
            profpicColor = "postprofpicblue"
        } else if (this.props.color === "green") {
            colorSplash = 'greensplash'
            profpicColor = "postprofpicgreen"
        } else if (this.props.color === "red") {
            colorSplash = 'redsplash'
            profpicColor = "postprofpicred"
        }

        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div className="postedit_modal_background" onClick={this.props.closeModal}></div>
                <div className="postedit_modal_child">
                    <div className="postedittop">
                        <h1 className="createpostedittitle">Create Post!</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="posteditlinediv"></div>
                    <div className="posteditbody">
                        <div className="editpost_top">
                            <div className="editpost_top_left">
                                <img
                                    className={'editpost_profile_pic ' + profpicColor}
                                    src={this.props.currentUser.profilePicUrl}
                                />
                                <h2 className="editpost_name">
                                    {this.props.currentUser.firstName} {this.props.currentUser.lastName}
                                </h2>
                            </div>
                        </div>
                        <div className="editpostbodywhole">
                            <textarea
                                className="editpost_input"
                                type="text"
                                placeholder="What's on your mind?"
                                value={this.state.post}
                                onChange={this.updatePostBody()}
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <div className="profpic_components">
                            <label className={'profpic_filebutton splashbutton profchoose ' + colorSplash}>
                                <input type="file" onChange={this.handleFile}/>
                                Add a Picture?
                            </label>
                            <div className="postpic_whole">
                                {this.rendersPreview()}
                            </div>
                            <input className={'profpic_submitbutton splashbutton ' + colorSplash} type="submit" value="Save Picture"/>
                        </div>
                    </div>
                    <div className="editsubmit">
                        <input className={'editsubmitbutton splashbutton createpostposition ' + colorSplash} type="submit" value="Make Post"/>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}

export default ModalCreatePost;