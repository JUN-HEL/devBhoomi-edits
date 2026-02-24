import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../../styles/navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
            <div className="nav-container">
                {/* LOGO */}
                <Link to="/" className="logo" onClick={closeMenu}>
                    DevBoomi
                </Link>

                {/* OVERLAY */}
                <div className={`nav-overlay ${menuOpen ? "show" : ""}`} onClick={closeMenu} />

                {/* LINKS */}
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li>
                        <HashLink smooth to="/#hero" onClick={closeMenu}>
                            Home
                        </HashLink>
                    </li>

                    <li>
                        <HashLink smooth to="/#services" onClick={closeMenu}>
                            Services
                        </HashLink>
                    </li>

                    <li>
                        <Link to="/work" onClick={closeMenu}>
                            Work
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>

                    {/* MOBILE THEME TOGGLE */}
                    <li className="mobile-theme">
                        <button
                            type="button"
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                            title="Toggle theme"
                        >
                            <span className="theme-icon">{theme === "dark" ? "☀️" : "🌙"}</span>
                            <span className="theme-text">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                        </button>
                    </li>

                    {/* MOBILE CTA */}
                    <li className="mobile-cta">
                        <Link to="/contact" className="nav-btn mobile-btn" onClick={closeMenu}>
                            Let’s Talk
                        </Link>
                    </li>
                </ul>

                {/* RIGHT SIDE ACTIONS */}
                <div className="nav-actions">
                    {/* DESKTOP THEME TOGGLE */}
                    <button
                        type="button"
                        className="theme-toggle icon-only"
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        title="Toggle theme"
                    >
                        {theme === "dark" ? "☀️" : "🌙"}
                    </button>

                    {/* DESKTOP CTA */}
                    <Link to="/contact" className="nav-btn desktop-btn" onClick={closeMenu}>
                        Let’s Talk
                    </Link>

                    {/* HAMBURGER */}
                    <button
                        type="button"
                        className={`hamburger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;