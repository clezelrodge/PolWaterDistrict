import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { View } from '../App';

import {
  Images,
  Megaphone,
  Newspaper,
  Droplets,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  ArrowRight,
  FileText,
  Download,
  Library,
  Trophy,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (view: View) => void;
}

export function Home({ onNavigate }: HomeProps) {
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
    //Online Services (To be Changed or Edit)
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
      icon: Library,
      title: 'E-Library',
      description: 'Republic Acts and  Advocacy Materials',
      color: 'bg-orange-500',
      onClick: () => onNavigate('lib')
    }
  ];
        //Quick Links//
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
      icon: Download,
      title: 'Downloadable Forms',
      description: 'For your convenience, here are our downloadable forms',
      link: '#'
    },
    {
      icon: Trophy,
      title: 'Bids and Awards Committee',
      description: 'View PolWD set of documents issued by the procuring entity',
      link: '#'
    }
  ];
      //Features//
  const features = [
    { icon: Award, title: 'Philippine Transparency Seal', desc: 'Enhance Transparency. Enforce Accountability' },
    { icon: Users, title: "Citizen's Charter", desc: 'Formed by the virtue in Republic Act No. 11032' },
    { icon: TrendingUp, title: 'PhilGeps', desc: 'Transparency in government procurement is enhanced' },
    { icon: FileText, title: 'eFOI', desc: 'Access Freedom of Information Philippines' },
    { icon: Download, title: 'Downloadable Forms', desc: 'For your convenience, here are our downloadable forms' },
    { icon: Award, title: 'Bids and Awards', desc: 'View PolWD set of documents issued by the procuring entity' },
  ];
      //Background//
  return (
    <div className="min-h-screen">
      <div 
        className="relative -mt-[80px]" 
        style={{
          backgroundImage: `url('/polwd.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/70 to-blue-950/80 z-0" /> 
        
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -top-40 -right-20 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 -left-32 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
          
          <div className="absolute top-20 left-1/4 w-4 h-4 bg-white/30 rounded-full blur-sm animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute top-40 right-1/3 w-3 h-3 bg-cyan-200/40 rounded-full blur-sm animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute top-60 left-1/2 w-5 h-5 bg-blue-200/30 rounded-full blur-sm animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          <div className="absolute top-32 right-1/4 w-2 h-2 bg-white/40 rounded-full blur-sm animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        </div>
        
        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Logo Collage */}

            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl text-blue-100 font-bold mb-4 drop-shadow-lg">
                Every Drop Counts!
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-100 font-semibold mb-4 drop-shadow-lg">
                WE CARE Because You Deserve The BEST.
              </h2>
              <h3 className="text-xl text-blue-100 drop-shadow-md">
                Text your concerns to our AGAS Patrol.
                </h3>
              <h4 className="text-xl text-blue-100 drop-shadow-md">
               Text: "AGAS (your name) (your address) (your concern)"
              </h4>
              <h5 className="text-xl text-blue-100 mb-8 drop-shadow-md">
                Send to 0917 700 5248
              </h5>
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

            {/* Right Side - Online Services Panel */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8 drop-shadow-md">Online Services</h2>
              <div className="flex flex-col gap-4">
                {onlineServices.map((service, index) => (
                  <button
                    key={index}
                    onClick={service.onClick}
                    className="group relative flex items-center p-4 rounded-xl bg-white/5 overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer w-full text-left"
                  >
                    {/* Sliding Fill Background - Left to Right Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-500/90 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    
                    {/* Content Container */}
                    <div className="relative z-10 flex items-center w-full">
                      <h3 className="text-base font-semibold drop-shadow-sm group-hover:drop-shadow-md transition-all">
                        {service.title}
                      </h3>
                      <ChevronRight className="ml-auto h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          </div>
        </div>

      {/* Truly Infinite 3-Layer Wave - Seamlessly Looping */}
      <div className="relative bottom-0 left-0 right-0 z-10 -mb-px leading-none overflow-hidden">
        <div className="relative w-full h-32 md:h-48">

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

        </div>

      {/* Quick Links Section */}
      <section ref={quickLinksRef} className="py-16 bg-white -mt-px">
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
                      {/* Fixed: Added conditional rendering to handle null icons gracefully */}
                      {link.icon ? (
                        <link.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                      ) : (
                        <FileText className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                    <button className="text-green-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
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