import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CreditCard, FileCheck, TrendingUp, Droplets } from 'lucide-react';

export function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative" 
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
              Citizen Services
            </h1>
            <p className="text-white max-w-2xl mx-auto text-lg drop-shadow-md">
              Access our online services for convenient water district transactions
            </p>
          </div>
        </div>

        {/* WAVE SECTION - Positioned at the bottom of hero */}
        <div className="relative bottom-0 left-0 right-0 z-10 leading-none overflow-hidden -mb-1">
          <div className="relative w-full h-20 md:h-32">
            {/* Wave 1 - Slow */}
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
                  fill="white"
                />
              </svg>
            </div>

            {/* Wave 2 - Medium */}
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
                  fill="white"
                />
              </svg>
            </div>

            {/* Wave 3 - Fast */}
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
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section - Outside the background image */}
      <div className="container mx-auto px-4 py-12 pt-8 relative z-20">
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="billing" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-lg border p-1">
              <TabsTrigger value="billing">
                Billing Inquiry
              </TabsTrigger>
              <TabsTrigger value="connection">
                New Connection
              </TabsTrigger>
              <TabsTrigger value="payment">
                Payment
              </TabsTrigger>
            </TabsList>

            <TabsContent value="billing">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <FileCheck className="h-6 w-6" />
                    Bill Inquiry & Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Check your billing status and make payments online
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Check Bill</Button>
                    <Button variant="outline" className="w-full">Payment History</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="connection">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <FileText className="h-6 w-6" />
                    New Service Connection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Apply for a new water service connection
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Application</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <CreditCard className="h-6 w-6" />
                    Online Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Pay your water bill securely online
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start hover:bg-blue-50">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit/Debit Card
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover:bg-blue-50">
                      <Droplets className="mr-2 h-4 w-4" />
                      GCash
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover:bg-blue-50">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      PayMaya
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave-slow {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wave-medium {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wave-fast {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-wave-slow {
          animation: wave-slow 25s linear infinite;
          will-change: transform;
        }
        .animate-wave-medium {
          animation: wave-medium 18s linear infinite;
          will-change: transform;
        }
        .animate-wave-fast {
          animation: wave-fast 12s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}