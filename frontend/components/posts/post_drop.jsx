import React from 'react';

class PostDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentBody: props.commentBody,
            openComment: false
        }
        // commentId={this.props.commentId}
        // commentBody={this.props.commentBody}
        // commentUserId={this.props.authorCommentId}
        // commentPostId={this.props.commentPostId}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openCommentEdit() {
        this.setState({ openComment: true })
        // commentBody: this.props.commentBody,
    }

    closeComment() {
        this.setState({ openComment: false })
    }

    updateComment() {
        return e => this.setState({ commentBody: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        // const commentData = Object.assign({}, { commentBody: this.state.bio });
        // this.props.updateComment(commentData, this.props.commentId)
        // .then(this.closeComment())
        const commentData = new FormData();
        commentData.append('commentData[body]', this.state.commentBody);
        commentData.append('commentData[user_id]', this.props.commentUserId);
        commentData.append('commentData[post_id]', this.props.commentPostId);
        commentData.append('isPostComments', true)
        this.props.updateComment(commentData, this.props.commentId)
        .then(this.resetState())
    }

    resetState() {
        this.setState({
            commentBody: this.props.commentBody,
            openComment: false
        })
    }

    rendersDropType() {
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
                        {/* <div
                            onClick={() => this.props.updateComment()}>
                                <p className="dropopentext">Edit</p>
                                // This needs more logic since it will be similar to
                                // edit bio where you edit in place of the comment
                        </div> */}
                        <p className="dropopentext">Edit</p>
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