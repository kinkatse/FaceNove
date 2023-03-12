import React from 'react';
import { Link } from 'react-router-dom';

import { postProfPicColor } from '../../util/color_util';
import { filterTime } from '../../util/filter_util';

const ProfileFriendsTab = (props) => {
    if (!props.friends) return <h1>{"No Friends :("}</h1>

    return (
        <div className="tabbody">
            <div className="profile_friends">
                <h2 className="profbodytitle">Friends</h2>
                <div className="friends_wall">
                    {Object.values(props.friends).map(friend => {
                        const { time_posted, timestamp_hover } = filterTime(friend.friends_since)

                        return (
                        <div key={friend.id} className='friends-list'>
                            <Link to={`/user/${friend.id}`}>
                                <img
                                    className={`post_profile_pic ${postProfPicColor()}`}
                                    src={friend.profilePicUrl}
                                />
                            </Link>
                            <div className="name_and_time">
                                <Link to={`/user/${friend.id}`}>
                                    <h2 className="post_name">
                                        {friend.firstName} {friend.lastName}
                                    </h2>
                                </Link>
                                <div className="post_timestamp">
                                    {timestamp_hover}
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileFriendsTab;