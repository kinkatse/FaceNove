import React from 'react';
import PostItem from '../posts/post_item';
import { Link } from 'react-router-dom';

import { postProfPicColor } from '../../util/color_util';
import { filterPostsWithPhotos } from '../../util/filter_util';

class Home extends React.Component {
    componentDidMount() {
        this.props.clearPosts()
        this.props.clearComments()
        this.props.clearFriends()
        this.props.indexPosts()
        this.props.indexFriendRequests(this.props.currentUser.id)
        // Later use the userIds array for only friends and make an option for friends only posts on home page
    }

    // componentDidUpdate(oldProps) {
    //     if ((this.props.userId !== oldProps.userId) ||
    //     (Object.values(oldProps.posts).length !== 0 &&
    //     this.props.currentUser.id === parseInt(this.props.userId) &&
    //     this.props.currentUser.profilePicUrl !== Object.values(oldProps.posts)[0].profilePicUrl))
    //     {
    //         this.props.clearPosts()
    //         this.props.indexPost()
    //     }
    // }

    rendersCreatePost() {
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
            </div>
        )
    }

    render() {
        if (Object.keys(this.props.posts).length === 0) {
            return this.rendersCreatePost()
        }

        let postArr = Object.values(this.props.posts).reverse()
        const postsWithPhotosArr = filterPostsWithPhotos(postArr)

        return (
            <div className="home">
                <div className="home_posts">
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
            </div>
        )
    }
}

export default Home;