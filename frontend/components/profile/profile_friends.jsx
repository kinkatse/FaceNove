import React from 'react';
import { filterTime } from '../../util/filter_util';
import { Link } from 'react-router-dom';

import { postProfPicColor } from '../../util/color_util';

class ProfileFriends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { time_posted, timestamp_hover } = filterTime(this.props.friend.friends_since)

        return (
            <div className='friends-listitem'>
                <Link to={`/user/${this.props.friend.id}`}>
                    <img
                        className={`friend_profile_pic`}
                        src={this.props.friend.profilePicUrl}
                    />
                </Link>
                <div className="name_and_time">
                    <Link to={`/user/${this.props.friend.id}`}>
                        <h2 className="friends_post_name">
                            {this.props.friend.firstName} {this.props.friend.lastName}
                        </h2>
                    </Link>
                    <div className="post_timestamp">
                        {this.props.fromPostsTab ? null : timestamp_hover}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileFriends;