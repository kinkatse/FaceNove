import React from 'react';

import { appColor, postProfPicColor } from '../../util/color_util';

class ModalCreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: "",
            user_id: this.props.currentUser.id,
            photoUrl: null,
            photoFile: null
        }
        this.updatePostBody = this.updatePostBody.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updatePostBody() {
        return e => this.setState({ body: e.currentTarget.value })
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
        postData.append('postData[body]', this.state.body);
        postData.append('postData[user_id]', this.state.user_id);
        if (this.state.photoFile) {
            postData.append('postData[postPhotoUrl]', this.state.photoFile);
        }
        if (this.state.body) {
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
            body: "",
            photoUrl: null,
            photoFile: null
        })
        this.props.closeModal()
    }

    rendersPreview() {
        let preview;
        if (this.state.photoUrl) {
            // Include delete preview/chosen file button, resetstate.
            // This currently does NOT delete when submitting. The post
            // will still save the image
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

    rendersPictureButton() {
        let photobutton;
        if (!this.state.photoUrl) {
            photobutton = (
                <label className={`profpic_filebutton splashbutton profchoose ${appColor()}`}>
                    <input type="file" onChange={this.handleFile}/>
                    Add a Picture?
                </label>
            )
        } else {
            photobutton = (
                <label className={`profpic_filebutton splashbutton profchoose ${appColor()}`}>
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
                                    className={`editpost_profile_pic ${postProfPicColor()}`}
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
                                value={this.state.body}
                                onChange={this.updatePostBody()}
                            ></textarea>
                        </div>
                    </div>
                    {this.rendersPictureButton()}
                    <div className="editsubmit">
                        <input className={`editsubmitbutton splashbutton createpostposition ${appColor()}`} type="submit" value="Make Post"/>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}

export default ModalCreatePost;