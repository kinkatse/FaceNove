import React from 'react';
import PostItem from './post_item';
import { Link } from 'react-router-dom';

import { postProfPicColor } from '../../util/color_util';
import { filterUserPostsWithPhotos } from '../../util/filter_util';

class Post extends React.Component {
    componentDidMount() {
        this.props.indexPosts([this.props.userId])
    }

    rendersCreatePost() {
        if (parseInt(this.props.userId) !== this.props.currentUser.id) {
            return (
            <div>
                <div className="profile_posts">
                    <h2 className="profbodytitle">Posts</h2>
                </div>
            </div>
            )
        }
        return (
            <div>
                <div className="profile_posts createpost">
                    <div className="createpost_profpic">
                        <Link to={`/user/${this.props.currentUser.id}`}>
                            <img
                                className={`createpost_profile_pic ${postProfPicColor()}`}
                                src={this.props.currentUser.profilePicUrl}
                            />
                        </Link>
                    </div>
                    <div
                        className="createpost_modalopen"
                        onClick={this.props.openCreatePostModal}>
                            What's on your mind?
                    </div>
                    <div className="createpostlinediv"></div>
                    <div className="post_buttons">
                        {/* <h2 className="post_buttons_div">Photo?</h2> */}
                        {/* <h2 className="post_buttons_div">Other</h2> */}
                    </div>
                </div>
                <div className="profile_posts">
                    <h2 className="profbodytitle">Posts</h2>
                </div>
            </div>
        )
    }

    render() {
        if (Object.keys(this.props.posts).length === 0) {
            return this.rendersCreatePost()
        }

        const postArr = Object.values(this.props.posts)
        const postsWithPhotosArr = filterUserPostsWithPhotos(postArr, this.props.userId)
        postArr.reverse()
        
        return (
            <div>
                {this.rendersCreatePost()}
                {
                    postArr.map(post => (
                        <PostItem
                            key={post.id}
                            postId={post.id}
                            postUserId={post.user_id}
                            postBody={post.body}
                            posts={postsWithPhotosArr}
                            likeIds={post.likeIds}
                            currentUser={this.props.currentUser}
                            userId={this.props.userId}
                            firstName={post.firstName}
                            lastName={post.lastName}
                            created_at={post.created_at}
                            updated_at={post.updated_at}
                            updatePost={this.props.updatePost}
                            destroyPost={this.props.destroyPost}
                            removePostComments={this.props.removePostComments}
                            openEditPostModal={this.props.openEditPostModal}
                            openPicModal={this.props.openPicModal}
                            postPicUrl={post.postPhotoUrl}
                            profilePicUrl={post.profilePicUrl}
                            closeModal={this.props.closeModal}
                        /> )
                    )
                }
            </div>
        )
    }
}

export default Post;