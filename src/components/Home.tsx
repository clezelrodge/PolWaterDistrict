import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Calculator, 
  CreditCard, 
  FileCheck, 
  Droplets, 
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface HomeProps {
  onNavigate: (view: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const onlineServices = [
    {
      icon: FileText,
      title: 'New Service Connection Application (NSCA)',
      description: 'Apply for new water connection',
      color: 'bg-blue-500',
      onClick: () => onNavigate('services')
    },
    {
      icon: FileCheck,
      title: 'Bill Inquiry',
      description: 'Check your billing status',
      color: 'bg-green-500',
      onClick: () => onNavigate('services')
    },
    {
      icon: Calculator,
      title: 'Bill Calculator',
      description: 'Estimate your water bill',
      color: 'bg-red-500',
      onClick: () => onNavigate('services')
    },
    {
      icon: Droplets,
      title: "Enroll in Electronic Billing Service",
      description: 'Get bills via email',
      color: 'bg-yellow-500',
      onClick: () => onNavigate('services')
    },
    {
      icon: TrendingUp,
      title: 'Freedom of Information Request',
      description: 'Submit FOI request',
      color: 'bg-purple-500',
      onClick: () => onNavigate('services')
    },
    {
      icon: CreditCard,
      title: 'Online Payment',
      description: 'Pay your bill online',
      color: 'bg-indigo-500',
      onClick: () => onNavigate('services')
    },
  ];

  const quickLinks = [
    {
      icon: Droplets,
      title: 'Water Interruptions',
      description: 'View updates on scheduled and emergency water service interruptions',
      link: '#'
    },
    {
      icon: Award,
      title: 'Philippine Transparency Seal',
      description: 'Enhance Transparency. Enforce Accountability',
      link: '#'
    },
    {
      icon: FileText,
      title: 'eFOI',
      description: 'Access Freedom of Information Philippines',
      link: '#'
    },
  ];

  const features = [
    { icon: Award, title: 'Philippine Transparency Seal', desc: 'Enhance Transparency. Enforce Accountability' },
    { icon: Users, title: "Citizen's Charter", desc: 'Formed by the virtue in Republic Act No. 11032' },
    { icon: TrendingUp, title: 'PhilGeps', desc: 'Transparency in government procurement is enhanced' },
    { icon: FileText, title: 'eFOI', desc: 'Access Freedom of Information Philippines' },
    { icon: Calculator, title: 'Water Rates', desc: 'View our PolWD Water Rates' },
    { icon: Droplets, title: 'Laboratory Rates', desc: 'View our PolWD Laboratory Rates' },
    { icon: FileCheck, title: 'Calibration Laboratory Rates', desc: 'View our PolWD Calibration Laboratory Rates' },
    { icon: FileText, title: 'Downloadable Forms', desc: 'For your convenience, here are our downloadable forms' },
    { icon: Award, title: 'Bids and Awards', desc: 'View PolWD set of documents issued by the procuring entity' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Logo Collage */}
            <div className="text-center lg:text-left">
              <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-3xl mb-6">
                <div className="text-8xl font-bold tracking-tighter">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">P</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">W</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">D</span>
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Service with Dignity and Honor
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Providing clean, reliable, and sustainable water services to the community of Polomolok
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8"
                  onClick={() => onNavigate('services')}
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 rounded-full px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Side - Online Services Panel */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Online Services</h2>
                <div className="grid grid-cols-2 gap-4">
                  {onlineServices.map((service, index) => (
                    <button
                      key={index}
                      onClick={service.onClick}
                      className="group flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`h-16 w-16 ${service.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-center leading-tight">
                        {service.title}
                      </h3>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <link.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                  <button className="text-green-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="h-3 w-3 rounded-full bg-blue-600" />
            <div className="h-3 w-3 rounded-full bg-blue-200" />
            <div className="h-3 w-3 rounded-full bg-blue-200" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 cursor-pointer bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-1 group-hover:text-blue-700">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our customer service team is ready to assist you with any questions or concerns about your water service.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="rounded-full px-8"
              onClick={() => onNavigate('contact')}
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8"
            >
              View FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}