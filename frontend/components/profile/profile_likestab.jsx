import React from 'react';
import PostItem from '../posts/post_item';

// Problem with showing comments here, is they are under a post.
// This would require pulling all posts with those comments we liked
// which is a little too much so I will only show the liked posts
const ProfileLikesTab = (props) => {
    if (!props.posts || Object.keys(props.posts).length === 0) {
        return (
            <div className="tabbody">
                <div className="liketab">
                <h1>No Likes</h1>
                </div>
            </div>
        )
    }

    // Grab only user's likes
    let likeArr = Object.values(props.likes)
    let userLikedIdArr = []
    for (let like of likeArr) {
        if (like.liker_id === props.userId) userLikedIdArr.push(like.id)
    }
    // Grab the posts with this likeIds in their likeIds array
    let postArr = Object.values(props.posts).reverse()
    let likedPostsArr = []
    for (let post of postArr) {
        for (let likeId of post.likeIds) {
            if (userLikedIdArr.includes(likeId)) {
                likedPostsArr.push(post)
            }
        }
    }

    if (likedPostsArr.length === 0) {
        return (
            <div className="tabbody">
                <div className="liketab">
                <h1>No Likes</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="tabbody">
            <div className="liketab">
                <div className="liketab_posts">
                    {
                    likedPostsArr.map(post => {
                        return (<PostItem
                            key={post.id}
                            postId={post.id}
                            postUserId={post.user_id}
                            postBody={post.body}
                            likeIds={post.likeIds}
                            currentUser={props.currentUser}
                            userId={props.userId}
                            firstName={post.firstName}
                            lastName={post.lastName}
                            created_at={post.created_at}
                            updated_at={post.updated_at}
                            updatePost={props.updatePost}
                            destroyPost={props.destroyPost}
                            removePostComments={props.removePostComments}
                            openEditPostModal={props.openEditPostModal}
                            postPicUrl={post.postPhotoUrl}
                            profilePicUrl={post.profilePicUrl}
                            fromLikesTab={true}
                        />)
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfileLikesTab;