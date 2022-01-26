import React from 'react';
import { Link } from 'react-router-dom';
import PostDrop from '../posts/post_drop'

class PostComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropOpen: false
        }
        this.dropOpen = this.dropOpen.bind(this);
        this.dropClose = this.dropClose.bind(this);
    }

    dropOpen() {
        this.setState({ dropOpen: true })
    }

    dropClose() {
        this.setState({ dropOpen: false })
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
                    <div className={'post_top_right ' + dropclassname} onClick={this.dropOpen}>
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
                        commentId={this.props.commentId}
                        updateComment={this.props.updateComment}
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

    render() {
        if (this.props.commentPostId !== this.props.postId) {
            return null;
        }

        return (
            <div className="post_whole">
                <div className="post_top">
                    <div className="post_top_left">
                        <Link to={`/user/${this.props.authorCommentId}`}>
                            <img
                                className={'post_profile_pic ' + this.props.profpicColor}
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
                    <p className="comment_body">
                        {this.props.commentBody}
                    </p>
                </div>
                <div className="post_bottom">
                    <div className="post_buttons">
                        <h2 className="post_placeholder">Like?</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostComments;