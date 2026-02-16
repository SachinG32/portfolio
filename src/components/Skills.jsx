import './Skills.css'

function Skills() {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux']
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Python', 'Java', 'Express', 'Django', 'Spring Boot']
        },
        {
            title: 'Database',
            skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch']
        },
        {
            title: 'DevOps & Cloud',
            skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Azure']
        },
        {
            title: 'Tools & Others',
            skills: ['Git', 'GraphQL', 'REST APIs', 'Microservices', 'Agile', 'System Design']
        }
    ]

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category glass-card">
                            <h3 className="category-title gradient-text">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
