import { Link } from "react-router-dom";
import "./ClassPage.css";

const classDetails = {
  "Play School": {
    icon: "bi-balloon-fill",
    description: "A gentle first step into school life with play-based activities, social interaction and joyful discovery."
  },
  "Nursery": {
    icon: "bi-stars",
    description: "An engaging environment where young learners develop communication, motor skills and confidence."
  },
  "LKG": {
    icon: "bi-palette-fill",
    description: "Foundational learning through stories, activities, creativity, language and early numeracy."
  },
  "UKG": {
    icon: "bi-pencil-fill",
    description: "A balanced preparation year focused on school readiness, curiosity, communication and independence."
  }
};

const defaultDetail = {
  icon: "bi-book-half",
  description: "A structured learning experience combining academics, activities, values, creativity and age-appropriate development."
};

export default function ClassPage({ className }) {
  const detail = classDetails[className] || defaultDetail;

  return (
    <>
      <section className="class-hero">
        <div className="container">
          <span className="class-icon"><i className={`bi ${detail.icon}`} /></span>
          <span className="section-eyebrow mt-4">Classes</span>
          <h1>{className}</h1>
          <p>{detail.description}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <span className="section-eyebrow">About This Class</span>
              <h2 className="section-title mt-2">{className} Learning Programme</h2>
              <p className="section-text">
                Dummy content for the {className} page. Replace this with the
                real syllabus, teaching approach, age group, learning outcomes,
                classroom activities and assessment information.
              </p>
              <p className="section-text">
                You can also add photographs, timetable information, teacher
                profiles, learning resources and parent guidance here.
              </p>

              <div className="row g-3 mt-2">
                {[
                  ["bi-book", "Academic Foundations"],
                  ["bi-brush", "Creative Activities"],
                  ["bi-people", "Social Development"],
                  ["bi-trophy", "Confidence & Skills"]
                ].map(([icon, title]) => (
                  <div className="col-sm-6" key={title}>
                    <div className="class-feature">
                      <i className={`bi ${icon}`} />
                      <span>{title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="class-side-card">
                <h3>What Parents Can Expect</h3>
                <ul>
                  <li>Age-appropriate learning</li>
                  <li>Supportive classroom environment</li>
                  <li>Regular activities and events</li>
                  <li>Parent communication</li>
                  <li>Focus on all-round development</li>
                </ul>
                <Link to="/contact" className="btn-school-primary w-100">
                  Enquire About {className} <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
