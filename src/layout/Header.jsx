import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="eh-header">
      <div className="eh-container eh-header-inner">
        <Link to="/" className="eh-brand" aria-label="EventHub Home">
          <span className="eh-brand-mark" />
          <span className="eh-brand-text">EventHub</span>
        </Link>

        <nav className={`eh-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          <NavLink to="/" className={({ isActive }) => `eh-nav-link ${isActive && pathname === "/" ? "is-active" : ""}`}>Home</NavLink>
          <NavLink to="/events" className="eh-nav-link">Events</NavLink>
          <NavLink to="/about" className="eh-nav-link">About</NavLink>
        </nav>

        <div className="eh-actions">
          <Link to="/auth/login" className="eh-btn eh-btn-text">Login</Link>
          <Link to="/auth/signup" className="eh-btn eh-btn-primary">Sign Up</Link>
          <button className="eh-burger" aria-label="Toggle Menu" onClick={() => setOpen(v => !v)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
