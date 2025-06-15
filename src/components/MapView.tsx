
import React, { useRef, useEffect, useState } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { mockProjects } from '@/data/mockProjects';
import { MapPin } from 'lucide-react';

interface MapViewProps {
  selectedProject: any;
  onProjectSelect: (project: any) => void;
  projects?: any[];
}

export const MapView: React.FC<MapViewProps> = ({ 
  selectedProject, 
  onProjectSelect, 
  projects = mockProjects 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markers = useRef<L.Marker[]>([]);
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const formatBudget = (amount: number) => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)}K`;
    }
    return amount.toString();
  };

  // Create custom marker icons for different project types
  const createCustomIcon = (projectType: string) => {
    const isNational = projectType === 'National';
    const baseColor = isNational ? '#dc2626' : '#059669'; // Red for national, Green for county
    
    // Responsive icon size based on screen size
    const iconSize = window.innerWidth < 768 ? 20 : 24;
    const iconHeight = window.innerWidth < 768 ? 26 : 32;
    
    const iconHtml = `
      <div style="
        width: ${iconSize}px;
        height: ${iconHeight}px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: ${iconSize}px;
          height: ${iconSize}px;
          background-color: ${baseColor};
          border: 2px solid white;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          position: absolute;
          top: 0;
        "></div>
        <div style="
          width: ${iconSize * 0.33}px;
          height: ${iconSize * 0.33}px;
          background-color: white;
          border-radius: 50%;
          position: absolute;
          top: ${iconSize * 0.25}px;
          z-index: 1;
        "></div>
      </div>
    `;

    return L.divIcon({
      html: iconHtml,
      iconSize: [iconSize, iconHeight],
      iconAnchor: [iconSize / 2, iconHeight],
      popupAnchor: [0, -iconHeight],
      className: 'custom-marker'
    });
  };

  const clearMarkers = () => {
    markers.current.forEach(marker => {
      if (map.current) {
        map.current.removeLayer(marker);
      }
    });
    markers.current = [];
  };

  const addMarkers = () => {
    if (!map.current) return;
    
    console.log(`Adding ${projects.length} markers to map`);
    
    projects.forEach((project, index) => {
      console.log(`Adding marker ${index + 1} for project:`, project.title);
      
      const customIcon = createCustomIcon(project.projectType || 'County');
      
      const marker = L.marker([
        project.location.coordinates.lat,
        project.location.coordinates.lng
      ], { icon: customIcon }).addTo(map.current!);

      const statusColor = project.status === 'Active' ? '#16a34a' : '#6b7280';
      const formattedBudget = formatBudget(project.budget);
      const projectTypeColor = project.projectType === 'National' ? '#dc2626' : '#059669';

      // Mobile-responsive popup content
      const popupContent = `
        <div style="padding: 8px; font-family: system-ui, sans-serif; max-width: ${window.innerWidth < 768 ? '250px' : '300px'};">
          <h3 style="font-weight: 600; font-size: ${window.innerWidth < 768 ? '12px' : '14px'}; margin: 0 0 4px 0; line-height: 1.3;">${project.title}</h3>
          <p style="font-size: ${window.innerWidth < 768 ? '10px' : '12px'}; color: #666; margin: 0 0 4px 0;">${project.location.county}</p>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
            <p style="font-size: ${window.innerWidth < 768 ? '10px' : '12px'}; font-weight: 500; color: #16a34a; margin: 0;">KES ${formattedBudget}</p>
            <span style="font-size: ${window.innerWidth < 768 ? '8px' : '10px'}; padding: 2px 6px; background-color: ${statusColor}; color: white; border-radius: 12px; font-weight: 500;">${project.status}</span>
          </div>
          <div style="margin-bottom: 4px;">
            <span style="font-size: ${window.innerWidth < 768 ? '8px' : '10px'}; padding: 2px 6px; background-color: ${projectTypeColor}; color: white; border-radius: 12px; font-weight: 500;">${project.projectType || 'County'} Project</span>
          </div>
          ${project.source ? `<p style="font-size: ${window.innerWidth < 768 ? '8px' : '10px'}; color: #888; margin: 4px 0 0 0;">Source: ${project.source}</p>` : ''}
        </div>
      `;

      marker.bindPopup(popupContent);

      // Show popup on hover
      marker.on('mouseover', function() {
        this.openPopup();
      });

      // Hide popup when mouse leaves
      marker.on('mouseout', function() {
        const markerInstance = this;
        setTimeout(() => {
          markerInstance.closePopup();
        }, 100);
      });

      // Keep the click event for selecting projects
      marker.on('click', () => {
        onProjectSelect(project);
      });

      markers.current.push(marker);
    });

    console.log(`Successfully added ${markers.current.length} markers`);
  };

  const initializeMap = () => {
    console.log('Attempting to initialize map...');
    console.log('Map container exists:', !!mapContainer.current);
    console.log('Map already initialized:', !!map.current);
    
    if (!mapContainer.current || map.current) {
      console.log('Skipping initialization - container missing or map already exists');
      return;
    }

    try {
      console.log('Creating Leaflet map instance...');
      
      // Initialize Leaflet map with better focus on Kenya
      map.current = L.map(mapContainer.current, {
        center: [-0.0236, 37.9062], // Center of Kenya
        zoom: 6, // Reduced zoom to show all borders clearly
        zoomControl: true,
        scrollWheelZoom: true
      });

      console.log('Map instance created, adding tile layer...');

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(map.current);

      console.log('Tile layer added, creating markers...');

      // Add markers for all projects
      addMarkers();

      console.log('Map initialization complete!');
      setIsMapInitialized(true);
      
    } catch (error) {
      console.error('Error initializing map:', error);
      console.error('Error details:', error.message);
      // Still set as initialized to prevent infinite loading
      setIsMapInitialized(true);
    }
  };

  // Update markers when projects change
  useEffect(() => {
    if (map.current && isMapInitialized) {
      console.log('Projects updated, refreshing markers');
      clearMarkers();
      addMarkers();
    }
  }, [projects]);

  useEffect(() => {
    console.log('MapView useEffect triggered');
    
    // Use requestAnimationFrame to ensure DOM is fully rendered
    const initMap = () => {
      requestAnimationFrame(() => {
        console.log('requestAnimationFrame callback, calling initializeMap');
        initializeMap();
      });
    };

    // Small timeout + requestAnimationFrame for better reliability
    const timer = setTimeout(initMap, 100);

    return () => {
      console.log('MapView cleanup');
      clearTimeout(timer);
      clearMarkers();
      if (map.current) {
        console.log('Removing existing map');
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Focus on selected project with zoom
  useEffect(() => {
    if (selectedProject && map.current) {
      console.log('Focusing on selected project:', selectedProject.title);
      map.current.setView(
        [selectedProject.location.coordinates.lat, selectedProject.location.coordinates.lng],
        14, // Increased zoom level for closer view
        { 
          animate: true,
          duration: 1.5 
        }
      );
    }
  }, [selectedProject]);

  console.log('MapView render - isMapInitialized:', isMapInitialized);

  return (
    <div className="w-full h-full relative">
      {!isMapInitialized && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center z-10">
          <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg border max-w-sm sm:max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Loading Map</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Initializing interactive map with OpenStreetMap...
              </p>
            </div>
          </div>
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
      
      {/* Mobile-responsive Map Legend */}
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white p-2 sm:p-3 rounded-lg shadow-lg border z-20 max-w-xs">
        <h4 className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Project Types</h4>
        <div className="space-y-1 sm:space-y-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-3 h-4 sm:w-4 sm:h-5 relative flex-shrink-0">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-600 border border-white rounded-full rounded-bl-none transform rotate-45 shadow-sm"></div>
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full absolute top-0.5 left-1 sm:top-1 sm:left-1.5 z-10"></div>
            </div>
            <span className="text-xs">National Projects</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-3 h-4 sm:w-4 sm:h-5 relative flex-shrink-0">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-600 border border-white rounded-full rounded-bl-none transform rotate-45 shadow-sm"></div>
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full absolute top-0.5 left-1 sm:top-1 sm:left-1.5 z-10"></div>
            </div>
            <span className="text-xs">County Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};
