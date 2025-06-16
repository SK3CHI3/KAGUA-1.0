
import React from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Code, Github, Heart, Globe, Eye, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/kagua-platform/kagua', '_blank', 'noopener,noreferrer');
  };

  const handleDiscordClick = () => {
    window.open('https://discord.gg/kagua', '_blank', 'noopener,noreferrer');
  };

  const handleDocsClick = () => {
    window.open('https://docs.kagua.co.ke', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-2xl shadow-lg">
              <Eye className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-4">
            About Kagua
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering Kenyan citizens with transparency and accountability in government projects through technology and community engagement.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12 border-green-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
            <CardTitle className="text-2xl text-green-800 flex items-center gap-3">
              <Eye className="h-6 w-6" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Kagua is a citizen-powered platform dedicated to mapping and tracking government projects across Kenya. 
              We believe in the power of transparency to drive accountability and ensure that public resources are used 
              effectively for the benefit of all Kenyans. Our platform provides real-time visibility into project progress, 
              budgets, and outcomes, enabling citizens to stay informed and engaged with their government's activities.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Interactive Mapping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Visualize government projects across Kenya with our interactive map, showing real-time project locations, 
                status, and progress updates.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Transparency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Access detailed information about project budgets, timelines, contractors, and outcomes to ensure 
                government accountability.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Citizen Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Report issues, provide feedback, and participate in discussions about government projects in your area.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <Card className="mb-12 border-blue-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
            <CardTitle className="text-2xl text-blue-800 flex items-center gap-3">
              <Zap className="h-6 w-6" />
              How Kagua Works
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Collection</h3>
                <p className="text-gray-600 mb-4">
                  We aggregate project data from multiple sources including government portals, public records, 
                  and citizen reports to create a comprehensive database of government projects.
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Real-time Updates</h3>
                <p className="text-gray-600">
                  Our platform provides up-to-date information on project status, budget utilization, 
                  and milestone achievements to keep citizens informed.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Community Feedback</h3>
                <p className="text-gray-600 mb-4">
                  Citizens can report on project progress, submit feedback, and flag issues directly 
                  through our platform, creating a feedback loop for accountability.
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Open Source</h3>
                <p className="text-gray-600">
                  Built on open-source principles, our platform is transparent, auditable, 
                  and continuously improved by a community of developers and civic technologists.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Developer Contribution Section */}
        <Card className="mb-12 border-green-200 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 flex items-center gap-3">
              <Code className="h-6 w-6" />
              Calling All Developers!
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Kagua is an open-source project that thrives on community contributions. We're looking for passionate 
                developers, designers, and civic technologists who want to make a difference in Kenya's digital democracy.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-800">How You Can Contribute:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Improve our web scraping algorithms for better data collection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enhance the user interface and user experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Add new features like data visualization and analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Optimize performance and scalability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Write documentation and tutorials</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-800">Tech Stack:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-green-600" />
                      <span>React & TypeScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-green-600" />
                      <span>Tailwind CSS & Shadcn/ui</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-green-600" />
                      <span>Leaflet Maps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-green-600" />
                      <span>Firecrawl for Web Scraping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-green-600" />
                      <span>React Query for State Management</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                  onClick={handleGitHubClick}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  onClick={handleDiscordClick}
                >
                  Join Our Discord
                </Button>
                <Button 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  onClick={handleDocsClick}
                >
                  Read Contributing Guide
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Section */}
        <Card className="mb-12 border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
            <CardTitle className="text-2xl text-purple-800 flex items-center gap-3">
              <Heart className="h-6 w-6" />
              Our Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-gray-600">Projects Mapped</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">47</div>
                <p className="text-gray-600">Counties Covered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">KES 50B+</div>
                <p className="text-gray-600">Budget Tracked</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800 text-center">Get Involved</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              Whether you're a developer, designer, civic advocate, or simply a concerned citizen, 
              there's a place for you in the Kagua community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Contact Us
                </Button>
              </Link>
              <Link to="/subscribe">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Subscribe to Updates
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
