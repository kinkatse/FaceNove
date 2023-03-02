import React from 'react';

class ProfilePhotos extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        if (!this.props.posts || Object.keys(this.props.posts).length === 0) return null

        let componentContainerStyling = "photos";
        let photosContainerStyling = "photos_album_tab";
        let photoStyling = "photopic";

        let posts = this.props.posts
        
        if (!this.props.fromLikesTab) {
            componentContainerStyling = "profile_photos";
            photosContainerStyling = "photos_album_prof";
            photoStyling = "photopic-prof";

            const newPosts = []
            posts.reverse().map((post) => {
                if (newPosts.length < 9) newPosts.push(post)
            })
            posts = newPosts
        }

        const photoPostIds = posts.map((post) => post.id)

        return (
            <div className={`${componentContainerStyling}`}>
                {!this.props.fromLikesTab && (
                    <span className='photos-tab'>
                        <h2 className="profbodytitle">Photos</h2>
                        <h2 className="profbodyseephotos" onClick={() => this.props.changeActiveTab(1)}>See all photos</h2>
                    </span>
                )}
                <div className={`${photosContainerStyling}`}>
                    {posts.map(post => {
                        return (
                            <img
                                key={post.id}
                                onClick={() => this.props.openPicModal(post.id, photoPostIds)}
                                className={`${photoStyling}`}
                                src={post.postPhotoUrl}
                            />
                        )
                    })}
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