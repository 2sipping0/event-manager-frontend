import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../api';

const EventCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      await createEvent(formData);
      setLoading(false);
      navigate('/events');
    } catch (err) {
      setError('Failed to create event. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="event-form-container">
      <h2>Create New Event</h2>
      
      {error && <div className="alert alert-danger">{error}</div>}
      
      <form className="event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Event Title*</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter event title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date*</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter event location"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description*</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Describe your event"
          ></textarea>
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            className="btn btn-outline"
            onClick={() => navigate('/events')}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Event'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventCreate;