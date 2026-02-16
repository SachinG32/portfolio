import './Experience.css'

function Experience() {
    const experiences = [
		{
            company: 'GSR Business Services Pvt Ltd.',
            role: 'Senior Software Engineer',
            period: 'Jun 2024 - Present',
            description: 'Developed and maintained multiple client-facing applications serving 100K+ users. Optimized database queries improving performance by 40%.',
            technologies: ['.Net Core', 'React', 'Python', 'Rest API', 'Azure']
        },
        {
            company: 'Cognizant',
            role: 'Associate - Projects',
            period: 'Nov 2021 - Jun 2024',
            description: 'Leading a team of 8 engineers in developing cloud-native microservices architecture. Implemented CI/CD pipelines reducing deployment time by 60%.',
            technologies: ['.Net Core', 'Microservices', 'AWS', 'Jenkins', 'Docker']
        },
        {
            company: 'GSR Business Services Pvt Ltd.',
            role: 'Software Engineer',
            period: 'Dec 2019 - Nov 2021',
            description: 'Developed and maintained multiple client-facing applications serving 100K+ users. Optimized database queries improving performance by 40%.',
            technologies: ['.Net Core', 'C#', 'MVC', 'JQuery', 'MSSQL']
        },
        {
            company: 'V Works Software Pvt Ltd.',
            role: 'Software Developer',
            period: 'Oct 2017 - Nov 2019',
            description: 'Built core features for SaaS platform from scratch. Collaborated with product team to define technical requirements and architecture.',
            technologies: ['Webforms', 'JavaScript', 'SignalR', 'Oracle', 'Git']
        }
    ]

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content glass-card">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="gradient-text">{exp.role}</h3>
                                        <h4 className="company-name">{exp.company}</h4>
                                    </div>
                                    <span className="period">{exp.period}</span>
                                </div>
                                <p className="experience-description">{exp.description}</p>
                                <div className="tech-stack">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
