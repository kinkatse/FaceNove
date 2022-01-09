import React from 'react';

class ModalEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            birthdate: props.user.birthdate,
            gender: props.user.gender,
            bio: props.user.bio,
            hometown: props.user.hometown,
            education: props.user.education,
            work: props.user.work,
            relationship: props.user.relationship,
            website: props.user.website
        }
    }

    render() {
        return (
            <div>This is Modal Edit
            </div>
        )
    }
}

export default ModalEdit;