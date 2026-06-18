import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { 
  Images, 
  Megaphone, 
  Newspaper, 
  FileCheck, 
  Droplets, 
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  ArrowRight,
  CreditCard,
  FileText,
  Calculator
} from 'lucide-react';

interface HomeProps {
  onNavigate: (view: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  // Setup Intersection Observer directly here
  const quickLinksRef = useRef<HTMLElement>(null);
  const [quickLinksVisible, setQuickLinksVisible] = useState(false);

  const featuresRef = useRef<HTMLElement>(null);
  const [featuresVisible, setFeaturesVisible] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQuickLinksVisible(true);
          observer1.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (quickLinksRef.current) observer1.observe(quickLinksRef.current);

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturesVisible(true);
          observer2.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (featuresRef.current) observer2.observe(featuresRef.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  const onlineServices = [
    {
      icon: Megaphone,
      title: 'Announcements',
      description: 'Maintenance Repair Announcements',
      color: 'bg-red-500',
      onClick: () => onNavigate('announcements')
    },
    {
      icon: Images,
      title: 'Gallery',
      description: 'View photos of PolWD',
      color: 'bg-green-500',
      onClick: () => onNavigate('images')
    },
    {
      icon: Newspaper,
      title: 'Latest News',
      description: 'News relating the PolWD',
      color: 'bg-gray-500',
      onClick: () => onNavigate('news')
    },
    {
      icon: TextFile,
      title: 'E-Library',
      description: 'Republic Acts and  Advocacy Materials',
      color: 'bg-orange-500',
      onClick: () => onNavigate('lib')
    }
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
    {
      icon: null,
      title: 'Downloadable Forms',
      description: 'For your convenience, here are our downloadable forms',
      link: '#'
    },
    {
      icon: null,
      title: 'Bids and Awards Committee',
      description: 'View PolWD set of documents issued by the procuring entity',
      link: '#'
    }
    
  ];

  const features = [
    { icon: Award, title: 'Philippine Transparency Seal', desc: 'Enhance Transparency. Enforce Accountability' },
    { icon: Users, title: "Citizen's Charter", desc: 'Formed by the virtue in Republic Act No. 11032' },
    { icon: TrendingUp, title: 'PhilGeps', desc: 'Transparency in government procurement is enhanced' },
    { icon: FileText, title: 'eFOI', desc: 'Access Freedom of Information Philippines' },
    { icon: FileText, title: 'Downloadable Forms', desc: 'For your convenience, here are our downloadable forms' },
    { icon: Award, title: 'Bids and Awards', desc: 'View PolWD set of documents issued by the procuring entity' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden"
        style={{
          backgroundImage: `url('/water-drop.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/70 to-blue-950/80 z-0" />
        
        {/* Hanging Background Effects */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Draped gradient shapes */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -top-40 -right-20 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 -left-32 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Hanging curved shapes */}
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1440 800" preserveAspectRatio="none">
              <path d="M0,0 Q360,200 720,100 T1440,0 V800 H0 Z" fill="url(#hangingGradient1)" />
              <path d="M0,100 Q360,300 720,200 T1440,100 V800 H0 Z" fill="url(#hangingGradient2)" opacity="0.5" />
              <defs>
                <linearGradient id="hangingGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="hangingGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Floating water droplets */}
          <div className="absolute top-20 left-1/4 w-4 h-4 bg-white/30 rounded-full blur-sm animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute top-40 right-1/3 w-3 h-3 bg-cyan-200/40 rounded-full blur-sm animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute top-60 left-1/2 w-5 h-5 bg-blue-200/30 rounded-full blur-sm animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          <div className="absolute top-32 right-1/4 w-2 h-2 bg-white/40 rounded-full blur-sm animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        </div>
        
        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Logo Collage */}
            <div className="text-center lg:text-left">
              <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-3xl mb-6">
                <img src="/PolWD_Logo.jpg" alt="Polomolok Water District Logo" className="w-64 h-auto" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                Every Drop Counts!
              </h1>
              <p className="text-xl text-blue-100 mb-8 drop-shadow-md">
                Providing clean, reliable, and sustainable water services to the community of Polomolok since 1980.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 shadow-lg"
                  onClick={() => onNavigate('services')}
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 rounded-full px-8 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Side - Online Services Panel */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8 drop-shadow-md">Online Services</h2>
                <div className="grid grid-cols-2 gap-4">
                  {onlineServices.map((service, index) => (
                    <button
                      key={index}
                      onClick={service.onClick}
                      className="group flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`h-16 w-16 ${service.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-center leading-tight drop-shadow-sm">
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
        <div className="relative bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Quick Links Section */}
      <section ref={quickLinksRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <div 
                key={index}
                style={{
                  transform: quickLinksVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: quickLinksVisible ? 1 : 0,
                  transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms, opacity 0.8s ease ${index * 150}ms`,
                }}
              >
                <Card className="group h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 cursor-pointer">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{
                  transform: featuresVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: featuresVisible ? 1 : 0,
                  transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms, opacity 0.8s ease ${index * 100}ms`,
                }}
              >
                <Card className="group h-full hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 cursor-pointer bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}