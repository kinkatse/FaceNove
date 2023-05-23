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
        const { time_posted, timestamp_hover } = filterTime(this.props.friend.friends_since, null, "friendsTab")

        let background_for_tab = null;
        let profile_pic_for_tab = null;
        let friends_description_for_tab = null;
        if (this.props.fromTab) {
            background_for_tab = "friends_on_tab"
            profile_pic_for_tab = "profpic_on_friend_tab"
            friends_description_for_tab = "on_friends_tab_for_description"
        }

        return (
            <div className={`friends-listitem ${background_for_tab}`}>
                <Link to={`/user/${this.props.friend.id}`}>
                    <img
                        className={`friend_profile_pic ${profile_pic_for_tab}`}
                        src={this.props.friend.profilePicUrl}
                    />
                </Link>
                <div className={`name_and_time ${friends_description_for_tab}`}>
                    <Link to={`/user/${this.props.friend.id}`}>
                        <h2 className="friends_post_name">
                            {this.props.friend.firstName} {this.props.friend.lastName}
                        </h2>
                    </Link>
                    {!this.props.fromPostsTab && (
                        <div className="post_timestamp">
                            {timestamp_hover}
                        </div>
                    )}
                </div>
                {!this.props.fromPostsTab && (
                    <div className="friend_button">
                        Add Friend
                    </div>
                )}
            </div>
        )
    }
}

export default ProfileFriends;