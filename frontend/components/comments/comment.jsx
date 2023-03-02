import React from 'react';
import PostComments from './post_comments';

class Comment extends React.Component {
    componentDidMount() {
        const commentRelatedId = Object.assign(
            {},
            { post_id: [this.props.postId],
              type: 'post' }
        )
        this.props.indexComments(commentRelatedId)
    }

    componentDidUpdate(oldProps) {
        if (this.props.postId !== oldProps.postId) {
            const commentRelatedId = Object.assign(
                {},
                { post_id: [this.props.postId],
                  type: 'post' }
            )
            this.props.indexComments(commentRelatedId)
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            commentBody: ""
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
        e.preventDefault();
        const commentData = new FormData();
        commentData.append('commentData[body]', this.state.commentBody);
        commentData.append('commentData[user_id]', this.props.currentUser.id);
        commentData.append('commentData[post_id]', this.props.postId);
        commentData.append('isPostComments', true)
        this.props.createComment(commentData).then(this.resetState())
    }

    rendersCreateComment() {
        return (
            <form onSubmit={this.handleCommentSubmit}>
                <input
                    className="createcomment"
                    type="text"
                    value={this.state.commentBody}
                    placeholder="Write a comment"
                    onChange={this.updateCommentBody()}
                />
                <p className="comments_placeholder">Press Enter to Post.</p>
            </form>
        )
    }

    render() {
        if (Object.keys(this.props.comments).length === 0) {
            return this.rendersCreateComment()
        }

        let commentArr = Object.values(this.props.comments).reverse()
        return (
            <div>
                {
                    commentArr.map(comment => (
                        <PostComments
                            key={comment.id}
                            commentId={comment.id}
                            commentBody={comment.body}
                            // this is for which user from the comment
                            authorCommentId={comment.user_id}
                            commentPostId={comment.post_id}
                            postId={this.props.postId}
                            likeIds={comment.likeIds}
                            // postUserId={this.props.postUserId}
                            firstName={comment.firstName}
                            lastName={comment.lastName}
                            createComment={this.props.createComment}
                            updateComment={this.props.updateComment}
                            destroyComment={this.props.destroyComment}
                            profilePicUrl={comment.profilePicUrl}
                            currentUser={this.props.currentUser}
                            fromPhotoModal={this.props.fromPhotoModal}
                        /> )
                    )
                }
                {this.rendersCreateComment()}
            </div>
        )
    }
}

export default Comment;