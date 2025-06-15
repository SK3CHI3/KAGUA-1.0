
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
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024); // Default open on desktop
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
        {/* Mobile-responsive Project Sidebar */}
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
          
          {/* Mobile-responsive Scraping Tool Button */}
          <button
            onClick={() => setShowScrapingTool(!showScrapingTool)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 sm:px-4 sm:py-3 rounded-lg shadow-xl border-2 border-white flex items-center gap-1 sm:gap-2 z-30 font-semibold transition-all duration-200 hover:scale-105 text-xs sm:text-sm"
          >
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Web Scraping</span>
            <span className="sm:hidden">Scrape</span>
          </button>

          {/* Mobile-responsive Web Scraping Tool Panel */}
          {showScrapingTool && (
            <div className="absolute top-14 sm:top-20 right-2 sm:right-4 w-80 sm:w-96 max-h-[calc(100vh-8rem)] overflow-y-auto z-30 shadow-2xl">
              <WebScrapingTool onProjectsExtracted={handleProjectsExtracted} />
            </div>
          )}
          
          {/* Mobile-responsive Floating Action Button */}
          <div className="hidden sm:block">
            <FloatingActionButton 
              onClick={handleShowFeedbackModal}
            />
          </div>
          
          {/* Mobile FAB - positioned differently on mobile */}
          <div className="sm:hidden">
            <button
              onClick={handleShowFeedbackModal}
              className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-30 transition-all duration-200"
            >
              <Globe className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile-responsive Feedback Modal */}
      <FeedbackModal 
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Index;
