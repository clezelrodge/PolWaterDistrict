import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CreditCard, FileCheck, TrendingUp, Droplets } from 'lucide-react';

export function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Citizen Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access our online services for convenient water district transactions
          </p>
        </div>

        <Tabs defaultValue="billing" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="billing">Billing Inquiry</TabsTrigger>
            <TabsTrigger value="connection">New Connection</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
          </TabsList>

          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-6 w-6" />
                  Bill Inquiry & Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Check your billing status and make payments online
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="w-full">Check Bill</Button>
                  <Button variant="outline" className="w-full">Payment History</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connection">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  New Service Connection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Apply for a new water service connection
                </p>
                <Button className="w-full">Start Application</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6" />
                  Online Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Pay your water bill securely online
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Credit/Debit Card
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Droplets className="mr-2 h-4 w-4" />
                    GCash
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
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
  );
}