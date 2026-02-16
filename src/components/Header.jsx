import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo">
                    <span className="gradient-text">Portfolio</span>
                </div>

                <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
                    <a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a>
                    <a onClick={() => scrollToSection('experience')} className="nav-link">Experience</a>
                    <a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
                    <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
                </nav>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header
