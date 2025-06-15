
import React, { useRef, useEffect } from 'react';
import { mockProjects } from '@/data/mockProjects';

export const MapView = ({ selectedProject, onProjectSelect }) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  // Mock Kenya coordinates
  const kenyaCenter = { lat: -1.2921, lng: 36.8219 };

  useEffect(() => {
    // For now, we'll create a simple map placeholder
    // In production, this would integrate with Mapbox or similar
    console.log('Map would be initialized here with Kenya boundaries');
  }, []);

  return (
    <div className="w-full h-full relative bg-gradient-to-br from-green-50 to-blue-50">
      <div ref={mapContainer} className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Map Coming Soon</h3>
            <p className="text-gray-600">
              This will display an interactive map of Kenya with all government projects marked by location.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mock project markers overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {mockProjects.slice(0, 5).map((project, index) => (
          <div
            key={project.id}
            className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg pointer-events-auto cursor-pointer hover:scale-110 transition-transform"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
            }}
            onClick={() => onProjectSelect(project)}
          />
        ))}
      </div>
    </div>
  );
};
