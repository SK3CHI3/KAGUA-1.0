
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
    projectType: "National",
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
    projectType: "County",
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
    projectType: "National",
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
    projectType: "National",
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
    projectType: "County",
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
  },
  {
    id: 6,
    title: "Standard Gauge Railway Phase 2A",
    description: "Extension of SGR from Naivasha to Malaba border",
    status: "Active",
    budget: 158000000000,
    startDate: "2023-03-01",
    endDate: "2027-12-31",
    location: {
      county: "Nakuru",
      coordinates: { lat: -0.3031, lng: 36.0800 }
    },
    category: "Infrastructure",
    contractor: "China Road & Bridge Corporation",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop",
    source: "Ministry of Transport",
    projectType: "National",
    feedback: [
      {
        id: 7,
        user: "John Kiprotich",
        rating: 4,
        comment: "Great connectivity project for the region",
        date: "2024-02-28"
      }
    ]
  },
  {
    id: 7,
    title: "Eldoret Sports Complex",
    description: "Construction of modern sports facility for Uasin Gishu County",
    status: "Active",
    budget: 4200000000,
    startDate: "2024-01-10",
    endDate: "2025-08-30",
    location: {
      county: "Uasin Gishu",
      coordinates: { lat: 0.5143, lng: 35.2697 }
    },
    category: "Sports & Recreation",
    contractor: "Local Construction Ltd",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    source: "Uasin Gishu County",
    projectType: "County",
    feedback: [
      {
        id: 8,
        user: "Sarah Chebet",
        rating: 5,
        comment: "Excellent facility that will benefit local athletes",
        date: "2024-03-20"
      }
    ]
  },
  {
    id: 8,
    title: "Lamu Coal Power Plant",
    description: "Construction of 1050MW coal-fired power plant",
    status: "Planning",
    budget: 200000000000,
    startDate: "2024-07-01",
    endDate: "2028-12-31",
    location: {
      county: "Lamu",
      coordinates: { lat: -2.2717, lng: 40.9020 }
    },
    category: "Energy",
    contractor: "TBD",
    rating: null,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    source: "Ministry of Energy",
    projectType: "National",
    feedback: []
  },
  {
    id: 9,
    title: "Kakamega County Hospital Upgrade",
    description: "Modernization and expansion of Kakamega General Hospital",
    status: "Active",
    budget: 3800000000,
    startDate: "2023-09-15",
    endDate: "2025-03-31",
    location: {
      county: "Kakamega",
      coordinates: { lat: 0.2827, lng: 34.7519 }
    },
    category: "Healthcare",
    contractor: "Medical Construction Co.",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&h=600&fit=crop",
    source: "Kakamega County",
    projectType: "County",
    feedback: [
      {
        id: 9,
        user: "Dr. Patricia Wanjiku",
        rating: 4,
        comment: "Much needed upgrade for better healthcare delivery",
        date: "2024-02-15"
      }
    ]
  },
  {
    id: 10,
    title: "Konza Technopolis Phase 1",
    description: "Development of Kenya's Silicon Savannah technology city",
    status: "Active",
    budget: 75000000000,
    startDate: "2022-06-01",
    endDate: "2026-12-31",
    location: {
      county: "Machakos",
      coordinates: { lat: -1.6969, lng: 37.0079 }
    },
    category: "Technology",
    contractor: "Korea Land & Housing Corporation",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    source: "Konza Technopolis Authority",
    projectType: "National",
    feedback: [
      {
        id: 10,
        user: "Tech Enthusiast",
        rating: 4,
        comment: "Exciting project for Kenya's tech future",
        date: "2024-01-30"
      }
    ]
  },
  {
    id: 11,
    title: "Nyeri County Waste Management",
    description: "Implementation of modern waste collection and recycling system",
    status: "Active",
    budget: 2100000000,
    startDate: "2024-02-20",
    endDate: "2024-12-15",
    location: {
      county: "Nyeri",
      coordinates: { lat: -0.4209, lng: 36.9576 }
    },
    category: "Environment",
    contractor: "Green Solutions Ltd",
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    source: "Nyeri County",
    projectType: "County",
    feedback: [
      {
        id: 11,
        user: "Environmental Activist",
        rating: 4,
        comment: "Great step towards sustainable waste management",
        date: "2024-03-10"
      }
    ]
  },
  {
    id: 12,
    title: "Northern Corridor Transport Improvement",
    description: "Upgrading transport infrastructure along the Northern Corridor",
    status: "Planning",
    budget: 95000000000,
    startDate: "2024-08-01",
    endDate: "2027-07-31",
    location: {
      county: "Nairobi",
      coordinates: { lat: -1.2864, lng: 36.8172 }
    },
    category: "Infrastructure",
    contractor: "TBD",
    rating: null,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
    source: "East African Community",
    projectType: "National",
    feedback: []
  }
];
