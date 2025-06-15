
import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MenuDropdown } from './MenuDropdown';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm dark:shadow-gray-900/20 transition-colors sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo and Brand - More compact */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="bg-gradient-to-br from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 p-1.5 sm:p-2 rounded-lg shadow-md dark:shadow-green-900/20 group-hover:shadow-lg dark:group-hover:shadow-green-900/30 transition-all duration-200">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-500 bg-clip-text text-transparent">
                  Kagua
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-0.5 hidden sm:block">Projects Transparency</p>
              </div>
            </Link>
          </div>
          
          {/* Actions - Simplified */}
          <div className="flex items-center space-x-2">
            <Link to="/about" className="hidden sm:block">
              <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-3 py-2 rounded-md transition-all duration-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/60">
                About
              </button>
            </Link>
            
            <ThemeToggle />
            <MenuDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};
