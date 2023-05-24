import React from 'react';
import { filterUserPostsWithPhotos } from '../../util/filter_util';
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
    const postsWithPhotosArr = filterUserPostsWithPhotos(props.posts, props.userId)

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
        <div className="photos_tabbody">
            <div className="phototab">
                <div className='photos_tab_header'>
                    <h2 className="photos_profbodytitle">Photos</h2>
                </div>
                <ProfilePhotos
                    posts={postsWithPhotosArr}
                    currentUser={props.currentUser}
                    userId={props.userId}
                    updatePost={props.updatePost}
                    destroyPost={props.destroyPost}
                    removePostComments={props.removePostComments}
                    openEditPostModal={props.openEditPostModal}
                    openPicModal={props.openPicModal}
                    fromTab={true}
                />
            </div>
        </div>
    )
}

export default ProfilePhotosTab;