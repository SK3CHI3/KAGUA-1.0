
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { extractProjectsFromScrapedData } from '@/utils/projectExtractor';
import { Globe, Key, Plus, Trash2 } from 'lucide-react';

interface WebScrapingToolProps {
  onProjectsExtracted: (projects: any[]) => void;
}

export const WebScrapingTool: React.FC<WebScrapingToolProps> = ({ onProjectsExtracted }) => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState(FirecrawlService.getApiKey() || '');
  const [urls, setUrls] = useState<string[]>(['']);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrapedProjects, setScrapedProjects] = useState<any[]>([]);

  const addUrlField = () => {
    setUrls([...urls, '']);
  };

  const removeUrlField = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  const updateUrl = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const saveApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter your Firecrawl API key",
        variant: "destructive",
      });
      return;
    }

    const isValid = await FirecrawlService.testApiKey(apiKey);
    if (isValid) {
      FirecrawlService.saveApiKey(apiKey);
      toast({
        title: "Success",
        description: "API key saved and validated successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid API key. Please check and try again.",
        variant: "destructive",
      });
    }
  };

  const startScraping = async () => {
    const validUrls = urls.filter(url => url.trim() !== '');
    
    if (validUrls.length === 0) {
      toast({
        title: "Error",
        description: "Please enter at least one URL to scrape",
        variant: "destructive",
      });
      return;
    }

    if (!FirecrawlService.getApiKey()) {
      toast({
        title: "Error",
        description: "Please set your API key first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setProgress(0);
    const allExtractedProjects: any[] = [];

    try {
      for (let i = 0; i < validUrls.length; i++) {
        const url = validUrls[i];
        console.log(`Scraping URL ${i + 1}/${validUrls.length}: ${url}`);
        
        setProgress((i / validUrls.length) * 100);
        
        const result = await FirecrawlService.scrapeWebsite(url);
        
        if (result.success) {
          const extractedProjects = extractProjectsFromScrapedData(result.data, url);
          allExtractedProjects.push(...extractedProjects);
          
          toast({
            title: "Success",
            description: `Extracted ${extractedProjects.length} projects from ${url}`,
          });
        } else {
          toast({
            title: "Warning",
            description: `Failed to scrape ${url}: ${result.error}`,
            variant: "destructive",
          });
        }
      }

      setProgress(100);
      setScrapedProjects(allExtractedProjects);
      onProjectsExtracted(allExtractedProjects);
      
      toast({
        title: "Scraping Complete",
        description: `Successfully extracted ${allExtractedProjects.length} total projects`,
      });
      
    } catch (error) {
      console.error('Error during scraping:', error);
      toast({
        title: "Error",
        description: "An error occurred during scraping",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Globe className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold">Web Scraping Tool</h3>
      </div>

      {/* API Key Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Key className="w-4 h-4" />
          <label className="text-sm font-medium">Firecrawl API Key</label>
        </div>
        <div className="flex gap-2">
          <Input
            type="password"
            placeholder="Enter your Firecrawl API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1"
          />
          <Button onClick={saveApiKey} variant="outline">
            Save Key
          </Button>
        </div>
        <p className="text-xs text-gray-600">
          Get your API key from{' '}
          <a href="https://firecrawl.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            firecrawl.dev
          </a>
        </p>
      </div>

      {/* URLs Section */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Websites to Scrape</label>
        {urls.map((url, index) => (
          <div key={index} className="flex gap-2">
            <Input
              placeholder="https://example.com"
              value={url}
              onChange={(e) => updateUrl(index, e.target.value)}
              className="flex-1"
            />
            {urls.length > 1 && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeUrlField(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}
        <Button variant="outline" onClick={addUrlField} className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Add Another URL
        </Button>
      </div>

      {/* Progress */}
      {isLoading && (
        <div className="space-y-2">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-gray-600 text-center">Scraping websites...</p>
        </div>
      )}

      {/* Action Button */}
      <Button
        onClick={startScraping}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? "Scraping..." : "Start Scraping"}
      </Button>

      {/* Results Summary */}
      {scrapedProjects.length > 0 && (
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium text-green-800 mb-2">Scraping Results</h4>
          <p className="text-sm text-green-700">
            Successfully extracted {scrapedProjects.length} projects and added them to the map.
          </p>
        </div>
      )}
    </Card>
  );
};
