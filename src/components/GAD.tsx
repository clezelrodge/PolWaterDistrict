import { Card, CardContent } from '@/components/ui/card';
import { Tabs } from 'antd';    
import { FileText } from 'lucide-react';

export default function GAD() {

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
              Gender and Development
            </h1>
            <p className="text-white max-w-2xl mx-auto text-lg drop-shadow-md">
              Promoting gender equality and inclusive development in Polomolok Water District.
            </p>
          </div>
        </div>


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
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 pt-12 relative z-20">
        <Card className="shadow-xl">
          <CardContent className="px-8 pt-8 pb-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl text-center text-blue-800 font-bold mb-6">Gender and Development</h2>
              
              <Tabs
                defaultActiveKey="1"
                items={[
                  {
                    key: '1',
                    label: (
                      <div className="text-lg font-bold">
                        Focal Point System
                      </div>
                    ),
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">
                          <Tabs
                            defaultActiveKey="1-1"
                            items={[
                              {
                                key: '1-1',
                                label: (
                                    <div className="mx-4 text-lg font-bold">2025</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center gap-4">
                                    <img src="/GAD2025.jpg" alt="GAD Focal Point System 2025" className="max-w-full h-auto" />
                                    <img src="/GAD2025_1.jpg" alt="GAD Focal Point System 2025" className="max-w-full h-auto" />
                                  </div>
                                ),
                              },
                              {
                                key: '1-2',
                                label: (
                                  <div className="mx-4 text-lg font-bold">
                                    2024
                                  </div>
                                ),
                                children: (
                                    <div className="flex flex-col items-center gap-4">
                                        <img src="/GAD2024_1.jpg" alt="GAD Focal Point System 2024" className="max-w-181 h-auto" />
                                        <img src="/GAD2024_2.jpg" alt="GAD Focal Point System 2024" className="max-w-181 h-auto" />
                                        <img src="/GAD2024_3.jpg" alt="GAD Focal Point System 2024" className="max-w-181 h-auto" />
                                        <img src="/GAD2024_4.jpg" alt="GAD Focal Point System 2024" className="max-w-181 h-auto" />
                                    </div>                
                                         )
                              },
                              {
                                key: '1-3',
                                label: (
                                  <div className="mx-4 text-lg font-bold">
                                    Office Order for the Creation of GFPS
                                  </div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center gap-4">
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GFPS-23.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GFPS 2023 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GFPS-22.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GFPS 2022 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GFPS-21.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GFPS 2021 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GFPS-20.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GFPS 2020 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GFPS-19.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GFPS 2019 (PDF)
                                      </a>
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
                    key: '2',
                    label: (
                        <div className="mx-4 text-lg font-bold">GAD Strategic Framework</div>
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
                                 <div className="mx-4 text-lg font-bold">Vision & Mission</div>
                                  ),
                                children: (
                                    <div className="flex flex-col items-center gap-4">
                                    <img src="/GAD_VM.jpg" alt="Vision and Mission" className="max-w-181 h-auto" />
                                  </div>
                                ),
                              },
                              {
                                key: '2-2',
                                label: (
                                <div className="mx-4 text-lg font-bold">Goals</div>
                                ),
                                children: (
                                 <div className="flex flex-col items-center gap-4">
                                    <img src="/GAD_Goals.png" alt="Goals" className="max-w-181 h-auto" />
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
                      <div className="mx-4 text-lg font-bold">Gender Mainstreaming</div>
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
                                  <div className="mx-4 text-lg font-bold">Gender Mainstreaming</div>
                                ),
                                children: (
                                 <div className="flex flex-col items-center gap-4">
                                    <img src="/GAD_Goals.png" alt="Goals" className="max-w-181 h-auto" />
                                  </div>
                                ),
                              },
                              {
                                key: '3-2',
                                label: 'Subtab 2',
                                children: <p className="text-gray-700">Placeholder content for Tab 3 - Subtab 2</p>,
                              },
                              {
                                key: '3-3',
                                label: 'Subtab 3',
                                children: <p className="text-gray-700">Placeholder content for Tab 3 - Subtab 3</p>,
                              },
                            ]}
                          />
                        </CardContent>
                      </Card>
                    ),
                  },
                  {
                    key: '4',
                    label: 'Tab 4',
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">
                          <Tabs
                            defaultActiveKey="4-1"
                            items={[
                              {
                                key: '4-1',
                                label: 'Subtab 1',
                                children: <p className="text-gray-700">Placeholder content for Tab 4 - Subtab 1</p>,
                              },
                              {
                                key: '4-2',
                                label: 'Subtab 2',
                                children: <p className="text-gray-700">Placeholder content for Tab 4 - Subtab 2</p>,
                              },
                              {
                                key: '4-3',
                                label: 'Subtab 3',
                                children: <p className="text-gray-700">Placeholder content for Tab 4 - Subtab 3</p>,
                              },
                            ]}
                          />
                        </CardContent>
                      </Card>
                    ),
                  },
                  {
                    key: '5',
                    label: 'Tab 5',
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">
                          <Tabs
                            defaultActiveKey="5-1"
                            items={[
                              {
                                key: '5-1',
                                label: 'Subtab 1',
                                children: <p className="text-gray-700">Placeholder content for Tab 5 - Subtab 1</p>,
                              },
                              {
                                key: '5-2',
                                label: 'Subtab 2',
                                children: <p className="text-gray-700">Placeholder content for Tab 5 - Subtab 2</p>,
                              },
                              {
                                key: '5-3',
                                label: 'Subtab 3',
                                children: <p className="text-gray-700">Placeholder content for Tab 5 - Subtab 3</p>,
                              },
                            ]}
                          />
                        </CardContent>
                      </Card>
                    ),
                  },
                  {
                    key: '6',
                    label: 'Tab 6',
                    children: (
                      <Card className="shadow-xl">
                        <CardContent className="p-6">
                          <Tabs
                            defaultActiveKey="6-1"
                            items={[
                              {
                                key: '6-1',
                                label: 'Subtab 1',
                                children: <p className="text-gray-700">Placeholder content for Tab 6 - Subtab 1</p>,
                              },
                              {
                                key: '6-2',
                                label: 'Subtab 2',
                                children: <p className="text-gray-700">Placeholder content for Tab 6 - Subtab 2</p>,
                              },
                              {
                                key: '6-3',
                                label: 'Subtab 3',
                                children: <p className="text-gray-700">Placeholder content for Tab 6 - Subtab 3</p>,
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