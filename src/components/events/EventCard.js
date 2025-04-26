import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.scss';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const EventCard = ({ event }) => {
  const { _id, title, date, location, description, image } = event;
  
  // Format date for display
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="event-card">
      <div className="event-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="placeholder-image"></div>
        )}
      </div>
      
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        
        <div className="event-details">
          <div className="event-detail">
            <FaCalendar />
            <span>{formattedDate}</span>
          </div>
          
          {location && (
            <div className="event-detail">
              <FaMapMarkerAlt />
              <span>{location}</span>
            </div>
          )}
        </div>
        
        <p className="event-description">
          {description.length > 120 
            ? `${description.substring(0, 120)}...` 
            : description}
        </p>
        
        <Link to={`/events/${_id}`} className="btn btn-outline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;