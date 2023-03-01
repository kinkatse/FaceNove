import React from 'react';

import { Link } from 'react-router-dom';
import { appColor, postProfPicColor, unlikeButton } from '../../util/color_util';
import CommentContainer from '../comments/comment_container';

class PhotoModal extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        // }
    }

    // rendersLikers() {
    //     const post = this.props.postObj;
    //     const likes = [];
    //     post.likeIds.map((likeId) => {
    //         likes.push(this.props.likes[likeId])
    //     })

    //     return (<div className='likes_modal'>
    //         {likes.map((like) => {
    //             return (<div className='each_liker' key={like.id}>
    //                 <Link to={`/user/${like.liker_id}`} onClick={this.props.closeModal}>
    //                     <img
    //                         className={`post_profile_pic ${postProfPicColor()}`}
    //                         src={like.profilePicUrl}
    //                     />
    //                 </Link>
    //                 <Link className="each_liker_link" to={`/user/${like.liker_id}`} onClick={this.props.closeModal}>
    //                     <span className='each_liker_name'>
    //                         {like.firstName} {like.lastName}
    //                     </span>
    //                 </Link>
    //                 <img
    //                     className="post_like_buttons post_buttons_bigger"
    //                     src={unlikeButton()}
    //                 />
    //             </div>)
    //         })}
    //     </div>)
    // }

    rendersPostTopRight() {
        let component;
        // let dropclassname;
        // if (this.state.dropOpen) {
        //     dropclassname = ""
        // } else {
        //     dropclassname = "opendropbtn"
        // }

        // if (this.props.currentUser.id === parseInt(this.props.postUserId)) {
        //     component = (
        //         <div>
        //             {this.rendersPostDropClose()}
        //             <div className={`post_top_right ${dropclassname}`} onClick={this.dropOpen}>
        //                 {this.rendersPostDrop()}
        //             </div>
        //         </div>
        //     )
        // } else {
        //     component = null;
        // }
        return (
            component
        )
    }

    render() {

        // debugger
        return (
            <>
                <div className="profpic_modal_background" onClick={this.props.closeModal}></div>
                {/* Photo */}
                <img
                    key={this.props.postObj.id}
                    className="photopic-photomodal"
                    src={this.props.postObj.postPhotoUrl}
                />
                <div className="photo_modal_child">
                    <div className="profpictop">
                        <h1 className="like_modal_title">Photos</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
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
                                {/* <div className="post_timestamp">
                                    {time_posted}
                                    <div className="post_timestamp_hover">
                                        {timestamp_hover}
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {this.rendersPostTopRight()}
                    </div>
                    <div className="post_middle">
                        <p className="post_body">
                            {this.props.postObj.body}
                        </p>
                    </div>
                    <div className="profpiclinediv-photomodal"></div>
                    {/* Comments */}
                    <CommentContainer
                        postUserId={this.props.postObj.user_id}
                        postId={this.props.postObj.id}
                    />
                </div>
            </>
        )
    }
}

export default PhotoModal;