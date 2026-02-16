import { useState } from 'react'
import './About.css'

function About() {
    const [imageError, setImageError] = useState(false)
    const profileImagePath = '/assets/Profile2026.jpg' // Change to your image filename (e.g., profile.png, profile.jpeg)

    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-image-wrapper">
                        <div className="about-image glass-card">
                            {!imageError ? (
                                <img
                                    src={profileImagePath}
                                    alt="Profile"
                                    onError={() => setImageError(true)}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <div className="image-placeholder">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="about-text">
                        <h3 className="gradient-text-secondary">Building the Future, One Line at a Time</h3>
                        <p>
                            With over <strong>8+ years</strong> of experience in software engineering,
                            I specialize in architecting and developing scalable, high-performance applications
                            that solve real-world problems.
                        </p>
                        <p>
                            My expertise spans across full-stack development, cloud infrastructure,
                            microservices architecture, and team leadership. I'm passionate about
                            clean code, best practices, and mentoring the next generation of developers.
                        </p>
                        <p>
                            When I'm not coding, you'll find me contributing to open-source projects,
                            writing technical articles, or exploring the latest trends in technology
                            and software engineering.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item glass-card">
                                <h4 className="gradient-text">8+</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item glass-card">
                                <h4 className="gradient-text">10+</h4>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat-item glass-card">
                                <h4 className="gradient-text">15+</h4>
                                <p>Technologies Proficient In</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
