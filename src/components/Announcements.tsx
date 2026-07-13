import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
}

export default function Announcements() {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFacebookPosts = async () => {
      try {
        // Replace with the actual Page Access Token in the Facebook Page
        // For production, use environment variables: import.meta.env.VITE_FACEBOOK_PAGE_ACCESS_TOKEN :)
        const access_token = 'YOUR_PAGE_ACCESS_TOKEN';
        
        // Page ID for Polomolok Water District Official Facebook page
        // You can find the Page ID by going to: https://graph.facebook.com/polomolokwaterdistrictofficial
        const page_id = 'polomolokwaterdistrictofficial';
        
        // Facebook Graph API endpoint to get page posts from specific page
        const response = await fetch(
          `https://graph.facebook.com/v19.0/${page_id}/posts?access_token=${access_token}&fields=message,created_time&limit=10`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Facebook posts');
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error.message);
        }
        
        setPosts(data.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFacebookPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative -mt-20" 
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/70 to-blue-950/80 z-0" />
        
        {/* Content Container - Header Only */}
        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Announcements
            </h1>
            <p className="text-white max-w-2xl mx-auto text-lg drop-shadow-md">
              Stay updated with the latest news and announcements from Polomolok Water District.
            </p>
          </div>
        </div>

        {/* WAVE SECTION */}
        <div className="relative bottom-0 left-0 right-0 z-10 leading-none overflow-hidden -mb-1">
          <div className="relative w-full h-20 md:h-32">
            <div className="absolute inset-0 animate-wave-slow opacity-30">
              <svg
                viewBox="0 0 2880 200"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="block w-[200%] h-full"
              >
                <path
                  d="M0,100 
                    C240,60 480,60 720,100 
                    C960,140 1200,140 1440,100 
                    C1680,60 1920,60 2160,100 
                    C2400,140 2640,140 2880,100 
                    L2880,200 L0,200 Z"
                  fill="#f9fafb"
                />
              </svg>
            </div>

            <div className="absolute inset-0 animate-wave-medium opacity-60">
              <svg
                viewBox="0 0 2880 200"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="block w-[200%] h-full"
              >
                <path
                  d="M0,120 
                    C120,90 240,90 360,120 
                    C480,150 600,150 720,120 
                    C840,90 960,90 1080,120 
                    C1200,150 1320,150 1440,120 
                    C1560,90 1680,90 1800,120 
                    C1920,150 2040,150 2160,120 
                    C2280,90 2400,90 2520,120 
                    C2640,150 2760,150 2880,120 
                    L2880,200 L0,200 Z"
                  fill="#f9fafb"
                />
              </svg>
            </div>

            <div className="absolute inset-0 animate-wave-fast">
              <svg
                viewBox="0 0 2880 200"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="block w-[200%] h-full"
              >
                <path
                  d="M0,140 
                    C80,115 160,115 240,140 
                    C320,165 400,165 480,140 
                    C560,115 640,115 720,140 
                    C800,165 880,165 960,140 
                    C1040,115 1120,115 1200,140 
                    C1280,165 1360,165 1440,140 
                    C1520,115 1600,115 1680,140 
                    C1760,165 1840,165 1920,140 
                    C2000,115 2080,115 2160,140 
                    C2240,165 2320,165 2400,140 
                    C2480,115 2560,115 2640,140 
                    C2720,165 2800,165 2880,140 
                    L2880,200 L0,200 Z"
                  fill="#f9fafb"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 pt-12 relative z-20">
        <Card className="shadow-xl">
          <CardContent className="px-8 pt-8 pb-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl text-center text-gray-900 font-bold mb-6">Latest Announcements</h2>
              
              {loading && (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  <p className="mt-4 text-gray-600">Loading announcements...</p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <p className="text-red-800 font-semibold">Error loading announcements</p>
                  <p className="text-red-600 mt-2">{error}</p>
                  <p className="text-red-500 text-sm mt-2">Please check your Page Access Token and try again.</p>
                </div>
              )}

              {!loading && !error && posts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600">No announcements available at this time.</p>
                </div>
              )}

              {!loading && !error && posts.length > 0 && (
                <div className="space-y-6">
                  {posts.map((post) => (
                    <Card key={post.id} className="shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <p className="text-gray-700 whitespace-pre-wrap">
                          {post.message || 'No message content'}
                        </p>
                        <p className="text-sm text-gray-500 mt-4">
                          Posted on {formatDate(post.created_time)}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
