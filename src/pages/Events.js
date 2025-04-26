import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../api';
import EventCard from '../components/events/EventCard';
import Loading from '../components/common/Loading.js';
import './Events.scss';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        setLoading(true);
        const data = await fetchEvents();
        setEvents(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  if (loading) return <Loading />;
  
  if (error) {
    return (
      <div className="error-container">
        <h2>Oops!</h2>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="events-page">
      <div className="page-header">
        <h1>Upcoming Events</h1>
        <p>Discover and join exciting events in your area</p>
      </div>
      
      {events.length === 0 ? (
        <div className="no-events">
          <h3>No events found</h3>
          <p>There are currently no events scheduled. Check back soon!</p>
        </div>
      ) : (
        <div className="events-grid">
          {events.map(event => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;