import React from 'react';

class ProfileIntro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        // Later want to implement logic to allow to show certain info fields
        let user = this.props.user;
        let bio, birthday, birthdayFormatted, gender, education,
        hometown, work, relationship, website, time;
        
        // Conditionals to make the info be default if no value
        // Should make a button to make bio just like Facebook, with better formatting too***
        if (user.bio) { bio = "Bio: " + user.bio }
        else { bio = <em>No Bio</em> }

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

        const daysFormat = (dayNum) => {
            let dayInt = parseInt(dayNum)
            if (dayNum.slice(-1) === "1" && dayNum !== "11") {
                return `${dayInt}st,`
            } else if (dayNum.slice(-1) === "2" && dayNum !== "12") {
                return `${dayInt}nd,`
            } else if (dayNum.slice(-1) === "3" && dayNum !== "13") {
                return `${dayInt}rd,`
            } else {
                return `${dayInt}th,`
            }
        }

        // Should format birthday in English***
        if (user.birthdate) { birthday = user.birthdate.split('-') }
        else { birthday = null }
        // else { birthday = "Birthday not registered" }
        if (user.birthdate !== "Birthday not registered") {
            let day = daysFormat(birthday.pop())
            let month = monthsObj[parseInt(birthday.pop())]
            birthday.unshift(day)
            birthday.unshift(month)
            birthdayFormatted = ["Born on ", <strong key={month}>{birthday.join(' ')}</strong>]
        } else { "Something unexpected happened" }

        if (user.gender) {
            gender = ["Identify as ", <strong key={user.gender}>{user.gender}</strong>]
        } else { gender = null }
        // } else { gender = <em>Gender not registered</em> }

        if (user.hometown) {
            hometown = ["Lives in ", <strong key={user.hometown}>{user.hometown}</strong>]
        } else { hometown = null }
        // } else { hometown = <em>Hometown not registered</em> }

        if (user.education) {
            education = ["Studied at ", <strong key={user.education}>{user.education}</strong>]
        } else { education = null }
        // } else { education = <em>Education not registered</em> }

        if (user.work) {
            work = ["Works as ", <strong key={user.work}>{user.work}</strong>]
        } else { work = null }
        // } else { work = <em>Work not registered</em> }

        if (user.relationship) {
            relationship = ["Currently ", <strong key={user.relationship}>{user.relationship}</strong>]
        } else { relationship = null }
        // } else { relationship = <em>Relationship not registered</em> }

        if (user.website) {
            website = ["Website: ", <strong key={user.website}>{user.website}</strong>]
        } else { website = null }
        // } else { website = <em>Website not registered</em> }

        return (
            <div className="profile_intro">
                <h2 className="profbodytitle">Intro</h2>
                <p className="profile_bio">{bio}</p>
                <p className="profile_info">Email me at <strong>{user.email}</strong></p>
                <p className="profile_info">{birthdayFormatted}</p>
                <p className="profile_info">{gender}</p>
                <p className="profile_info">{hometown}</p>
                <p className="profile_info">{education}</p>
                <p className="profile_info">{work}</p>
                <p className="profile_info">{relationship}</p>
                <p className="profile_info">{website}</p>
            </div>
        )
    }
}

export default ProfileIntro;