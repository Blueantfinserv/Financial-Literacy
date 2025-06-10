import React from "react";
import "./hero.scss";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          <span className="black-text1">Financial Literacy </span>
          <span className="red-text1">Workshop 2025</span>
        </h1>
        <p>
          The Wealth Code For <span className="blue-text1">GEN Z</span>
        </p>

        <div className="hero-cards">
          <div className="info-card">
            <Calendar className="icon red" />
            <div>
              <h3>June 18, 2025</h3>
              <p>11 am to 4:30 pm</p>
            </div>
          </div>
          <div className="info-card">
            <MapPin className="icon blue" />
            <div>
              <h3>The Monarch </h3>
              <p>Indirapuram Habitat Centre</p>
            </div>
          </div>
        </div>

        <div className="hero-buttons">
          <button
  className="btn outline-btn"
  onClick={() => {
    const speakerSection = document.getElementById("speakers");
    if (speakerSection) {
      speakerSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  View Speakers
</button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
