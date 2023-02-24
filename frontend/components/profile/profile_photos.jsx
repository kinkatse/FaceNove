import React from 'react';

class ProfilePhotos extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        debugger
        if (!this.props.posts) return null
        return (
            <div className="photos">
                <div className="profile_photos">
                    {!this.props.fromLikesTab && (
                        <h2 className="profbodytitle">Photos</h2>
                    )}
                    <div className="photos_album_tab">
                        {this.props.posts.map(post => {
                            return (
                                    <img
                                        key={post.id}
                                        className="photopic"
                                        src={post.postPhotoUrl}
                                    />
                            )
                        })}
                    </div>
                </div>
            </div>
        )


        // return (
        //     <div className="profile_photos">
        //         <h2 className="profbodytitle">Photos</h2>
        //         <div className="photos_album">
        //             <p>Image1</p>
        //             <p>Image2</p>
        //             <p>Image3</p>
        //             <p>Image4</p>
        //             <p>Image5</p>
        //             <p>Image6</p>
        //             <p>Image7</p>
        //             <p>Image8</p>
        //             <p>Image9</p>
        //             <p>Image10</p>
        //             <p>Image11</p>
        //             <p>Image12</p>
        //         </div>
        //     </div>
        // )
    }
}

export default ProfilePhotos;