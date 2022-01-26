import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from '../comments/comment_container';
import PostDrop from './post_drop'

class UserPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropOpen: false,
            commentsOpen: false,
            postBody: this.props.postBody,
            enlarged: false
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

    commentsToggle() {
        let value = this.state.commentsOpen;
        this.setState({ commentsOpen: !value })
    }

    enlargePic() {
        this.setState({ enlarged: true })
    }

    closeEnlargedPic() {
        this.setState({ enlarged: false })
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

    rendersTime(datetime, type) {
        // Making arrays of the individual date info to adjust them for formatting
        let date = datetime.toDateString().split(" ")
        let time = datetime.toLocaleTimeString().split(" ")

        // Making date of week full date with comma
        switch(date[0]) {
            case 'Mon': date[0] = 'Monday,'; break
            case 'Tue': date[0] = 'Tuesday,'; break
            case 'Wed': date[0] = 'Wednesday,'; break
            case 'Thu': date[0] = 'Thursday,'; break
            case 'Fri': date[0] = 'Friday,'; break
            case 'Sat': date[0] = 'Saturday,'; break
            case 'Sun': date[0] = 'Sunday,'; break
            default: date[0] = 'Day'; break
        }
        // Making month the full month
        switch(date[1]) {
            case 'Jan': date[1] = 'January'; break
            case 'Feb': date[1] = 'February'; break
            case 'Mar': date[1] = 'March'; break
            case 'Apr': date[1] = 'April'; break
            case 'May': date[1] = 'May'; break
            case 'Jun': date[1] = 'June'; break
            case 'Jul': date[1] = 'July'; break
            case 'Aug': date[1] = 'August'; break
            case 'Sep': date[1] = 'September'; break
            case 'Oct': date[1] = 'October'; break
            case 'Nov': date[1] = 'November'; break
            case 'Dec': date[1] = 'December'; break
            default: date[1] = 'Month'; break
        }
        // Adding comma
        date[2] += ','
        // Removing seconds
        time[0] = time[0].split(":").slice(0, 2).join(":")

        // This is for the simple show of time posted
        if (type === "created_simple") {
            date.shift()
            return date.join(" ")
        }

        // Joining all of the date and time info into one string
        if (type === "edited_hover") {
            date.unshift("Edited on")
        } else {
            date.unshift("Created on")
        }
        return date.join(" ") + " at " + time.join(" ")
    }

    rendersPostPhoto() {
        // Need to have this be typeof === string so that
        // in the case that the postPicUrl comes in with some
        // other data that isn't the data we want, then we
        // put that into the else condition
        if (typeof this.props.postPicUrl === 'string' && this.state.enlarged === true) {
            return (
            <>
                <div className="edit_modal_background enlargedback" onClick={() => this.closeEnlargedPic()}></div>
                <img
                    className="enlarged"
                    src={this.props.postPicUrl}
                />
                <img
                    className="postpic"
                    src={this.props.postPicUrl}
                />
            </> 
            )
        } else if (typeof this.props.postPicUrl === 'string') {
            return ( <img
                className="postpic"
                src={this.props.postPicUrl}
                onClick={() => this.enlargePic()}
            /> )
        } else {
            return null;
        }
    }

    rendersComments() {
        debugger
        if (this.state.commentsOpen) {
            return (
                <CommentContainer
                    userId={this.props.postUserId}
                    postId={this.props.postId}
                    indexComments={this.props.indexComments}
                    createComment={this.props.createComment}
                />
            )
        } else {
            return null;
        }
    }

    render() {
        // This is to prevent the posts made by the user on a different
        // user's page from showing up on that page
        if (this.props.postUserId !== parseInt(this.props.userId)) {
            return null;
        }

        let datetime_created = new Date(this.props.created_at)
        let created = this.rendersTime(datetime_created, "created_hover")
        let datetime_updated = new Date(this.props.updated_at)
        let updated;
        // This is for when the post has never updated so we shouldn't
        // give updated any info if the post created and post updated
        // are the same. We need the conditional to have Date.parse since
        // comparing Date objects will always be false so use numbers
        if (Date.parse(datetime_created) !== Date.parse(datetime_updated)) {
            updated = this.rendersTime(datetime_updated, "edited_hover")
        }

        // This is to prevent showing the null updated if no updated
        // which will have a padding and ruin the css of the hover
        let timestamp_hover;
        if (updated) {
            timestamp_hover = ( <div>
                    <p className="created_and_updated">{created}</p>
                    <p className="created_and_updated">{updated}</p>
                </div> )
        } else {
            timestamp_hover = <div>{created}</div>
        }

        // Formating time for when a post is under 1 day old
        let created_milli = Date.parse(datetime_created)
        let now_milli = Date.now()
        // Grabbing time now and time posted and subtracting their time in
        // in milliseconds (with the Math.abs to make sure no negative)
        let time_diff = Math.abs(now_milli - created_milli)
        // Math.ceil is just to round number, we divide the time in milliseconds
        // by milliseconds per second, seconds per minute and minutes per hour
        // to get time in hours. Did that for seconds and minutes and days (6) too
        let time_diff_seconds = Math.ceil(time_diff / (1000))
        let time_diff_minutes = Math.ceil(time_diff / (1000 * 60))
        let time_diff_hours = Math.ceil(time_diff / (1000 * 60 * 60))
        let time_diff_days = Math.ceil(time_diff / (1000 * 60 * 60 * 24))
        let time_posted;
        if (time_diff_seconds < 60) {
            time_posted = (time_diff_seconds.toString() + "s")
        } else if (time_diff_minutes < 60) {
            time_posted = (time_diff_minutes.toString() + "m")
        } else if (time_diff_hours < 24) {
            time_posted = (time_diff_hours.toString() + "h")
        } else if (time_diff_days < 7) {
            time_posted = (time_diff_days.toString() + "d")
        } else {
            time_posted = this.rendersTime(datetime_created, "created_simple")
        }

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
                            <div className="post_timestamp">
                                {time_posted}
                                <div className="post_timestamp_hover">
                                    {timestamp_hover}
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.rendersPostTopRight()}
                </div>
                <div className="post_middle">
                    <p className="post_body">
                        {this.props.postBody}
                    </p>
                </div>
                <div className="postpic_whole">
                    {this.rendersPostPhoto()}
                </div>
                <div className="post_bottom">
                    <div className="postlinediv"></div>
                    <div className="post_buttons">
                        <h2 className="post_placeholder" onClick={() => this.commentsToggle()}>Comment</h2>
                        <h2 className="post_placeholder">Like?</h2>
                    </div>
                    <div className="postlinediv"></div>
                    {this.rendersComments()}
                </div>
            </div>
        )
    }
}

export default UserPost;