
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, MapPin, Star, Users, MessageSquare, ExternalLink } from 'lucide-react';

interface ProjectDetailsProps {
  project: any;
  onClose: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="space-y-4">
      {/* Project Header */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                  {project.status}
                </Badge>
                {project.rating && (
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">{project.rating}</span>
                  </div>
                )}
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-gray-600 mb-4">{project.description}</p>
          
          {/* Project Image */}
          {project.image && (
            <div className="mb-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Project Details */}
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center text-sm">
              <DollarSign className="h-4 w-4 mr-2 text-green-600" />
              <span className="font-medium">Budget:</span>
              <span className="ml-1">KSh {project.budget.toLocaleString()}</span>
            </div>
            
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-2 text-blue-600" />
              <span className="font-medium">Start Date:</span>
              <span className="ml-1">{project.startDate}</span>
            </div>
            
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-2 text-red-600" />
              <span className="font-medium">Location:</span>
              <span className="ml-1">{project.location.county}</span>
            </div>

            {project.contractor && (
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2 text-purple-600" />
                <span className="font-medium">Contractor:</span>
                <span className="ml-1">{project.contractor}</span>
              </div>
            )}

            {project.source && (
              <div className="flex items-center text-sm">
                <ExternalLink className="h-4 w-4 mr-2 text-gray-600" />
                <span className="font-medium">Source:</span>
                <span className="ml-1 text-blue-600">{project.source}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Comments/Feedback Section */}
      {project.feedback && project.feedback.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Community Feedback ({project.feedback.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {project.feedback.map((comment: any, index: number) => (
                <div key={index} className="border-l-2 border-gray-200 pl-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="font-medium text-sm">{comment.user}</span>
                    {comment.rating && (
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs ml-1">{comment.rating}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{comment.comment}</p>
                  {comment.date && (
                    <span className="text-xs text-gray-400">{comment.date}</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
