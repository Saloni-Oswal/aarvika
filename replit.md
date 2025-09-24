# Aarvika Physiotherapy Clinic

## Overview

Aarvika Physiotherapy Clinic is a modern, responsive web application for a physiotherapy practice. The application serves as a comprehensive digital presence for the clinic, featuring a landing page with multiple sections including services, team information, testimonials, appointment booking, and contact functionality. The system is built as a full-stack application with a React-based frontend and Express.js backend, designed to facilitate patient engagement and appointment management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built using React with TypeScript and follows a component-based architecture. The application uses:

- **React Router**: Implemented with wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack React Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **UI Components**: Comprehensive component library based on Radix UI primitives

The frontend is structured as a single-page application with multiple sections (Hero, About, Services, Team, Testimonials, Booking, Contact) all rendered on the home page, utilizing smooth scrolling navigation between sections.

### Backend Architecture
The server-side application follows a RESTful API design pattern built with Express.js:

- **Framework**: Express.js with TypeScript for type safety
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **API Endpoints**: RESTful endpoints for appointments and contact messages
- **Validation**: Zod schemas for request validation and type safety
- **Development Setup**: Vite integration for development with HMR support

### Database Design
The application uses Drizzle ORM with PostgreSQL schema definitions for three main entities:

- **Users**: Basic user management with username/password authentication
- **Appointments**: Patient appointment booking with service type, preferred timing, and medical condition fields
- **Contact Messages**: Contact form submissions with name, email, subject, and message

Currently implemented with in-memory storage but architected for easy migration to PostgreSQL database.

### Component Structure
The application is organized into logical component sections:

- **Navigation**: Fixed header with smooth scroll navigation
- **Hero**: Landing section with call-to-action buttons
- **About**: Clinic information and mission statement
- **Services**: Service offerings with pricing and descriptions
- **Team**: Staff profiles and qualifications
- **Testimonials**: Patient reviews and feedback
- **Booking**: Appointment booking form with service selection
- **Contact**: Contact form and clinic information
- **Footer**: Site links and social media integration

### Styling System
The application implements a comprehensive design system using:

- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **CSS Variables**: Dynamic theming with light/dark mode support
- **Custom Fonts**: Google Fonts integration (Century Gothic, DM Sans, Fira Code, Geist Mono)
- **Component Variants**: Class variance authority for consistent component styling
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern features
- **Express.js**: Backend web framework for API development
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Build tool and development server with HMR

### Database and ORM
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **Drizzle-kit**: Database migrations and schema management

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI component primitives
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for component variant management

### State Management and Forms
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Form validation resolvers
- **Zod**: Schema validation for type-safe data handling

### Development and Build Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **TSX**: TypeScript execution for development
- **Wouter**: Lightweight router for React applications

### Third-party Integrations
- **Microsoft Graph Client**: Integration capability for Microsoft services
- **Date-fns**: Date manipulation and formatting utilities
- **CMDK**: Command palette component for enhanced UX

The application is architected for scalability with clear separation of concerns, type safety throughout the stack, and a modular component structure that facilitates easy maintenance and feature additions.