
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Filter } from 'lucide-react';

interface ProjectFilterProps {
  currentFilter: 'All' | 'National' | 'County';
  onFilterChange: (filter: 'All' | 'National' | 'County') => void;
  nationalCount: number;
  countyCount: number;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  currentFilter,
  onFilterChange,
  nationalCount,
  countyCount
}) => {
  return (
    <Card className="bg-gray-50 border-gray-200">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="h-4 w-4 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Filter Projects</h3>
        </div>
        
        <div className="space-y-2">
          <Button
            variant={currentFilter === 'All' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange('All')}
            className="w-full justify-between text-sm"
          >
            All Projects
            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
              {nationalCount + countyCount}
            </span>
          </Button>
          
          <Button
            variant={currentFilter === 'National' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange('National')}
            className="w-full justify-between text-sm bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
          >
            National Projects
            <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full">
              {nationalCount}
            </span>
          </Button>
          
          <Button
            variant={currentFilter === 'County' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange('County')}
            className="w-full justify-between text-sm bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
          >
            County Projects
            <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
              {countyCount}
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
