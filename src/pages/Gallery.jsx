import { useEffect } from "react";
import "./Gallery.css";
import React, { useState } from "react";

const galleryImages = Array.from({ length: 10 }, (_, index) => ({
  src: `/gallery/gallery-${index + 1}.jpeg`,
  title: `School Gallery ${index + 1}`,
}));

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const close = (event) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow"><i className="bi bi-images" /> Gallery</span>
          <h1 className="mt-3">School Life in Pictures</h1>
          <p className="mt-3">
            Replace the ten placeholder images in public/gallery with your
            actual school photographs. Click any image to open the popup.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {galleryImages.map((image, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={image.src}>
                <button
                  className="gallery-card"
                  type="button"
                  onClick={() => setSelected(index)}
                  aria-label={`Open ${image.title}`}
                >
                  <img src={image.src} alt={image.title} />
                  <span className="gallery-overlay">
                    <i className="bi bi-zoom-in" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected !== null && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <button
            className="gallery-close"
            type="button"
            aria-label="Close image"
            onClick={() => setSelected(null)}
          >
            <i className="bi bi-x-lg" />
          </button>

          <button
            className="gallery-arrow gallery-prev"
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            <i className="bi bi-chevron-left" />
          </button>

          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[selected].src} alt={galleryImages[selected].title} />
            <div>{galleryImages[selected].title}</div>
          </div>

          <button
            className="gallery-arrow gallery-next"
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected + 1) % galleryImages.length);
            }}
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      )}
    </>
  );
}
