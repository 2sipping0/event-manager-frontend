# Event Manager Frontend

## Overview

This is the frontend application for the Event Manager system, a web platform that allows users to create, discover, and manage events. Built with React, this frontend provides an intuitive and responsive user interface that communicates with the [Event Manager Backend API](https://github.com/2sipping0/event-manager-backend) to deliver a seamless event management experience.

## Features

- **Clean, Modern UI**: Intuitive navigation and responsive design for all devices
- **Event Discovery**: Browse through upcoming events with a visually appealing layout
- **Event Creation**: Simple form to create new events with essential details
- **Dynamic Content**: Real-time updates when events are created or modified
- **Error Handling**: User-friendly error messages and form validation

## Technology Stack

- **React**: JavaScript library for building the user interface
- **React Router**: For navigation between different views
- **SCSS**: For styling components with maintainable and feature-rich CSS
- **Axios**: For making HTTP requests to the backend API
- **React Icons**: For incorporating icons throughout the interface

## Prerequisites

Before setting up the frontend, ensure you have:

- Node.js (v14.x or higher)
- npm or yarn
- Access to the [Event Manager Backend API](https://github.com/2sipping0/event-manager-backend)

## Getting Started

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/event-manager-frontend.git
   cd event-manager-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory to configure the backend API URL:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```
   Replace the URL with your backend API address if different.

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. The application will open in your browser at http://localhost:3000

**Note:** Ensure the backend server is running before using the frontend application. See the [backend repository](https://github.com/2sipping0/event-manager-backend) for instructions on setting up the API.

## Connecting to the Backend

This frontend application is designed to work with the Event Manager Backend API. The API provides the following endpoints for event management:

- `GET /api/events` - Retrieve all events
- `GET /api/events/:id` - Get a specific event by ID
- `POST /api/events` - Create a new event
- `PUT /api/events/:id` - Update an existing event
- `DELETE /api/events/:id` - Delete an event

The frontend connects to these endpoints through Axios HTTP requests configured in the `src/api/index.js` file.

## Project Structure

```
event-manager-frontend/
├── public/                # Static files
│   ├── index.html         # HTML template
│   └── favicon.ico        # Site favicon
├── src/                   # Source files
│   ├── api/               # API integration
│   │   └── index.js       # API client configuration
│   ├── components/        # Reusable components
│   │   ├── common/        # Shared components
│   │   │   ├── Header.js  # Navigation header
│   │   │   ├── Header.scss # Header styles
│   │   │   ├── Footer.js  # Page footer
│   │   │   └── Loading.js # Loading indicator
│   │   └── events/        # Event-specific components
│   │       └── EventCard.js # Event display card
│   ├── pages/             # Page components
│   │   ├── Home.js        # Home/landing page
│   │   ├── Home.scss      # Home page styles
│   │   ├── Events.js      # Events listing page
│   │   ├── Events.scss    # Events page styles
│   │   └── CreateEvent.js # Event creation form
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
│   └── index.css          # Global styles
└── README.md              # Project documentation
```

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App configuration

## Design Choices

- **Component Structure**: The application follows a modular component architecture, separating concerns between pages and reusable components.
- **SCSS Styling**: Each component has its own SCSS file to encapsulate styles and improve maintainability.
- **Responsive Design**: The interface adapts to different screen sizes using flexbox and grid layouts.
- **Error Handling**: Comprehensive error handling provides clear feedback to users.
- **API Integration**: Centralized API client for consistent data fetching and state management.

## Future Enhancements

- User authentication and profiles
- Event filtering and searching
- Favoriting and saving events
- Social sharing features
- Enhanced mobile experience
- Dark mode theme option

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Related Projects

- [Event Manager Backend](https://github.com/2sipping0/event-manager-backend) - The API backend that powers this frontend application# event-manager-frontend
