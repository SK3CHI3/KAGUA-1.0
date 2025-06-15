
import React from 'react';
import { ChevronLeft, ChevronRight, Calendar, DollarSign, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectDetails } from './ProjectDetails';

interface ProjectSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  selectedProject: any;
  onProjectSelect: (project: any) => void;
  projects: any[];
  onShowFeedbackModal: () => void;
}

export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ 
  isOpen, 
  onToggle, 
  selectedProject, 
  onProjectSelect,
  projects,
  onShowFeedbackModal
}) => {
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
          <h2 className="font-semibold text-gray-900">
            {selectedProject ? 'Project Details' : 'Government Projects'}
          </h2>
        )}
      </div>

      {isOpen && (
        <div className="h-full overflow-y-auto pb-20">
          {selectedProject ? (
            // Show detailed project information
            <div className="p-4">
              <ProjectDetails 
                project={selectedProject} 
                onClose={() => onProjectSelect(null)} 
                onAddFeedback={onShowFeedbackModal}
              />
            </div>
          ) : (
            // Show project list
            <>
              {/* Project Stats */}
              <div className="p-4 bg-gray-50 border-b">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{projects.length}</div>
                    <div className="text-xs text-gray-600">Total Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {projects.filter(p => p.status === 'Active').length}
                    </div>
                    <div className="text-xs text-gray-600">Active</div>
                  </div>
                </div>
              </div>

              {/* Project List */}
              <div className="p-4 space-y-4">
                {projects.map((project) => (
                  <Card 
                    key={project.id}
                    className="cursor-pointer transition-all hover:shadow-md"
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
                        {project.source && (
                          <div className="text-xs text-gray-500 italic">
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
  );
};
