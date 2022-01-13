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
        let postObj = this.props.userPosts
        return (
            <div className="">
                <UserInfo />
                <UserText />
                <UserAction />
                {postObj.id}
                {postObj.post}
                {postObj.firstName}
                {postObj.lastName}
                {postObj.created_at}
                <img src={postObj.profilePicUrl} />
            </div>
        )
    }
}

export default Post;