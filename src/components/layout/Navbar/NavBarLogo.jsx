import { Link } from "react-router-dom";
import logoImg from "/logo/logo.png";
import "./navbarlogo.css";

const NavbarLogo = ({ onClick }) => {
    return (
        <Link to="/" className="logo" onClick={onClick} aria-label="DevBoomi Home">
            <img className="logo-img" src={logoImg} alt="DevBoomi" />
        </Link>
    );
};

export default NavbarLogo;