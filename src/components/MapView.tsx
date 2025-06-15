
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mockProjects } from '@/data/mockProjects';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export const MapView = ({ selectedProject, onProjectSelect }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [36.8219, -1.2921], // Nairobi, Kenya
        zoom: 6,
        pitch: 0,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add markers for mock projects
      mockProjects.forEach((project) => {
        const marker = new mapboxgl.Marker({
          color: '#16a34a',
          scale: 0.8
        })
          .setLngLat([project.longitude, project.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<div class="p-2">
                <h3 class="font-semibold text-sm">${project.title}</h3>
                <p class="text-xs text-gray-600">${project.location}</p>
                <p class="text-xs font-medium text-green-600">KES ${project.budget.toLocaleString()}</p>
              </div>`
            )
          )
          .addTo(map.current!);

        marker.getElement().addEventListener('click', () => {
          onProjectSelect(project);
        });
      });

      setIsMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapInitialized) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg border max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter Mapbox Token</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get your free public token from{' '}
              <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                mapbox.com
              </a>
            </p>
          </div>
          
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={initializeMap}
              disabled={!mapboxToken}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Load Interactive Map
            </Button>
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
