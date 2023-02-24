import React from 'react';
import ProfilePhotos from './profile_photos';
// import PostItem from '../posts/post_item';

const ProfilePhotosTab = (props) => {
    if (!props.posts || Object.keys(props.posts).length === 0) {
        return (
            <div className="tabbody">
                <div className="phototab">
                <h1>No Photos</h1>
                </div>
            </div>
        )
    }

    // Grab only user's posts
    let postArr = Object.values(props.posts).reverse()
    let userPostsArr = []
    for (let post of postArr) {
        if (props.userId === post.user_id) userPostsArr.push(post)
    }
    // Grab posts with photos
    let postsWithPhotosArr = []
    for (let post of userPostsArr) {
        if (post.postPhotoUrl) postsWithPhotosArr.push(post)
    }

    if (postsWithPhotosArr.length === 0) {
        return (
            <div className="tabbody">
                <div className="phototab">
                <h1>No Photos</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="tabbody">
        <div className="phototab">
            <ProfilePhotos
                posts={postsWithPhotosArr}
                currentUser={props.currentUser}
                userId={props.userId}
                updatePost={props.updatePost}
                destroyPost={props.destroyPost}
                removePostComments={props.removePostComments}
                openEditPostModal={props.openEditPostModal}
                fromLikesTab={true}
            />
        </div>
        </div>
        // <div className="tabbody">
        // <div className="phototab">
        //     <div className="phototab_posts">
        //         {
        //         postsWithPhotosArr.map(post => {
        //             return (<PostItem
        //                 key={post.id}
        //                 postId={post.id}
        //                 postUserId={post.user_id}
        //                 postBody={post.body}
        //                 likeIds={post.likeIds}
        //                 currentUser={props.currentUser}
        //                 userId={props.userId}
        //                 firstName={post.firstName}
        //                 lastName={post.lastName}
        //                 created_at={post.created_at}
        //                 updated_at={post.updated_at}
        //                 updatePost={props.updatePost}
        //                 destroyPost={props.destroyPost}
        //                 removePostComments={props.removePostComments}
        //                 openEditPostModal={props.openEditPostModal}
        //                 postPicUrl={post.postPhotoUrl}
        //                 profilePicUrl={post.profilePicUrl}
        //                 fromLikesTab={true}
        //             />)
        //             }
        //         )}
        //     </div>
        // </div>
        // </div>
    )
}

export default ProfilePhotosTab;