import React from 'react';

class ModalSignup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            birthdate: "1-1-2000",
            gender: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetState() {
        this.setState = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            birthdate: "1-1-2000",
            gender: ""
        }
        this.props.closeModal;
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user).then(() => {this.resetState()})
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    updateBirthday(datetype) {
        let birthday = this.state.birthdate.split('-');
        let idxToUpdate;
        if (datetype === 'month') {
            idxToUpdate = 0;
        } else if (datetype === 'day') {
            idxToUpdate = 1;
        } else if (datetype === 'year') {
            idxToUpdate = 2;
        }
        
        return e => {
          birthday[idxToUpdate] = e.target.value;
          this.setState({birthdate: birthday.join('-')})
        }
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

        const monthsList = () => {
            monthsArr = [];
            for (let i = 1; i <= 12; i++) {
                monthsArr.push(<option value={i} key={`month-${i}`}>{monthsObj[i]}</option>)
            }
            return monthsArr;
        }

        const daysList = () => {
            daysArr = [];
            for (let i = 1; i <= 31; i++) {
                daysArr.push(<option value={i} key={`day-${i}`}>{i}</option>)
            }
            return daysArr;
        }

        const yearsList = () => {
            yearsArr = [];
            for (let i = 1900; i <= 2022; i++) {
                yearsArr.unshift(<option value={i} key={`year-${i}`}>{i}</option>)
            }
            return yearsArr;
        }

        return (
            // <div className="signupform">
            //     <h1>Modal Open</h1>
            // </div>
            <form onSubmit={this.handleSubmit}>
                <div className="signup_modal-background">
                    <div className="signup_modal-child">
                        <h1>Sign Up!</h1>
                        <span onClick={this.props.closeModal}>X</span>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalSignup;