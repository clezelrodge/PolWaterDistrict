import { Card, CardContent } from '@/components/ui/card';
import { Tabs } from 'antd';

export default function HR() {
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
              Human Resources
            </h1>
            <p className="text-white max-w-2xl mx-auto text-lg drop-shadow-md">
              Building a strong and dedicated team to serve the Polomolok Water District community.
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
                  fill="#f9fafb"
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
                  fill="#f9fafb"
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
              <h2 className="text-3xl text-center text-gray-900 font-bold mb-6">Human Resources</h2>
              
              <Tabs
                defaultActiveKey="1"
                items={[
                  {
                    key: '1',
                    label: (
                      <div className="text-lg mx-4 font-semibold">
                        Celebrations
                      </div>
                    ),
                    children: (
                        <div className="flex flex-col items-center justify-center gap-4">
                                    <div className="grid grid-cols-2 mt-6 mb-4 gap-4">
                                      <img src="/HR.jpg" alt="Conde" className="max-w-full h-auto" />
                                      <img src="/HR1.jpg" alt="Aguirre" className="max-w-full h-auto" />
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-4">
                                    <img src="/HR2.png" alt="HR Busgano" className="max-w-170 h-auto" />
                                  </div>
                                  </div>
                    ),
                  },
                  {
                    key: '2',
                    label: (
                      <div className="text-lg font-semibold">Programs</div>
                    ),
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">
                          <Tabs
                            defaultActiveKey="2-1"
                            items={[
                              {
                                key: '2-1',
                                label: (
                                  <div className="mx-24 text-lg font-bold">Recruitment</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center justify-center gap-4 mx-6 mt-6 mb-6">
            
                                      <img src="/HR4.png" alt="Recruitment" className="max-w-181 h-auto" />
                                    </div>
                                  
                                ),
                              },
                              {
                                key: '2-2',
                                label: (
                                  <div className="mx-24 text-lg font-bold">Training</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center gap-4">
                                    <p className="text-gray-600 text-center py-8">Training programs content coming soon.</p>
                                  </div>
                                ),
                              },
                            ]}
                          />
                        </CardContent>
                      </Card>
                    ),
                  },
                  {
                    key: '3',
                    label: (
                      <div className="text-lg font-semibold">Activities</div>
                    ),
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">
                          <Tabs
                            defaultActiveKey="3-1"
                            items={[
                              {
                                key: '3-1',
                                label: (
                                  <div className="mx-24 text-lg font-bold">Events</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center gap-4">
                                    <p className="text-gray-600 text-center py-8">Events content coming soon.</p>
                                  </div>
                                ),
                              },
                              {
                                key: '3-2',
                                label: (
                                  <div className="mx-24 text-lg font-bold">Orientation</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center mt-6 mb-6 justify-center gap-4">
                                 
                                      <img src="/HR3.png" alt="Annual Re-Orientation Program" className="max-w-181 h-auto" />
                                    </div>
                                 
                                ),
                              },
                        
                            ]}
                          />
                        </CardContent>
                      </Card>
                    ),
                  },
                   {
                                key: '4',
                                label: (
                                    <div className="text-lg font-semibold">Merit Plan Selection
                                    </div>
                                ),
                                children: (
                                    <div className="flex flex-col items-center justify-center gap-4">
                                    <div className="grid grid-cols-2 mt-6 mb-4 gap-4">
                                      <img src="/0001.jpg" alt="Merit Plan Selection" className="max-w-full h-auto" />
                                      <img src="/0002.jpg" alt="Merit Plan Selection" className="max-w-full h-auto" />
                                      <img src="/0003.jpg" alt="Merit Plan Selection" className="max-w-full h-auto" />
                                      <img src="/0004.jpg" alt="Merit Plan Selection" className="max-w-full h-auto" />
                                      <img src="/0005.jpg" alt="Merit Plan Selection" className="max-w-full h-auto" />
                                      <img src="/0006.jpg" alt="Merit Plan Selection" className="max-w-full h-auto" />
                                      <img src="/0007.jpg" alt="Merit Plan Selction" className="max-w-full h-auto" />
                                      <img src="/0008.jpg" alt="Merit Plan Selection" className="max-w-full h-auto" />
                                      <img src="/0009.jpg" alt="Merit Plan Selection" className="max-w-full h-auto" />
                                      <img src="/0010.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0011.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0012.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0013.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0014.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0015.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0016.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0017.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0018.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0019.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0020.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0021.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0022.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0023.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0024.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0025.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0026.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0027.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                      <img src="/0028.jpg" alt="Merit Plan Selection" className="max-w-full h-auto"/>
                                    </div>
                                    <div className="flex flex-col gap-4 mt-4 mb-4">
                                        <img src="/0029.jpg" alt="Merit Plan Selection" className="max-w-170 h-auto"/>
                                        </div>
                                    </div>
                                ),
                              },
                              {
                                key: '5',
                                label: (
                                    <div className="text-lg font-semibold"> Equal Opportunity Principle
                                    </div>
                                ),
                                children:
                                (
                                    <div className="flex flex-col items-center mt-6 mb-6 justify-center gap-4">
                                        <div className="grid grid-cols-2 mt-6 mb-4 gap-4">
                                        <img src="/EOP.jpg" alt="Equal Opportunity Principle" className="max-w-170 h-auto"/>
                                        <img src="/EOP1.jpg" alt="Equal Opportunity Principle" className="max-w-170 h-auto"/>
                                        </div>
                                    </div>
                                ),
                                
                              },
                              {
                                key: '6',
                                label:
                                (
                                    <div className="text-lg font-semibold"> Video Conferencing for Interview Guidelines
                                    </div>

                                ),
                                children:
                                (
                                    <div className="flex flex-col items-center mt-6 mb-6 justify-center gap-4">
                                        <div className="grid grid-cols-2 mt-6 mb-4 gap-4">
                                            <img src="/VCIG.jpg" alt="Video Conferencing for Interview Guidelines" className="max-w-full h-auto"/>
                                            <img src="/VCIG1.jpg" alt="Video Conferencing for Interview Guidelines" className="max-w-full h-auto"/>
                                            <img src="/VCIG2.jpg" alt="Video Conferencing for Interview Guidelines" className="max-w-full h-auto"/>
                                            <img src="/VCIG3.jpg" alt="Video Conferencing for Interview Guidelines" className="max-w-full h-auto"/>
                                            <img src="/VCIG4.jpg" alt="Video Conferencing for Interview Guidelines" className="max-w-full h-auto"/>
                                            <img src="/VCIG5.jpg" alt="Video Conferencing for Interview Guidelines" className="max-w-full h-auto"/>
                                        </div>
                                        <div className="flex flex-col items-center mb-6 justify-center gap-4">
                                            <img src="/VCIG6.jpg" alt="Video Conferencing for Interview Guidelines" className="max-w-170 h-auto"/>
                                            </div>
                                    </div> 
                                ),
                              },
                              {
                                key: '7',
                                label:
                                (
                                    <div className="text-lg font-semibold"> MSP Committee
                                        </div>
                                ),
                                children:
                                (
                                    <div className="flex flex-col items-center mt-6 mb-6 justify-center gap-4">
                                        <div className="grid grid-cols-2 mt-6 mb-4 gap-4">
                                            <img src="/MSPC.png" alt="MSP Committee" className="max-w-full h-auto"/>
                                            <img src="/MSPC1.png" alt="MSP Committee" className="max-2-full h-auto"/>
                                            </div>
                                    </div>
                                ),
                              },

                ]}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}