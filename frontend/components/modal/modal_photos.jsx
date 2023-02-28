import React from 'react';

import { Link } from 'react-router-dom';
import { appColor, postProfPicColor, unlikeButton } from '../../util/color_util';

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

    render() {

        debugger
        return (
            <>
                <div className="profpic_modal_background" onClick={this.props.closeModal}></div>
                <div className="like_modal_child">
                    <div className="profpictop">
                        <h1 className="like_modal_title">Photos</h1>
                        
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="profpiclinediv"></div>
                </div>
            </>
        )
    }
}

export default PhotoModal;