import React from 'react';
import { Link } from 'react-router-dom';

class UserPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        debugger
        return (
            <div className="post_whole">
                <div className="post_top">
                    <Link to={`/user/${this.props.userId}`}>
                        <img
                            className="post_profile_pic"
                            src={this.props.profilePicUrl}
                        />
                    </Link>
                    <Link to={`/user/${this.props.userId}`}>
                        <h2 className="post_name">
                            {this.props.firstName} {this.props.lastName}
                        </h2>
                    </Link>
                    <p className="post_body">
                        {this.props.postBody}
                    </p>
                </div>
            </div>
        )
    }
}

export default UserPost;