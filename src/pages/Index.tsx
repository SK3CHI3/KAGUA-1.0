
import React, { useState } from 'react';
import { MapView } from '@/components/MapView';
import { ProjectSidebar } from '@/components/ProjectSidebar';
import { Header } from '@/components/Header';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { FeedbackModal } from '@/components/FeedbackModal';
import { WebScrapingTool } from '@/components/WebScrapingTool';
import { mockProjects } from '@/data/mockProjects';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showScrapingTool, setShowScrapingTool] = useState(false);
  const [allProjects, setAllProjects] = useState(mockProjects);

  const handleProjectsExtracted = (newProjects: any[]) => {
    setAllProjects(prev => [...prev, ...newProjects]);
    setShowScrapingTool(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="relative flex h-[calc(100vh-4rem)]">
        {/* Project Sidebar */}
        <ProjectSidebar 
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          selectedProject={selectedProject}
          onProjectSelect={setSelectedProject}
          projects={allProjects}
        />
        
        {/* Main Map View */}
        <div className="flex-1 relative">
          <MapView 
            selectedProject={selectedProject}
            onProjectSelect={setSelectedProject}
            projects={allProjects}
          />
          
          {/* Scraping Tool Button */}
          <button
            onClick={() => setShowScrapingTool(!showScrapingTool)}
            className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-20"
          >
            <span>Web Scraping</span>
          </button>

          {/* Web Scraping Tool Panel */}
          {showScrapingTool && (
            <div className="absolute top-16 right-4 w-96 max-h-[calc(100vh-8rem)] overflow-y-auto z-20">
              <WebScrapingTool onProjectsExtracted={handleProjectsExtracted} />
            </div>
          )}
          
          {/* Floating Action Button */}
          <FloatingActionButton 
            onClick={() => setShowFeedbackModal(true)}
          />
        </div>
      </div>

      {/* Feedback Modal */}
      <FeedbackModal 
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Index;
