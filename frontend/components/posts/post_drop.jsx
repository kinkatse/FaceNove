import React from 'react';

class PostDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
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
    }
}

export default PostDrop;