import React from 'react';

class ProfilePhotos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="profile_photos">
                <h1>Photos</h1>
                <div className="photos_album">
                    <p>Image1</p>
                    <p>Image2</p>
                    <p>Image3</p>
                    <p>Image4</p>
                    <p>Image5</p>
                    <p>Image6</p>
                    <p>Image7</p>
                    <p>Image8</p>
                    <p>Image9</p>
                    <p>Image10</p>
                    <p>Image11</p>
                    <p>Image12</p>
                </div>
            </div>
        )
    }
}

export default ProfilePhotos;