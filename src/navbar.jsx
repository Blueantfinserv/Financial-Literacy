import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";  // We'll create this file for normal CSS

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
   <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
  <div className="container">
    <div className="navbar-inner">
      <div className="logo-section">
        <img src="blueAnt.png" alt="Blueant Logo" className="logo-img" />
      </div>


          <div className="menu-desktop">
            <div className="menu-items">
              <button onClick={() => scrollToSection("home")} className="menu-btn">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="menu-btn">
                About
              </button>
              <button onClick={() => scrollToSection("speakers")} className="menu-btn">
                Speakers
              </button>
              <button onClick={() => scrollToSection("schedule")} className="menu-btn">
                Schedule
              </button>
              <button onClick={() => scrollToSection("event-details")} className="menu-btn">
                Event Details
              </button>
              <button onClick={() => scrollToSection("register")} className="register-btn">
                Register Now
              </button>
            </div>
          </div>

          <div className="menu-mobile-toggle">
            <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle-btn">
              {isOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="menu-mobile">
          <button onClick={() => scrollToSection("home")} className="mobile-menu-btn">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="mobile-menu-btn">
            About
          </button>
          <button onClick={() => scrollToSection("speakers")} className="mobile-menu-btn">
            Speakers
          </button>
          <button onClick={() => scrollToSection("schedule")} className="mobile-menu-btn">
            Schedule
          </button>
          <button onClick={() => scrollToSection("event-details")} className="mobile-menu-btn">
            Event Details
          </button>
          <button onClick={() => scrollToSection("register")} className="mobile-register-btn">
            Register Now
          </button>
        </div>
      )}
    </nav>
  );
}
