
import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar, DollarSign, Users, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectDetails } from './ProjectDetails';
import { ProjectFilter } from './ProjectFilter';

interface ProjectSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  selectedProject: any;
  onProjectSelect: (project: any) => void;
  projects: any[];
  onShowFeedbackModal: () => void;
  filter: 'All' | 'National' | 'County';
  onFilterChange: (filter: 'All' | 'National' | 'County') => void;
}

export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ 
  isOpen, 
  onToggle, 
  selectedProject, 
  onProjectSelect,
  projects,
  onShowFeedbackModal,
  filter,
  onFilterChange
}) => {
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(project => project.projectType === filter);
  }, [projects, filter]);

  const nationalCount = projects.filter(p => p.projectType === 'National').length;
  const countyCount = projects.filter(p => p.projectType === 'County').length;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[1000] lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        bg-white border-r border-gray-200 transition-all duration-300 z-[1001]
        ${isOpen 
          ? 'w-80 sm:w-96 fixed lg:relative inset-y-0 left-0' 
          : 'w-0 lg:w-12 overflow-hidden'
        }
      `}>
        {/* Toggle Button - Enhanced for mobile */}
        <div className="flex justify-between items-center p-2 sm:p-4 border-b bg-white">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="p-2"
          >
            {isOpen ? (
              <>
                <ChevronLeft className="h-4 w-4 hidden lg:block" />
                <X className="h-4 w-4 lg:hidden" />
              </>
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
          {isOpen && (
            <h2 className="font-semibold text-gray-900 text-sm sm:text-base">
              {selectedProject ? 'Project Details' : 'Government Projects'}
            </h2>
          )}
        </div>

        {isOpen && (
          <div className="h-full overflow-y-auto pb-20">
            {selectedProject ? (
              // Show detailed project information
              <div className="p-2 sm:p-4">
                <ProjectDetails 
                  project={selectedProject} 
                  onClose={() => onProjectSelect(null)} 
                  onAddFeedback={onShowFeedbackModal}
                />
              </div>
            ) : (
              // Show project list
              <>
                {/* Mobile-responsive Project Stats */}
                <div className="p-2 sm:p-4 bg-gray-50 border-b">
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">{filteredProjects.length}</div>
                      <div className="text-xs text-gray-600">
                        {filter === 'All' ? 'Total Projects' : `${filter} Projects`}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">
                        {filteredProjects.filter(p => p.status === 'Active').length}
                      </div>
                      <div className="text-xs text-gray-600">Active</div>
                    </div>
                  </div>
                </div>

                {/* Filter Component */}
                <div className="p-2 sm:p-4 border-b">
                  <ProjectFilter
                    currentFilter={filter}
                    onFilterChange={onFilterChange}
                    nationalCount={nationalCount}
                    countyCount={countyCount}
                  />
                </div>

                {/* Mobile-responsive Project List */}
                <div className="p-2 sm:p-4 space-y-2 sm:space-y-4">
                  {filteredProjects.map((project) => (
                    <Card 
                      key={project.id}
                      className="cursor-pointer transition-all hover:shadow-md"
                      onClick={() => onProjectSelect(project)}
                    >
                      <CardHeader className="pb-1 sm:pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xs sm:text-sm font-medium line-clamp-2 flex-1 pr-2">
                            {project.title}
                          </CardTitle>
                          <div className="flex flex-col gap-1 ml-2 flex-shrink-0">
                            <Badge 
                              variant={project.status === 'Active' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {project.status}
                            </Badge>
                            <Badge 
                              variant="outline"
                              className={`text-xs ${
                                project.projectType === 'National' 
                                  ? 'border-red-300 text-red-700' 
                                  : 'border-green-300 text-green-700'
                              }`}
                            >
                              {project.projectType}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex items-center text-xs text-gray-600">
                            <DollarSign className="h-3 w-3 mr-1 flex-shrink-0" />
                            <span className="truncate">KSh {project.budget.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-600">
                            <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                            <span className="truncate">{project.startDate}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-xs text-gray-600">
                              <Users className="h-3 w-3 mr-1 flex-shrink-0" />
                              <span>{project.feedback?.length || 0} reviews</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span className="text-xs ml-1">{project.rating || 'N/A'}</span>
                            </div>
                          </div>
                          {project.source && (
                            <div className="text-xs text-gray-500 italic truncate">
                              Source: {project.source}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};
