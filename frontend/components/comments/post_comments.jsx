import React from 'react';
import { Link } from 'react-router-dom';
import PostDrop from '../posts/post_drop'
import LikeContainer from '../likes/like_container';

import { postProfPicColor } from '../../util/color_util';

class PostComments extends React.Component {
    componentDidUpdate(oldProps) {
        // Just to make sure that after you edit a comment, and try to
        // edit it again, that the state commentBody is updated as well
        if (oldProps.commentBody !== this.props.commentBody) {
            this.resetState()
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            dropOpen: false,
            commentBody: props.commentBody,
            openComment: false
        }
        this.dropOpen = this.dropOpen.bind(this);
        this.dropClose = this.dropClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openCommentEdit = this.openCommentEdit.bind(this);
    }

    dropOpen() {
        this.setState({ dropOpen: true })
    }

    dropClose() {
        this.setState({ dropOpen: false })
    }

    openCommentEdit() {
        this.setState({ openComment: true })
    }

    closeComment() {
        this.setState({ openComment: false })
    }

    updateComment() {
        return e => this.setState({ commentBody: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const commentData = new FormData();
        commentData.append('commentData[body]', this.state.commentBody);
        commentData.append('commentData[user_id]', this.props.authorCommentId);
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

    rendersCommentTopRight() {
        let component;
        let dropclassname;
        if (this.state.dropOpen) {
            dropclassname = ""
        } else {
            dropclassname = "opendropbtn"
        }

        if (this.props.currentUser.id === parseInt(this.props.authorCommentId)) {
            component = (
                <div>
                    {this.rendersCommentDropClose()}
                    <div className={`post_top_right ${dropclassname}`} onClick={this.dropOpen}>
                        {this.rendersCommentDrop()}
                    </div>
                </div>
            )
        } else {
            component = null;
        }
        return (
            component
        )
    }

    rendersCommentDropClose() {
        if (this.state.dropOpen) {
            return (
                <div className="post_dropclose" onClick={this.dropClose}></div>
            )
        }
    }

    rendersCommentDrop() {
        let component;
        if (this.state.dropOpen) {
            component = (
                <div className="">
                    <div className="post_dropdown">...</div>
                    <PostDrop
                        type="Comment"
                        openCommentEdit={this.openCommentEdit}
                        commentId={this.props.commentId}
                        destroyComment={this.props.destroyComment}
                    />
                </div>
            )
        } else {
            component = (
                <div className="post_dropdown">...</div>
            );
        }
        return component;
    }

    rendersComment() {
        let editComment;
        if (this.state.openComment) {
            editComment = (
                <div className="comment_bio_div">
                    <form className="openeditcomment_form" onSubmit={this.handleSubmit}>
                        <input
                            className="openeditcomment_input"
                            type="text"
                            placeholder={`${this.state.commentBody}`}
                            value={this.state.commentBody}
                            onChange={this.updateComment()}
                        ></input>
                        <div className="editcomment_whole">
                            <div className="edit_comment_cancel" onClick={() => this.resetState()}>
                                Cancel
                            </div>
                        </div>
                    </form>
                </div>
            )
        } else {
            editComment = (
                <p className="comment_body">{this.props.commentBody}</p>
            )
        }
        return editComment;
    }

    rendersLikeButton() {
        return <LikeContainer
                    likeRender="Button"
                    commentId={this.props.commentId}
                    likeIds={this.props.likeIds}
                />
    }

    rendersLikeCount() {
        return <LikeContainer
                    likeRender="Count"
                    likeIds={this.props.likeIds}
                />
    }

    render() {
        if (this.props.commentPostId !== this.props.postId) {
            return null;
        }

        return (
            <div className="comment_whole">
                <div className="post_top">
                    <div className="post_top_left">
                        <Link to={`/user/${this.props.authorCommentId}`}>
                            <img
                                className={`post_profile_pic ${postProfPicColor()}`}
                                src={this.props.profilePicUrl}
                            />
                        </Link>
                        <div className="name_and_time">
                            <Link to={`/user/${this.props.authorCommentId}`}>
                                <h2 className="post_name">
                                    {this.props.firstName} {this.props.lastName}
                                </h2>
                            </Link>
                        </div>
                    </div>
                    {this.rendersCommentTopRight()}
                </div>
                <div className="post_middle">
                    {this.rendersComment()}
                </div>
                <div className="post_bottom">
                    <div className="post_buttons">
                        {/* <h2 className="comments_placeholder_like">Like?</h2> */}
                        {/* {rendersLikeButton()} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default PostComments;