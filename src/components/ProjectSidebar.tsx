
import React from 'react';
import { ChevronLeft, ChevronRight, Calendar, DollarSign, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockProjects } from '@/data/mockProjects';

export const ProjectSidebar = ({ isOpen, onToggle, selectedProject, onProjectSelect }) => {
  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isOpen ? 'w-96' : 'w-12'}`}>
      {/* Toggle Button */}
      <div className="flex justify-between items-center p-4 border-b">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="p-2"
        >
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
        {isOpen && (
          <h2 className="font-semibold text-gray-900">Government Projects</h2>
        )}
      </div>

      {isOpen && (
        <div className="h-full overflow-y-auto pb-20">
          {/* Project Stats */}
          <div className="p-4 bg-gray-50 border-b">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{mockProjects.length}</div>
                <div className="text-xs text-gray-600">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-xs text-gray-600">Active</div>
              </div>
            </div>
          </div>

          {/* Project List */}
          <div className="p-4 space-y-4">
            {mockProjects.map((project) => (
              <Card 
                key={project.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedProject?.id === project.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => onProjectSelect(project)}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-sm font-medium line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant={project.status === 'Active' ? 'default' : 'secondary'}
                      className="ml-2"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-600">
                      <DollarSign className="h-3 w-3 mr-1" />
                      KSh {project.budget.toLocaleString()}
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.startDate}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-600">
                        <Users className="h-3 w-3 mr-1" />
                        {project.feedback?.length || 0} reviews
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs ml-1">{project.rating || 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
