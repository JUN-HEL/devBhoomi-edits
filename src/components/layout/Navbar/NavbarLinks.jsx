import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ThemeToggle from "./ThemeToggle";

const NavbarLinks = ({ menuOpen, closeMenu, theme, toggleTheme }) => {
    return (
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
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} variant="full" />
            </li>

            {/* MOBILE CTA */}
            <li className="mobile-cta">
                <Link to="/contact" className="nav-btn mobile-btn" onClick={closeMenu}>
                    Let’s Talk
                </Link>
            </li>
        </ul>
    );
};

export default NavbarLinks;