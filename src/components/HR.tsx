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
                                      
                                      
                                      
                                      <img src="/ABELLERA.png" alt="Abellera" className="max-w-full h-auto"/>
                                      <img src="/HR1.jpg" alt="Aguirre" className="max-w-full h-auto" />
                                      <img src="/BALGOS.png" alt="Balgos" className="max-w-full h-auto"/>
                                      <img src="/BATIANCIL.png" alt="Batiancila" className="max-w-full h-auto"/>
                                      <img src="/BOOT.png" alt="Boot" className="max-w-full h-auto"/>
                                      <img src="/HR2.png" alt="HR Busgano" className="max-w-full h-auto" />
                                      <img src="/BUSGANO.png" alt="Busgano" className="max-w-full h-auto" />
                                      <img src="/CALULO.png" alt="Calulo" className="max-w-full h-auto"/>
                                      <img src="/CANOY.png" alt="Canoy" className="max-w-full h-auto"/>
                                      <img src="/CATAMPO.png" alt="Catampo" className="max-w-full h-auto"/>
                                      <img src="/HR.jpg" alt="Conde" className="max-w-full h-auto" />
                                      <img src="/DAYAK.png" alt="Dayak" className="max-w-full h-auto"/>
                                      <img src="/INDUCTIVO.png" alt="Inductivo" className="max-w-full h-auto"/>
                                      <img src="/LACANARIA.png" alt="Lacanaria" className="max-w-full h-auto" />
                                      <img src="/MANATAD.png" alt="Manatad" className="max-w-full h-auto" />
                                      <img src="/RICKY.png" alt="Ranises" className="max-w-full h-auto" />
                                      <img src="/RON.png" alt="Ron" className="max-w-full h-auto" />
                                      <img src="/TAJALA.png" alt="Tajala" className="max-w-full h-auto" />
                                    
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <img src="YAMBA.png" alt="Yamba" className="max-w-170 h-auto" /></div>
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
                                  <div className="flex flex-col items-center gap-4 mx-6 mt-6 mb-6">
            
                                      <img src="/HR4.png" alt="Recruitment" className="max-w-181 h-auto" />
                                    </div>
                                  
                                ),
                              },
                              {
                                key: '2-2',
                                label: (
                                  <div className="mx-24 text-lg font-bold">Promotion</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center mt-6 mb-6 gap-4">
                                    <img src="/PROMOTION.jpg" alt="Promotion" className="max-w-170 h-auto"/>
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
                      <div className="text-lg font-semibold">Recruitment, Selection, and Placement
                      </div>
                    ),
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">
                          <Tabs
                            defaultActiveKey="4-1"
                            items={[
                              {
                                key: '4-1',
                                label: (
                                  <div className="mx-2 text-lg font-bold">Merit Plan Selection</div>
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
                                key: '4-2',
                                label: (
                                  <div className="mx-2 text-lg font-bold">Equal Opportunity Principle</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center mt-6 mb-6 justify-center gap-4">
                                    <div className="grid grid-cols-2 mt-6 mb-4 gap-4">
                                      <img src="/EOP.jpg" alt="Equal Opportunity Principle" className="max-w-170 h-auto"/>
                                      <img src="/EOP1.jpg" alt="Equal Opportunity Principle" className="max-w-170 h-auto"/>
                                    </div>
                                  </div>
                                ),
                              },
                              {
                                key: '4-3',
                                label: (
                                  <div className="mx-2 text-lg font-bold">Video Conferencing for Interview Guidelines</div>
                                ),
                                children: (
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
                                key: '4-4',
                                label: (
                                  <div className="mx-2 text-lg font-bold">MSP Committee</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center mt-6 mb-6 justify-center gap-4">
                                    <div className="grid grid-cols-2 mt-6 mb-4 gap-4">
                                      <img src="/MSPC.png" alt="MSP Committee" className="max-w-full h-auto"/>
                                      <img src="/MSPC1.png" alt="MSP Committee" className="max-w-full h-auto"/>
                                    </div>
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
                    key: '5',
                    label: (
                      <div className="text-lg font-semibold">Learning and Development</div>
                    ),
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">
                          <Tabs
                            defaultActiveKey="5-1"
                            items={[
                              {
                                key: '5-1',
                                label: (
                                  <div className="mx-2 text-lg font-bold">Learning and Development Plan</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center mt-6 mb-6 justify-center gap-4">
                                    <div className="grid grid-cols-2 mt-6 mb-4 gap-4">
                                        <img src="/LDP001.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP002.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP003.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP004.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP005.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP006.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP007.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP008.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP009.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP010.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP011.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP012.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP013.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                        <img src="/LDP014.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <img src="/LDP015.jpg" alt="Learning and Development Plan" className="max-w-full h-auto"/>
                                    </div>
                                </div>
                                ),
                              },
                              {
                                key: '5-2',
                                label: (
                                    <div className="text-lg font-bold">Annual Training Plan
                                    </div>
                                ),
                                children: (
                                    <div className="flex flex-col items-center mt-6 mb-6 justify-center gap-4">
                                        <div className="grid grid-cols-2 mt-6 mb-4 gap-4">
                                            <img src="/ATP1.jpg" alt="Annual Training Plan" className="max-w-full h-auto"/>
                                            <img src="/ATP2.jpg" alt="Annual Training Plan" className="max-w-full h-auto"/>
                                            <img src="/ATP3.jpg" alt="Annual Training Plan" className="max-w-full h-auto"/>
                                            <img src="/ATP4.jpg" alt="Annual Training Plan" className="max-w-full h-auto"/>
                                            </div>
                                            </div>
                                ),
                              },
                              {
                                key: '5-3',
                                label: (
                                    <div className="text-lg font-bold">Office Order Designation of HRDCommittee
                                    </div>
                                ),
                                children: (
                                    <div className="flex flex-col items-center mt-6 mb-6 justify-center gap-4">
                                        <img src="/Committees_003.png" alt="Office Order Designation of HRDCommittee" className="max-w-181 h-auto"/>
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
                    key: '6',
                    label: (
                      <div className="text-lg font-semibold">Strategic Performance Management System</div>
                    ),
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">
                          <Tabs
                            defaultActiveKey="6-1"
                            items={[
                              {
                                key: '6-1',
                                label: (
                                  <div className="mx-8 text-lg font-bold">SPMS</div>
                                ),
                                children: (
                                    <div className="flex flex-col items-center mt-6 mb-6 justify-center gap-4">
                                        <div className="grid grid-cols-2 mt-6 mb-4 gap-4">
                                        <img src="/SPMS001.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS002.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS003.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS004.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS005.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS006.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS007.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS008.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS009.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS010.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS011.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS012.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS013.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS014.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS015.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS016.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS017.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS018.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS019.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS020.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS021.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS022.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS023.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS024.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS025.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS026.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS027.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/SPMS028.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        </div>
                                        <div className="flex flex-col mt-6 mb-6 justify-center gap-4">
                                            <img src="/SPMS029.jpg" alt="SPMS" className="max-w-170 h-auto"/>
                                            </div>
                                            </div>
                                ),
                              },
                              {
                                key: '6-2',
                                label: (
                                  <div className="mx-2 text-lg font-bold">SPMS Committee</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center mt-8 mb-6 justify-center gap-4">
                                    <img src="/SPMS-Committee.png" alt="SPMS Committee" className="max-w-170 h-auto"/>
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
                    key: '7',
                    label: (
                      <div className="text-lg font-semibold">Rewards and Recognition</div>
                    ),
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">
                          <Tabs
                            defaultActiveKey="7-1"
                            items={[
                              {
                                key: '7-1',
                                label: (
                                    <div className="mx-8 text-lg font-bold">PRAISE Program</div>
                                ),
                                children: (
                                    <div className="flex flex-col items-center mt-6 mb-6 justify-center gap-4">
                                        <div className="grid grid-cols-2 mt-6 mb-4 gap-4">
                                        <img src="/PP1.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP2.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP3.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP4.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP5.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP6.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP7.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP8.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP9.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP10.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP11.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP12.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP13.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP14.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP15.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP16.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP17.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP18.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP19.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP20.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP21.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP22.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP23.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP25.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP26.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP27.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP28.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP29.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP30.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        <img src="/PP31.jpg" alt="SPMS" className="max-w-full h-auto"/>
                                        </div>
                                        <div className="flex flex-col items-center mt-6 gap-4">
                                        <img src="/PP32.jpg" alt="SPMS" className="max-w-150 h-auto"/>
                                        </div>
                                            </div>
                                ),
                            },
                            {
                                key: '7-2',
                                label:(
                                    <div className="text-lg font-bold">PRAISE Committee
                                    </div>
                                ),
                                children:
                                (
                                    <div className="flex flex-col items-center mt-8 mb-6 justify-center gap-4">
                                    <img src="PRAISE-Committee.png" alt="PRAISE Committee" className="max-w-170 h-auto"/>
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
                    key: '8',
                    label: (
                      <div className="text-lg font-semibold">Employee Discipline</div>
                    ),
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">   
                          <Tabs
                            defaultActiveKey="9-1"
                            items={[
                              {
                                key: '9-1',
                                label: <div className="text-lg mx-4 font-semibold">Administrative Discipline</div>,
                                children: (
                                  <div className="max-w-4xl mx-auto">
                                    <div className="text-center mb-8">
                                      <h3 className="text-2xl font-bold text-blue-900 mb-2 mt-8">ADMINISTRATIVE DISCIPLINARY RULES ON SEXUAL HARASSMENT CASES</h3>
                                      <p className="text-gray-600">For Polomolok Water District (PolWD)</p>
                                    </div>
                                    
                                    <div className="space-y-6 text-gray-700">
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE I. TITLE</h4>
                                        <p className="mb-4">These Rules shall be known as PolWD-Administrative Disciplinary Rules on Sexual Harassment Cases.</p>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE II. COVERAGE</h4>
                                        <p>These Rules shall apply to all officials and employees of PolWD, whether in the Career or Non-Career service and holding any level of position, regardless of status.</p>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE III. DEFINITION</h4>
                                        <p className="mb-3">The administrative offense of sexual harassment is an act, or series of acts, involving any unwelcome sexual advance, request or demand for a sexual favor, or other verbal or physical behavior or a sexual nature, committed by a government employee or official in a work-related environment of the person complained of.</p>
                                        <p className="mb-3"><strong>Work-related sexual harassment is committed under the following circumstances:</strong></p>
                                        <ul className="list-disc pl-6 space-y-2">
                                          <li>Submission to or rejection of the act or series of acts is used as a basis for any employment decision</li>
                                          <li>The act or series of acts have the purpose or effect of interfering with the complainant's work performance, or creating an intimidating, hostile or offensive work environment</li>
                                          <li>The act or series of acts might reasonably be expected to cause discrimination, insecurity, discomfort, offense or humiliation to a complainant</li>
                                        </ul>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE IV. FORMS OF SEXUAL HARASSMENT</h4>
                                        <div className="space-y-3">
                                          <p><strong>A. Physical:</strong> Malicious touching, overt sexual advances, gestures with lewd insinuation</p>
                                          <p><strong>B. Verbal:</strong> Requests or demands for sexual favors, and lurid remarks</p>
                                          <p><strong>C. Use of objects:</strong> Pictures or graphics, letters or written notes with sexual underpinnings</p>
                                          <p><strong>D. Other forms:</strong> Analogous to the foregoing</p>
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE V. PERSONS LIABLE</h4>
                                        <p>Any official or employee of PolWD, regardless of sex, is liable for sexual harassment when he/she:</p>
                                        <ul className="list-disc pl-6 space-y-2 mt-2">
                                          <li>Directly participates in the execution of any act of sexual harassment</li>
                                          <li>Induces or directs another or others to commit sexual harassment</li>
                                          <li>Cooperates in the commission of sexual harassment by another through an act without which the sexual harassment would not have been accomplished</li>
                                          <li>Cooperates in the commission of sexual harassment by another through previous or simultaneous acts</li>
                                        </ul>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE VI. COMMITTEE ON DECORUM AND INVESTIGATION (CODI)</h4>
                                        <p className="mb-4">A Committee on Decorum and Investigation (CODI) shall be created with the following functions:</p>
                                        <ul className="list-disc pl-6 space-y-2 mb-4">
                                          <li>Receive complaints of sexual harassment</li>
                                          <li>Investigate sexual harassment complaints in accordance with the prescribed procedure</li>
                                          <li>Submit a report of its findings with the corresponding recommendation to the disciplining authority for decision</li>
                                          <li>Lead in the conduct of discussions about sexual harassment within the PolWD</li>
                                        </ul>
                                        <p className="mb-4"><strong>Composition:</strong></p>
                                        <ul className="list-disc pl-6 space-y-2">
                                          <li><strong>Chairman:</strong> The General Manager or his/her authorized representative</li>
                                          <li><strong>Member:</strong> Personnel Officer or his/her authorized representative</li>
                                          <li><strong>Member:</strong> Administrative Division Manager or his/her authorized representative</li>
                                          <li><strong>Member:</strong> Representative from accredited union, (if any)</li>
                                          <li><strong>Members:</strong> Two (2) Rank-and-File Representatives, one for first level and another for second level</li>
                                        </ul>
                                        <p className="mt-4"><strong>Term of Office:</strong> Not more than two (2) years</p>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE VIII. STANDARD OF PROCEDURAL REQUIREMENTS</h4>
                                        <p className="mb-3"><strong>Section 12. Complaint Requirements:</strong></p>
                                        <ul className="list-disc pl-6 space-y-2 mb-4">
                                          <li>Must be in writing, signed and sworn to by the complainant</li>
                                          <li>Must contain full name and address of complainant and respondent</li>
                                          <li>Brief statement of relevant facts</li>
                                          <li>Evidence in support of the complaint, if any</li>
                                          <li>Certification of non-forum shopping</li>
                                        </ul>
                                        <p className="mb-3"><strong>Section 13. Action on Complaint:</strong></p>
                                        <p>Person complained of must submit Counter Affidavit/Comment under oath within three (3) days from receipt of notice.</p>
                                        <p className="mt-3 mb-3"><strong>Section 15. Duration of Investigation:</strong></p>
                                        <p>Preliminary investigation shall commence not later than five (5) days from receipt of complaint and shall be terminated within fifteen (15) working days thereafter.</p>
                                        <p className="mt-3"><strong>Section 18. Formal Charge:</strong></p>
                                        <p>After finding a prima facie case, the disciplining authority shall formally charge the person complained of with specification of charges, brief statement of material facts, and directive to answer within 72 hours.</p>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">FORMAL INVESTIGATION</h4>
                                        <p className="mb-3"><strong>Section 21. Preventive Suspension:</strong></p>
                                        <p className="mb-4">The disciplining authority may order preventive suspension if there are reasons to believe the respondent is probably guilty of charges which would warrant removal from service.</p>
                                        <p className="mb-3"><strong>Section 22. Duration of Preventive Suspension:</strong></p>
                                        <p className="mb-4">Automatically reinstated after ninety (90) days if case is not finally decided, unless delay is due to fault, negligence or petition of respondent.</p>
                                        <p className="mb-3"><strong>Section 24. Conduct of Formal Investigation:</strong></p>
                                        <p className="mb-4">Investigation shall be held not earlier than five (5) days and not later than ten (10) days from receipt of respondent's answer and finished within thirty (30) days from issuance of formal charge.</p>
                                        <p className="mb-3"><strong>Section 25. Pre-hearing Conference:</strong></p>
                                        <p>Parties may agree on stipulation of facts, simplification of issues, identification and marking of evidence, waiver of objections, limiting number of witnesses, and dates of subsequent hearings.</p>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE IX. REMEDIES AFTER A DECISION</h4>
                                        <p className="mb-3"><strong>Section 38. Motion for Reconsideration:</strong></p>
                                        <p className="mb-4">May be filed within fifteen (15) days from receipt of decision based on new evidence, decision not supported by evidence, or errors of law/irregularities.</p>
                                        <p className="mb-3"><strong>Section 43. Filing of Appeals:</strong></p>
                                        <p className="mb-4">Decisions imposing penalty exceeding thirty (30) days suspension or fine exceeding thirty (30) days salary may be appealed to the Commission Proper within fifteen (15) days.</p>
                                        <p className="mb-3"><strong>Section 46. Perfection of Appeal:</strong></p>
                                        <p>Must include notice of appeal, three (3) copies of appeal memorandum, proof of service, proof of payment of appeal fee (P300.00), and certification of non-forum shopping.</p>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE X. CLASSIFICATION OF ACTS</h4>
                                        <div className="space-y-4 mb-6">
                                          <div>
                                            <p className="font-semibold text-red-700">A. Grave Offenses:</p>
                                            <ul className="list-disc pl-6 space-y-1">
                                              <li>Unwanted touching of private parts</li>
                                              <li>Sexual assault</li>
                                              <li>Malicious touching</li>
                                              <li>Requesting sexual favor in exchange for employment benefits</li>
                                            </ul>
                                          </div>
                                          <div>
                                            <p className="font-semibold text-orange-700">B. Less Grave Offenses:</p>
                                            <ul className="list-disc pl-6 space-y-1">
                                              <li>Unwanted touching or brushing against body</li>
                                              <li>Pinching not falling under grave offenses</li>
                                              <li>Derogatory or degrading remarks</li>
                                              <li>Verbal abuse or threats with sexual overtones</li>
                                            </ul>
                                          </div>
                                          <div>
                                            <p className="font-semibold text-yellow-700">C. Light Offenses:</p>
                                            <ul className="list-disc pl-6 space-y-1">
                                              <li>Surreptitiously looking at private parts</li>
                                              <li>Telling sexist/smutty jokes</li>
                                              <li>Malicious leering or ogling</li>
                                              <li>Display of sexually offensive pictures</li>
                                              <li>Unwelcome inquiries about sexual life</li>
                                              <li>Persistent unwanted attention with sexual overtones</li>
                                            </ul>
                                          </div>
                                        </div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE XI. ADMINISTRATIVE LIABILITIES</h4>
                                        <div className="space-y-3">
                                          <p><strong>A. Light offenses:</strong> 1st - Reprimand, 2nd - Fine/suspension ≤30 days, 3rd - Dismissal</p>
                                          <p><strong>B. Less grave offenses:</strong> 1st - Fine/suspension 30 days to 6 months, 2nd - Dismissal</p>
                                          <p><strong>C. Grave offenses:</strong> 1st - Dismissal</p>
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE XII. RESPONSIBILITY</h4>
                                        <p className="mb-4">PolWD shall submit an authenticated copy of these rules to the Commission for approval within one (1) month from promulgation and develop an education and training program for officials and employees.</p>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">RULE XIII. EFFECTIVITY</h4>
                                        <p className="mb-6">These Rules shall take effect upon approval by the Civil Service Commission. Any subsequent changes or amendments shall be subject to CSC approval and shall not take effect until six (6) months from date of approval.</p>
                                        <div className="border-t pt-6 mt-6">
                                          <p className="font-bold text-center mb-2">Approved by:</p>
                                          <p className="text-center font-semibold">ENGR. SOLITO T. TORCUATOR</p>
                                          <p className="text-center">General Manager</p>
                                          <p className="text-center mt-4 font-bold">REVIEWED AND APPROVED BY: CIVIL SERVICE COMMISSION</p>
                                          <p className="text-center font-semibold mt-2">GRACE R. BELGADO-SAQUETON, CPA</p>
                                          <p className="text-center">Director IV</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ),
                              },
                              {
                                key: '8-2',
                                label: <div className="text-lg font-semibold">Grievance Machinery</div>,
                                children: (
                                  <div className="max-w-4xl mx-auto">
                                    <div className="text-center mb-8">
                                      <h3 className="text-2xl font-bold text-blue-900 mb-2 mt-8">GRIEVANCE MACHINERY</h3>
                                      <p className="text-gray-600">For Polomolok Water District (PolWD)</p>
                                    </div>
                                    
                                    <div className="space-y-6 text-gray-700">
                                      <p className="mb-4">In line with the Revised Policies on the Settlement of Grievance in the Public Sector contained in CSC Resolution No. 010113, dated January 10, 2001 and implemented through CSC Memorandum Circular No. 02, S. 2001, the Polomolok Water District hereby adopts the herein Grievance Machinery.</p>
                                      
                                      <h4 className="text-lg font-bold text-blue-900 mb-3">BASIC POLICIES</h4>
                                      <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>A grievance shall be resolved expeditiously at all times at the lowest level possible in the agency. However, if not settled at the lowest level possible, an aggrieved party shall present his or her grievance step by step following the hierarchy of positions.</li>
                                        <li>All agencies shall establish a grievance machinery that is the best way to address grievance between or among government officials and employees.</li>
                                        <li>The aggrieved party shall be assured freedom from coercion, discrimination, reprisal and biased action on the grievance.</li>
                                        <li>Grievance proceedings shall not be bound by legal rules and technicalities. Even verbal grievance must be acted upon expeditiously. The services of a legal counsel shall not be allowed.</li>
                                        <li>A grievance shall be presented verbally or in writing in the first instance by the aggrieved party to his or her immediate supervisor. The latter shall, within three (3) working days from the date of presentation, inform verbally the aggrieved party of the corresponding action.</li>
                                        <li>If the party being complained of is the immediate supervisor, the grievance shall be presented to the next higher supervisor.</li>
                                      </ul>

                                      <h4 className="text-lg font-bold text-blue-900 mb-3">CASES ACTED UPON THROUGH GRIEVANCE MACHINERY</h4>
                                      <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>Non-implementation of policies, practices and procedures on economic and financial issues and other terms and conditions of employment fixed by law including salaries, incentives, working hours, leave benefits, and other related terms and conditions.</li>
                                        <li>Non-implementation of policies, practices and procedures which affect employees from recruitment to promotion, detail, transfer, retirement, termination, lay-offs, and other related issues that affect them.</li>
                                        <li>Physical working conditions.</li>
                                        <li>Interpersonal relationships and linkages.</li>
                                        <li>Protest on appointments.</li>
                                        <li>All other matters giving rise to employee dissatisfaction and discontentment outside of those cases enumerated above.</li>
                                      </ul>

                                      <h4 className="text-lg font-bold text-blue-900 mb-3 mt-6">CASES NOT ACTED UPON THROUGH GRIEVANCE MACHINERY</h4>
                                      <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>Disciplinary cases which shall be resolved pursuant to the Uniform Rules on Administrative Cases.</li>
                                        <li>Sexual harassment cases as provided for in RA 7877.</li>
                                        <li>Union-related issues and concerns.</li>
                                      </ul>

                                      <h4 className="text-lg font-bold text-blue-900 mb-3 mt-6">GRIEVANCE COMMITTEE COMPOSITION</h4>
                                      <p className="mb-3">Only permanent officials and employees, whenever applicable, shall be appointed or elected as members of the grievance committee. In the appointment or election of the committee members, their integrity, probity, sincerity and credibility shall be considered.</p>
                                      <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>One Member of top management or a representative to act as Chairman.</li>
                                        <li>Two higher supervisors chosen from among themselves.</li>
                                        <li>Two (2) members of the rank-and-file who shall serve for a term of two (2) years and chosen through a general assembly or any other mode of selection to be conducted for the purpose; one from the first level and another from the second level.</li>
                                        <li>The Bilis Aksyon Partner (BAP) duly designated.</li>
                                      </ul>
                                      <p className="mb-4">The agency head shall ensure equal opportunity for men and women to be represented in the grievance committee.</p>

                                      <h4 className="text-lg font-bold text-blue-900 mb-3 mt-6">OBJECTIVES</h4>
                                      <p className="font-semibold mb-2">General:</p>
                                      <p className="mb-4">Create a work atmosphere conducive to good supervisor-employee relations and improved employee morale.</p>
                                      <p className="font-semibold mb-2">Specific:</p>
                                      <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>Activate and strengthen agency's existing grievance machinery.</li>
                                        <li>Settle grievances at the lowest possible level in the organization.</li>
                                        <li>Serve as a catalyst for the development of capabilities of personnel on dispute settlement, especially among supervisors in the agency.</li>
                                      </ul>

                                      <h4 className="text-lg font-bold text-blue-900 mb-3 mt-6">SCOPE</h4>
                                      <p className="mb-4">The Grievance Machinery applies to all levels of officials and employees in the agency. It may also apply to non-career employees whenever applicable.</p>

                                      <h4 className="text-lg font-bold text-blue-900 mb-3 mt-6">DEFINITION OF TERMS</h4>
                                      <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li><strong>Accredited or Recognized Employee Union</strong> – an employee union accredited pursuant to Executive Order No. 180 and its implementing rules and regulations.</li>
                                        <li><strong>Bilis Aksyon Partner</strong> – is the counterpart Action Officer of the Civil Service Commission under the Mamamayan Muna Program in every agency pursuant to CSC MC No. 3, s. 1994.</li>
                                        <li><strong>Grievance</strong> – a work-related discontentment or dissatisfaction which had been expressed verbally or in writing and which, in the aggrieved employee's opinion, has been ignored or dropped without due consideration.</li>
                                        <li><strong>Grievance Machinery</strong> – a system or method of determining and finding the best way to address the specific cause or causes of a grievance.</li>
                                        <li><strong>Public Sector Labor-Management Council (PSLMC)</strong> – the Council responsible for the promulgation, implementation and administration of the guidelines for the exercise of the right of government employees to organize pursuant to Executive Order No. 180.</li>
                                        <li><strong>Aggrieved Party</strong> – the person who presents verbally or in writing the grievance.</li>
                                        <li><strong>Object of the Grievance</strong> – the person being complained of.</li>
                                      </ul>

                                      <h4 className="text-lg font-bold text-blue-900 mb-3 mt-6">GRIEVANCE PROCEDURES</h4>
                                      <p className="mb-3">The procedures for seeking redress of grievances shall be as follows:</p>
                                      <ol className="list-decimal pl-6 space-y-3 mb-4">
                                        <li><strong>Discussion with Immediate Supervisor:</strong> At the first instance, a grievance shall be represented verbally or in writing by the aggrieved party to his or her immediate supervisor. The supervisor shall inform the aggrieved party of the corresponding action within three (3) working days from the date of presentation. Provided, however, that where the object of the grievance is the immediate supervisor, the aggrieved party may bring the grievance to the next higher supervisor.</li>
                                        <li><strong>Appeal to the Higher Supervisor:</strong> If the aggrieved party is not satisfied with the verbal decision, he or she may submit the grievance in writing, within five (5) days to the next higher supervisor who shall render his or her decision within five (5) working days from receipt of the grievance.</li>
                                        <li><strong>Appeal to the Grievance Committee:</strong> The decision of the next higher supervisor may be elevated to the grievance committee within five (5) working days from receipt of the decision of the next higher supervisor. The grievance committee may conduct an investigation and hearing within ten (10) working days from receipt of the grievance and render a decision within five (5) working days after the investigation. Provided, however, that where the object of the grievance is the grievance committee, the aggrieved party may submit the grievance to top management.</li>
                                        <li><strong>Appeal to Top Management:</strong> If the aggrieved party is not satisfied with the decision of the grievance committee, he or she may elevate his or her grievance within five (5) working days from receipt of the decision through the committee to top management who shall make the decision within ten (10) working days after the receipt of the grievance. Provided, however, that where the object of the grievance is the top management, the aggrieved party may bring his or her grievance directly to the Civil Service Commission Regional Office.</li>
                                        <li><strong>Appeal to the Civil Service Commission Regional Office:</strong> If the aggrieved party is not satisfied with the decision of top management, he or she may appeal or elevate his or her grievance to the Civil Service Commission Regional Office concerned within fifteen (15) working days from the receipt of such decision. Together with the appeal, the aggrieved party shall submit a Certification on the Final Action on the Grievance (CFAG). The Civil Service Commission Regional Office shall rule on the appeal in accordance with existing civil service law, rules and regulations.</li>
                                      </ol>

                                      <h4 className="text-lg font-bold text-blue-900 mb-3 mt-6">GRIEVANCE COMMITTEE RESPONSIBILITIES</h4>
                                      <ul className="list-disc pl-6 space-y-2 mb-4">
                                        <li>Establish its own internal procedures and strategies. Membership in the grievance committee shall be considered part of the members' regular duties.</li>
                                        <li>Develop and implement pro-active measures or activities to prevent grievance such as employee assembly which shall be conducted at least once every quarter, "talakayan", counseling and other HRD interventions. Minutes of the proceedings of these activities shall be documented for audit purposes.</li>
                                        <li>Conduct continuing information drive on Grievance Machinery among officials and employees in collaboration with the personnel unit.</li>
                                        <li>Conduct dialogue between and among the parties involved.</li>
                                        <li>Conduct an inquiry and hearing within ten (10) working days from receipt of the grievance and render a decision within five (5) working days after the inquiry. Provided, however, that where the object of the grievance is the grievance committee, the aggrieved party may submit the grievance to top management.</li>
                                        <li>Direct the documentation of the grievance including the preparation and signing of written agreements reached by the parties involved.</li>
                                        <li>Issue Certification on the Final Action on the Grievance (CFAG) which shall contain, among other things, the following information: history and final action taken by the agency on the grievance.</li>
                                        <li>Submit a quarterly report of its accomplishments and status of unresolved grievances to the Civil Service Commission Regional Office concerned.</li>
                                      </ul>

                                      <h4 className="text-lg font-bold text-blue-900 mb-3 mt-6">GRIEVANCE FORMS</h4>
                                      <p className="mb-3">The following forms shall be used:</p>
                                      <ol className="list-decimal pl-6 space-y-3 mb-4">
                                        <li><strong>Grievance Form</strong> – For filing the grievance with details of the aggrieved party, nature of grievance, and action desired.</li>
                                        <li><strong>Grievance Agreement Form</strong> – For documenting the agreement reached between parties.</li>
                                        <li><strong>Certificate of Final Action on the Grievance (CFAG)</strong> – Certification issued by the grievance committee containing the history and final action taken on the grievance.</li>
                                      </ol>

                                      <h4 className="text-lg font-bold text-blue-900 mb-3 mt-6">EFFECTIVITY</h4>
                                      <p className="mb-4">This Grievance Machinery shall take effect immediately upon approval by the Civil Service Commission Regional Office concerned.</p>

                                      <h4 className="text-lg font-bold text-blue-900 mb-3 mt-6">COMMITMENT</h4>
                                      <p className="mb-4">I hereby commit to implement the provisions of this Grievance Machinery and take necessary action in accordance with existing civil service law and rules against supervisors or officials who refuse to act on a grievance brought before their attention.</p>

                                      <div className="border-t pt-6 mt-6">
                                        <p className="font-bold text-center mb-2">Approved by:</p>
                                        <p className="text-center font-semibold">HILARION P. VISANDE, JR.</p>
                                        <p className="text-center">General Manager</p>
                                        <p className="text-center mt-4 font-bold">CSC Action:</p>
                                        <p className="text-center mb-2">I have evaluated the herein agency Grievance Machinery and found it to be in accordance with the provision of CSC MC 02, s. 2001 and may now be implemented.</p>
                                        <p className="text-center font-semibold mt-2">ELMER R. BARTOLATA</p>
                                        <p className="text-center">CSC Regional Director</p>
                                      </div>
                                    </div>
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
                    key: '9',
                    label: (
                      <div className="text-lg font-semibold">Compensation and Benefits</div>
                    ),
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">   
                          <Tabs
                            defaultActiveKey="9-1"
                            items={[
                              {
                                key: '9-1',
                                label: <div className="text-lg mx-4 font-semibold">Leave Administration</div>,
                                children: (
                                  <div className="max-w-4xl mx-auto">
                                    <div className="text-center mb-8">
                                      <h3 className="text-2xl font-bold text-blue-900 mb-2 mt-8">LEAVE ADMINISTRATION</h3>
                                      <p className="text-gray-600">For Polomolok Water District (PolWD)</p>
                                    </div>
                                    
                                    <div className="space-y-6 text-gray-700">
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">I. BASIC POLICY</h4>
                                        <p className="mb-4">Polomolok Water District recognizes the importance of valuable information on government policies regarding responsibilities, rights, privileges and their benefits.</p>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">II. OBJECTIVES</h4>
                                        <p><strong>1.</strong> Provide employees valuable information on the government policies on leave.</p>
                                        <p><strong>2.</strong> Provide employees working guidelines and employees assigned perform task of leave administration.</p>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">III. SCOPE</h4>
                                        <p className="mb-3"><strong>All permanent employees of Polomolok Water District.</strong></p>
                                      </div>
                                      
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">IV. PROCEDURE</h4>
                                        
                                        <div className="space-y-4">
                                          <div>
                                            <p className="font-semibold">Application for Leave</p>
                                            <div className="ml-4 space-y-2 mt-2">
                                              <p><strong>a. Vacation Leave</strong> – shall be filed five (5) days in advance of the effective date of such leave; the grant of vacation leave shall be at the discretion of the head of department/ agency.</p>
                                              <p><strong>b. Sick Leave</strong> – shall be filed immediately upon the employee's return from such leave; notice of absence, however, shall be sent to the immediate supervisor and/or to the agency head; application for sick leave in excess of five (5) days successive days shall be accompanied by a proper medical certificate.</p>
                                              
                                              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-3">
                                                <p className="font-semibold text-blue-900 mb-2">INTERNAL POLICY ON LEAVE APPLICATION</p>
                                                <p className="mb-2">Failure to submit a leave application 3 days after upon return to office would be considered absence without pay (AWOP) equivalent to the number of days already taken.</p>
                                                <p>The division head, as recommending authority, shall automatically disapprove the application. The head of the agency shall approve the application for the number of days without pay. This shall be the basis of the Finance Division in the computation of AWOP.</p>
                                              </div>
                                              
                                              <p><strong>c. Special Leave</strong> – five (5) days in advance except for emergency cases.</p>
                                              <p className="text-sm text-gray-600 italic">Date of Effectivity: January 12, 2010</p>
                                            </div>
                                          </div>

                                          <div>
                                            <p><strong>2. Leave Without Pay</strong> – all absences of an official or employee in excess of his accumulated vacation and sick leave credits shall be without pay; when an employee has already exhausted his sick leave, he can use his vacation leave credits but not vice versa; leave without pay in excess of one month shall require the clearance of the proper head of department or agency.</p>
                                          </div>

                                          <div>
                                            <p><strong>3. Leave during probationary period</strong> – an employee on probation may already avail of whatever leave credits he has earned during said period. Accordingly, any leave of absence without pay incurred during the period of probation shall extend the completion thereof for the same number of days of such absence.</p>
                                          </div>

                                          <div>
                                            <p><strong>4. Effect of unauthorized leave</strong> – an official/ employee who is absent without approved leave shall not be entitled to receive his salary corresponding to the period of his unauthorized leave of absence; it is understood, however, that his absence shall no longer be deducted from his accumulated leave credits.</p>
                                          </div>

                                          <div>
                                            <p><strong>5. Period within which act on leave application</strong> – whenever the application for leave of absence, including terminal leave, is not acted upon by the head of the agency or is duly authorized representative within 5 working days after receipt thereof, the application for leave of absence shall be deemed approved.</p>
                                          </div>

                                          <div>
                                            <p><strong>6. Five days mandatory / forced leave</strong> – all officials and employees with 10 days or more vacation leave credits shall be required to go on vacation leave whether continuous or intermittent for a minimum of five (5) working days annually under the following conditions:</p>
                                            <ul className="list-disc ml-8 mt-2 space-y-1">
                                              <li><strong>a.</strong> Preparation of staggered schedule (unless cancelled due to exigency of service)</li>
                                              <li><strong>b.</strong> Forfeiture if not taken during the year (to be deducted from VL credits)</li>
                                              <li><strong>c.</strong> Only those with less than ten (10) days shall have the option to go on forced leave or not.</li>
                                            </ul>
                                          </div>

                                          <div>
                                            <p><strong>7. Tardiness and Undertime</strong> – are deducted against vacation leave credits.</p>
                                            <p className="mt-2">Counting of frequency starts after a grace period of 5 minutes</p>
                                            <p className="mt-2">The employee who incurs ten (10) times tardy for two (2) months in a semester or two (2) consecutive months in a year will be subject to penalty:</p>
                                            <ul className="list-disc ml-8 mt-2 space-y-1">
                                              <li><strong>1st offense</strong> – reprimand</li>
                                              <li><strong>2nd offense</strong> – suspension</li>
                                              <li><strong>3rd offense</strong> – dismissal</li>
                                            </ul>
                                            <p className="mt-2">Undertime is not counted as frequency for tardiness.</p>
                                            
                                            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-3">
                                              <p className="font-semibold text-green-900 mb-2">For perfect attendance award:</p>
                                              <ul className="list-disc ml-6 space-y-1">
                                                <li>No sick / vacation leave except the special leave and 5-day forced leave.</li>
                                                <li>No record of undertime and tardiness.</li>
                                              </ul>
                                            </div>
                                          </div>

                                          <div>
                                            <p><strong>8. Computation of vacation and sick leave</strong> – shall be made on the basis of one day vacation and one day sick leave every 24 days of actual service. "Actual service" refers to the period of continuous service since the appointment of the official or employee concerned, including periods covered by any previously approved leave with pay.</p>
                                          </div>

                                          <div>
                                            <p><strong>9. Monetization of leave credits</strong> – officials and employees in the career and non-career service whether permanent, temporary, casual or co-terminous, who have accumulated fifteen (15) days of vacation leave credits shall be allowed to monetize a minimum of ten (10) days: Provided, that at least five (5) days is retained after monetization and provided further that a maximum of thirty (30) days may be monetized in a given year.</p>
                                            <p className="mt-2 font-semibold">Monetization of 50% or more vacation/ sick leave credits maybe allowed for valid and justifiable reasons such as:</p>
                                            <ul className="list-disc ml-8 mt-2 space-y-1">
                                              <li><strong>a.</strong> Health, medical and hospital needs of the employee and the immediate members of his family;</li>
                                              <li><strong>b.</strong> Financial aid and assistance brought about by force majeure events such as calamities, typhoons, fire, earthquake and accidents that affect the life, limb and property of the employee and his/ her immediate family;</li>
                                              <li><strong>c.</strong> Educational needs of the employee and the immediate members of his/ her family.</li>
                                              <li><strong>d.</strong> Payment of mortgages and loans which were entered into for the benefit or which inured to the benefit of the employee and his/ her immediate family;</li>
                                              <li><strong>e.</strong> In cases of extreme financial needs of the employee or his/her immediate family where the present sources of income are not enough to fulfill basic needs such as food, shelter and clothing;</li>
                                              <li><strong>f.</strong> Other analogous cases as may be determined by the Commission.</li>
                                            </ul>
                                            <p className="mt-2">The monetization of 50% or more of the accumulated leave credits shall be upon the favorable recommendation of the agency head and subject to availability of funds.</p>
                                          </div>
                                        </div>
                                      </div>

                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">V. DEFINITION OF TERMS</h4>
                                        <div className="space-y-2">
                                          <p><strong>1. Leave of absence</strong> – is generally defines as a right granted to officials and employees not to report for work with or without pay as may be provided by law and as the rules prescribe in Rule XVI hereof.</p>
                                          <p><strong>2. Commutation of leave credits</strong> – refers to conversion of unused leave credits to their corresponding money value.</p>
                                          <p><strong>3. Cumulation of leave credits</strong> – refers to incremental acquisition of unused leave credits by an official or employee.</p>
                                          <p><strong>4. Immediate family</strong> – refers to the spouse, children, parents, unmarried brothers and sisters and any relative living under the same roof or dependent upon the employee for support.</p>
                                          <p><strong>5. Sick leave</strong> – refers to leave of absence granted only on account of sickness or disability on the part of the employee concerned or any member of his immediate family.</p>
                                          <p><strong>6. Vacation leave</strong> – refers to leave of absence granted to officials and employees for personal reasons, the approval of which is contingent upon the necessities of the service.</p>
                                          <p><strong>7. Monetization</strong> – refers to payment in advance under prescribed limits and subject to specified terms and conditions of the money value of leave credits of an employee upon his request without actually going on leave.</p>
                                          <p><strong>8. Pregnancy</strong> – refers to the period between conception and delivery or birth of a child. For purposes of maternity leave, miscarriage is within the period of pregnancy.</p>
                                          <p><strong>9. Maternity leave</strong> – refers to leave of absence granted to female government employees legally entitled thereto in addition to vacation and sick leave. The primary intent or purpose of granting maternity leave is to extend working mothers some measures of financial help and to provide her a period of rest and recuperation in connection with her pregnancy.</p>
                                          <p><strong>10. Paternity leave</strong> – refers to the privilege granted to a married male employee allowing him not to report for work for seven (7) days while continuing to earn the compensation therefore, on the condition that his legitimate spouse has delivered a child or suffered a miscarriage, for purposes of enabling him to effectively lend care and support to his wife before, during and after childbirth as the case may be assist in caring for his newborn child.</p>
                                          <p><strong>11. Terminal leave</strong> – refers to money value of the total accumulated leave credits of an employee based on the highest salary rate received prior to or upon retirement date/ voluntary separation.</p>
                                          <p><strong>12. Special leave privileges</strong> – refers to leave of absence which officials and employees may avail of for a maximum of three (3) days annually over and above the vacation, sick, maternity and paternity leaves to mark personal milestone and or attend filial and domestic responsibilities.</p>
                                          <p><strong>13. Relocation leave</strong> – refers to a special leave privilege granted official / employee whenever he/ she transfers residence.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ),
                              },
                              {
                                key: '9-2',
                                label: <div className="text-lg mx-4 font-semibold">E-DTR</div>,
                                children: (
                                  <div className="max-w-4xl mx-auto">
                                    <div className="text-center mb-8">
                                      <h3 className="text-2xl font-bold text-blue-900 mb-2 mt-8">EMPLOYEE'S DAILY TIME RECORD</h3>
                                      <p className="text-gray-600">For Polomolok Water District (PolWD)</p>
                                    </div>
                                    
                                    <div className="space-y-6 text-gray-700">
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">I. BASIC POLICY</h4>
                                        <p className="mb-4">Excellent attendance is an expectation of all employees of the agency. Daily attendance is especially important for hourly employees whose customers and coworkers have the expectation of on-time services.</p>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">II. OBJECTIVES</h4>
                                        <p><strong>1.</strong> Provides and computes hours work, late, under time, holiday, rest day, nightshift differential and other related computations.</p>
                                        <p><strong>2.</strong> Provides interface to schedule employee by group or individual.</p>
                                        <p><strong>3.</strong> Keep history of employee schedule.</p>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">III. SCOPE</h4>
                                        <p className="mb-4"><strong>All permanent employees of Polomolok Water District.</strong></p>
                                      </div>
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">IV. MODULES / PROGRAM FEATURES</h4>
                                        <p><strong>1.</strong> Employee Profile</p>
                                        <ul className="list-disc ml-8 mt-2 space-y-1">
                                          <li>Employee joining information.</li>
                                          <li>Employee profile.</li>
                                          <li>Family background details.</li>
                                          <li>Employee emergency address and contact person details.</li>
                                          <li>Employee current position and job profile.</li>
                                          <li>Employee local address.</li>
                                        </ul>
                                        <p className="mt-2"><strong>2.</strong> Company Profile</p>
                                        <ul className="list-disc ml-8 mt-2 space-y-1">
                                          <li>Company information.</li>
                                          <li>Company holiday.</li>
                                        </ul>
                                        <p className="mt-2"><strong>3.</strong> Leave Management System</p>
                                        <ul className="list-disc ml-8 mt-2 space-y-1">
                                          <li>User defined leave types.</li>
                                          <li>Leave application.</li>
                                          <li>Leave rules.</li>
                                          <li>Leave balance details.</li>
                                        </ul>
                                        <p className="mt-2"><strong>4.</strong> Time Management System</p>
                                        <ul className="list-disc ml-8 mt-2 space-y-1">
                                          <li>Time In/Out management.</li>
                                          <li>Employee schedule / Shift management.</li>
                                          <li>Monitors late, under time, absent.</li>
                                          <li>Overtime details.</li>
                                        </ul>
                                        <p className="mt-2"><strong>5.</strong> Company Reports</p>
                                        <ul className="list-disc ml-8 mt-2 space-y-1">
                                          <li><strong>A. Company Reports</strong></li>
                                          <ul className="list-disc ml-8 mt-2 space-y-1">
                                            <li>Company details.</li>
                                            <li>Company holidays.</li>
                                            <li>Leave type detail.</li>
                                          </ul>
                                          <li><strong>B. Leave and Attendance Reports</strong></li>
                                          <ul className="list-disc ml-8 mt-2 space-y-1">
                                            <li>Employee leave application.</li>
                                            <li>Employee leave approval.</li>
                                            <li>Leave balance.</li>
                                            <li>Late and Undertime.</li>
                                            <li>Shift details.</li>
                                            <li>Employee current shift.</li>
                                            <li>Overtime details.</li>
                                            <li>Daily/Monthly attendance report.</li>
                                            <li>Used leave details.</li>
                                            <li>In/Out summary.</li>
                                            <li>Attendance summary.</li>
                                            <li>Holiday Work.</li>
                                            <li>Current employees.</li>
                                            <li>Device In/Out details (if manually inputted or by using hardware like ID and password).</li>
                                          </ul>
                                          <li><strong>C. Employee Reports</strong></li>
                                          <ul className="list-disc ml-8 mt-2 space-y-1">
                                            <li>Employee date hired.</li>
                                            <li>Employee profile.</li>
                                            <li>Department employee list.</li>
                                            <li>Family background details.</li>
                                            <li>Contact details.</li>
                                            <li>Birthday list.</li>
                                          </ul>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                ),
                              },
                              {
                                key: '9-3',
                                label: <div className="text-lg mx-4 font-semibold">PBB</div>,
                                children: (
                                  <div className="max-w-4xl mx-auto">
                                    <div className="text-center mb-8">
                                      <h3 className="text-2xl font-bold text-blue-900 mb-2 mt-8">PERFORMANCE-BASED BONUS (PBB)</h3>
                                    </div>
                                    
                                    <div className="space-y-6 text-gray-700">
                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">Rationale:</h4>
                                        <p className="mb-4">Executive Order No. 80 issued by the President on July 20, 2012 directed the adoption of the Performance-Based Incentive System (PBIS) for Government employees. The PBIS is based on the belief that service delivery by the bureaucracy can be improved by linking personnel incentives to the bureau or delivery unit's performance and recognizing and rewarding exemplary performance to foster teamwork and meritocracy.</p>
                                        <p className="mb-4">Under the PBIS, qualified agencies that submitted all compliance reports on time will be assessed, provided that they meet at least 90 percent of their targets for the year. Agencies are also required to fulfill all the good governance conditions set by the Inter-Agency Task Force on the Harmonization of the National Government Performance Monitoring, Information and Reporting Systems, or the A.O. 25 Task Force.</p>
                                        <p className="mb-4">The PBB, which is a top-up bonus, shall be given to personnel of bureaus or delivery units in accordance with their contribution to the accomplishment of their Department's overall targets and commitments, subject to the following criteria:</p>
                                        <ul className="list-disc ml-8 mt-2 space-y-2">
                                          <li><strong>I.</strong> Achievement by the Departments of performance targets under their respective Major Final Outputs (MFOs), and Priority Program/Project commitments as agreed with the President under the 5 KRAs under EO 43; and</li>
                                          <li><strong>II.</strong> Accomplishment of good governance conditions set by the Inter-Agency Task Force (IATF) created under AO 25.</li>
                                        </ul>
                                      </div>

                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">Objectives:</h4>
                                        <ul className="list-disc ml-8 mt-2 space-y-2">
                                          <li>To recognize and reward exemplary performance in the public sector to enhance service delivery.</li>
                                          <li>To rationalize the distribution of incentives across performance categories of groups and individuals thereby moving away from across-the-board incentives overtime.</li>
                                          <li>To nurture team spirit towards the effective execution of operational plans by linking personnel incentives to the delivery units' performance.</li>
                                          <li>To strengthen performance and appraisal system based on existing systems like the Organizational Performance Indicator Framework (OPIF), the Strategic Performance Management System (SPMS) of the Civil Service Commission, and the Results Based Performance Management System (RBPMS) provided under AO 25 of 2011.</li>
                                        </ul>
                                      </div>

                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">Polomolok Water District Compliance</h4>
                                        <p className="mb-3">Polomolok Water District has complied / accomplished and achieved the performance targets under respective Major Final Outputs (MFO) targets and commitments under EO 43 based on the following:</p>
                                        
                                        <div className="ml-4 space-y-3">
                                          <p><strong>A. Operation</strong></p>
                                          <ul className="list-disc ml-8 space-y-1">
                                            <li>Non-Revenue Water (NRW)</li>
                                            <li>Water Quality</li>
                                            <li>Marketing</li>
                                            <li>Customer Service</li>
                                          </ul>
                                          
                                          <p><strong>B. Support to Operation (STO)</strong></p>
                                          <ul className="list-disc ml-8 space-y-1">
                                            <li>Environment</li>
                                            <li>Operation & Management</li>
                                          </ul>
                                          
                                          <p><strong>C. General Administration & Support Services (GASS)</strong></p>
                                          <ul className="list-disc ml-8 space-y-1">
                                            <li>Human Resource and Organizational Development</li>
                                            <li>Finance</li>
                                          </ul>
                                        </div>
                                      </div>

                                      <div>
                                        <h4 className="text-lg font-bold text-blue-900 mb-3">Good Governance Conditions</h4>
                                        <p className="mb-3">The agency is also compliant to the Good Governance Condition set by the Inter-Agency Task Force (IATF) such as:</p>
                                        <ul className="list-disc ml-8 space-y-1">
                                          <li>Transparency Seal</li>
                                          <li>PhilGEPS Posting</li>
                                          <li>Citizen's Charter</li>
                                          <li>SALN Submission/Filling</li>
                                          <li>Report on Ageing Cash Advances</li>
                                        </ul>
                                        <p className="mt-4">The said documents were submitted to DBM in relation to Inter-Agency Task Force (IATF) and Good Governance Condition for GOCC's instruction last December 27, 2013 and January 13, 2014 respectively.</p>
                                      </div>
                                    </div>
                                  </div>
                                ),
                              },
                            ]}
                          />
                        </CardContent>
                      </Card>
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