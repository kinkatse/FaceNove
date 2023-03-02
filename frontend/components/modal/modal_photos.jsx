import React from 'react';

import { Link } from 'react-router-dom';
import { appColor, postProfPicColor, unlikeButton } from '../../util/color_util';
import { filterTime } from '../../util/filter_util';
import CommentContainer from '../comments/comment_container';
import LikeContainer from '../likes/like_container';
import PostDrop from '../posts/post_drop';

class PhotoModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropOpen: false
        }
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.dropOpen = this.dropOpen.bind(this);
        this.dropClose = this.dropClose.bind(this);
    }

    next() {
        let photoPostIds = this.props.photoPostIds
        let postObj = this.props.postObj
        let index = photoPostIds.indexOf(postObj.id)
        let partArr = photoPostIds.slice(index + 1)
        let next = partArr.length !== 0 ? partArr[0] : null
        if (next) this.props.openPicModal(next, photoPostIds)
    }

    prev() {
        let photoPostIds = this.props.photoPostIds
        let postObj = this.props.postObj
        let index = photoPostIds.indexOf(postObj.id)
        let partArr = photoPostIds.slice(0, index)
        let prev = partArr.length !== 0 ? partArr[partArr.length - 1] : null
        if (prev) this.props.openPicModal(prev, photoPostIds)
    }

    rendersLikeButton() {
        return <LikeContainer
                    likeRender="Button"
                    postId={this.props.postObj.id}
                    likeIds={this.props.postObj.likeIds}
                    fromPhotoModal={true}
                />
    }

    rendersLikeCount() {
        if (this.props.postObj.likeIds.length === 0) {
            return <div className="profpiclinediv-photomodal-comment"></div>
        }
        return <LikeContainer
                    likeRender="Count"
                    postId={this.props.postObj.id}
                    likeIds={this.props.postObj.likeIds}
                    fromPhotoModal={true}
                />
    }

    dropOpen() {
        this.setState({ dropOpen: true })
    }

    dropClose() {
        this.setState({ dropOpen: false })
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
                        postId={this.props.postObj.id}
                        openEditPostModal={this.props.openEditPostModal}
                        destroyPost={this.props.destroyPost}
                        closeModal={this.props.closeModal}
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

    rendersPostTopRight() {
        let component;
        let dropclassname;
        if (this.state.dropOpen) {
            dropclassname = ""
        } else {
            dropclassname = "opendropbtn"
        }

        if (this.props.currentUser.id === this.props.postObj.user_id) {
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

        return component;
        // return (
        //     component
        // )
    }

    render() {
        const { time_posted, timestamp_hover } = filterTime(this.props.postObj.created_at, this.props.postObj.updated_at)

        return (
            <>
                <div className="profpic_modal_background" onClick={this.props.closeModal}></div>
                {/* Photo */}
                <div className='organize-photomodal'>
                    <div className='photo-photomodal'>
                        <div className='photomodal-button prev' onClick={this.prev}>{"<"}</div>
                        <img
                            key={this.props.postObj.id}
                            className="photopic-photomodal"
                            src={this.props.postObj.postPhotoUrl}
                            onClick={this.next}
                        />
                        <div className='photomodal-button next' onClick={this.next}>{">"}</div>
                    </div>
                    <div className="photo_modal_child">
                        <div className="profpictop">
                            <h1 className="photo_modal_title">Photo</h1>
                            <img className="X photo-modal-x" src={window.x_url} onClick={this.props.closeModal}/>
                        </div>
                        <div className="profpiclinediv-photomodal"></div>
                        {/* Post */}
                        <div className="post_top">
                            <div className="post_top_left">
                                <Link to={`/user/${this.props.postObj.user_id}`}>
                                    <img
                                        className={`post_profile_pic ${postProfPicColor()}`}
                                        src={this.props.postObj.profilePicUrl}
                                    />
                                </Link>
                                <div className="name_and_time">
                                    <Link to={`/user/${this.props.postObj.user_id}`}>
                                        <h2 className="post_name">
                                            {this.props.postObj.firstName} {this.props.postObj.lastName}
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
                                {this.props.postObj.body}
                            </p>
                        </div>
                        {/* Likes */}
                        {this.rendersLikeCount()}
                        <div className="post_buttons">
                            {this.rendersLikeButton()}
                        </div>
                        <div className="profpiclinediv-photomodal"></div>
                        {/* Comments */}
                        <div className='comments-photomodal'>
                            <CommentContainer
                                postUserId={this.props.postObj.user_id}
                                postId={this.props.postObj.id}
                                fromPhotoModal={true}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PhotoModal;