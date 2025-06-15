
# Kagua - Government Projects Transparency Platform

## Overview

Kagua is a React-based web application that provides transparency for government projects in Kenya. The platform displays projects on an interactive map, allowing citizens to view project details, provide feedback, and track government spending.

## Features

- **Interactive Map**: View government projects plotted on a map of Kenya
- **Project Filtering**: Filter projects by type (National vs County)
- **Project Details**: Detailed information about each project including budget, status, and location
- **Feedback System**: Citizens can provide feedback on projects
- **Web Scraping**: Tool to extract project data from government websites
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Maps**: Leaflet.js with OpenStreetMap tiles
- **Routing**: React Router DOM
- **State Management**: React hooks and context
- **Build Tool**: Vite
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Main navigation header
│   ├── MapView.tsx     # Interactive map component
│   ├── ProjectSidebar.tsx # Project list and details sidebar
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Main dashboard page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── Subscribe.tsx   # Newsletter subscription
├── data/               # Mock data and constants
├── utils/              # Utility functions
└── hooks/              # Custom React hooks
```

## Key Components

### MapView
- Renders interactive map using Leaflet.js
- Displays project markers with custom icons
- Supports hover tooltips and click interactions
- Differentiates National (red) vs County (green) projects

### ProjectSidebar
- Shows project list with filtering capabilities
- Displays detailed project information
- Collapsible design for better mobile experience
- Includes project statistics and feedback interface

### Header
- Main navigation with search functionality
- Responsive menu for mobile devices
- Brand identity and navigation links

## Data Structure

Projects follow this structure:
```typescript
{
  id: string;
  title: string;
  location: {
    county: string;
    coordinates: { lat: number; lng: number; }
  };
  budget: number;
  status: 'Active' | 'Completed' | 'Planning';
  projectType: 'National' | 'County';
  startDate: string;
  description: string;
  feedback?: Array<any>;
  rating?: number;
  source?: string;
}
```

## Development

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Installation
```bash
npm install
npm run dev
```

### Building
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
