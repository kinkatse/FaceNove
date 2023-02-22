import React from 'react';

import { Link } from 'react-router-dom';
import { appColor, postProfPicColor, unlikeButton } from '../../util/color_util';

class LikesModal extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        // }
    }

    rendersLikers() {
        debugger
        const post = this.props.postObj;
        const likes = [];
        post.likeIds.map((likeId) => {
            likes.push(this.props.likesState[likeId])
        })

        return (<div className='likes_modal'>
            {likes.map((like) => {
                return (<div className='each_liker' key={like.id}>
                    <Link to={`/user/${like.liker_id}`} onClick={this.props.closeModal}>
                        <img
                            className={`post_profile_pic ${postProfPicColor()}`}
                            src={like.profilePicUrl}
                        />
                    </Link>
                    <Link to={`/user/${like.liker_id}`} onClick={this.props.closeModal}>
                        <span className='each_liker_name'>
                            {like.firstName} {like.lastName}
                        </span>
                    </Link>
                    <img
                        className="post_like_buttons post_buttons_bigger"
                        src={unlikeButton()}
                    />
                </div>)
            })}
        </div>)
    }

    render() {
        debugger
        return (
            <>
                <div className="profpic_modal_background" onClick={this.props.closeModal}></div>
                <div className="like_modal_child">
                    <div className="profpictop">
                        <h1 className="like_modal_title">Likes</h1>
                        <h2 className="like_amount">{this.props.postObj.likeIds.length}</h2>
                        <span className='like_modal_title_visual'>
                            <img
                                className="post_like_buttons post_buttons_bigger"
                                src={unlikeButton()}
                            />
                        </span>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="profpiclinediv"></div>
                    {this.rendersLikers()}
                </div>
            </>
        )
    }
}

export default LikesModal;