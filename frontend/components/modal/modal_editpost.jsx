import React from 'react';

class ModalEditPost extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.state = {
            post: this.props.postObj.post,
            user_id: this.props.postObj.user_id,
            photoUrl: this.props.postObj.postPhotoUrl || null,
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

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const postData = Object.assign({}, this.state);
    //     this.props.updatePost(postData, this.props.postObj.id)
    //     .then(this.resetState())
    // }

    handleSubmit(e) {
        e.preventDefault();
        const postData = new FormData();
        postData.append('postData[post]', this.state.post);
        postData.append('postData[user_id]', this.state.user_id);
        if (this.state.photoFile) {
            postData.append('postData[postPhotoUrl]', this.state.photoFile);
        }
        if (this.state.post) {
            this.props.createPost(postData)
            .then(this.resetState())
        } else {
            // Need to have an error handler for when user doesn't
            // give a post body. Otherwise we get 422 error from backend
            alert("Post body needs a message")
        }
    }

    resetPreview() {
        this.setState({
            photoUrl: null,
            photoFile: null
        })
    }

    resetState() {
        this.setState({
            post: this.props.postObj.post,
            photoUrl: null,
            photoFile: null
        })
        this.props.closeModal()
    }

    rendersPreview() {
        let preview;
        if (this.state.photoUrl) {
            preview =
                ( 
                <div className="postpic_whole">
                    <img
                        className="postpic_modal"
                        src={this.state.photoUrl}
                    />
                    <div className="photo_close">
                        <img
                            className="photo_X"
                            src={window.x_url}
                            onClick={() => this.resetPreview()}
                        />
                    </div>
                </div>
                )
        } else {
            preview = ( <div className="postpic_noimage"> No Image Selected </div> )
        }

        return preview
    }

    rendersPictureButton(colorSplash) {
        let photobutton;
        if (!this.state.photoUrl) {
            photobutton = (
                <label className={'profpic_filebutton splashbutton profchoose ' + colorSplash}>
                    <input type="file" onChange={this.handleFile}/>
                    Add a Picture?
                </label>
            )
        } else {
            photobutton = (
                <label className={'profpic_filebutton splashbutton profchoose ' + colorSplash}>
                    <input type="file" onChange={this.handleFile}/>
                    Change Picture?
                </label>
            )
        }

        return (
            <div>
                <div className="profpic_components">
                    {this.rendersPreview()}
                    {photobutton}
                </div>
            </div>
        )
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
            <form onSubmit={this.handleSubmit}>
                <div className="postedit_modal_background" onClick={this.props.closeModal}></div>
                <div className="postedit_modal_child">
                    <div className="postedittop">
                        <h1 className="postedittitle">Edit Post!</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="posteditlinediv"></div>
                    <div className="posteditbody">
                        <div className="editpost_top">
                            <div className="editpost_top_left">
                                <img
                                    className={'editpost_profile_pic ' + profpicColor}
                                    src={this.props.postObj.profilePicUrl}
                                />
                                <h2 className="editpost_name">
                                    {this.props.postObj.firstName} {this.props.postObj.lastName}
                                </h2>
                            </div>
                        </div>
                        <div className="editpostbodywhole">
                            <textarea
                                className="editpost_input"
                                type="text"
                                placeholder={`${this.state.post}`}
                                value={this.state.post}
                                onChange={this.updatePostBody()}
                            ></textarea>
                        </div>
                    </div>
                    {this.rendersPictureButton(colorSplash)}
                    <div className="editsubmit">
                        <input className={'editsubmitbutton splashbutton editpostposition ' + colorSplash} type="submit" value="Save"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalEditPost;