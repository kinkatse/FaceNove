import React from 'react';
import { Link } from 'react-router-dom';
import PostDrop from './post_drop'

class UserPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropOpen: false,
            postBody: this.props.postBody
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

    rendersPostTopRight() {
        let component;
        let dropclassname;
        if (this.state.dropOpen) {
            dropclassname = ""
        } else {
            dropclassname = "opendropbtn"
        }

        if (this.props.currentUser.id === parseInt(this.props.userId)) {
            component = (
                <div>
                    {this.rendersPostDropClose()}
                    <div className={'post_top_right ' + dropclassname} onClick={this.dropOpen}>
                        {this.rendersPostDrop()}
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

    rendersPostDropClose() {
        if (this.state.dropOpen) {
            return (
                <div className="post_dropclose" onClick={this.dropClose}></div>
            )
        }
    }

    rendersPostDrop() {
        let component;
        if (this.state.dropOpen) {
            component = (
                <div className="">
                    <div className="post_dropdown">...</div>
                    <PostDrop
                        postId={this.props.postId}
                        openEditPostModal={this.props.openEditPostModal}
                        destroyPost={this.props.destroyPost}
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
        // This is to prevent the posts made by the user on a different
        // user's page from showing up on that page
        if (this.props.postUserId !== parseInt(this.props.userId)) {
            return null;
        }

        return (
            <div className="post_whole">
                <div className="post_top">
                    <div className="post_top_left">
                        <Link to={`/user/${this.props.userId}`}>
                            <img
                                className={'post_profile_pic ' + this.props.profpicColor}
                                src={this.props.profilePicUrl}
                            />
                        </Link>
                        <Link to={`/user/${this.props.userId}`}>
                            <h2 className="post_name">
                                {this.props.firstName} {this.props.lastName}
                            </h2>
                        </Link>
                    </div>
                    {this.rendersPostTopRight()}
                </div>
                <div className="post_middle">
                    <p className="post_body">
                        {this.props.postBody}
                    </p>
                    <h2 className="post_placeholder">Picture?</h2>
                    <div className="postlinediv"></div>
                    <div className="post_buttons">
                        <h2 className="post_placeholder">Comment?</h2>
                        <h2 className="post_placeholder">Like?</h2>
                    </div>
                    <div className="postlinediv"></div>
                    <h2 className="post_placeholder">Write a comment</h2>
                </div>
            </div>
        )
    }
}

export default UserPost;