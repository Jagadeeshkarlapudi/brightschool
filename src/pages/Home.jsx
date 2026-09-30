import { Link } from "react-router-dom";
import "./Home.css";
import React, { useState } from "react";

const highlights = [
  { icon: "bi-people-fill", title: "Child-Centred Learning", text: "Dummy description for a caring and engaging learning environment." },
  { icon: "bi-award-fill", title: "Holistic Development", text: "Dummy description covering academics, confidence, creativity and values." },
  { icon: "bi-shield-check", title: "Safe Environment", text: "Dummy content about student safety, care and a positive school culture." },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-bg" />
        <div className="home-hero-overlay" />
        <div className="container home-hero-content">
          <div className="hero-copy">
            <span className="home-badge">
              <i className="bi bi-mortarboard-fill" />
              Welcome to Bright Masters Global School
            </span>

            <h1>
              Explore Your <span>Bright Future</span> With Excellence
            </h1>

            <p>
              A warm, progressive school environment where children are
              encouraged to learn, explore, create and grow with confidence.
              Replace this dummy text with your official school introduction.
            </p>

            <div className="hero-actions">
              <Link to="/about" className="btn-school-primary">
                Discover Our School <i className="bi bi-arrow-right" />
              </Link>
              <Link to="/contact" className="btn-school-outline hero-outline">
                Contact Us <i className="bi bi-telephone" />
              </Link>
            </div>

            <div className="hero-stats">
              <div><strong>Play Group</strong><span>to 7th Class</span></div>
              <div><strong>Admissions</strong><span>Open — Dummy</span></div>
              <div><strong>Learning</strong><span>With Excellence</span></div>
            </div>
          </div>
        </div>

        <a href="#why-us" className="hero-scroll">
          Explore <i className="bi bi-chevron-down" />
        </a>
      </section>

      <section id="why-us" className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title mt-2">A Place to Learn, Grow & Shine</h2>
            <p className="section-text mx-auto" style={{maxWidth: 720}}>
              Dummy content for your school website. Replace these sections
              with your school's actual vision, facilities and achievements.
            </p>
          </div>

          <div className="row g-4">
            {highlights.map((item) => (
              <div className="col-md-4" key={item.title}>
                <div className="info-card">
                  <div className="icon-box mb-4"><i className={`bi ${item.icon}`} /></div>
                  <h3>{item.title}</h3>
                  <p className="section-text mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-about-preview section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-visual">
                <img src="/logo.jpeg" alt="School logo" />
                <span className="floating-card">
                  <i className="bi bi-stars" /> Learning with purpose
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-eyebrow">About Our School</span>
              <h2 className="section-title mt-2">Building Strong Foundations for Tomorrow</h2>
              <p className="section-text">
                Use this section for your school's story, educational philosophy,
                leadership message and approach to student development.
              </p>
              <p className="section-text">
                Add your real information here later. The layout is intentionally
                prepared as a reusable Indian school website template.
              </p>
              <Link to="/about" className="btn-school-primary mt-2">
                Read More <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row align-items-end mb-4">
            <div className="col-md-8">
              <span className="section-eyebrow">School Life</span>
              <h2 className="section-title mt-2 mb-0">Learn Beyond the Classroom</h2>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <Link to="/gallery" className="btn-school-outline">
                View Gallery <i className="bi bi-images" />
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {["Academic Learning", "Creative Activities", "Sports & Fitness"].map((title, i) => (
              <div className="col-md-4" key={title}>
                <div className="life-card">
                  <div className="life-number">0{i + 1}</div>
                  <h3>{title}</h3>
                  <p className="section-text mb-0">
                    Dummy content for school activities, clubs, events and
                    experiences that support all-round student development.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container text-center">
          <span className="section-eyebrow">Admissions</span>
          <h2>Give Your Child a Bright Place to Grow</h2>
          <p>Replace this dummy admissions message with your current admission details.</p>
          <Link to="/contact" className="btn-school-primary">
            Enquire Now <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </section>
    </>
  );
}
