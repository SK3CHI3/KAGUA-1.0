
import FirecrawlApp from '@mendable/firecrawl-js';

interface ErrorResponse {
  success: false;
  error: string;
}

interface CrawlStatusResponse {
  success: true;
  status: string;
  completed: number;
  total: number;
  creditsUsed: number;
  expiresAt: string;
  data: any[];
}

type CrawlResponse = CrawlStatusResponse | ErrorResponse;

export class FirecrawlService {
  private static API_KEY_STORAGE_KEY = 'firecrawl_api_key';
  private static DEFAULT_API_KEY = 'fc-4560b05189614f5f815a46cc1d8e116c';
  private static firecrawlApp: FirecrawlApp | null = null;

  static saveApiKey(apiKey: string): void {
    localStorage.setItem(this.API_KEY_STORAGE_KEY, apiKey);
    this.firecrawlApp = new FirecrawlApp({ apiKey });
    console.log('API key saved successfully');
  }

  static getApiKey(): string | null {
    const storedKey = localStorage.getItem(this.API_KEY_STORAGE_KEY);
    return storedKey || this.DEFAULT_API_KEY;
  }

  static async testApiKey(apiKey: string): Promise<boolean> {
    try {
      console.log('Testing API key with Firecrawl API');
      this.firecrawlApp = new FirecrawlApp({ apiKey });
      // A simple test scrape to verify the API key
      const testResponse = await this.firecrawlApp.scrapeUrl('https://example.com');
      console.log('Test response:', testResponse);
      return testResponse.success;
    } catch (error) {
      console.error('Error testing API key:', error);
      return false;
    }
  }

  static async scrapeWebsite(url: string): Promise<{ success: boolean; error?: string; data?: any }> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      return { success: false, error: 'API key not found' };
    }

    try {
      console.log('Making scrape request to Firecrawl API for:', url);
      console.log('Using API key:', apiKey.substring(0, 10) + '...');
      
      if (!this.firecrawlApp) {
        this.firecrawlApp = new FirecrawlApp({ apiKey });
      }

      const scrapeResponse = await this.firecrawlApp.scrapeUrl(url, {
        formats: ['markdown', 'html'],
      });

      console.log('Raw scrape response:', scrapeResponse);

      if (!scrapeResponse.success) {
        console.error('Scrape failed:', scrapeResponse.error);
        return { 
          success: false, 
          error: scrapeResponse.error || 'Failed to scrape website' 
        };
      }

      console.log('Scrape successful:', scrapeResponse);
      return { 
        success: true,
        data: scrapeResponse
      };
    } catch (error) {
      console.error('Error during scrape:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to connect to Firecrawl API' 
      };
    }
  }

  // Test function to verify API is working
  static async testConnection(): Promise<{ success: boolean; message: string }> {
    try {
      const apiKey = this.getApiKey();
      console.log('Testing connection with API key:', apiKey?.substring(0, 10) + '...');
      
      const result = await this.scrapeWebsite('https://example.com');
      
      if (result.success) {
        return { 
          success: true, 
          message: 'Firecrawl API is working correctly!' 
        };
      } else {
        return { 
          success: false, 
          message: `API test failed: ${result.error}` 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        message: `Connection test failed: ${error instanceof Error ? error.message : 'Unknown error'}` 
      };
    }
  }
}
