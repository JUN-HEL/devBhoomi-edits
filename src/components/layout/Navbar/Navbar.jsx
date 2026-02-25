import "./navbar.css";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import ThemeToggle from "./ThemeToggle";
import { useNavbar } from "./useNavbar";
import NavbarLogo from "./NavBarLogo";

const Navbar = ({ theme, toggleTheme }) => {
    const { scrolled, menuOpen, closeMenu, toggleMenu } = useNavbar();

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
            <div className="nav-container">
                <NavbarLogo onClick={closeMenu} />

                {/* overlay */}
                <div className={`nav-overlay ${menuOpen ? "show" : ""}`} onClick={closeMenu} />

                {/* links */}
                <NavbarLinks
                    menuOpen={menuOpen}
                    closeMenu={closeMenu}
                    theme={theme}
                    toggleTheme={toggleTheme}
                />

                {/* right actions */}
                <div className="nav-actions">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

                    <Link to="/contact" className="nav-btn desktop-btn" onClick={closeMenu}>
                        Let’s Talk
                    </Link>

                    <button
                        type="button"
                        className={`hamburger ${menuOpen ? "open" : ""}`}
                        onClick={toggleMenu}
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