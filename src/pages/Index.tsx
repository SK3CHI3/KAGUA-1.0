
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
        {/* Enhanced Mobile Menu Button */}
        <Button
          onClick={() => setSidebarOpen(true)}
          className={`fixed top-16 right-4 z-[999] bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-2xl border-2 border-white transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-xl ${
            sidebarOpen ? 'lg:hidden hidden' : 'lg:hidden flex'
          }`}
          size="sm"
        >
          <Menu className="h-4 w-4" />
          <span className="ml-2 text-sm font-semibold tracking-wide">Projects</span>
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
          
          {/* Enhanced Mobile FAB */}
          <div className="sm:hidden">
            <button
              onClick={handleShowFeedbackModal}
              className="fixed bottom-4 right-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-4 rounded-full shadow-2xl z-30 transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white"
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
