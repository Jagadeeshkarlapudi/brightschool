import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section-padding text-center">
      <div className="container">
        <span className="section-eyebrow">404</span>
        <h1 className="section-title mt-3">Page Not Found</h1>
        <p className="section-text">The page you are looking for does not exist.</p>
        <Link to="/" className="btn-school-primary">Back to Home</Link>
      </div>
    </section>
  );
}
