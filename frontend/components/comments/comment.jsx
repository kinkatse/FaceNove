import React from 'react';
import PostComments from './post_comments';

class Comment extends React.Component {
    // componentDidMount() {
    //     this.props.clearPosts()
    //     this.props.showPost(this.props.userId)
    // }

    // componentDidUpdate(oldProps) {
    //     if ((this.props.userId !== oldProps.userId) ||
    //     (Object.values(oldProps.posts).length !== 0 &&
    //     this.props.currentUser.id === parseInt(this.props.userId) &&
    //     this.props.currentUser.profilePicUrl !== Object.values(oldProps.posts)[0].profilePicUrl))
    //     {
    //         this.props.clearPosts()
    //         this.props.showPost(this.props.userId);
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        // let profpicColor;
        // if (this.props.color === "blue") {
        //     profpicColor = "postprofpicblue"
        // } else if (this.props.color === "green") {
        //     profpicColor = "postprofpicgreen"
        // } else if (this.props.color === "red") {
        //     profpicColor = "postprofpicred"
        // }

        // if (Object.keys(this.props.posts).length === 0) {
        //     return this.rendersCreatePost(profpicColor)
        // }

        // let postArr = Object.values(this.props.posts).reverse()
        debugger
        return (
            <div>
                <PostComments
                    userId={this.props.userId}
                    postId={this.props.postId}
                    indexComments={this.props.indexComments}
                    createComment={this.props.createComment}
                    currentUser={this.props.currentUser}
                />
            </div>
            // <div>
            //     {
            //         postArr.map(post => (
            //             <UserPost
            //                 key={post.id}
            //                 postId={post.id}
            //                 postUserId={post.user_id}
            //                 postBody={post.body}
            //                 currentUser={this.props.currentUser}
            //                 userId={this.props.userId}
            //                 firstName={post.firstName}
            //                 lastName={post.lastName}
            //                 created_at={post.created_at}
            //                 updated_at={post.updated_at}
            //                 updatePost={this.props.updatePost}
            //                 destroyPost={this.props.destroyPost}
            //                 indexComments={this.props.indexComments}
            //                 createComment={this.props.createComment}
            //                 openEditPostModal={this.props.openEditPostModal}
            //                 postPicUrl={post.postPhotoUrl}
            //                 profilePicUrl={post.profilePicUrl}
            //                 profpicColor={profpicColor}
            //             /> )
            //         )
            //     }
            // </div>
        )
    }
}

export default Comment;