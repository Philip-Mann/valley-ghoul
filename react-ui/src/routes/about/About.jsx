import './about.css';

const About = () => {

    return (
        <div className="about-dev-container">
            <div className="about-dev-image">
                <img src="/images/me.jpg" alt="Philip Mann" />
            </div>
            <div className="about-dev-text">
                <p>
                Rockstar Full Stack Engineer with a strong passion for learning and building websites from the ground up. Specializes in JavaScript and JavaScript’s front-end and back-end frameworks. Professional strengths include creative problem-solving, written and verbal communication, and time management. Detail-oriented and adventurous mindset from 6+ years of experience in the transportation industry.
                </p>
            </div>
            <div className="about-dev-icons">
                <div className="about-github icon">
                    <a href="https://github.com/Philip-Mann" rel="noreferrer" target="_blank">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                </div>
                <div className="about-portfolio icon">
                    <a href="https://pjm-portfolio.netlify.app/" rel="noreferrer" target="_blank">
                        <i className="fas fa-briefcase"></i> Portfolio
                    </a>
                </div>
                <div className="about-linkedin icon">
                    <a href="https://www.linkedin.com/in/philip-mann-b7989b173/" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;