# VTech Makkers Equipment

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](package.json)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](../LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](.github/workflows/ci.yml)

A sophisticated B2B industrial equipment platform for VTech Makkers, specializing in advanced product discovery for crushing, screening, and washing solutions across industrial sectors.

## Overview

VTech Makkers Equipment is a full-stack web application serving as both a product showcase and lead generation platform for industrial equipment manufacturing. The platform provides comprehensive machinery information with interactive product exploration tools, detailed technical specifications, and user-centric design optimized for industrial professionals and engineering teams.

### Key Features

- **Product Catalog**: Comprehensive industrial equipment listings with detailed specifications
- **Interactive Solutions**: Industry-specific solutions for mining, construction, and recycling
- **Lead Generation**: Contact forms and inquiry management system
- **Knowledge Center**: Technical articles and FAQ resources
- **Video Optimization**: Sub-500ms hero video loading with HLS streaming
- **SEO Optimized**: Comprehensive structured data and meta optimization

## Technology Stack

- **Frontend**: React + TypeScript with Vite build system
- **Backend**: Express.js + TypeScript with RESTful API
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with Shadcn/ui components
- **State Management**: React Query for server state
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 20+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vtechmakkers-equipment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. Initialize the database:
   ```bash
   npm run db:push
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Building for Production

Create a production build:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run check` | Run TypeScript type checking |
| `npm run lint` | Run ESLint code linting |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run test suite |
| `npm run type-check` | Type check without emitting files |
| `npm run db:push` | Push database schema changes |

## Environment Variables

The following environment variables are required:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `SENDGRID_API_KEY` | SendGrid API key for email notifications | Yes |
| `NODE_ENV` | Environment (development/production) | Yes |
| `PORT` | Server port (default: 5000) | No |
| `ANALYTICS_API_KEY` | Analytics service API key | No |
| `CDN_URL` | CDN base URL for media assets | No |

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities and helpers
├── server/                # Backend Express application
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Database operations
│   └── consumers/         # Event consumers
├── shared/                # Shared types and schemas
├── data/                  # Static data files
├── public/                # Static assets
└── tests/                 # Test files
```

## API Documentation

The application provides RESTful APIs for:

- `/api/products` - Product catalog operations
- `/api/leads` - Lead management and creation
- `/api/articles` - Knowledge center content
- `/api/menu-products` - Navigation menu data
- `/api/solutions` - Solution pages data

## Testing

Run the test suite:
```bash
npm run test
```

Run specific test types:
```bash
npm run test:unit        # Unit tests
npm run test:e2e         # End-to-end tests
npm run test:a11y        # Accessibility tests
```

## Deployment

The application is configured for deployment on Replit with autoscale target. The build process includes:

1. Frontend build with Vite optimization
2. Backend bundling with ESBuild
3. Static asset optimization
4. Database schema synchronization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## Security

For security concerns, please review our [Security Policy](../server/SECURITY.md).

## Support

For technical support or questions, contact:
- Email: info@tachmakkers.in
- Phone: +91 94260 29949
- Address: Near GEB, Ahmedabed Road, Butal, TA: Dhansura, Dist: Arvalli - 383 310