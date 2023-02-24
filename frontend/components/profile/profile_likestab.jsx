import React from 'react';
import PostItem from '../posts/post_item';

// Problem with showing comments here, is they are under a post.
// This would require pulling all posts with those comments we liked
// which is a little too much so I will only show the liked posts
class ProfileLikesTab extends React.Component {

    // componentDidMount() {
    //     this.props.clearPosts()
    //     this.props.clearLikes()
    //     this.props.indexLikes({
    //         liker_id: this.props.userId,
    //         likeable_type: "User_All"
    //     })
    // }

    render() {
        if (!this.props.posts || Object.keys(this.props.posts).length === 0) {
            // return (<p>loading...</p>)
            return null
        }
    
        let postArr = Object.values(this.props.posts).reverse()
        // debugger
        // let likedPostsArr = []
        // debugger
        // postArr.forEach(post => {
        //     debugger
        //     // if (post.likeId)
        // })

        return (
            <div className="tabbody">
                <div className="liketab">
                    <div className="liketab_posts">
                        {
                        postArr.map(post => {
                            debugger
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

// const ProfileLikesTab = (props) => {

//     return (
//         <div className="tabbody">
//             <h1>This is Likes</h1>
//         </div>
//     )
// }

export default ProfileLikesTab;