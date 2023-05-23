import React from 'react';
import Friend from './profile_friends';
// import { Link } from 'react-router-dom';

// import { postProfPicColor } from '../../util/color_util';
// import { filterTime } from '../../util/filter_util';

const ProfileFriendsTab = (props) => {
    if (!props.friends) return <h1>{"No Friends :("}</h1>

    return (
        <div className="friends_tabbody">
            <div className="profile_friends">
                <h2 className="friends_profbodytitle">Friends</h2>
                <div className="friends_wall">
                    {Object.values(props.friends).map(friend => {
                        return (<Friend
                            key={friend.id}
                            friend={friend}
                            currentUser={props.currentUser}
                            currentUserId={props.currentUserId}
                            user={props.user}
                            userId={parseInt(props.userId)}
                            destroyFriend={props.destroyFriend}
                        />)
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileFriendsTab;