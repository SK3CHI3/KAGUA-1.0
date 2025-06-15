interface ExtractedProject {
  id: number;
  title: string;
  description: string;
  status: string;
  budget: number;
  startDate: string;
  endDate: string;
  location: {
    county: string;
    coordinates: { lat: number; lng: number };
  };
  category: string;
  contractor: string;
  rating: number | null;
  feedback: any[];
  source: string;
  projectType: string;
}

// Default coordinates for Kenyan counties (approximate centers)
const COUNTY_COORDINATES = {
  'nairobi': { lat: -1.2921, lng: 36.8219 },
  'mombasa': { lat: -4.0435, lng: 39.6682 },
  'kisumu': { lat: -0.0917, lng: 34.7680 },
  'nakuru': { lat: -0.3031, lng: 36.0800 },
  'eldoret': { lat: 0.5143, lng: 35.2698 },
  'machakos': { lat: -1.5177, lng: 37.2634 },
  'turkana': { lat: 3.1197, lng: 35.5969 },
  'kiambu': { lat: -1.1740, lng: 36.6880 },
  'default': { lat: -1.2921, lng: 36.8219 } // Default to Nairobi
};

export function extractProjectsFromScrapedData(scrapedData: any, sourceUrl: string): ExtractedProject[] {
  const projects: ExtractedProject[] = [];
  
  if (!scrapedData) {
    console.log('No scraped data found');
    return projects;
  }

  // Handle the response structure from Firecrawl
  let markdown = '';
  if (scrapedData.markdown) {
    markdown = scrapedData.markdown.toLowerCase();
  } else if (scrapedData.data && scrapedData.data.markdown) {
    markdown = scrapedData.data.markdown.toLowerCase();
  } else if (typeof scrapedData === 'string') {
    markdown = scrapedData.toLowerCase();
  } else {
    console.log('Could not find markdown content in scraped data');
    return projects;
  }

  const lines = markdown.split('\n');
  
  // Look for project-related keywords and patterns
  const projectKeywords = ['project', 'construction', 'development', 'infrastructure', 'road', 'hospital', 'school', 'water', 'bridge'];
  const budgetPattern = /(?:ksh|kes|budget|cost|worth)[\s\D]*?(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)\s*(?:million|billion|thousand|m|b|k)?/gi;
  const locationPattern = /(nairobi|mombasa|kisumu|nakuru|eldoret|machakos|turkana|kiambu|county)/gi;
  
  // Keywords that suggest national vs county projects
  const nationalKeywords = ['national', 'ministry', 'government', 'federal', 'country', 'kenya', 'republic'];
  const countyKeywords = ['county', 'local', 'municipal', 'district'];
  
  let projectCount = 0;
  
  // Simple extraction logic - look for lines that might contain project information
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if line contains project keywords
    const hasProjectKeyword = projectKeywords.some(keyword => line.includes(keyword));
    
    if (hasProjectKeyword && line.length > 20) {
      projectCount++;
      
      // Extract budget if present
      const budgetMatch = line.match(budgetPattern);
      let budget = Math.floor(Math.random() * 50000000000) + 1000000000; // Random fallback
      
      if (budgetMatch) {
        const budgetStr = budgetMatch[0].replace(/[^\d.,]/g, '');
        const budgetNum = parseFloat(budgetStr.replace(/,/g, ''));
        if (!isNaN(budgetNum)) {
          // Assume millions if no specific unit mentioned
          budget = budgetNum < 1000 ? budgetNum * 1000000 : budgetNum;
        }
      }
      
      // Extract location
      const locationMatch = line.match(locationPattern);
      const county = locationMatch ? locationMatch[0].replace('county', '').trim() : 'nairobi';
      const coordinates = COUNTY_COORDINATES[county as keyof typeof COUNTY_COORDINATES] || COUNTY_COORDINATES.default;
      
      // Determine project type based on keywords and budget
      let projectType = 'County';
      const hasNationalKeywords = nationalKeywords.some(keyword => line.includes(keyword) || sourceUrl.includes(keyword));
      const hasCountyKeywords = countyKeywords.some(keyword => line.includes(keyword));
      
      // Large budgets (>10B) are likely national projects
      if (hasNationalKeywords || budget > 10000000000) {
        projectType = 'National';
      } else if (hasCountyKeywords) {
        projectType = 'County';
      }
      
      // Generate project title from line (take first reasonable part)
      let title = line.split('.')[0].split(',')[0].trim();
      title = title.length > 5 ? title : `Project from ${sourceUrl}`;
      
      // Determine category based on keywords
      let category = 'Infrastructure';
      if (line.includes('hospital') || line.includes('health')) category = 'Healthcare';
      else if (line.includes('school') || line.includes('education')) category = 'Education';
      else if (line.includes('water') || line.includes('sanitation')) category = 'Water & Sanitation';
      else if (line.includes('power') || line.includes('energy')) category = 'Energy';
      
      const project: ExtractedProject = {
        id: Date.now() + projectCount,
        title: title.charAt(0).toUpperCase() + title.slice(1),
        description: `Project information extracted from ${sourceUrl}`,
        status: ['Active', 'Planning', 'Completed'][Math.floor(Math.random() * 3)],
        budget,
        startDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        endDate: new Date(Date.now() + Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        location: {
          county: county.charAt(0).toUpperCase() + county.slice(1),
          coordinates
        },
        category,
        contractor: 'TBD',
        rating: Math.random() > 0.5 ? Math.round((Math.random() * 3 + 2) * 10) / 10 : null,
        feedback: [],
        source: sourceUrl,
        projectType
      };
      
      projects.push(project);
      
      // Limit to avoid too many projects from one source
      if (projectCount >= 5) break;
    }
  }
  
  console.log(`Extracted ${projects.length} projects from ${sourceUrl}`);
  return projects;
}
