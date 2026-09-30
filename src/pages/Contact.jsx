import "./Contact.css";
import React, { useState } from "react";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow"><i className="bi bi-telephone" /> Contact</span>
          <h1 className="mt-3">We Would Love to Hear From You</h1>
          <p className="mt-3">
            Replace the dummy contact information below with the school's
            official address, phone numbers, email and social links.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="contact-info">
                <span className="section-eyebrow">Get in Touch</span>
                <h2 className="section-title mt-2">Let's Connect</h2>

                <div className="contact-item">
                  <div className="icon-box"><i className="bi bi-geo-alt-fill" /></div>
                  <div><strong>School Address</strong><p>1-10-1/214/p/3 & 4/NR, 4th Hitension pole, sri chakripuram, kushaiguda, Hyderabad Telangana, India</p></div>
                </div>

                <div className="contact-item">
                  <div className="icon-box"><i className="bi bi-telephone-fill" /></div>
                  <div><strong>Phone</strong><a href="tel:918686356192"><p>+91 8686356192</p></a></div>
                </div>

                <div className="contact-item">
                  <div className="icon-box"><i className="bi bi-envelope-fill" /></div>
                  <div><strong>Email</strong><p>info@example.com</p></div>
                </div>

                <div className="contact-item">
                  <div className="icon-box"><i className="bi bi-clock-fill" /></div>
                  <div><strong>Office Hours</strong><p>Monday - Saturday, 9:00 AM - 4:00 PM</p></div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <h3>Send an Enquiry</h3>
                <p className="section-text">
                  This form is frontend-only for now. Connect it to your backend,
                  email service or form provider later.
                </p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label>Parent / Guardian Name</label>
                    <input className="form-control" placeholder="Your name" />
                  </div>
                  <div className="col-md-6">
                    <label>Phone Number</label>
                    <input className="form-control" placeholder="+91" />
                  </div>
                  <div className="col-12">
                    <label>Email</label>
                    <input className="form-control" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="col-md-6">
                    <label>Class Interested In</label>
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>Select a class</option>
                      <option>Play School</option>
                      <option>Nursery</option>
                      <option>LKG</option>
                      <option>UKG</option>
                      <option>1st - 7th Class</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Student Name</label>
                    <input className="form-control" placeholder="Student name" />
                  </div>
                  <div className="col-12">
                    <label>Message</label>
                    <textarea className="form-control" rows="5" placeholder="Write your enquiry..." />
                  </div>
                  <div className="col-12">
                    <button className="btn-school-primary" type="submit">
                      Send Enquiry <i className="bi bi-send-fill" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* <div className="contact-map mt-5">
            <i className="bi bi-map" />
            <h3>Google Maps Location</h3>
            <p>Replace this placeholder with your embedded Google Maps iframe.</p>
          </div> */}
        </div>
      </section>
    </>
  );
}
