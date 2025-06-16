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
      {/* Mobile Overlay with improved blur effect */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-[1000] lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar with improved visibility */}
      <div className={`
        fixed lg:relative inset-y-0 left-0
        bg-white/95 dark:bg-gray-900/95
        backdrop-blur-md
        border-r border-gray-200/80 dark:border-gray-800/80
        shadow-xl shadow-gray-200/50 dark:shadow-gray-950/50
        transition-all duration-300 ease-in-out transform
        ${isOpen 
          ? 'w-[90vw] sm:w-96 translate-x-0' 
          : 'w-0 lg:w-12 -translate-x-full lg:translate-x-0'
        }
        z-[1001]
      `}>
        {/* Toggle Button - Enhanced visibility */}
        <div className="flex justify-between items-center p-3 sm:p-4 
          border-b border-gray-200/80 dark:border-gray-800/80 
          bg-white/95 dark:bg-gray-900/95 
          backdrop-blur-md sticky top-0 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="p-2 
              text-gray-700 dark:text-gray-300
              hover:bg-gray-100 dark:hover:bg-gray-800 
              hover:text-gray-900 dark:hover:text-gray-100
              transition-colors"
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
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
              {selectedProject ? 'Project Details' : 'Government Projects'}
            </h2>
          )}
        </div>

        {isOpen && (
          <div className="h-[calc(100vh-48px)] overflow-y-auto pb-20 
            [&::-webkit-scrollbar]:w-2 
            [&::-webkit-scrollbar-thumb]:rounded-full 
            [&::-webkit-scrollbar-track]:bg-transparent 
            [&::-webkit-scrollbar-thumb]:bg-gray-300/80 
            dark:[&::-webkit-scrollbar-thumb]:bg-gray-700/80 
            hover:[&::-webkit-scrollbar-thumb]:bg-gray-400/90 
            dark:hover:[&::-webkit-scrollbar-thumb]:bg-gray-600/90">
            {selectedProject ? (
              // Show detailed project information
              <div className="p-3 sm:p-4">
                <ProjectDetails 
                  project={selectedProject} 
                  onClose={() => onProjectSelect(null)} 
                  onAddFeedback={onShowFeedbackModal}
                />
              </div>
            ) : (
              // Show project list with enhanced styling
              <>
                {/* Project Stats with improved dark mode */}
                <div className="p-3 sm:p-4 bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                      <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-500">{filteredProjects.length}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {filter === 'All' ? 'Total Projects' : `${filter} Projects`}
                      </div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">
                        {filteredProjects.filter(p => p.status === 'Active').length}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Active</div>
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
                <div className="p-3 sm:p-4 space-y-3">
                  {filteredProjects.map((project) => (
                    <Card 
                      key={project.id}
                      className="cursor-pointer transition-all duration-200 
                        bg-white/95 hover:bg-white 
                        dark:bg-gray-900 dark:hover:bg-gray-900
                        hover:shadow-md dark:hover:shadow-emerald-900/20 
                        border-gray-200/80 dark:border-gray-700
                        hover:border-emerald-200 dark:hover:border-emerald-700
                        active:scale-[0.99] group"
                      onClick={() => onProjectSelect(project)}
                    >
                      <CardHeader className="pb-2 sm:pb-3">
                        <div className="flex justify-between items-start gap-3">
                          <CardTitle className="text-sm sm:text-base font-semibold line-clamp-2 flex-1 
                            text-gray-900 dark:text-white
                            group-hover:text-emerald-600 dark:group-hover:text-emerald-400 
                            transition-colors">
                            {project.title}
                          </CardTitle>
                          <div className="flex flex-col gap-1.5 flex-shrink-0">
                            <Badge 
                              variant={project.status === 'Active' ? 'default' : 'secondary'}
                              className={`text-[10px] sm:text-xs px-2 py-0 font-medium
                                ${project.status === 'Active' 
                                  ? 'bg-emerald-500 dark:bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white dark:text-white'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border dark:border-gray-700'
                                }`}
                            >
                              {project.status}
                            </Badge>
                            <Badge 
                              variant="outline"
                              className={`text-[10px] sm:text-xs px-2 py-0 font-medium ${
                                project.projectType === 'National' 
                                  ? 'border-red-300 bg-red-50/80 text-red-700 dark:border-red-700 dark:bg-red-950/50 dark:text-red-300'
                                  : 'border-emerald-300 bg-emerald-50/80 text-emerald-700 dark:border-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
                              }`}
                            >
                              {project.projectType}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5 text-gray-700 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                              <Calendar className="h-3.5 w-3.5" />
                              <span className="font-medium">{new Date(project.startDate).getFullYear()}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-700 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                              <DollarSign className="h-3.5 w-3.5" />
                              <span className="font-medium">{(project.budget / 1e9).toFixed(1)}B</span>
                            </div>
                          </div>
                          {project.rating > 0 && (
                            <div className="flex items-center gap-1.5">
                              <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500 dark:text-yellow-300 dark:fill-yellow-300" />
                              <span className="font-medium text-gray-700 dark:text-gray-100">{project.rating.toFixed(1)}</span>
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
