import React from 'react';

class PostDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="">
                <div className="dropopentext" onClick={() => this.props.openEdit()}>Edit</div>

            </div>
        )
    }
}

export default PostDrop;