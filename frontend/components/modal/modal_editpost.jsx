import React from 'react';

class ModalEditPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postBody: this.props.postObj.post
        }
        this.updatePostBody = this.updatePostBody.bind(this);
    }

    updatePostBody() {
        return e => this.setState({ postBody: e.currentTarget.value })
    }

    handleSubmit() {
        e.preventDefault();
        const postData = Object.assign({}, this.state);
        this.props.updatePost(postData, this.props.postObj.id)
        .then(this.resetState())
    }

    resetState() {
        this.setState({
            postBody: this.props.postObj.post
        })
        this.props.closeModal()
    }

    render() {
        debugger

        // let colorSplash;
        // if (this.props.color === 'blue') {
        //     colorSplash = 'bluesplash';
        // } else if (this.props.color === 'green') {
        //     colorSplash = 'greensplash'
        // } else if (this.props.color === 'red') {
        //     colorSplash = 'redsplash'
        // }

        // <textarea
        //     className="editbio input"
        //     type="text"
        //     placeholder={`${this.state.postBody}`}
        //     value={this.state.postBody}
        //     onChange={this.updatePostBody()}
        // ></textarea>

        return (
            // <div className="testEdit">
            //     <h1>Edit</h1>
            //     {this.props.postObj.post}
            // </div>
            <form onSubmit={this.handleSubmit}>
                <div className="postedit_modal_background" onClick={this.props.closeModal}></div>
                <div className="postedit_modal_child">
                    <div className="postedittop">
                        <h1 className="edittitle">Edit Post!</h1>
                        <img className="X" src={window.x_url} onClick={this.props.closeModal}/>
                    </div>
                    <div className="editlinediv"></div>
                    <div className="posteditbody">
                        {this.props.postObj.post}
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalEditPost;