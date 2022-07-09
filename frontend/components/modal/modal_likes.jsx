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
        // debugger
        // let likers = likes.forEach((like) => {
        //     <div className='likes_modal'>
        //         <Link to={`/user/${like.liker_id}`}>
        //             <img
        //                 className={`post_profile_pic ${postProfPicColor()}`}
        //                 src={like.profilePicUrl}
        //             />
        //         </Link>
        //         <Link to={`/user/${like.liker_id}`}>{like.firstName} {like.lastName}</Link>
        //     </div>
        // })
        // return likers

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
                        <h1 className="profpictitle">Likes</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="profpiclinediv"></div>
                    <h1 onClick={this.props.closeModal}>H1 from likes Modal</h1>
                    {this.rendersLikers()}
                </div>
            </>
        )
    }
}

export default LikesModal;