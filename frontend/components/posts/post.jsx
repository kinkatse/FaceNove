import React from 'react';
import UserPost from './user_post';

class Post extends React.Component {
    componentDidMount() {
        debugger
        this.props.showPost(this.props.userId)
    }

    // componentDidUpdate(oldProps) {
    //     if (this.props.userId !== oldProps.userId) {
    //         this.props.showUser(this.props.userId);
    //     }
    // }

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

        // Woops made the wrong commit message
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
                {
                    postArr.map(post => (
                        <UserPost
                            key={post.id}
                            postBody={post.post}
                            userId={this.props.userId}
                            firstName={post.firstName}
                            lastName={post.lastName}
                            created_at={post.created_at}
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