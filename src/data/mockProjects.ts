
export const mockProjects = [
  {
    id: 1,
    title: "Nairobi-Nakuru Highway Expansion",
    description: "Major highway expansion project to reduce traffic congestion between Nairobi and Nakuru",
    status: "Active",
    budget: 25000000000,
    startDate: "2024-01-15",
    endDate: "2026-12-31",
    location: {
      county: "Kiambu",
      coordinates: { lat: -1.1740, lng: 36.6880 }
    },
    category: "Infrastructure",
    contractor: "China Road & Bridge Corporation",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    source: "Ministry of Transport",
    feedback: [
      {
        id: 1,
        user: "Anonymous Citizen",
        rating: 4,
        comment: "Good progress so far, but traffic management during construction needs improvement",
        date: "2024-03-10"
      },
      {
        id: 2,
        user: "James Mwangi",
        rating: 5,
        comment: "Excellent project that will boost economic development",
        date: "2024-03-15"
      }
    ]
  },
  {
    id: 2,
    title: "Kisumu Water Treatment Plant",
    description: "Construction of modern water treatment facility to serve Kisumu County",
    status: "Planning",
    budget: 8500000000,
    startDate: "2024-06-01",
    endDate: "2025-11-30",
    location: {
      county: "Kisumu",
      coordinates: { lat: -0.0917, lng: 34.7680 }
    },
    category: "Water & Sanitation",
    contractor: "TBD",
    rating: null,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    source: "Ministry of Water",
    feedback: []
  },
  {
    id: 3,
    title: "Mombasa Port Expansion Phase III",
    description: "Expansion of Mombasa port to increase cargo handling capacity",
    status: "Active",
    budget: 45000000000,
    startDate: "2023-08-01",
    endDate: "2025-12-31",
    location: {
      county: "Mombasa",
      coordinates: { lat: -4.0435, lng: 39.6682 }
    },
    category: "Infrastructure",
    contractor: "China Communications Construction Company",
    rating: 3.8,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    source: "Kenya Ports Authority",
    feedback: [
      {
        id: 3,
        user: "Anonymous Resident",
        rating: 4,
        comment: "Great for economic growth but environmental impact concerns",
        date: "2024-02-20"
      }
    ]
  },
  {
    id: 4,
    title: "Rural Electrification - Turkana County",
    description: "Extension of electricity to remote areas in Turkana County",
    status: "Active",
    budget: 12000000000,
    startDate: "2024-02-01",
    endDate: "2024-10-31",
    location: {
      county: "Turkana",
      coordinates: { lat: 3.1197, lng: 35.5969 }
    },
    category: "Energy",
    contractor: "Kenya Power & Lighting Company",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    source: "Ministry of Energy",
    feedback: [
      {
        id: 4,
        user: "Mary Ekwom",
        rating: 5,
        comment: "Life-changing project for our community. Excellent execution!",
        date: "2024-03-05"
      }
    ]
  },
  {
    id: 5,
    title: "Machakos Level 5 Hospital",
    description: "Construction of modern referral hospital in Machakos County",
    status: "Delayed",
    budget: 6500000000,
    startDate: "2023-11-01",
    endDate: "2025-06-30",
    location: {
      county: "Machakos",
      coordinates: { lat: -1.5177, lng: 37.2634 }
    },
    category: "Healthcare",
    contractor: "Syno Hydro Corporation",
    rating: 2.1,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    source: "Ministry of Health",
    feedback: [
      {
        id: 5,
        user: "Anonymous Citizen",
        rating: 2,
        comment: "Project is significantly delayed with no clear communication on progress",
        date: "2024-03-12"
      },
      {
        id: 6,
        user: "Anonymous Resident",
        rating: 1,
        comment: "Very disappointed with the lack of transparency and frequent delays",
        date: "2024-03-18"
      }
    ]
  }
];
