
import React, { useState, useMemo } from 'react';
import { MapView } from '@/components/MapView';
import { ProjectSidebar } from '@/components/ProjectSidebar';
import { Header } from '@/components/Header';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { FeedbackModal } from '@/components/FeedbackModal';
import { mockProjects } from '@/data/mockProjects';
import { Globe, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024); // Default open on desktop
  const [allProjects, setAllProjects] = useState(mockProjects);
  const [filter, setFilter] = useState<'All' | 'National' | 'County'>('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return allProjects;
    return allProjects.filter(project => project.projectType === filter);
  }, [allProjects, filter]);

  const handleShowFeedbackModal = () => {
    setShowFeedbackModal(true);
  };

  console.log('Sidebar open:', sidebarOpen, 'Window width:', window.innerWidth);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="relative flex h-[calc(100vh-3.5rem)]">
        {/* Mobile Menu Button - Always visible on mobile when sidebar is closed */}
        <Button
          onClick={() => setSidebarOpen(true)}
          className={`fixed top-16 left-4 z-[999] bg-green-600 hover:bg-green-700 text-white shadow-2xl border-2 border-white transition-all duration-200 ${
            sidebarOpen ? 'lg:hidden hidden' : 'lg:hidden block'
          }`}
          size="sm"
        >
          <Menu className="h-4 w-4" />
          <span className="ml-2 text-sm font-medium">Projects</span>
        </Button>

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
