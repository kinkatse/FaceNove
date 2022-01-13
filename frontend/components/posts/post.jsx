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
        debugger
        if (Object.keys(this.props.posts).length === 0) {
            return null;
        }

        let postArr = Object.values(this.props.posts).reverse()
        debugger

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
                        /> )
                    )
                }
            </div>
        )
    }
}

export default Post;