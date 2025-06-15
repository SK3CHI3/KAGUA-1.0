
# Kagua - Government Projects Transparency Platform

A React-based web application that provides transparency for government projects in Kenya, allowing citizens to view project details, provide feedback, and track government spending through an interactive map interface.

## 🚀 Features

- **Interactive Map**: View government projects plotted on a map of Kenya using Leaflet.js
- **Project Filtering**: Filter projects by type (National vs County)
- **Project Details**: Comprehensive information about each project including budget, status, and location
- **Citizen Feedback**: Platform for citizens to provide feedback on projects
- **Web Scraping Tool**: Extract project data from government websites
- **Mobile Responsive**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Live project status and information updates

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Maps**: Leaflet.js with OpenStreetMap tiles
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React hooks and context

## 📱 Mobile Responsive Design

Kagua is fully responsive and optimized for:
- **Desktop**: Full sidebar and map interface
- **Tablet**: Collapsible sidebar with touch-friendly controls
- **Mobile**: Overlay sidebar, mobile-optimized popups, and touch gestures

## 🏗️ Project Structure

```
kagua-citizen-map-kenya/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui base components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── MapView.tsx     # Interactive map component
│   │   ├── ProjectSidebar.tsx # Project list and details
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Main dashboard
│   │   ├── About.tsx       # About page
│   │   ├── Contact.tsx     # Contact page
│   │   └── Subscribe.tsx   # Newsletter subscription
│   ├── data/               # Mock data and constants
│   ├── utils/              # Utility functions
│   └── hooks/              # Custom React hooks
├── public/                 # Static assets
├── DOCUMENTATION.md        # Detailed technical documentation
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd kagua-citizen-map-kenya
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📖 Usage

### Viewing Projects
1. Use the interactive map to explore government projects across Kenya
2. Click on map markers to view project details
3. Use the sidebar to browse all projects and filter by type

### Project Information
Each project displays:
- Project title and description
- Location (county and coordinates)
- Budget allocation
- Project status (Active, Completed, Planning)
- Project type (National or County)
- Start date and timeline
- Citizen feedback and ratings

### Mobile Usage
- **Sidebar**: Tap the hamburger menu to open/close the project sidebar
- **Map Navigation**: Use touch gestures to pan and zoom the map
- **Project Selection**: Tap markers or project cards to view details
- **Responsive Design**: Interface adapts to screen size automatically

## 🎨 Design System

### Color Scheme
- **Primary Green**: Government/County projects (`#059669`)
- **Primary Red**: National projects (`#dc2626`)
- **Status Colors**: Active (`#16a34a`), Inactive (`#6b7280`)
- **Background**: Light gray (`#f9fafb`)

### Typography
- **Headers**: Inter/System fonts
- **Body**: System UI font stack
- **Sizes**: Responsive text sizing (xs to 2xl)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure mobile responsiveness
- Add proper documentation
- Test on multiple devices/browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [View Application](https://5301a75f-5f06-4191-9e5c-4c7a625a4dcf.lovableproject.com)
- **Documentation**: See [DOCUMENTATION.md](DOCUMENTATION.md) for technical details
- **Issues**: Report bugs and request features on GitHub

## 📞 Support

For support, questions, or contributions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation for technical details

---

**Built with ❤️ for government transparency in Kenya**
