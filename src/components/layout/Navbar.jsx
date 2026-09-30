import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ classes }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [classesOpen, setClassesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setClassesOpen(false);
  };

  return (
    <nav className="school-navbar">
      <div className="container-fluid school-navbar-container">
        <Link to="/" className="school-logo" onClick={closeMenu}>
          <img src="/logo.jpeg" alt="Bright Masters Global School" />
        </Link>

        <button
          className={`school-hamburger ${menuOpen ? "hamburger-active" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`school-navigation ${menuOpen ? "navigation-open" : ""}`}>
          <ul className="school-nav-list">
            <li>
              <NavLink to="/" end className="school-nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="school-nav-link" onClick={closeMenu}>
                About
              </NavLink>
            </li>

            <li className={`classes-menu ${classesOpen ? "classes-open" : ""}`}>
              <button
                type="button"
                className="school-nav-link classes-button"
                onClick={() => setClassesOpen((value) => !value)}
                aria-expanded={classesOpen}
              >
                <span>Classes</span>
                <span className="dropdown-arrow" />
              </button>

              <ul className="classes-dropdown">
                {classes.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/classes/${item.slug}`} onClick={closeMenu}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink to="/gallery" className="school-nav-link" onClick={closeMenu}>
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="school-nav-link" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
