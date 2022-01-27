import React from 'react';

class PostDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // commentBody: props.commentBody,
            // openComment: false
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // openCommentEdit() {
    //     this.setState({ openComment: true })
    //     // commentBody: this.props.commentBody,
    // }

    // closeComment() {
    //     this.setState({ openComment: false })
    // }

    // updateComment() {
    //     return e => this.setState({ commentBody: e.currentTarget.value })
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const commentData = new FormData();
    //     commentData.append('commentData[body]', this.state.commentBody);
    //     commentData.append('commentData[user_id]', this.props.commentUserId);
    //     commentData.append('commentData[post_id]', this.props.commentPostId);
    //     commentData.append('isPostComments', true)
    //     this.props.updateComment(commentData, this.props.commentId)
    //     .then(this.resetState())
    // }

    // resetState() {
    //     this.setState({
    //         commentBody: this.props.commentBody,
    //         openComment: false
    //     })
    // }

    rendersDropType() {
        // let editComment;
        // if (this.state.openComment) {
        //     editComment = (
        //         <form className="openedit_form" onSubmit={this.handleSubmit}>
        //             <textarea
        //                 className="openedit_textarea"
        //                 type="text"
        //                 placeholder={`${this.state.commentBody}`}
        //                 value={this.state.commentBody}
        //                 onChange={this.updateComment()}
        //             ></textarea>
        //             <div className="editbio_whole">
        //                 <div className="prof_openbiobutton edit_bio_cancel" onClick={() => this.resetState()}>
        //                     Cancel
        //                 </div>
        //                 <input className={'prof_openbiobutton edit_bio_submit ' + colorSplash} type="submit" value="Save"/>
        //             </div>
        //         </form>
        //     )
        // } else {
        //     editComment = null;
        // }

        if (this.props.type === "Post") {
            return (
                <div className="dropopenabsolute">
                    <div className="dropopenbackground">
                        <div
                            onClick={() => this.props.openEditPostModal(this.props.postId)}>
                                <p className="dropopentext">Edit</p>
                        </div>
                        <div
                            onClick={() => this.props.destroyPost(this.props.postId)}>
                                <p className="dropopentext">Delete</p>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.type === "Comment") {
            return (
                <div className="dropopenabsolute">
                    <div className="dropopenbackground">
                        <div
                            onClick={() => this.props.openCommentEdit()}>
                                <p className="dropopentext">Edit</p>
                        </div>
                        <div
                            onClick={() => this.props.destroyComment(this.props.commentId)}>
                                <p className="dropopentext">Delete</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            this.rendersDropType()
        )
    }
}

export default PostDrop;