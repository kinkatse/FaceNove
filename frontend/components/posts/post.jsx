import React from 'react';
import PostItem from './post_item';
import { Link } from 'react-router-dom';

import { postProfPicColor } from '../../util/color_util';

class Post extends React.Component {
    componentDidMount() {
        // debugger
        this.props.clearComments()
        this.props.clearPosts()
        this.props.indexPosts([this.props.userId])
    }

    componentDidUpdate(oldProps) {
        // debugger
        if ((this.props.userId !== oldProps.userId) ||
        (Object.values(oldProps.posts).length !== 0 &&
        this.props.currentUser.id === parseInt(this.props.userId) &&
        this.props.currentUser.profilePicUrl !== Object.values(oldProps.posts)[0].profilePicUrl))
        {
            this.props.clearComments()
            this.props.clearPosts()
            this.props.indexPosts([this.props.userId]);
        }
        
        // If the above is hard to understand, All I am doing is making
        // an OR statement for the below here. The reason I did that is
        // so that we dont refetch twice and only do it once, just having
        // the condition cover multiple situations

        // if (Object.values(oldProps.posts).length !== 0 &&
        // this.props.currentUser.id === parseInt(this.props.userId) &&
        // this.props.currentUser.profilePicUrl !== Object.values(oldProps.posts)[0].profilePicUrl) {
        //     this.props.clearPosts()
        //     this.props.indexPosts([this.props.userId]);
        // }
    }

    rendersCreatePost() {
        // debugger
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
                        <h2 className="post_placeholder">Photo?</h2>
                        {/* <h2 className="post_placeholder">Other</h2> */}
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

        let postArr = Object.values(this.props.posts).reverse()
        
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
                            postPicUrl={post.postPhotoUrl}
                            profilePicUrl={post.profilePicUrl}
                        /> )
                    )
                }
            </div>
        )
    }
}

export default Post;