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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-all duration-300">
      <Header />
      
      <div className="relative flex h-[calc(100vh-3.5rem)]">
        {/* Enhanced Mobile Menu Button with better visibility */}
        <Button
          onClick={() => setSidebarOpen(true)}
          className={`fixed top-16 right-4 z-[999] 
            bg-gradient-to-r from-emerald-600 to-emerald-700 
            hover:from-emerald-700 hover:to-emerald-800 
            dark:from-emerald-500 dark:to-emerald-600 
            dark:hover:from-emerald-600 dark:hover:to-emerald-700 
            text-white font-medium
            shadow-lg shadow-emerald-500/20 
            dark:shadow-emerald-900/30 
            border-2 border-white/30 
            dark:border-emerald-400/20 
            transition-all duration-300 
            transform hover:scale-105 active:scale-95 
            rounded-xl backdrop-blur-sm
            ${sidebarOpen ? 'lg:hidden hidden' : 'lg:hidden flex'}`}
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
        
        {/* Main Map View with contrast improvements */}
        <div className="flex-1 relative z-0 bg-white dark:bg-gray-900">
          <MapView 
            selectedProject={selectedProject}
            onProjectSelect={setSelectedProject}
            projects={filteredProjects}
          />
          
          {/* Desktop Floating Action Button with improved visibility */}
          <div className="hidden sm:block z-[998]">
            <FloatingActionButton 
              onClick={handleShowFeedbackModal}
            />
          </div>
          
          {/* Enhanced Mobile FAB with better visibility */}
          <div className="sm:hidden">
            <button
              onClick={handleShowFeedbackModal}
              className="fixed bottom-4 right-4 
                bg-gradient-to-r from-emerald-600 to-emerald-700 
                hover:from-emerald-700 hover:to-emerald-800 
                dark:from-emerald-500 dark:to-emerald-600 
                dark:hover:from-emerald-600 dark:hover:to-emerald-700 
                text-white font-medium
                p-4 rounded-full 
                shadow-lg shadow-emerald-500/20 
                dark:shadow-emerald-900/30 
                z-[998] 
                transition-all duration-300 
                transform hover:scale-110 active:scale-95 
                border-2 border-white/30 
                dark:border-emerald-400/20 
                backdrop-blur-sm"
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
