import React, { useState } from "react";
import "./register.scss";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ageGroup: ""
  });

  const [loading, setLoading] = useState(false); // new loading state

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwHuSpyS6PAAXRfedcsRcQkdAtgW5oozcO_EOG4AE9nEDKPViz_WhRJau9FqxiWHT5jGg/exec";

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(e.target),
    })
      .then(() => {
        alert("✅ Registered Successfully!");
        setLoading(false);
        // Optional: Reset form after submit
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          ageGroup: "",
        });
      })
      .catch(() => {
        alert("❌ Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section className="register-section">
      <div className="register-overlay">
        <div className="form-container">
          <p className="tag">🎟️ FREE REGISTRATION - Limited Seats!</p>
          <h2>
            Reserve Your <span>Seat Today!</span>
          </h2>
          <p className="subtext">
            Join us for this transformative financial literacy experience.
          </p>

          <form onSubmit={handleSubmit} name="registration-form">
            <div className="benefits">
              <div>
                🎓 <h4>Expert Learning</h4>
                <p>Learn from industry professionals</p>
              </div>
              <div>
                🤝 <h4>Networking</h4>
                <p>Connect with like-minded peers</p>
              </div>
              <div>
                📜 <h4>Certificate</h4>
                <p>Get completion certificate</p>
              </div>
            </div>

            <div className="input-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                onChange={handleChange}
                value={formData.firstName}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              value={formData.email}
            />
            <div className="input-row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                value={formData.phone}
              />
              <select
                name="ageGroup"
                required
                onChange={handleChange}
                value={formData.ageGroup}
              >
                <option value="">Select your age group</option>
                <option value="Under 18">Under 18</option>
                <option value="18-25">18–25</option>
                <option value="26-35">26–35</option>
                <option value="36+">36+</option>
              </select>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "🎯 Secure My Free Seat"}
            </button>

            <p className="secure-note">
              🔒 Your information is secure and will never be shared with third
              parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
