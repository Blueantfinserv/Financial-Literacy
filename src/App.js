import React from 'react';
import Hero from './hero';
import Navbar from './navbar';
import About from './about';
import EventDetails from './eventdetails';
import Speakers from './Speakers';
import Schedule from './Schedule';
import Gallery from './Gallery';
import RegisterForm from './RegisterForm';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="event-details">
        <EventDetails />
      </section>

      <section id="speakers">
        <Speakers />
      </section>

      <section id="schedule">
        <Schedule />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="register">
        <RegisterForm />
      </section>
    </div>
  );
}

export default App;
