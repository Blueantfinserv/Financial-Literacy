import React from "react";
import "./about.scss";
import { PiggyBank, TrendingUp, CreditCard } from "lucide-react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-top">
        <button className="mission-btn">About Our Mission</button>
        <h2>
          <span className="black-text">About the</span>{" "}
          <span className="red-text">Summit</span>
        </h2>
        <p className="about-description">
          Join us for a transformative two-day event designed to equip young
          adults with the financial knowledge and skills they need to build a
          secure future.
        </p>
      </div>

      <div className="about-content">
        <img
          src="About.jpg"
          alt="People in a financial workshop"
          className="about-img"
        />

        <div className="about-cards">
          <div className="about-card">
            <PiggyBank className="icon orange" />
            <div>
              <h4>Smart Money Management</h4>
              <p>
                Learn essential budgeting, saving, and spending strategies for
                long-term financial success and prosperity.
              </p>
            </div>
          </div>

          <div className="about-card">
            <TrendingUp className="icon purple" />
            <div>
              <h4>Investment Fundamentals</h4>
              <p>
                Understand the basics of investing, compound interest, and
                building wealth over time through smart decisions.
              </p>
            </div>
          </div>

          <div className="about-card">
            <CreditCard className="icon blue" />
            <div>
              <h4>Credit & Debt Management</h4>
              <p>
                Navigate credit cards, loans, and debt responsibly to maintain a
                healthy financial profile and credit score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
