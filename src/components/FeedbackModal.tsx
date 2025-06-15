
import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const FeedbackModal = ({ isOpen, onClose, project }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log('Submitting feedback:', { rating, feedback, isAnonymous, projectId: project?.id });
    // Here we would submit to backend
    onClose();
    setRating(0);
    setFeedback('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">
            {project ? `Feedback for ${project.title}` : 'General Feedback'}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Rating */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Rate this project
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1"
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Text */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Your feedback
            </label>
            <Textarea
              placeholder="Share your thoughts about this project..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
            />
          </div>

          {/* Anonymous Option */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="anonymous"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="rounded"
            />
            <label htmlFor="anonymous" className="text-sm text-gray-700">
              Submit anonymously
            </label>
          </div>

          {/* Submit Button */}
          <Button 
            onClick={handleSubmit}
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={!rating || !feedback.trim()}
          >
            <Send className="h-4 w-4 mr-2" />
            Submit Feedback
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
