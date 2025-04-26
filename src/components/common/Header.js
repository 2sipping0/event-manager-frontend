import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <FaCalendarAlt className="logo-icon" />
          <span>Event Manager</span>
        </Link>
        
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        
        <Link to="/events/create" className="btn btn-primary">Create Event</Link>
      </div>
    </header>
  );
};

export default Header;