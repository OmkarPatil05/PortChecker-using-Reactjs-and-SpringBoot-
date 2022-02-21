import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <h1 > <Link to="/">Port Checker</Link> </h1>
            <Link to="/about" className="nav-items">About Us</Link>
        </div>
    );
}

export default Header;