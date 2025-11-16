import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-mark" />
          <span className="brand-text">EventHub</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
          <NavLink to="/events" className="nav-link">Events</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </nav>

        <div className="actions">
          <Link to="/auth/login" className="btn btn-text">Login</Link>
          <Link to="/auth/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
