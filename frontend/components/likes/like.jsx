import React from 'react';
import { Link } from 'react-router-dom';

import { postProfPicColor, likedVisual, likeButton, unlikeButton, postButtonColor } from '../../util/color_util';

export const Like = (props) => {
    let currentUserLiked = false;
    let specifiedLike;
    let likesArr = [];
    
    // For determining this specific posts' likes
    if (props.likeIds) {
        props.likeIds.forEach(likedId => {
            if (props.likeRender === "Count") {
                let like = props.likesState[likedId]
                if (like) { likesArr.push(like) }
            } else if (props.likeRender === "Button") {
                let like = props.likesState[likedId]
                if (like && like.liker_id === props.currentUser.id) {
                    specifiedLike = like;
                    currentUserLiked = true;
                }
            }
        })
    }
    
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

    // Logic to always place the current user's likes in front of the array
    props.likesArr.forEach((likeObj, idx) => {
        if (likeObj.liker_id === props.currentUser.id) {
            let currentUserLiked = props.likesArr.splice(idx, 1)
            props.likesArr.unshift(Object.values(currentUserLiked)[0])
        }
    })

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
        // Logic for a god dam comma lmao
        let endCount = null;
        if (renderThree.length === 3) { endCount = 3 }
        else if (renderThree.length === 2) { endCount = 2 }
        else { endCount = 1 }
        // Eventually add on hover for the likes
        likeCount = (
            <div>
                <span className='like_details' onMouseEnter={() => {}}>
                    <img
                        className="post_like_buttons"
                        src={likedVisual()}
                        onClick={() => props.openLikesModal(props.postId ? props.postId : props.commentId)}
                    />
                    <span className='like_details_names'>
                        {renderThree.map((liker, idx) => {
                            let countLikes = null;
                            if (idx === endCount-1) { countLikes = <span> </span>}
                            else { countLikes = <span>, </span>}
                            return (<span key={liker.liker_id}>
                                <Link to={`/user/${liker.liker_id}`}>
                                    {liker.firstName} {liker.lastName}
                                </Link>
                                {countLikes}
                            </span>)
                        })}
                        {moreLiked}
                    </span>
                </span>
                <div className="postlinediv postlinediv-comments"></div>
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

        return (<h2 className="post_buttons_div"
                onClick={() => props.createLike(likeData)}>
                    <img
                        className="post_like_buttons post_buttons_bigger"
                        src={likeButton()}
                    />
                    <span className={`post_button_text ${postButtonColor()}`}>Like</span>
                    {/* {props.likeIds.length} */}
                </h2>)
    } else {
        return (<h2 className="post_buttons_div"
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