import React from 'react';
import PostIndex from '../posts/post_index';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.clearComments()
        this.props.clearPosts()
        this.props.indexPosts()
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
            <div className="home">
                <div className="home_posts">
                    {this.rendersCreatePost(profpicColor)}
                    {
                        postArr.map(post => (
                            <PostIndex
                                key={post.id}
                                postId={post.id}
                                postUserId={post.user_id}
                                postBody={post.body}
                                currentUser={this.props.currentUser}
                                // userId={this.props.userId}
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
            </div>
        )
    }
}

export default Home;