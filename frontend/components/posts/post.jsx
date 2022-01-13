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
        if (!this.props.userPosts) {
            return null;
        }

        debugger
        let post = this.props.userPosts
        return (
            <div className="">
                <UserInfo />
                <UserText />
                <UserAction />
                {post}
            </div>
        )
    }
}

export default Post;