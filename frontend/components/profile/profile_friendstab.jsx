import React from 'react';
import { Link } from 'react-router-dom';

import { postProfPicColor } from '../../util/color_util';

const ProfileFriendsTab = (props) => {
    if (!props.friends) return <h1>{"No Friends :("}</h1>

    return (
        <div className="tabbody">
            <div className="profile_friends">
                <h2 className="profbodytitle">Friends</h2>
                <div className="friends_wall">
                    {Object.values(props.friends).map(friend => {
                        return (
                        <div className='friends-list'>
                            <Link to={`/user/${friend.id}`}>
                                <img
                                    className={`post_profile_pic ${postProfPicColor()}`}
                                    src={friend.profilePicUrl}
                                />
                            </Link>
                            <h1>{friend.firstName}</h1>
                            <h1>{friend.lastName}</h1>
                            <h1>{friend.friends_since}</h1>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileFriendsTab;