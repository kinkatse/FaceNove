import React from 'react';
import { Link } from 'react-router-dom';
import PostDrop from './post_drop'

class UserPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropOpen: false
        }
        this.dropOpen = this.dropOpen.bind(this);
        this.dropClose = this.dropClose.bind(this);
    }

    dropOpen(e) {
        this.setState({ dropOpen: true })
    }

    dropClose(e) {
        this.setState({ dropOpen: false })
    }

    // rendersPostDropClose() {
    //     if (this.state.dropOpen) {
    //         return (
    //             <div className="post_dropclose" onClick={this.dropClose}></div>
    //         )
    //     }
    // }

    // rendersPostDrop() {
    //     let component;
    //     if (this.state.dropOpen) {
    //         component = (
    //             <PostDrop />
    //         )
    //     } else {
    //         component = (
    //             <h1>...</h1>
    //         );
    //     }
    //     return component;
    // }

    render() {
        let dropclassname;
        let dropclose;
        let dropcomponent;
        if (this.state.dropOpen) {
            dropclassname = ""
            dropclose = <div className="post_dropclose" onClick={this.dropClose}></div>
            dropcomponent = (<PostDrop />)
        } else {
            dropclassname = "opendropbtn"
            dropclose = null;
            dropcomponent = (<h1>...</h1>)
        }
        // debugger
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
                        <Link to={`/user/${this.props.userId}`}>
                            <h2 className="post_name">
                                {this.props.firstName} {this.props.lastName}
                            </h2>
                        </Link>
                    </div>
                    <div className={'post_top_right ' + dropclassname}>
                    {/* {this.rendersPostDropClose()} */}
                    {dropclose}
                        <div className="post_dropdown" onClick={this.dropOpen}>
                            {/* {this.rendersPostDrop()} */}
                            {dropcomponent}
                        </div>
                    </div>
                </div>
                <div className="post_middle">
                    <p className="post_body">
                        {this.props.postBody}
                    </p>
                    <h2 className="post_placeholder">Picture?</h2>
                    <h2 className="post_placeholder">Comment?</h2>
                    <h2 className="post_placeholder">Like?</h2>
                </div>
            </div>
        )
    }
}

export default UserPost;