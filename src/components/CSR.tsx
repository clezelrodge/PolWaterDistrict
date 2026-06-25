import { Card, CardContent } from '@/components/ui/card';
import { Divider } from '@/components/ui/divider';

export function CSR() {
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
              Corporate Social Responsibility
            </h1>
            <p className="text-white max-w-2xl mx-auto text-lg drop-shadow-md">
              Learn about Polomolok Water District's commitment to community service and social responsibility.
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

      {/* Content Section - Outside the background image */}
      <div className="container mx-auto px-4 py-12 pt-8 relative z-20">
        <Card className="shadow-xl">
          <CardContent className="pt-8 pb-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl text-center text-blue-800 font-bold mb-6">Patubig sa Eskwela</h2>
              
              {/* Program Overview Section */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-lg text-justify text-gray-900 leading-relaxed">
                  The Polomolok Water District started the "Patubig sa Eskwela Program" in 2005 during the celebration of its 25th Foundation Anniversary and has become an annual anniversary activity. The donation, construction of drinking facility and free 30 cubic meter water per month, is Polomolok Water District's way of ensuring that all public school children within the Polomolok Water District service area have access to safe drinking water.
                </p>
                <Divider className="bg-white my-4" />
                <p className="text-lg text-justify text-gray-900 leading-relaxed">
                  In line with the program, a short lecture on the importance of water and how they can help conserve water and protect the environment in their own small ways is conducted to the students few days before the actual turn-over of the facility.
                </p>
              </div>

              {/* List of Recipient Schools Section */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl text-gray-900 font-bold mb-4">List of Recipient Schools</h3>
                <p className="text-lg text-gray-900 font-semibold mb-4">The following schools are the recipients of Patubig sa Eskwela Program:</p>
                
                <div className="overflow-x-auto rounded-lg shadow-md">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-blue-800">
                        <th className="px-6 py-4 text-xl text-center font-bold text-white border-b border-blue-700">Year</th>
                        <th className="px-6 py-4 text-xl text-center font-bold text-white border-b border-blue-700">Recipient</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center">2013</td>
                        <td className="px-6 py-3 text-center text-gray-700">Perfecto B. Salada Elementary School</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center">2012</td>
                        <td className="px-6 py-3 text-center text-gray-700">Pagalungan Elementary School</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center"></td>
                        <td className="px-6 py-3 text-center text-gray-700">Bentung Sulit National High School</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center">2011</td>
                        <td className="px-6 py-3 text-center text-gray-700">L.R. Morandante Elementary School</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center"></td>
                        <td className="px-6 py-3 text-center text-gray-700">Silway 8 Elementary School</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center">2010</td>
                        <td className="px-6 py-3 text-center text-gray-700">Eustacio Barcatan Elementary School</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center"></td>
                        <td className="px-6 py-3 text-center text-gray-700">Sulit Elementary School</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center">2009</td>
                        <td className="px-6 py-3 text-center text-gray-700">Dole Cannery Central Elementary School</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center">2008</td>
                        <td className="px-6 py-3 text-center text-gray-700">Polomolok National High School</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center">2007</td>
                        <td className="px-6 py-3 text-center text-gray-700">Silway 8 National High School</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center">2006</td>
                        <td className="px-6 py-3 text-center text-gray-700">Poblacion Polomolok National High School</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700 font-medium text-center">2005</td>
                        <td className="px-6 py-3 text-center text-gray-700">Polomolok Central Elementary School</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Program Impact Section */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl text-center text-gray-900 font-bold mb-4">Program Impact</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <p className="text-lg text-justify text-gray-900 leading-relaxed">Providing access to safe drinking water for thousands of public school students</p>
                  </div>
                  <Divider className="bg-blue-700" />
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <p className="text-lg text-justify text-gray-900 leading-relaxed">Promoting water conservation and environmental awareness among the youth</p>
                  </div>
                  <Divider className="bg-blue-700" />
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <p className="text-lg text-justify text-gray-900 leading-relaxed">Supporting the Department of Education's WASH (Water, Sanitation and Hygiene) in Schools Program</p>
                  </div>
                  <Divider className="bg-blue-700" />
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <p className="text-lg text-justify text-gray-900 leading-relaxed">Strengthening community partnerships between Polomolok Water District and educational institutions</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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