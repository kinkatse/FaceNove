import React from 'react';
import PostItem from '../posts/post_item';

// Problem with showing comments here, is they are under a post.
// This would require pulling all posts with those comments we liked
// which is a little too much so I will only show the liked posts
class ProfileLikesTab extends React.Component {

    render() {
        if (!this.props.posts || Object.keys(this.props.posts).length === 0) return null
    
        // Grab only user's likes
        let likeArr = Object.values(this.props.likes)
        let userLikedIdArr = []
        for (let like of likeArr) {
            if (like.liker_id === parseInt(this.props.userId)) userLikedIdArr.push(like.id)
        }
        // Grab the posts with this likeIds in their likeIds array
        let postArr = Object.values(this.props.posts).reverse()
        let likedPostsArr = []
        for (let post of postArr) {
            for (let likeId of post.likeIds) {
                if (userLikedIdArr.includes(likeId)) {
                    likedPostsArr.push(post)
                }
            }
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
                                fromLikesTab={true}
                            />)
                            }
                        )}
                    </div>
                </div>
            </div>
        )
    }

}

export default ProfileLikesTab;