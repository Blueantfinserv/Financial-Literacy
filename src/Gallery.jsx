import React from "react";
import "./gallery.scss";

const images = [
  "workshop-4.jpg",
  "workshop-6.jpg",
  "workshop-7.jpg",
  "workshop-9.jpg",
  "workshop-11.jpg",
  "workshop-13.jpg",
  "workshop-18.jpg",
  "workshop-20.jpg",
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <h2>Past <span>Events Gallery</span></h2>
        <p>Highlights from our previous successful summits</p>
      </div>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div className="gallery-card" key={idx}>
            <img src={img} alt={`Event ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
