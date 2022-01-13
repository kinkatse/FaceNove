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
        let postComponent = [];
        let postArr = this.props.userPosts
        // postArr.forEach(post => {
        //     postComponent.push(
        //         <div>
        //             {post.id}
        //             {post.post}
        //             {post.firstName}
        //             {post.lastName}
        //             {post.created_at}
        //             <img src={post.profilePicUrl} />
        //         </div>
        //     )
        // })
        debugger

        return (
            <div className="">
                <UserInfo />
                <UserText />
                <UserAction />
                {
                    postArr.forEach(post => {
                        return(
                            <div>
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