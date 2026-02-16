import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="gradient-text">Portfolio</h3>
                        <p>Building exceptional digital experiences</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#experience">Experience</a>
                        </div>
                        <div className="footer-section">
                            <h4>Projects</h4>
                            <a href="#projects">All Projects</a>
                            <a href="#">GitHub</a>
                            <a href="#">Portfolio</a>
                        </div>
                        <div className="footer-section">
                            <h4>Connect</h4>
                            <a href="#contact">Contact</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} John Doe. All rights reserved.</p>
                    <p>Designed & Built with ❤️ using React</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
