import React from 'react';
import { Link } from 'react-router-dom';
import PostDrop from './post_drop'

class UserPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropOpen: false,
            postBody: this.props.postBody
        }
        this.dropOpen = this.dropOpen.bind(this);
        this.dropClose = this.dropClose.bind(this);
    }

    dropOpen() {
        this.setState({ dropOpen: true })
    }

    dropClose() {
        this.setState({ dropOpen: false })
    }

    rendersPostTopRight() {
        let component;
        let dropclassname;
        if (this.state.dropOpen) {
            dropclassname = ""
        } else {
            dropclassname = "opendropbtn"
        }

        if (this.props.currentUser.id === parseInt(this.props.userId)) {
            component = (
                <div>
                    {this.rendersPostDropClose()}
                    <div className={'post_top_right ' + dropclassname} onClick={this.dropOpen}>
                        {this.rendersPostDrop()}
                    </div>
                </div>
            )
        } else {
            component = null;
        }
        return (
            component
        )
    }

    rendersPostDropClose() {
        if (this.state.dropOpen) {
            return (
                <div className="post_dropclose" onClick={this.dropClose}></div>
            )
        }
    }

    rendersPostDrop() {
        let component;
        if (this.state.dropOpen) {
            component = (
                <div className="">
                    <div className="post_dropdown">...</div>
                    <PostDrop
                        postId={this.props.postId}
                        openEditPostModal={this.props.openEditPostModal}
                        destroyPost={this.props.destroyPost}
                    />
                </div>
            )
        } else {
            component = (
                <div className="post_dropdown">...</div>
            );
        }
        return component;
    }

    render() {
        // This is to prevent the posts made by the user on a different
        // user's page from showing up on that page
        if (this.props.postUserId !== parseInt(this.props.userId)) {
            return null;
        }

        debugger
        let time_created = new Date(this.props.created_at)
        // Making arrays of the individual date info to adjust them for formatting
        let date = time_created.toDateString().split(" ")
        let time = time_created.toLocaleTimeString().split(" ")

        switch(date[0]) {
            case 'Mon': date[0] = 'Monday,'
            case 'Tue': date[0] = 'Tuesday,'
            case 'Wed': date[0] = 'Wednesday,'
            case 'Thu': date[0] = 'Thursday,'
            case 'Fri': date[0] = 'Friday,'
            case 'Sat': date[0] = 'Saturday,'
            case 'Sun': date[0] = 'Sunday,'
            default: date[0] = 'Day'
        }
        switch(date[1]) {
            case 'Jan': date[1] = 'January'
            case 'Feb': date[1] = 'February'
            case 'Mar': date[1] = 'March'
            case 'Apr': date[1] = 'April'
            case 'May': date[1] = 'May'
            case 'Jun': date[1] = 'June'
            case 'Jul': date[1] = 'July'
            case 'Aug': date[1] = 'August'
            case 'Sep': date[1] = 'September'
            case 'Oct': date[1] = 'October'
            case 'Nov': date[1] = 'November'
            case 'Dec': date[1] = 'December'
            default: date[1] = 'Month'
        }
        date[3] + ','

        debugger

        // time.s


        let date_formatted = date.join(" ")

        debugger

        return (
            <div className="post_whole">
                <div className="post_top">
                    <div className="post_top_left">
                        <Link to={`/user/${this.props.userId}`}>
                            <img
                                className={'post_profile_pic ' + this.props.profpicColor}
                                src={this.props.profilePicUrl}
                            />
                        </Link>
                        <div className="name_and_time">
                            <Link to={`/user/${this.props.userId}`}>
                                <h2 className="post_name">
                                    {this.props.firstName} {this.props.lastName}
                                </h2>
                            </Link>
                            {/* <div className="post_timestamp">{this.props.updated_at}</div> */}
                            <div className="post_timestamp">{time_formatted}</div>
                        </div>
                    </div>
                    {this.rendersPostTopRight()}
                </div>
                <div className="post_middle">
                    <p className="post_body">
                        {this.props.postBody}
                    </p>
                </div>
                <div className="post_bottom">
                    {/* <h2 className="post_placeholder">Picture?</h2> */}
                    <div className="postlinediv"></div>
                    <div className="post_buttons">
                        <h2 className="post_placeholder">Comment?</h2>
                        <h2 className="post_placeholder">Like?</h2>
                    </div>
                    <div className="postlinediv"></div>
                    <h2 className="post_placeholder">Write a comment</h2>
                </div>
            </div>
        )
    }
}

export default UserPost;