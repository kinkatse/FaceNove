import React from 'react';

class PostDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    deleteTemp() {
        debugger
    }

    render() {
        return (
            <div className="dropopenabsolute">
                <div className="dropopenbackground">
                    <div
                        onClick={() => this.props.openEditPostModal()}>
                            <p className="dropopentext">Edit</p>
                    </div>
                    <div
                        onClick={() => this.deleteTemp()}>
                            <p className="dropopentext">Delete</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDrop;