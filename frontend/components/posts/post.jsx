import React from 'react';
import PostIndex from './post_index';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    componentDidMount() {
        this.props.clearComments()
        this.props.clearPosts()
        this.props.showPost(this.props.userId)
    }

    componentDidUpdate(oldProps) {
        if ((this.props.userId !== oldProps.userId) ||
        (Object.values(oldProps.posts).length !== 0 &&
        this.props.currentUser.id === parseInt(this.props.userId) &&
        this.props.currentUser.profilePicUrl !== Object.values(oldProps.posts)[0].profilePicUrl))
        {
            this.props.clearComments()
            this.props.clearPosts()
            this.props.showPost(this.props.userId);
        }
        
        // If the above is hard to understand, All I am doing is making
        // an OR statement for the below here. The reason I did that is
        // so that we dont refetch twice and only do it once, just having
        // the condition cover multiple situations

        // if (Object.values(oldProps.posts).length !== 0 &&
        // this.props.currentUser.id === parseInt(this.props.userId) &&
        // this.props.currentUser.profilePicUrl !== Object.values(oldProps.posts)[0].profilePicUrl) {
        //     this.props.clearPosts()
        //     this.props.showPost(this.props.userId);
        // }
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    rendersCreatePost(profpicColor) {
        return (
            <div>
                <div className="profile_posts createpost">
                    <div className="createpost_profpic">
                        <Link to={`/user/${this.props.currentUser.id}`}>
                            <img
                                className={'createpost_profile_pic ' + profpicColor}
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
        let profpicColor;
        if (this.props.color === "blue") {
            profpicColor = "postprofpicblue"
        } else if (this.props.color === "green") {
            profpicColor = "postprofpicgreen"
        } else if (this.props.color === "red") {
            profpicColor = "postprofpicred"
        }

        if (Object.keys(this.props.posts).length === 0) {
            return this.rendersCreatePost(profpicColor)
        }

        let postArr = Object.values(this.props.posts).reverse()
        
        return (
            <div>
                {this.rendersCreatePost(profpicColor)}
                {
                    postArr.map(post => (
                        <PostIndex
                            key={post.id}
                            postId={post.id}
                            postUserId={post.user_id}
                            postBody={post.body}
                            currentUser={this.props.currentUser}
                            userId={this.props.userId}
                            firstName={post.firstName}
                            lastName={post.lastName}
                            created_at={post.created_at}
                            updated_at={post.updated_at}
                            updatePost={this.props.updatePost}
                            destroyPost={this.props.destroyPost}
                            openEditPostModal={this.props.openEditPostModal}
                            postPicUrl={post.postPhotoUrl}
                            profilePicUrl={post.profilePicUrl}
                            profpicColor={profpicColor}
                        /> )
                    )
                }
            </div>
        )
    }
}

export default Post;