
import React, { useState } from 'react';
import { MapView } from '@/components/MapView';
import { ProjectSidebar } from '@/components/ProjectSidebar';
import { Header } from '@/components/Header';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { FeedbackModal } from '@/components/FeedbackModal';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
        />
        
        {/* Main Map View */}
        <div className="flex-1 relative">
          <MapView 
            selectedProject={selectedProject}
            onProjectSelect={setSelectedProject}
          />
          
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
