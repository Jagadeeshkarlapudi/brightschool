import "./About.css";
import React, { useState } from "react";

const values = [
  ["bi-heart-fill", "Care & Respect", "Dummy content about creating a caring, respectful environment for every child."],
  ["bi-lightbulb-fill", "Curiosity", "Dummy content about encouraging questions, creativity and independent thinking."],
  ["bi-trophy-fill", "Excellence", "Dummy content about setting high expectations and celebrating progress."],
  ["bi-people-fill", "Community", "Dummy content about partnership between school, parents and the wider community."],
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow"><i className="bi bi-building" /> About Us</span>
          <h1 className="mt-3">About Bright Masters Global School</h1>
          <p className="mt-3">
            A professional school template section. Replace this introduction
            with your school's real history, vision and educational philosophy.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="about-logo-card">
                <img src="/logo.jpeg" alt="Bright Masters Global School logo" />
              </div>
            </div>
            <div className="col-lg-7">
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title mt-2">A Foundation for a Bright Future</h2>
              <p className="section-text">
                Dummy content: Bright Masters Global School is presented here
                as a child-focused institution committed to academic learning,
                values and all-round development.
              </p>
              <p className="section-text">
                Replace this section with the school's establishment year,
                founders' message, educational approach, achievements and
                community impact.
              </p>
              <div className="about-quote">
                <i className="bi bi-quote" />
                “Explore Your Bright Future With Excellence”
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding about-values">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Our Values</span>
            <h2 className="section-title mt-2">What We Believe In</h2>
          </div>

          <div className="row g-4">
            {values.map(([icon, title, text]) => (
              <div className="col-sm-6 col-lg-3" key={title}>
                <div className="info-card">
                  <div className="icon-box mb-4"><i className={`bi ${icon}`} /></div>
                  <h3>{title}</h3>
                  <p className="section-text mb-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {[
              ["Vision", "Dummy vision statement describing the kind of learner and citizen the school aims to nurture."],
              ["Mission", "Dummy mission statement describing teaching, values, student support and community partnership."],
              ["Principal's Message", "Dummy principal message. Replace this with the official leadership message and photograph."]
            ].map(([title, text]) => (
              <div className="col-lg-4" key={title}>
                <div className="info-card">
                  <h3>{title}</h3>
                  <p className="section-text">{text}</p>
                  <a href="#read-more" className="text-school">
                    Read more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
