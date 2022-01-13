import React from 'react';
import UserText from './post_text';
import UserAction from './post_useraction';
import UserInfo from './post_userinfo';

class Post extends React.Component {
    // componentDidMount() {
    //     this.props.showUser(this.props.userId)
    // }

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
        // if (!this.props.user) {
        //     return null;
        // }

        debugger
        console.log("hi")
        return (
            <div className="">
                <UserInfo />
                <UserText />
                <UserAction />
            </div>
        )
    }
}

export default Post;