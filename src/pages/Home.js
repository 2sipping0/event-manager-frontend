import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaUser, FaLightbulb } from 'react-icons/fa';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Discover & Create Amazing Events</h1>
            <p>
              Find the perfect events to attend or create your own. Connect with people
              who share your interests.
            </p>
            <div className="hero-actions">
              <Link to="/events" className="btn btn-primary">
                Explore Events
              </Link>
              <Link to="/events/create" className="btn btn-outline">
                Create Event
              </Link>
            </div>
          </div>
          <div className="hero-image">
            {/* Hero image would go here */}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Everything you need to manage events</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCalendarCheck />
              </div>
              <h3>Easy Event Creation</h3>
              <p>
                Create and manage events with our intuitive interface.
                Customize every detail to make your event stand out.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaUser />
              </div>
              <h3>Connect With Others</h3>
              <p>
                Find events that match your interests and connect
                with like-minded people in your community.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaLightbulb />
              </div>
              <h3>Discover New Experiences</h3>
              <p>
                Browse through a wide variety of events and discover
                new experiences happening around you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>
            Join our community today and start exploring or creating events.
          </p>
          <Link to="/events/create" className="btn btn-primary">
            Create Your First Event
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;