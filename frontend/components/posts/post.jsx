import React from 'react';
import UserPost from './user_post';

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

    render() {
        if (Object.keys(this.props.posts).length === 0) {
            return null;
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
            <div className="">
                <div className="profile_posts">
                    <h2
                        className="profbodytitle"
                        onClick={this.props.openCreatePostModal}>
                            Create Post
                    </h2>
                </div>
                <div className="profile_posts">
                    <h2 className="profbodytitle">Posts</h2>
                    {/* <div className="posts_wall"></div> */}
                </div>
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