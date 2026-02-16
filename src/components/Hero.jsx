import './Hero.css'

function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToProjects = () => {
        const element = document.getElementById('projects')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-greeting animate-fadeIn">Hi, I'm</p>
                    <h1 className="hero-name animate-fadeIn">
                        <span className="gradient-text">Sachin Ghorpade</span>
                    </h1>
                    <h2 className="hero-title animate-fadeIn">Senior Software Engineer</h2>
                    <p className="hero-description animate-fadeIn">
                        Crafting scalable solutions and building exceptional digital experiences
                        with modern technologies. Specialized in full-stack development,
                        cloud architecture, and leading high-performing engineering teams.
                    </p>
                    <div className="hero-cta animate-fadeIn">
                        <button className="btn btn-primary" onClick={scrollToProjects}>
                            View My Work
                        </button>
                        <button className="btn btn-secondary" onClick={scrollToContact}>
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
