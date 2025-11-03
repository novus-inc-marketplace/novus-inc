# Novus Academy Project Management Guide

## 1. Project Overview

Novus Academy is an online learning platform built with a modern MERN-stack architecture, enhanced with Supabase for user authentication.

### Current Status: In Development

- **Foundation:** The core architecture is stable.
- **Authentication:** A hybrid system using Supabase for authentication and a Node.js backend for application logic is in place and functional.
- **Core Features:** Courses and Forums have been implemented and refactored to use the new secure architecture.
- **New Features:** A foundational gamification system (Points) has been added.

## 2. Architecture & Technology Stack

The application is divided into two main parts: a React frontend and a Node.js/Express backend.

### Backend
- **Framework**: Node.js with Express.js
- **Database**: MongoDB (using Mongoose)
- **Authentication Logic**: The backend validates JWTs issued by Supabase. It does not handle password storage or OAuth flows itself.

### Frontend
- **Framework**: React (with Vite)
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **API Communication**: A centralized `axios` service in `frontend/src/services/api.js` handles all authenticated requests to the backend.

### Authentication Service
- **Provider**: Supabase Auth
- **Responsibilities**: User sign-up, sign-in (password & Google OAuth), and password reset. It is the single source of truth for user identity.

### Project Structure
```
novus_academy/
├── backend/              # Node.js/Express backend
│   ├── controllers/      # Request handling logic
│   ├── middleware/       # Auth middleware, etc.
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API route definitions
│   ├── .env.example      # Example environment variables
│   └── index.js          # Server entry point
└── frontend/             # React frontend (Vite)
    ├── src/
    │   ├── components/   # Reusable UI components
    │   ├── context/      # AuthContext
    │   ├── pages/        # Page components
    │   └── services/     # Centralized API service (api.js)
    ├── .env.example      # Example environment variables
    └── package.json
```