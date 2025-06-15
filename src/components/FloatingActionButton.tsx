
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingActionButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      size="lg"
    >
      <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-200" />
      <span className="sr-only">Provide Feedback</span>
    </Button>
  );
};
