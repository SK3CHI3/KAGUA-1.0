
import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MenuDropdown } from './MenuDropdown';

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo and Brand - More compact */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-1.5 sm:p-2 rounded-lg shadow-md">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Kagua
                </h1>
                <p className="text-xs text-gray-500 -mt-0.5 hidden sm:block">Projects Transparency</p>
              </div>
            </Link>
          </div>
          
          {/* Actions - Simplified */}
          <div className="flex items-center space-x-2">
            <Link to="/about" className="hidden sm:block">
              <button className="text-sm text-gray-600 hover:text-green-600 px-2 py-1 rounded transition-colors">
                About
              </button>
            </Link>
            
            <MenuDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};
