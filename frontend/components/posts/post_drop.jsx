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
                            onClick={() => {
                                this.props.closeModal()
                                this.props.destroyPost(this.props.postId)
                                }}>
                                <p className="dropopentext">Delete</p>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.type === "Comment") {
            return (
                <div className="dropopenabsolute">
                    <div className="dropopenbackground">
                        <div
                            onClick={() => this.props.openCommentEdit()}>
                                <p className="dropopentext">Edit</p>
                        </div>
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
        )
    }
}

export default PostDrop;