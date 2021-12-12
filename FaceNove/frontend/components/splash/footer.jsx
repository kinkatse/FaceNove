import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-info">
                    <span>footer</span>
                    <span className="footer-message">Kin Ka Tse</span>
                    <span className="footer-message">Clone of Facebook</span>
                </div>
                <div className="footer-links">
                    <a href="https://github.com/kinkatse" className="footer-link">Github</a>
                    <a href="https://www.linkedin.com/in/kin-ka-tse/" className="footer-link">LinkedIn</a>
                    <a href="https://angel.co/u/kin-ka-tse" className="footer-link">AngelList</a>
                    <a href="https://github.com/kinkatse/FaceNove" className="footer-link">Repo Link</a>
                    <a href="" className="footer-link">Portfolio</a>
                </div>
            </div>
        )
    }
}

export default Footer;