import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-info">
                    <p>React</p>
                    <p>Redux</p>
                    <p>Ruby on Rails</p>
                    <p>AWS</p>
                    <p>PostgreSQL</p>
                    <p>Heroku</p>
                    <p>jQuery</p>
                </div>
                <div className="footer-links">
                    <p>Kin Ka Tse</p>
                    <p>Clone of Facebook</p>
                    <p>2022</p>
                    <a href="https://github.com/kinkatse" className="footer-link">Github</a>
                    <a href="https://www.linkedin.com/in/kin-ka-tse/" className="footer-link">LinkedIn</a>
                    <a href="https://github.com/kinkatse/FaceNove" className="footer-link">Repo Link</a>
                    {/* <a href="" className="footer-link">Portfolio</a> */}
                </div>
            </div>
        )
    }
}

export default Footer;