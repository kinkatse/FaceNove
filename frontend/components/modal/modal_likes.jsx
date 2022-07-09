import React from 'react';

import { Link } from 'react-router-dom';
import { appColor, postProfPicColor } from '../../util/color_util';

class LikesModal extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        // }
    }

    rendersLikers() {
        const post = this.props.postObj;
        const likes = [];
        post.likeIds.map((likeId) => {
            likes.push(this.props.likesState[likeId])
        })

        return (<div>
            {likes.map((like) => {
                return (<div className='likes_modal' key={like.id}>
                    <Link to={`/user/${like.liker_id}`} onClick={this.props.closeModal}>
                        <img
                            className={`post_profile_pic ${postProfPicColor()}`}
                            src={like.profilePicUrl}
                        />
                    </Link>
                    <Link to={`/user/${like.liker_id}`} onClick={this.props.closeModal}>
                        {like.firstName} {like.lastName}
                    </Link>
                </div>)
            })}
        </div>)
    }

    render() {
        return (
            <>
                <div className="profpic_modal_background" onClick={this.props.closeModal}></div>
                <div className="profpic_modal_child">
                    <div className="profpictop">
                        <h1 className="like_modal_title">Likes</h1>
                        <h2 className="like_amount">{this.props.postObj.likeIds.length}</h2>
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