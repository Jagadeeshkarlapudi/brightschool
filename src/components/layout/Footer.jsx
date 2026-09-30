import { Link } from "react-router-dom";
import "./Footer.css";
import React, { useState } from "react";


export default function Footer() {
  return (
    <footer className="school-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <img className="footer-logo" src="/logo.jpeg" alt="Bright Masters Global School" />
            <h3>Bright Masters Global School</h3>
            <p>
              Explore Your Bright Future With Excellence. Dummy content for now;
              replace this paragraph with the school's official introduction.
            </p>
            <div className="footer-socials">
              <a href="#facebook" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="#instagram" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a href="#youtube" aria-label="YouTube"><i className="bi bi-youtube" /></a>
              <a href="#whatsapp" aria-label="WhatsApp"><i className="bi bi-whatsapp" /></a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h5>Quick Links</h5>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-6 col-lg-2">
            <h5>Classes</h5>
            <Link to="/classes/play-school">Play School</Link>
            <Link to="/classes/nursery">Nursery</Link>
            <Link to="/classes/lkg">LKG</Link>
            <Link to="/classes/ukg">UKG</Link>
            <Link to="/classes/1st-class">1st Class</Link>
            <Link to="/classes/7th-class">7th Class</Link>
          </div>

          <div className="col-lg-3">
            <h5>Contact</h5>
            <p><i className="bi bi-geo-alt-fill" />1-10-1/214/p/3 & 4/NR, 4th Hitension pole, sri chakripuram, kushaiguda, Hyderabad Telangana, India</p>
            <p><i className="bi bi-telephone-fill" /><a href="tel:+91 8686356192">+91 8686356192</a></p>
            <p><i className="bi bi-envelope-fill" /> info@example.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bright Masters Global School. All rights reserved.</span>
          <span>Designed for excellence in learning.</span>
        </div>
      </div>
    </footer>
  );
}
