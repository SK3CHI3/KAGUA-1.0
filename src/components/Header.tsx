
import React from 'react';
import { MapPin, Search, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-2.5 rounded-xl shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Kagua
                </h1>
                <p className="text-sm text-gray-500 -mt-1">Government Projects Transparency</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Kagua
                </h1>
              </div>
            </Link>
          </div>
          
          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search projects, locations..." 
                className="pl-10 w-80 bg-gray-50 border-gray-200 focus:bg-white focus:border-green-500 focus:ring-green-500"
              />
            </div>
            
            <Link to="/about">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`hidden sm:flex text-gray-600 hover:text-green-600 hover:bg-green-50 ${
                  location.pathname === '/about' ? 'text-green-600 bg-green-50' : ''
                }`}
              >
                About Kagua
              </Button>
            </Link>
            
            <Button variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50">
              <Menu className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
