// Project categories: Infrastructure, Healthcare, Housing, Energy, Agriculture, Water, Mining, Technology, Environment, Education
export const mockProjects = [
  // Infrastructure Projects
  {
    id: 1,
    title: "Mombasa Port Modernization",
    description: "Comprehensive upgrade of port facilities including new berths and automated cargo handling systems",
    status: "Active",
    budget: 45000000000,
    startDate: "2024-03-01",
    endDate: "2027-12-31",
    location: {
      county: "Mombasa",
      coordinates: { lat: -4.0435, lng: 39.6682 }
    },
    category: "Infrastructure",
    contractor: "China Harbor Engineering Company",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1516876911474-9a35ac66cb82?w=800&h=600&fit=crop",
    source: "Kenya Ports Authority",
    projectType: "National",
    feedback: [
      {
        id: 1,
        user: "Maritime Expert",
        rating: 5,
        comment: "Much needed modernization that will boost regional trade",
        date: "2024-05-15"
      }
    ]
  },
  {
    id: 2,
    title: "Kisumu Modern Healthcare Complex",
    description: "State-of-the-art medical facility with specialized departments and research centers",
    status: "Active",
    budget: 12000000000,
    startDate: "2024-06-01",
    endDate: "2026-12-31",
    location: {
      county: "Kisumu",
      coordinates: { lat: -0.0917, lng: 34.7680 }
    },
    category: "Healthcare",
    contractor: "Smiths Construction Ltd",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    source: "Ministry of Health",
    projectType: "National",
    feedback: [
      {
        id: 2,
        user: "Healthcare Worker",
        rating: 5,
        comment: "This will greatly improve healthcare access in Western Kenya",
        date: "2024-07-01"
      }
    ]
  },
  {
    id: 3,
    title: "Nakuru Affordable Housing Project",
    description: "Construction of 5,000 affordable housing units with modern amenities",
    status: "Active",
    budget: 8500000000,
    startDate: "2024-04-15",
    endDate: "2026-06-30",
    location: {
      county: "Nakuru",
      coordinates: { lat: -0.3031, lng: 36.0800 }
    },
    category: "Housing",
    contractor: "Housing Development Corporation",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    source: "Ministry of Housing",
    projectType: "County",
    feedback: [
      {
        id: 3,
        user: "Local Resident",
        rating: 4,
        comment: "Good initiative but need better community engagement",
        date: "2024-06-10"
      }
    ]
  },
  {
    id: 4,
    title: "Machakos Green Energy Park",
    description: "Solar and wind power generation facility with 200MW capacity",
    status: "Planning",
    budget: 15000000000,
    startDate: "2024-09-01",
    endDate: "2026-08-31",
    location: {
      county: "Machakos",
      coordinates: { lat: -1.5177, lng: 37.2627 }
    },
    category: "Energy",
    contractor: "Green Power Solutions",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    source: "Ministry of Energy",
    projectType: "National",
    feedback: []
  },
  {
    id: 5,
    title: "Eldoret Agricultural Technology Hub",
    description: "Research and development center for agricultural innovation and farmer training",
    status: "Active",
    budget: 3500000000,
    startDate: "2024-03-15",
    endDate: "2025-12-31",
    location: {
      county: "Uasin Gishu",
      coordinates: { lat: 0.5143, lng: 35.2698 }
    },
    category: "Agriculture",
    contractor: "AgriTech Solutions Ltd",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585516326458-45940404afd7?w=800&h=600&fit=crop",
    source: "Ministry of Agriculture",
    projectType: "County",
    feedback: [
      {
        id: 4,
        user: "Local Farmer",
        rating: 5,
        comment: "The training programs have greatly improved our farming methods",
        date: "2024-05-20"
      }
    ]
  },
  {
    id: 6,
    title: "Nyeri Water Supply Expansion",
    description: "Comprehensive water infrastructure upgrade serving 500,000 residents",
    status: "Active",
    budget: 4200000000,
    startDate: "2024-02-01",
    endDate: "2025-08-31",
    location: {
      county: "Nyeri",
      coordinates: { lat: -0.4246, lng: 36.9482 }
    },
    category: "Water",
    contractor: "Water Solutions Kenya",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&h=600&fit=crop",
    source: "County Government of Nyeri",
    projectType: "County",
    feedback: [
      {
        id: 5,
        user: "Community Leader",
        rating: 4,
        comment: "Project is progressing well but some areas still need attention",
        date: "2024-04-15"
      }
    ]
  },
  {
    id: 7,
    title: "Kitui Sustainable Mining Initiative",
    description: "Environmental-friendly coal mining project with community benefits program",
    status: "Planning",
    budget: 9800000000,
    startDate: "2024-08-01",
    endDate: "2027-07-31",
    location: {
      county: "Kitui",
      coordinates: { lat: -1.3683, lng: 38.0127 }
    },
    category: "Mining",
    contractor: "Eco Mining Ltd",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&h=600&fit=crop",
    source: "Ministry of Mining",
    projectType: "National",
    feedback: []
  },
  {
    id: 8,
    title: "Garissa Solar Power Plant",
    description: "54MW solar power plant with storage facilities",
    status: "Active",
    budget: 13000000000,
    startDate: "2024-05-01",
    endDate: "2026-04-30",
    location: {
      county: "Garissa",
      coordinates: { lat: -0.4536, lng: 39.6466 }
    },
    category: "Energy",
    contractor: "Solar Tech Kenya",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    source: "Kenya Power",
    projectType: "National",
    feedback: [
      {
        id: 6,
        user: "Energy Expert",
        rating: 5,
        comment: "Excellent progress on renewable energy goals",
        date: "2024-06-20"
      }
    ]
  },
  {
    id: 9,
    title: "Kakamega Teaching Hospital",
    description: "Modern 500-bed teaching hospital with specialized units",
    status: "Active",
    budget: 7500000000,
    startDate: "2024-04-01",
    endDate: "2026-03-31",
    location: {
      county: "Kakamega",
      coordinates: { lat: 0.2870, lng: 34.7519 }
    },
    category: "Healthcare",
    contractor: "Health Infrastructure Ltd",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    source: "Ministry of Health",
    projectType: "County",
    feedback: [
      {
        id: 7,
        user: "Medical Student",
        rating: 4,
        comment: "Great facility but need more equipment",
        date: "2024-05-30"
      }
    ]
  },
  {
    id: 10,
    title: "Lamu Port Access Road",
    description: "Construction of 113km modern highway connecting Lamu Port",
    status: "Active",
    budget: 18000000000,
    startDate: "2024-03-15",
    endDate: "2026-09-30",
    location: {
      county: "Lamu",
      coordinates: { lat: -2.2719, lng: 40.9022 }
    },
    category: "Infrastructure",
    contractor: "Roads Authority",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    source: "Kenya National Highways Authority",
    projectType: "National",
    feedback: [
      {
        id: 8,
        user: "Transport Expert",
        rating: 4,
        comment: "Critical infrastructure for port operations",
        date: "2024-04-25"
      }
    ]
  },
  {
    id: 11,
    title: "Kericho Smart City Project",
    description: "Development of technology hub and business park",
    status: "Planning",
    budget: 25000000000,
    startDate: "2024-10-01",
    endDate: "2027-09-30",
    location: {
      county: "Kericho",
      coordinates: { lat: -0.3677, lng: 35.2830 }
    },
    category: "Technology",
    contractor: "Smart Cities Kenya",
    rating: 0,
    image: "https://images.unsplash.com/photo-1585516326458-45940404afd7?w=800&h=600&fit=crop",
    source: "ICT Authority",
    projectType: "County",
    feedback: []
  },
  {
    id: 12,
    title: "Meru Wind Farm",
    description: "Installation of 100 wind turbines generating 300MW",
    status: "Active",
    budget: 28000000000,
    startDate: "2024-06-15",
    endDate: "2027-06-14",
    location: {
      county: "Meru",
      coordinates: { lat: 0.0500, lng: 37.6500 }
    },
    category: "Energy",
    contractor: "Wind Power East Africa",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    source: "Kenya Electricity Generating Company",
    projectType: "National",
    feedback: [
      {
        id: 9,
        user: "Environmental Scientist",
        rating: 5,
        comment: "Excellent renewable energy initiative",
        date: "2024-07-10"
      }
    ]
  },
  {
    id: 13,
    title: "Kilifi Marine Conservation Project",
    description: "Coastal ecosystem protection and sustainable fishing program",
    status: "Active",
    budget: 2800000000,
    startDate: "2024-04-01",
    endDate: "2026-03-31",
    location: {
      county: "Kilifi",
      coordinates: { lat: -3.6305, lng: 39.8499 }
    },
    category: "Environment",
    contractor: "Marine Conservation Ltd",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&h=600&fit=crop",
    source: "Ministry of Environment",
    projectType: "County",
    feedback: [
      {
        id: 10,
        user: "Marine Biologist",
        rating: 5,
        comment: "Critical project for marine ecosystem",
        date: "2024-05-15"
      }
    ]
  },
  {
    id: 14,
    title: "Turkana Irrigation Scheme",
    description: "50,000-acre irrigation project for food security",
    status: "Active",
    budget: 16000000000,
    startDate: "2024-07-01",
    endDate: "2027-06-30",
    location: {
      county: "Turkana",
      coordinates: { lat: 3.1166, lng: 35.5965 }
    },
    category: "Agriculture",
    contractor: "Irrigation Systems Ltd",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1585516326458-45940404afd7?w=800&h=600&fit=crop",
    source: "National Irrigation Board",
    projectType: "National",
    feedback: [
      {
        id: 11,
        user: "Agricultural Officer",
        rating: 4,
        comment: "Transformative project for food security",
        date: "2024-08-20"
      }
    ]
  },
  {
    id: 15,
    title: "Narok Wildlife Conservation Center",
    description: "Research facility and conservation education center",
    status: "Planning",
    budget: 4500000000,
    startDate: "2024-09-15",
    endDate: "2026-08-31",
    location: {
      county: "Narok",
      coordinates: { lat: -1.0921, lng: 35.8444 }
    },
    category: "Environment",
    contractor: "Wildlife Conservation Kenya",
    rating: 0,
    image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&h=600&fit=crop",
    source: "Kenya Wildlife Service",
    projectType: "County",
    feedback: []
  },
  {
    id: 16,
    title: "Busia Border Post Modernization",
    description: "Upgrade of border crossing facilities and systems",
    status: "Active",
    budget: 5800000000,
    startDate: "2024-05-01",
    endDate: "2025-12-31",
    location: {
      county: "Busia",
      coordinates: { lat: 0.4608, lng: 34.1114 }
    },
    category: "Infrastructure",
    contractor: "Border Infrastructure Ltd",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    source: "Kenya Revenue Authority",
    projectType: "National",
    feedback: [
      {
        id: 12,
        user: "Customs Officer",
        rating: 4,
        comment: "Much needed upgrade for efficient border operations",
        date: "2024-06-15"
      }
    ]
  },
  {
    id: 17,
    title: "Marsabit Digital Literacy Program",
    description: "Technology training centers and mobile digital labs",
    status: "Active",
    budget: 1800000000,
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    location: {
      county: "Marsabit",
      coordinates: { lat: 2.3284, lng: 37.9915 }
    },
    category: "Education",
    contractor: "Digital Education Kenya",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1585516326458-45940404afd7?w=800&h=600&fit=crop",
    source: "Ministry of Education",
    projectType: "County",
    feedback: [
      {
        id: 13,
        user: "Education Officer",
        rating: 5,
        comment: "Transformative impact on rural education",
        date: "2024-04-20"
      }
    ]
  },
  {
    id: 18,
    title: "Kwale Blue Economy Initiative",
    description: "Sustainable fishing and marine resource management program",
    status: "Planning",
    budget: 3500000000,
    startDate: "2024-08-15",
    endDate: "2026-08-14",
    location: {
      county: "Kwale",
      coordinates: { lat: -4.1814, lng: 39.4583 }
    },
    category: "Environment",
    contractor: "Blue Economy Solutions",
    rating: 0,
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&h=600&fit=crop",
    source: "Kenya Maritime Authority",
    projectType: "County",
    feedback: []
  },
  {
    id: 19,
    title: "Kiambu Tech Innovation Hub",
    description: "Technology startup incubator and innovation center",
    status: "Active",
    budget: 4200000000,
    startDate: "2024-04-01",
    endDate: "2025-09-30",
    location: {
      county: "Kiambu",
      coordinates: { lat: -1.1707, lng: 36.8359 }
    },
    category: "Technology",
    contractor: "Innovation Hub Kenya",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1585516326458-45940404afd7?w=800&h=600&fit=crop",
    source: "ICT Authority",
    projectType: "County",
    feedback: [
      {
        id: 14,
        user: "Tech Entrepreneur",
        rating: 5,
        comment: "Great facility for local tech ecosystem",
        date: "2024-05-10"
      }
    ]
  },
  {
    id: 20,
    title: "Isiolo Livestock Market Complex",
    description: "Modern livestock trading facility with veterinary services",
    status: "Active",
    budget: 2900000000,
    startDate: "2024-06-01",
    endDate: "2025-11-30",
    location: {
      county: "Isiolo",
      coordinates: { lat: 0.3536, lng: 37.5822 }
    },
    category: "Agriculture",
    contractor: "Livestock Infrastructure Ltd",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1585516326458-45940404afd7?w=800&h=600&fit=crop",
    source: "Ministry of Agriculture",
    projectType: "County",
    feedback: [
      {
        id: 15,
        user: "Livestock Trader",
        rating: 4,
        comment: "Much needed facility for livestock trade",
        date: "2024-07-05"
      }
    ]
  },
  {
    id: 21,
    title: "Tana River Flood Control System",
    description: "Advanced flood monitoring and control infrastructure",
    status: "Planning",
    budget: 7500000000,
    startDate: "2024-09-01",
    endDate: "2026-08-31",
    location: {
      county: "Tana River",
      coordinates: { lat: -1.8782, lng: 40.1251 }
    },
    category: "Infrastructure",
    contractor: "Water Engineering Ltd",
    rating: 0,
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&h=600&fit=crop",
    source: "Water Resources Authority",
    projectType: "National",
    feedback: []
  },
  {
    id: 22,
    title: "Mandera Renewable Energy Hub",
    description: "Integrated solar and wind power generation facility",
    status: "Planning",
    budget: 18000000000,
    startDate: "2024-10-15",
    endDate: "2027-10-14",
    location: {
      county: "Mandera",
      coordinates: { lat: 3.9167, lng: 41.8333 }
    },
    category: "Energy",
    contractor: "Renewable Energy Solutions",
    rating: 0,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    source: "Kenya Power",
    projectType: "County",
    feedback: []
  },
  {
    id: 23,
    title: "Samburu Cultural Heritage Center",
    description: "Museum and cultural preservation facility",
    status: "Active",
    budget: 2800000000,
    startDate: "2024-07-01",
    endDate: "2025-12-31",
    location: {
      county: "Samburu",
      coordinates: { lat: 1.2167, lng: 36.9333 }
    },
    category: "Culture",
    contractor: "Heritage Construction Ltd",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&h=600&fit=crop",
    source: "Ministry of Culture",
    projectType: "County",
    feedback: [
      {
        id: 16,
        user: "Cultural Expert",
        rating: 4.5,
        comment: "Important project for preserving local heritage",
        date: "2024-08-15"
      }
    ]
  },
  {
    id: 24,
    title: "Wajir Water Access Project",
    description: "Borehole drilling and water distribution network",
    status: "Active",
    budget: 5600000000,
    startDate: "2024-05-15",
    endDate: "2026-05-14",
    location: {
      county: "Wajir",
      coordinates: { lat: 1.7471, lng: 40.0573 }
    },
    category: "Water",
    contractor: "Arid Water Solutions",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&h=600&fit=crop",
    source: "Water Services Trust Fund",
    projectType: "County",
    feedback: [
      {
        id: 17,
        user: "Community Leader",
        rating: 4,
        comment: "Life-changing project for our community",
        date: "2024-07-20"
      }
    ]
  },
  {
    id: 25,
    title: "West Pokot Agricultural Training Center",
    description: "Modern farming techniques and livestock management facility",
    status: "Active",
    budget: 3200000000,
    startDate: "2024-06-01",
    endDate: "2025-11-30",
    location: {
      county: "West Pokot",
      coordinates: { lat: 1.7323, lng: 35.1192 }
    },
    category: "Agriculture",
    contractor: "Agricultural Development Ltd",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1585516326458-45940404afd7?w=800&h=600&fit=crop",
    source: "Ministry of Agriculture",
    projectType: "County",
    feedback: [
      {
        id: 18,
        user: "Agricultural Officer",
        rating: 5,
        comment: "Excellent facility for modern farming education",
        date: "2024-08-10"
      }
    ]
  },
  {
    id: 26,
    title: "Baringo Geothermal Project",
    description: "150MW geothermal power plant development",
    status: "Planning",
    budget: 32000000000,
    startDate: "2024-11-01",
    endDate: "2027-10-31",
    location: {
      county: "Baringo",
      coordinates: { lat: 0.4919, lng: 35.9738 }
    },
    category: "Energy",
    contractor: "Geothermal Development Company",
    rating: 0,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    source: "Ministry of Energy",
    projectType: "National",
    feedback: []
  },
  {
    id: 27,
    title: "Trans Nzoia Smart Farming Initiative",
    description: "IoT-based precision agriculture project",
    status: "Active",
    budget: 4800000000,
    startDate: "2024-07-15",
    endDate: "2026-07-14",
    location: {
      county: "Trans Nzoia",
      coordinates: { lat: 1.0213, lng: 34.9577 }
    },
    category: "Agriculture",
    contractor: "Smart Agri Solutions",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1585516326458-45940404afd7?w=800&h=600&fit=crop",
    source: "Ministry of Agriculture",
    projectType: "County",
    feedback: [
      {
        id: 19,
        user: "Agri-Tech Expert",
        rating: 5,
        comment: "Revolutionary approach to modern farming",
        date: "2024-09-01"
      }
    ]
  },
  {
    id: 28,
    title: "Embu Digital Skills Center",
    description: "Youth technology training and innovation hub",
    status: "Active",
    budget: 2500000000,
    startDate: "2024-05-01",
    endDate: "2025-04-30",
    location: {
      county: "Embu",
      coordinates: { lat: -0.5390, lng: 37.4519 }
    },
    category: "Education",
    contractor: "Digital Education Kenya",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585516326458-45940404afd7?w=800&h=600&fit=crop",
    source: "Ministry of ICT",
    projectType: "County",
    feedback: [
      {
        id: 20,
        user: "IT Instructor",
        rating: 5,
        comment: "State-of-the-art facility for digital skills",
        date: "2024-06-15"
      }
    ]
  },
  {
    id: 29,
    title: "Taita Taveta Mining Technology Center",
    description: "Modern gemstone processing and training facility",
    status: "Planning",
    budget: 6500000000,
    startDate: "2024-09-15",
    endDate: "2026-09-14",
    location: {
      county: "Taita Taveta",
      coordinates: { lat: -3.3166, lng: 38.4833 }
    },
    category: "Mining",
    contractor: "Mining Technology Solutions",
    rating: 0,
    image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&h=600&fit=crop",
    source: "Ministry of Mining",
    projectType: "County",
    feedback: []
  },
  {
    id: 30,
    title: "Laikipia Innovation Village",
    description: "Tech startup ecosystem and innovation center",
    status: "Active",
    budget: 5500000000,
    startDate: "2024-06-01",
    endDate: "2025-11-30",
    location: {
      county: "Laikipia",
      coordinates: { lat: 0.3998, lng: 36.8026 }
    },
    category: "Technology",
    contractor: "Tech Innovation Kenya",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1585516326458-45940404afd7?w=800&h=600&fit=crop",
    source: "ICT Authority",
    projectType: "County",
    feedback: [
      {
        id: 21,
        user: "Tech Entrepreneur",
        rating: 5,
        comment: "Perfect environment for innovation",
        date: "2024-07-30"
      }
    ]
  },
  {
    id: 31,
    title: "Siaya Healthcare Digitization Project",
    description: "Implementation of electronic health records system",
    status: "Active",
    budget: 3800000000,
    startDate: "2024-07-01",
    endDate: "2025-12-31",
    location: {
      county: "Siaya",
      coordinates: { lat: 0.0607, lng: 34.2878 }
    },
    category: "Healthcare",
    contractor: "Health Tech Solutions",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    source: "Ministry of Health",
    projectType: "County",
    feedback: [
      {
        id: 22,
        user: "Healthcare Administrator",
        rating: 4,
        comment: "Significant improvement in patient care",
        date: "2024-08-15"
      }
    ]
  },
  {
    id: 32,
    title: "Tharaka Nithi Green Energy Project",
    description: "Biogas and solar hybrid power generation",
    status: "Planning",
    budget: 4200000000,
    startDate: "2024-10-01",
    endDate: "2026-03-31",
    location: {
      county: "Tharaka Nithi",
      coordinates: { lat: -0.3073, lng: 37.8892 }
    },
    category: "Energy",
    contractor: "Green Power Solutions",
    rating: 0,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    source: "Rural Electrification Authority",
    projectType: "County",
    feedback: []
  }
];
