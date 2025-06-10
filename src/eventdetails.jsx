import React from "react";
import "./event-details.scss";
import { CalendarDays, Building2, GraduationCap } from "lucide-react";

const EventDetails = () => {
  return (
    <section className="event-section" id="event">
      <div className="event-header">
        <button className="info-btn">Summit Information</button>
        <h2>
          <span className="black-text">Event</span>
          <span className="blue-text"> Details</span>
        </h2>
      </div>

      <div className="event-cards">
        <div className="event-card">
          <CalendarDays className="icon purple" />
          <h4>Date & Time</h4>
          <p>June 18, 2025</p>
          <span>11:00 AM – 4:30 PM</span>
        </div>

        <div className="event-card">
          <Building2 className="icon blue" />
          <h4>Venue</h4>
          <p>The Monarch </p>
          <span>Indirapuram Habitat Centre</span>
        </div>

        <div className="event-card">
          <GraduationCap className="icon red" />
          <h4>Target Audience</h4>
          <p>Youth aged 15+ years</p>
          <span>Students & Young Professionals</span>
        </div>
      </div>

      <div className="event-image-box">
        <img src="Event Details.jpg" alt="Conference Hall" />
        <h5>Lock Your Date</h5>
      </div>

      <div className="event-stats">
        <div><span className="blue-text">100+</span><p>Expected Attendees</p></div>
        <div><span className="red-text">4</span><p>Expert Speakers</p></div>
        <div><span>4</span><p>Workshop Sessions</p></div>
        <div><span>By Invitation</span><p>Registration Cost</p></div>
      </div>
    </section>
  );
};

export default EventDetails;
