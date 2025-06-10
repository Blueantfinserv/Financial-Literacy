import React from "react";
import "./schedule.scss";

const scheduleData = {
  date: "June 18, 2025",
  sessions: [
    { time: "11:00 AM", title: "Welcome Coffee & Opening Keynote", desc: "Kick off the summit and network with fellow attendees" },
    { time: "12:00 PM", title: "Session: Smart Money Management", desc: "Learn budgeting, saving, and smart spending strategies" },
    { time: "1:00 PM", title: "Session: Investment Fundamentals", desc: "Understand compound interest and wealth building" },
    { time: "3:00 PM", title: "Workshop: Budgeting Basics", desc: "Hands-on activity to build your own budget" },
    { time: "4:00 PM", title: "Session: Understanding the Indian Banking System", desc: "Explore how banks operate and support our economy" }
  ],
};
  
export default function Schedule() {
  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-header">
        <h2>Event <span>Schedule</span></h2>
        <p>One day packed with valuable insights and networking opportunities</p>
      </div>
      <div className="schedule-content">
        <div className="day-column">
          <h3>{scheduleData.date}</h3>
          <div className="sessions">
            {scheduleData.sessions.map((session, i) => (
              <div className="session" key={i}>
                <span className="time">{session.time}</span>
                <div className="details">
                  <p className="title">{session.title}</p>
                  <p className="desc">{session.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
