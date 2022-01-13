import React from 'react';
import UserText from './post_text';
import UserAction from './post_useraction';
import UserInfo from './post_userinfo';

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

        let postArr = Object.values(this.props.posts)
        debugger

        return (
            <div className="">
                <UserInfo />
                <UserText />
                <UserAction />
                {
                    postArr.map(post => {
                        return(
                            <div key={post.id}>
                                {post.id}
                                {post.post}
                                {post.firstName}
                                {post.lastName}
                                {post.created_at}
                                <img src={post.profilePicUrl} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Post;