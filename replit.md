# VTech Makkers Equipment - Replit Project Guide

## Overview
VTech Makkers Equipment is a full-stack web application for an industrial equipment manufacturer specializing in crushing, screening, and material handling equipment. The application serves as both a product showcase and lead generation platform, focusing on mining and construction equipment. Its ambition is to provide a comprehensive platform for product display, detailed specifications, lead capture, and knowledge sharing.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend**: React + TypeScript with Vite
- Uses modern React patterns with hooks and functional components.
- Styling is handled by Tailwind CSS for a utility-first approach, complemented by Shadcn/ui for consistent UI components.
- Server state management and caching are managed with React Query.
- Client-side routing is handled by Wouter, and animations by Framer Motion.

**Backend**: Express.js + TypeScript
- Implements a RESTful API architecture.
- Utilizes Node.js with ES modules.
- Incorporates middleware for logging, error handling, and JSON parsing.
- Features an event-driven architecture using a custom `EventBus` for decoupled operations, such as lead submission notifications.

**Database**: PostgreSQL with Drizzle ORM
- Uses Neon for serverless PostgreSQL.
- Provides type-safe database operations via Drizzle ORM.
- Follows a schema-first approach with shared types between frontend and backend.
- Employs Zod for runtime type validation.

**Key Components & Features**:
- **Database Schema**: Includes tables for Products (equipment catalog), Leads (customer inquiries), and Product Queries (search optimization).
- **API Routes**: Endpoints for products, leads, articles, and menu data.
- **Frontend Pages**: Comprehensive set of pages including Home, Product listings/details, Knowledge center, Contact/inquiry forms, Industry solutions, Service pages, and a Lead management dashboard.
- **Event System**: Decouples operations through events (e.g., `LeadSubmittedV1Event` handled by `SaveLeadConsumer` and `NotifySalesConsumer`).
- **UI/UX Decisions**: Focus on responsive design, consistent component use (Shadcn/ui), and fluid typography. Animated elements are used for visual engagement.
- **Brand Consistency**: All instances of "VTIS Industrial" have been replaced with "VTech Makkers" across the application, including SEO metadata and contact information.
- **SEO & Content**: Dynamic SEO metadata, JSON-LD schema markup (Product, ItemList, BreadcrumbList, WebSite, Organization, FAQPage), and keyword-optimized content are implemented across all pages to enhance discoverability and search engine ranking.
- **Video Integration**: Videos are used for hero sections and about pages, optimized for fast streaming with server-side byte-range request support and adaptive HLS streaming.
- **Legal Pages**: Comprehensive Privacy Policy and Terms of Service pages are implemented with proper routing and SEO metadata.

## External Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection.
- **@radix-ui/**\*: Accessible UI component primitives.
- **@tanstack/react-query**: Server state management and caching.
- **drizzle-orm**: Type-safe database operations.
- **framer-motion**: Animation library.
- **zod**: Runtime type validation.
- **date-fns**: Date manipulation utilities.
```