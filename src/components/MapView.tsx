
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
    if (!mapContainer.current || map.current) return;

    try {
      console.log('Initializing Leaflet map...');
      
      // Initialize Leaflet map
      map.current = L.map(mapContainer.current).setView([-1.2921, 36.8219], 6); // Nairobi, Kenya

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map.current);

      // Create custom green icon
      const greenIcon = L.divIcon({
        html: `<div style="background-color: #16a34a; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
          <div style="width: 8px; height: 8px; background-color: white; border-radius: 50%;"></div>
        </div>`,
        className: 'custom-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      // Add markers for mock projects
      mockProjects.forEach((project) => {
        const marker = L.marker(
          [project.location.coordinates.lat, project.location.coordinates.lng],
          { icon: greenIcon }
        ).addTo(map.current!);

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

      console.log('Map initialized successfully');
      setIsMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
      // Still set as initialized to prevent infinite loading
      setIsMapInitialized(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      initializeMap();
    }, 100); // Small delay to ensure DOM is ready

    return () => {
      clearTimeout(timer);
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Focus on selected project
  useEffect(() => {
    if (selectedProject && map.current) {
      map.current.setView(
        [selectedProject.location.coordinates.lat, selectedProject.location.coordinates.lng],
        10
      );
    }
  }, [selectedProject]);

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
