// src/pages/EventDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchEventById } from '../api';
import Loading from '../components/common/Loading';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      try {
        setLoading(true);
        const data = await fetchEventById(id);
        setEvent(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load event details. Please try again later.');
        setLoading(false);
      }
    };

    getEvent();
  }, [id]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="error-container">
        <h2>Oops!</h2>
        <p>{error}</p>
        <Link to="/events" className="btn btn-primary">
          Back to Events
        </Link>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="error-container">
        <h2>Event Not Found</h2>
        <p>The event you're looking for doesn't exist or has been removed.</p>
        <Link to="/events" className="btn btn-primary">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="event-details-page">
      <div className="container">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <div className="event-meta">
          <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          {event.location && <p><strong>Location:</strong> {event.location}</p>}
        </div>
        <div className="actions">
          <Link to="/events" className="btn btn-outline">
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;