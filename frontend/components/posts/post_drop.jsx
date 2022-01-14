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
                {/* <h2 className="dropopentext">Drop Open</h2> */}
                <div className="dropopentext" onClick={this.openEdit}>Edit</div>
                {/* <div onClick={}></div>
                <div onClick={}></div> */}
            </div>
        )
    }
}

export default PostDrop;