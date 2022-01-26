import React from 'react';

class PostDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    rendersDropType() {
        if (this.props.type === "Post") {
            return (
                <div className="dropopenabsolute">
                    <div className="dropopenbackground">
                        <div
                            onClick={() => this.props.openEditPostModal(this.props.postId)}>
                                <p className="dropopentext">Edit</p>
                        </div>
                        <div
                            onClick={() => this.props.destroyPost(this.props.postId)}>
                                <p className="dropopentext">Delete</p>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.type === "Comment") {
            return (
                <div className="dropopenabsolute">
                    <div className="dropopenbackground">
                        {/* <div
                            onClick={() => this.props.updateComment()}>
                                <p className="dropopentext">Edit</p>
                                // This needs more logic since it will be similar to
                                // edit bio where you edit in place of the comment
                        </div> */}
                        <p className="dropopentext">Edit</p>
                        <div
                            onClick={() => this.props.destroyComment(this.props.commentId)}>
                                <p className="dropopentext">Delete</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            this.rendersDropType()
            // <div className="dropopenabsolute">
            //     <div className="dropopenbackground">
            //         <div
            //             onClick={() => this.props.openEditPostModal(this.props.postId)}>
            //                 <p className="dropopentext">Edit</p>
            //         </div>
            //         <div
            //             onClick={() => this.props.destroyPost(this.props.postId)}>
            //                 <p className="dropopentext">Delete</p>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default PostDrop;