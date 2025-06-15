
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bell, Check, Mail, Star } from 'lucide-react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    console.log('Subscribed:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg">
              <Bell className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Stay Updated with Kagua
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the latest updates on government projects, transparency reports, and platform improvements.
          </p>
        </div>

        {!subscribed ? (
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-800">Subscribe to Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">What you'll receive:</h3>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Weekly project updates and progress reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>New feature announcements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Government transparency reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Community highlights and success stories</span>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-2xl mx-auto shadow-lg border-green-200">
            <CardContent className="text-center py-12">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <Check className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">Successfully Subscribed!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for subscribing to Kagua updates. You'll receive your first newsletter soon.
              </p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Star className="w-4 h-4 mr-1" />
                Welcome to the community!
              </Badge>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
