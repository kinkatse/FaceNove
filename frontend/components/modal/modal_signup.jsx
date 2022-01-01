import React from 'react';

class ModalSignup extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const monthsObj = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        }

        return (
            <div className="signupform">
                <h1>Modal Open</h1>
            </div>
        )
    }
}

export default ModalSignup;