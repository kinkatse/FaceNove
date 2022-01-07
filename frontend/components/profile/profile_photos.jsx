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
                <p>Image1</p>
                <p>Image2</p>
                <p>Image3</p>
            </div>
        )
    }
}

export default ProfilePhotos;