import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ⚽ Rural League
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li><Link to="/tournaments">Tournaments</Link></li>

        <li><Link to="/teams">Teams</Link></li>

        <li><Link to="/players">Players</Link></li>

        <li><Link to="/fixtures">Fixtures</Link></li>

        <li><Link to="/standings">Standings</Link></li>

        <li><Link to="/gallery">Gallery</Link></li>

        <li><Link to="/contact">Contact</Link></li>

        <li><Link to="/login">Login</Link></li>

        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;