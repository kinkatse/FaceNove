import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from '../comments/comment_container';
import PostDrop from './post_drop'

import { postProfPicColor, commentButton, postButtonColor } from '../../util/color_util';
import LikeContainer from '../likes/like_container';
import { filterPhotoPostIds, filterTime } from '../../util/filter_util';

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropOpen: false,
            commentsOpen: false,
            postBody: this.props.postBody
        }
        this.dropOpen = this.dropOpen.bind(this);
        this.dropClose = this.dropClose.bind(this);
        this.commentsToggle = this.commentsToggle.bind(this);
    }

    dropOpen() {
        this.setState({ dropOpen: true })
    }

    dropClose() {
        this.setState({ dropOpen: false })
    }

    commentsToggle() {
        let value = this.state.commentsOpen;
        if (this.state.commentsOpen) {
            this.props.removePostComments(this.props.postId)
        }
        this.setState({ commentsOpen: !value })
    }

    rendersPostTopRight() {
        let component;
        let dropclassname;
        if (this.state.dropOpen) {
            dropclassname = ""
        } else {
            dropclassname = "opendropbtn"
        }

        if (this.props.currentUser.id === parseInt(this.props.postUserId)) {
            component = (
                <div>
                    {this.rendersPostDropClose()}
                    <div className={`post_top_right ${dropclassname}`} onClick={this.dropOpen}>
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
                        type="Post"
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

    rendersPostPhoto() {
        // Need to have this be typeof === string so that
        // in the case that the postPicUrl comes in with some
        // other data that isn't the data we want, then we
        // put that into the else condition
            
        if (typeof this.props.postPicUrl === 'string') {
            const photoPostIds = filterPhotoPostIds(this.props.posts)
            return ( <img
                className="postpic"
                src={this.props.postPicUrl}
                onClick={() => this.props.openPicModal(this.props.postId, photoPostIds)}
            /> )
        } else {
            return null
        }
    }

    rendersComments() {
        if (this.state.commentsOpen) {
            return (
                <>
                    <div className="postlinediv"></div>
                    <CommentContainer
                        postUserId={this.props.postUserId}
                        postId={this.props.postId}
                    />
                </>
            )
        } else {
            return null;
        }
    }

    rendersLikeButton() {
        return <LikeContainer
                    likeRender="Button"
                    postId={this.props.postId}
                    likeIds={this.props.likeIds}
                />
    }

    rendersLikeCount() {
        return <LikeContainer
                    likeRender="Count"
                    postId={this.props.postId}
                    likeIds={this.props.likeIds}
                />
    }

    render() {
        // This is to prevent the posts made by the user on a different
        // user's page from showing up on that page
        // if (!this.props.fromLikesTab) {
        if (!this.props.fromLikesTab && this.props.userId && this.props.postUserId !== parseInt(this.props.userId)) {
            return null;
        }
        // }
        // Note that if our index was just @posts = Post.all, this would work for the
        // frontend to filter only posts related to the user. However, it's inefficient
        // to fetch for every post so I made that filter happen on the backend

        const { time_posted, timestamp_hover } = filterTime(this.props.created_at, this.props.updated_at)

        return (
            <div className="post_whole">
                <div className="post_top">
                    <div className="post_top_left">
                        <Link to={`/user/${this.props.postUserId}`}>
                            <img
                                className={`post_profile_pic ${postProfPicColor()}`}
                                src={this.props.profilePicUrl}
                            />
                        </Link>
                        <div className="name_and_time">
                            <Link to={`/user/${this.props.postUserId}`}>
                                <h2 className="post_name">
                                    {this.props.firstName} {this.props.lastName}
                                </h2>
                            </Link>
                            <div className="post_timestamp">
                                {time_posted}
                                <div className="post_timestamp_hover">
                                    {timestamp_hover}
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.rendersPostTopRight()}
                </div>
                <div className="post_middle">
                    <p className="post_body">
                        {this.props.postBody}
                    </p>
                </div>
                <div className="postpic_whole">
                    {this.rendersPostPhoto()}
                </div>
                <div className="post_bottom">
                    <div className="postlinediv"></div>
                    {this.rendersLikeCount()}
                    <div className="post_buttons">
                        {this.rendersLikeButton()}
                        <h2 className="post_buttons_div" onClick={() => this.commentsToggle()}>
                            <img
                                className="post_like_buttons post_buttons_bigger"
                                src={commentButton()}
                            />
                            <span className={`post_button_text ${postButtonColor()}`}>Comment</span>
                        </h2>
                    </div>
                    {this.rendersComments()}
                </div>
            </div>
        )
    }
}

export default PostItem;