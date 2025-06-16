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
    <Card className="bg-gray-50/50 dark:bg-gray-900/50 border-gray-200/80 dark:border-gray-800/80 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Filter Projects</h3>
        </div>
        
        <div className="space-y-2">
          <Button
            variant={currentFilter === 'All' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange('All')}
            className={`w-full justify-between text-sm
              ${currentFilter === 'All' 
                ? 'bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white'
                : 'bg-white dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-800'
              }`}
          >
            All Projects
            <span className={`text-xs px-2 py-1 rounded-full
              ${currentFilter === 'All'
                ? 'bg-emerald-500 dark:bg-emerald-500'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}>
              {nationalCount + countyCount}
            </span>
          </Button>
          
          <Button
            variant={currentFilter === 'National' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange('National')}
            className={`w-full justify-between text-sm
              ${currentFilter === 'National'
                ? 'bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white'
                : 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/60'
              }`}
          >
            National Projects
            <span className={`text-xs px-2 py-1 rounded-full
              ${currentFilter === 'National'
                ? 'bg-red-500 dark:bg-red-500'
                : 'bg-red-200/80 dark:bg-red-900/50 text-red-800 dark:text-red-300'
              }`}>
              {nationalCount}
            </span>
          </Button>
          
          <Button
            variant={currentFilter === 'County' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange('County')}
            className={`w-full justify-between text-sm
              ${currentFilter === 'County'
                ? 'bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white'
                : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-950/60'
              }`}
          >
            County Projects
            <span className={`text-xs px-2 py-1 rounded-full
              ${currentFilter === 'County'
                ? 'bg-emerald-500 dark:bg-emerald-500'
                : 'bg-emerald-200/80 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300'
              }`}>
              {countyCount}
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
