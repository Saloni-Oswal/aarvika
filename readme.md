# Aarvika Physiotherapy Clinic

## Overview

Aarvika Physiotherapy Clinic is a modern, responsive single-page web application for a physiotherapy practice in Nashik, India. The site serves as the clinic's digital presence, presenting the doctor, services, patient testimonials, and clinic contact information, and letting visitors send a message through a contact form. The app is a frontend-only static site built with React and Vite, and is deployed to GitHub Pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The client-side application is built using React with TypeScript and follows a component-based architecture. The application uses:

- **Routing**: wouter for lightweight client-side routing (two real routes — `/` and `/aarvika` — plus a 404 page)
- **Styling**: Tailwind CSS with a shadcn/ui-style component library and CSS variables for theming
- **Forms**: native React `useState` for local form state, with submissions sent to a Formspree endpoint
- **Toasts**: Radix Toast primitives wrapped by a local `useToast` hook for success / error feedback
- **Reviews**: `react-google-reviews` (Featurable widget) to embed live Google reviews inside the Testimonials section
- **UI Components**: small set of Radix-based components (button, input, textarea, label, select, card, toast, tooltip, toaster)

The frontend is structured as a single-page application with multiple sections (Navigation, Hero, About, Services, Testimonials, Contact, Footer) all rendered on the home page, utilizing smooth-scrolling navigation between sections.

### Component Structure

The application is organized into logical component sections:

- **Navigation**: Fixed header with smooth-scroll navigation and a mobile menu
- **Hero**: Landing section with call-to-action buttons
- **About** ("Know Your Doctor"): Doctor bio, photo, mission statement, and feature highlights
- **Services**: Six service offerings with descriptions
- **Testimonials**: Patient reviews in a carousel, a "View on Google" link, and a live Google reviews widget
- **Contact**: Clinic contact information and a contact form
- **Footer**: Site links and social media integration

### Styling System

The application implements a clean design system using:

- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **CSS Variables**: Dynamic theming with light/dark mode variables defined
- **Custom Fonts**: "Century Gothic", downloaded at build time via `vite-plugin-webfont-dl`
- **Component Variants**: Class Variance Authority for consistent component styling
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## External Dependencies

### Core Framework Dependencies

- **React 18**: Frontend framework with hooks and modern features
- **TypeScript**: Type safety across the application
- **Vite 5**: Build tool and development server with HMR

### UI and Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI component primitives
- **shadcn/ui** (style): Pre-built component patterns based on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for component variant management
- **clsx** + **tailwind-merge**: Class name composition helpers

### Forms & Integrations

- **Formspree**: Handles contact-form submissions (no backend of our own)
- **react-google-reviews**: Renders the Featurable-powered Google reviews widget

### Development and Build Tools

- **PostCSS** + **Autoprefixer**: CSS processing
- **ESBuild**: Fast JavaScript bundler (used internally by Vite)
- **TSX**: TypeScript execution for development scripts
- **vite-plugin-webfont-dl**: Downloads Google Fonts at build time

### Deployment

- **gh-pages**: Publishes the `dist/` output to the `gh-pages` branch
- The site is published at `https://saloni-oswal.github.io/aarvika/`. Run `npm run deploy` to build and publish.

The application is a small, single-page static site focused on a clear, responsive landing-page experience — with smooth-scrolling section navigation, a Formspree-backed contact form, and a live Google reviews widget — built and deployed as static assets.
