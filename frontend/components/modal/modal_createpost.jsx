import React from 'react';

class ModalCreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // post: this.props.postObj.post,
            // user_id: this.props.postObj.user_id
        }
        this.updatePostBody = this.updatePostBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // updatePostBody() {
    //     return e => this.setState({ post: e.currentTarget.value })
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const postData = Object.assign({}, this.state);
    //     this.props.updatePost(postData, this.props.postObj.id)
    //     .then(this.resetState())
    // }

    // resetState() {
    //     this.setState({
    //         post: this.props.postObj.post
    //     })
    //     this.props.closeModal()
    // }

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
            {/* <form onSubmit={this.handleSubmit}> */}
                <div className="postedit_modal_background" onClick={this.props.closeModal}></div>
                <div className="postedit_modal_child">
                    <div className="postedittop">
                        <h1 className="postedittitle">Create Post!</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="posteditlinediv"></div>
                    <div className="posteditbody">
                        {/* <div className="editpost_top">
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
                        </div> */}
                    </div>
                    <div>
                        {/* <p className="testEdit">Picture Edit Here</p> */}
                    </div>
                    <div className="editsubmit">
                        <input className={'editsubmitbutton splashbutton ' + colorSplash} type="submit" value="Make Post"/>
                    </div>
                </div>
            {/* </form> */}
            </div>
        )
    }
}

export default ModalCreatePost;