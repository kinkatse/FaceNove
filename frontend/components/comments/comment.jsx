import React from 'react';
import PostComments from './post_comments';

class Comment extends React.Component {
    componentDidMount() {
        debugger
        this.props.clearComments()
        const commentRelatedId = Object.assign(
            {},
            { post_id: this.props.postId },
            { isPostComments: true }
        )
        debugger
        this.props.indexComments(commentRelatedId)
    }

    // componentDidUpdate(oldProps) {
    //     if ((this.props.userId !== oldProps.userId) ||
    //     (Object.values(oldProps.posts).length !== 0 &&
    //     this.props.currentUser.id === parseInt(this.props.userId) &&
    //     this.props.currentUser.profilePicUrl !== Object.values(oldProps.posts)[0].profilePicUrl))
    //     {
    //         this.props.clearPosts()
    //         this.props.showPost(this.props.userId);
    //     }
    // }

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
        commentData.append('commentData[user_id]', this.props.currentUser.id);
        commentData.append('commentData[post_id]', this.props.postId);
        commentData.append('isPostComments', true)
        debugger
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
        let profpicColor;
        if (this.props.color === "blue") {
            profpicColor = "postprofpicblue"
        } else if (this.props.color === "green") {
            profpicColor = "postprofpicgreen"
        } else if (this.props.color === "red") {
            profpicColor = "postprofpicred"
        }

        debugger
        if (Object.keys(this.props.comments).length === 0) {
            return null;
        }

        debugger
        let commentArr = Object.values(this.props.comments).reverse()
        debugger
        return (
            <div>
                {this.rendersCreateComment()}
                {
                    commentArr.map(comment => (
                        <PostComments
                            key={comment.id}
                            commentId={comment.id}
                            commentBody={comment.body}
                            authorCommentId={comment.user_id}
                            // This is the comment's post_id
                            commentPostId={comment.post_id}
                            // This is for which post we are on
                            postId={this.props.postId}
                            // userId={this.props.userId}
                            firstName={comment.firstName}
                            lastName={comment.lastName}
                            createComment={this.props.createComment}
                            profilePicUrl={comment.profilePicUrl}
                            profpicColor={profpicColor}
                            currentUser={this.props.currentUser}

                            // updatePost={this.props.updatePost}
                            // destroyPost={this.props.destroyPost}
                        /> )
                    )
                }
            </div>
        )
    }
}

export default Comment;