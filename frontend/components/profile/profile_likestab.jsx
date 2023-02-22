import React from 'react';

class ProfileLikesTab extends React.Component {

    componentDidMount() {
        this.props.indexLikes({
            liker_id: this.props.userId,
            likeable_type: "User_All"
        })
    }

    render() {
        debugger
        return (
            <div className="tabbody">
                <h1>This is Likes</h1>
            </div>
        )
    }

}

// const ProfileLikesTab = (props) => {

//     return (
//         <div className="tabbody">
//             <h1>This is Likes</h1>
//         </div>
//     )
// }

export default ProfileLikesTab;