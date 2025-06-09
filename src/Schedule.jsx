import React from "react";
import "./schedule.scss";

const scheduleData = {
  day1: {
    date: "Day 1 - March 13, 2025",
    sessions: [
      { time: "9:00 AM", title: "Registration & Welcome Coffee", desc: "Network with fellow attendees" },
      { time: "10:00 AM", title: "Opening Keynote: Financial Literacy Fundamentals", desc: "Speaker: Sarah Johnson" },
      { time: "11:30 AM", title: "Workshop: Budgeting Basics", desc: "Interactive hands-on session" },
      { time: "1:00 PM", title: "Lunch & Networking", desc: "Connect with speakers and peers" },
      { time: "2:30 PM", title: "Panel: Investment Strategies for Beginners", desc: "Moderated by Michael Chen" },
      { time: "4:00 PM", title: "Workshop: Understanding Credit Scores", desc: "Led by David Thompson" },
    ],
  },
  day2: {
    date: "Day 2 - March 14, 2025",
    sessions: [
      { time: "9:00 AM", title: "Morning Coffee & Recap", desc: "Review Day 1 key insights" },
      { time: "9:30 AM", title: "Digital Finance, Fintech Trends Security and Scams", desc: "Speaker: Emily Rodriguez" },
      { time: "11:00 AM", title: "Panel: Future of Finance", desc: "All panelists discussion" },
      { time: "12:30 PM", title: "Lunch & Awards Ceremony", desc: "Recognition of outstanding participants" },
      { time: "2:00 PM", title: "Question and Answers with All 4 Speakers", desc: "Open floor for questions" },
      { time: "3:30 PM", title: "Closing Ceremony & Next Steps", desc: "Resources and follow-up materials" },
    ],
  },
};

export default function Schedule() {
  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-header">
        <h2>Event <span>Schedule</span></h2>
        <p>Two days packed with valuable insights and networking opportunities</p>
      </div>
      <div className="schedule-content">
        {[scheduleData.day1, scheduleData.day2].map((day, idx) => (
          <div className="day-column" key={idx}>
            <h3>{day.date}</h3>
            <div className="sessions">
              {day.sessions.map((session, i) => (
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
        ))}
      </div>
    </section>
  );
}
