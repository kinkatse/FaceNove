import React from 'react';
// import { Link } from 'react-router-dom';

// import { postProfPicColor } from '../../util/color_util';

class ProfileFriends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return null
        // if (!this.props.friends) return <h1>{"No Friends :("}</h1>
        // return (
        //     <div className="profile_friends">
        //         <h2 className="profbodytitle">Friends</h2>
        //         <div className="friends_wall">
        //             {this.props.friends.map(friend => {
        //                 return (
        //                     <div className='friends-list'>
        //                         <Link to={`/user/${this.props.friend.id}`}>
        //                             <img
        //                                 className={`post_profile_pic ${postProfPicColor()}`}
        //                                 src={this.props.profilePicUrl}
        //                             />
        //                         </Link>
        //                         <h1>{friend.firstName}</h1>
        //                         <h1>{friend.lastName}</h1>
        //                     </div>
        //                 )
        //             })}
        //         </div>
        //     </div>
        // )
    }
}

export default ProfileFriends;