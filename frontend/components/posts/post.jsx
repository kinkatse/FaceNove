import React from 'react';
import UserPost from './user_post';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    componentDidMount() {
        // this.props.clearPosts()
        this.props.showPost(this.props.userId)
    }

    // componentDidUpdate(oldProps) {
    //     if (this.props.userId !== oldProps.userId) {
    //         this.props.showUser(this.props.userId);
    //     }
    // }

    componentWillUnmount() {
        this.props.clearPosts()
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
                        <h2 className="post_placeholder">Other</h2>
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

        let profpicColor;
        if (this.props.color === "blue") {
            profpicColor = "postprofpicblue"
        } else if (this.props.color === "green") {
            profpicColor = "postprofpicgreen"
        } else if (this.props.color === "red") {
            profpicColor = "postprofpicred"
        }

        return (
            <div>
                {/* <div className="profile_posts createpost">
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
                        <h2 className="post_placeholder">Other</h2>
                    </div>
                </div>
                <div className="profile_posts">
                    <h2 className="profbodytitle">Posts</h2>
                </div> */}
                {this.rendersCreatePost(profpicColor)}
                {
                    postArr.map(post => (
                        <UserPost
                            key={post.id}
                            postId={post.id}
                            postBody={post.post}
                            currentUser={this.props.currentUser}
                            userId={this.props.userId}
                            firstName={post.firstName}
                            lastName={post.lastName}
                            created_at={post.created_at}
                            updatePost={this.props.updatePost}
                            destroyPost={this.props.destroyPost}
                            openEditPostModal={this.props.openEditPostModal}
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