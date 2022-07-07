import React from 'react';
import { Link } from 'react-router-dom';

import { postProfPicColor, likedVisual, likeButton, unlikeButton, postButtonColor } from '../../util/color_util';

export const Like = (props) => {

    let currentUserLiked = false;
    let specifiedLike;
    let likesArr = [];
    
    // For determining this specific posts' likes
    props.likeIds.forEach(likedId => {
        if (props.likeRender === "Count") {
            let like = props.likesState[likedId]
            if (like !== undefined) { likesArr.push(like) }
        } else if (props.likeRender === "Button") {
            let like = props.likesState[likedId]
            if (like !== undefined && like.liker_id === props.currentUser.id) {
                specifiedLike = like;
                currentUserLiked = true;
            }
        }
    })
    
    if (props.likeRender === "Count") {
        let newProps = Object.assign({}, props, {likesArr})
        return (LikeCount(newProps))
    } else if (props.likeRender === "Button") {
        let newProps = Object.assign({}, props, {specifiedLike, currentUserLiked})
        return (LikeButton(newProps))
    }
}

const LikeCount = (props) => {
    let likeCount;

    // Grab first three likes
    let threeLikes = props.likesArr.slice(0, 3);
    let renderThree = [];

    threeLikes.forEach((like) => {
        renderThree.push({
            liker_id: like.liker_id,
            firstName: like.firstName,
            lastName: like.lastName
        })
    })

    let moreLiked; // if more than 3 users liked the post
    if (props.likesArr.length > 3) {
        let amount = props.likesArr.length - 3
        moreLiked = <span> and {amount} more liked this</span>
    }

    if (props.likesArr.length > 0) {
        likeCount = (
            <div>
                <span className='like_details'>
                    <img
                        className="post_like_buttons"
                        src={likedVisual()}
                    />
                    <span className='like_details_names'>
                        {renderThree.map((liker) => {
                            return <Link to={`/user/${liker.liker_id}`} key={liker.liker_id}>
                                {liker.firstName} {liker.LastName}
                            </Link>
                        })}
                        {moreLiked}
                    </span>
                </span>
                <div className="postlinediv"></div>
            </div>
        )
    } else {
        likeCount = null;
    }

    return (
        <>
            {likeCount}
        </>
    )
}

const LikeButton = (props) => {
    // Return different onClick callbacks based on if the current user liked this post or not
    if (!props.currentUserLiked) {

        let likeable_type, likeable_id;
        if (props.postId) {
            likeable_type = "Post"
            likeable_id = props.postId
        } else if (props.commentId) {
            likeable_type = "Comment"
            likeable_id = props.commentId
        }

        const likeData = {
            liker_id: props.currentUser.id,
            likeable_type: likeable_type,
            likeable_id: likeable_id
        }

        return (<h2 className="post_placeholder"
                onClick={() => props.createLike(likeData)}>
                    <img
                        className="post_like_buttons post_buttons_bigger"
                        src={likeButton()}
                    />
                    <span className={`post_button_text ${postButtonColor()}`}>Like</span>
                    {/* {props.likeIds.length} */}
                </h2>)
    } else {
        return (<h2 className="post_placeholder"
                onClick={() => props.destroyLike(props.specifiedLike)}>
                    <img
                        className="post_like_buttons post_buttons_bigger"
                        src={unlikeButton()}
                    />
                    <span className={`post_button_text ${postButtonColor()}`}>Like</span>
                    {/* {props.likeIds.length} */}
                </h2>)
    }
}