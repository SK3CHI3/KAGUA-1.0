
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  Mail, 
  Github, 
  MessageSquare, 
  BookOpen,
  Bell,
  Search
} from 'lucide-react';

export const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'About', icon: Info, path: '/about' },
    { label: 'Contact', icon: Mail, path: '/contact' },
    { label: 'Subscribe', icon: Bell, path: '/subscribe' },
    { label: 'GitHub', icon: Github, path: 'https://github.com', external: true },
    { label: 'Discord', icon: MessageSquare, path: '#', external: true },
    { label: 'Docs', icon: BookOpen, path: '#', external: true },
  ];

  return (
    <div className="relative">
      <Button 
        variant="outline" 
        size="sm" 
        className="border-green-200 text-green-700 hover:bg-green-50"
        onClick={toggleMenu}
      >
        {isOpen ? <X className="h-4 w-4 sm:mr-2" /> : <Menu className="h-4 w-4 sm:mr-2" />}
        <span className="hidden sm:inline">{isOpen ? 'Close' : 'Menu'}</span>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-20 z-40"
            onClick={toggleMenu}
          />
          
          {/* Menu */}
          <Card className="absolute right-0 top-full mt-2 w-56 shadow-lg z-50 border-green-200">
            <CardContent className="p-2">
              <div className="md:hidden mb-3 pb-3 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input 
                    placeholder="Search projects..." 
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors"
                        onClick={toggleMenu}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors"
                        onClick={toggleMenu}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};
