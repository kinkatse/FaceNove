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
                <div
                    className="dropopenbackground"
                    onClick={() => this.props.openEdit()}>
                        <p className="dropopentext">Edit</p>
                </div>
                <div
                    className="dropopenbackground"
                    onClick={() => this.deleteTemp()}>
                        <p className="dropopentext">Delete</p>
                </div>
            </div>
        )
    }
}

export default PostDrop;