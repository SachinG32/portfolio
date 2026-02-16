import './Projects.css'

function Projects() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Handles 10K+ daily transactions.',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
            liveLink: '#',
            githubLink: '#'
        },
        {
            title: 'Task Management SaaS',
            description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.',
            technologies: ['Vue.js', 'Python', 'MongoDB', 'WebSocket', 'Docker'],
            liveLink: '#',
            githubLink: '#'
        },
        {
            title: 'AI-Powered Analytics',
            description: 'Machine learning platform for predictive analytics and data visualization. Processes millions of data points in real-time.',
            technologies: ['React', 'TensorFlow', 'FastAPI', 'Redis', 'Kubernetes'],
            liveLink: '#',
            githubLink: '#'
        },
        {
            title: 'Social Media Dashboard',
            description: 'Unified dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking.',
            technologies: ['Next.js', 'GraphQL', 'Prisma', 'PostgreSQL', 'Vercel'],
            liveLink: '#',
            githubLink: '#'
        }
    ]

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass-card">
                            <div className="project-header">
                                <h3 className="gradient-text">{project.title}</h3>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    Live Demo
                                </a>
                                <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
