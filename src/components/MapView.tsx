
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
      
      const marker = L.marker([
        project.location.coordinates.lat,
        project.location.coordinates.lng
      ]).addTo(map.current!);

      marker.bindPopup(`
        <div style="padding: 8px; font-family: system-ui, sans-serif;">
          <h3 style="font-weight: 600; font-size: 14px; margin: 0 0 4px 0;">${project.title}</h3>
          <p style="font-size: 12px; color: #666; margin: 0 0 4px 0;">${project.location.county}</p>
          <p style="font-size: 12px; font-weight: 500; color: #16a34a; margin: 0;">KES ${project.budget.toLocaleString()}</p>
          ${project.source ? `<p style="font-size: 10px; color: #888; margin: 4px 0 0 0;">Source: ${project.source}</p>` : ''}
        </div>
      `);

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
      
      // Initialize Leaflet map
      map.current = L.map(mapContainer.current, {
        center: [-1.2921, 36.8219], // Nairobi, Kenya
        zoom: 6,
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
          <div className="bg-white p-8 rounded-xl shadow-lg border max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Map</h3>
              <p className="text-sm text-gray-600">
                Initializing interactive map with OpenStreetMap...
              </p>
            </div>
          </div>
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
