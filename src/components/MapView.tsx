
import React, { useRef, useEffect, useState } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { mockProjects } from '@/data/mockProjects';
import { MapPin } from 'lucide-react';

interface MapViewProps {
  selectedProject: any;
  onProjectSelect: (project: any) => void;
}

export const MapView: React.FC<MapViewProps> = ({ selectedProject, onProjectSelect }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const [isMapInitialized, setIsMapInitialized] = useState(false);

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

      // Create simple markers (using default Leaflet markers)
      mockProjects.forEach((project, index) => {
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
          </div>
        `);

        marker.on('click', () => {
          onProjectSelect(project);
        });
      });

      console.log('All markers added successfully');
      setIsMapInitialized(true);
      console.log('Map initialization complete!');
      
    } catch (error) {
      console.error('Error initializing map:', error);
      console.error('Error details:', error.message);
      // Still set as initialized to prevent infinite loading
      setIsMapInitialized(true);
    }
  };

  useEffect(() => {
    console.log('MapView useEffect triggered');
    
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      console.log('Timer fired, calling initializeMap');
      initializeMap();
    }, 200); // Slightly longer delay

    return () => {
      console.log('MapView cleanup');
      clearTimeout(timer);
      if (map.current) {
        console.log('Removing existing map');
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Focus on selected project
  useEffect(() => {
    if (selectedProject && map.current) {
      console.log('Focusing on selected project:', selectedProject.title);
      map.current.setView(
        [selectedProject.location.coordinates.lat, selectedProject.location.coordinates.lng],
        10
      );
    }
  }, [selectedProject]);

  console.log('MapView render - isMapInitialized:', isMapInitialized);

  if (!isMapInitialized) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
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
    );
  }

  return (
    <div className="w-full h-full relative">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};
