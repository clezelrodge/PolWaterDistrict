import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CreditCard, FileCheck, TrendingUp, Droplets } from 'lucide-react';

export function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative -mt-[80px]" 
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
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-100 mb-4 drop-shadow-lg">
              Citizen Services
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg drop-shadow-md">
              Access our online services for convenient water district transactions
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section - Outside the background image */}
      <div className="container mx-auto px-4 py-12 pt-20">
        <div className="max-w-3xl mx-auto -mt-16">
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
    </div>
  );
}