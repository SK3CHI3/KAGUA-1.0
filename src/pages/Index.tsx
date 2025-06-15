
import React, { useState, useMemo } from 'react';
import { MapView } from '@/components/MapView';
import { ProjectSidebar } from '@/components/ProjectSidebar';
import { Header } from '@/components/Header';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { FeedbackModal } from '@/components/FeedbackModal';
import { WebScrapingTool } from '@/components/WebScrapingTool';
import { mockProjects } from '@/data/mockProjects';
import { Globe } from 'lucide-react';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showScrapingTool, setShowScrapingTool] = useState(false);
  const [allProjects, setAllProjects] = useState(mockProjects);
  const [filter, setFilter] = useState<'All' | 'National' | 'County'>('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return allProjects;
    return allProjects.filter(project => project.projectType === filter);
  }, [allProjects, filter]);

  const handleProjectsExtracted = (newProjects: any[]) => {
    setAllProjects(prev => [...prev, ...newProjects]);
    setShowScrapingTool(false);
  };

  const handleShowFeedbackModal = () => {
    setShowFeedbackModal(true);
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
          onShowFeedbackModal={handleShowFeedbackModal}
          filter={filter}
          onFilterChange={setFilter}
        />
        
        {/* Main Map View */}
        <div className="flex-1 relative">
          <MapView 
            selectedProject={selectedProject}
            onProjectSelect={setSelectedProject}
            projects={filteredProjects}
          />
          
          {/* Scraping Tool Button - Enhanced visibility */}
          <button
            onClick={() => setShowScrapingTool(!showScrapingTool)}
            className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg shadow-xl border-2 border-white flex items-center gap-2 z-30 font-semibold transition-all duration-200 hover:scale-105"
          >
            <Globe className="w-5 h-5" />
            <span>Web Scraping</span>
          </button>

          {/* Web Scraping Tool Panel */}
          {showScrapingTool && (
            <div className="absolute top-20 right-4 w-96 max-h-[calc(100vh-8rem)] overflow-y-auto z-30 shadow-2xl">
              <WebScrapingTool onProjectsExtracted={handleProjectsExtracted} />
            </div>
          )}
          
          {/* Floating Action Button */}
          <FloatingActionButton 
            onClick={handleShowFeedbackModal}
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
