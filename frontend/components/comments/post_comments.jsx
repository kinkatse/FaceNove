import React from 'react';
import PostDrop from './post_drop'

class PostComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentBody: "",
            // Eventually pass all comments into here from the indexcomment action
        }
        this.updateCommentBody = this.updateCommentBody.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    updateCommentBody() {
        return e => this.setState({ commentBody: e.currentTarget.value })
    }

    resetState() {
        this.setState({
            commentBody: ""
        })
    }

    handleCommentSubmit(e) {
        debugger
        e.preventDefault();
        const commentData = new FormData();
        commentData.append('commentData[body]', this.state.commentBody);
        commentData.append('commentData[user_id]', this.props.userId);
        commentData.append('commentData[post_id]', this.props.postId);
        debugger
        this.props.createComment(commentData).then(this.resetState())
    }

    // rendersPostDropClose() {
    //     if (this.state.dropOpen) {
    //         return (
    //             <div className="post_dropclose" onClick={this.dropClose}></div>
    //         )
    //     }
    // }

    // rendersPostDrop() {
    //     let component;
    //     if (this.state.dropOpen) {
    //         component = (
    //             <div className="">
    //                 <div className="post_dropdown">...</div>
    //                 <PostDrop
    //                     postId={this.props.postId}
    //                     openEditPostModal={this.props.openEditPostModal}
    //                     destroyPost={this.props.destroyPost}
    //                 />
    //             </div>
    //         )
    //     } else {
    //         component = (
    //             <div className="post_dropdown">...</div>
    //         );
    //     }
    //     return component;
    // }

    render() {
        debugger
        return (
            <form onSubmit={this.handleCommentSubmit}>
                <input
                    className="post_placeholder"
                    type="text"
                    value={this.state.commentBody}
                    placeholder="Write a comment"
                    onChange={this.updateCommentBody()}
                />
            </form>
        )
    }
}

export default PostComments;