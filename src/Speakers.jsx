import React from "react";
import "./speakers.scss";

const speakers = [
  {
    name: "Mr. Rohit Raman",
    title: "Founder & Director",
    company: "Blueant Finserv",
    tag: "Wealth Management",
    description: "20+ years experience in financial planning and wealth management",
    img: "Rohit Raman.png",
  },
  {
    name: "Mr. Sachin Narang",
    title: "Vice President",
    company: "Blueant Finserv",
    tag: "Investment Strategy",
    description: "Expert in market analysis and investment strategies for young adults",
    img: "Sachin Narang.png",
  },
  {
    name: "Mr. Avesh Kumar Prajapati",
    title: "Asst. Vice President",
    company: "Blueant Finserv",
    tag: "Education",
    description: "Passionate about teaching financial literacy to young generations",
    img: "Avesh Kumar Prajapati.png",
  },
  {
    name: "Mr. Rajnish Kumar",
    title: "Asst. Vice President",
    company: "Blueant Finserv",
    tag: "Financial Planning",
    description: "Specializes in budget planning and debt management strategies",
    img: "Rajnish Kumar.png",
  },
];

export default function Speakers() {
  return (
    <section className="speakers-section">
      <div className="speakers-heading">
        <h2 className="main-heading">
          Featured<span> Speakers</span>
        </h2>
        <p className="tagline">
          Learn from industry experts and financial leaders who are shaping the future of finance
        </p>
      </div>

      <div className="speakers-grid">
        {speakers.map((s, i) => (
          <div className="speaker-card" key={i}>
            <img src={s.img} alt={s.name} className="speaker-image" />
            <div className="speaker-details">
              <h3>{s.name}</h3>
              <p className="title">{s.title}</p>
              <p className="company">{s.company}</p>
              <span className="tags">{s.tag}</span>
              <p className="desc">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
