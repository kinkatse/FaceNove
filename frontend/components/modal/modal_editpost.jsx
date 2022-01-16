import React from 'react';

class ModalEditPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postBody: this.props.postObj.post
        }
    }

    render() {
        debugger
        return (
            <div className="testEdit">
                <h1>Edit</h1>
                {this.props.postObj.post}
            </div>
        )
    }
}

export default ModalEditPost;