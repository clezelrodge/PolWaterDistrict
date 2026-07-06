import { Card, CardContent } from '@/components/ui/card';
import { Tabs } from 'antd';    
import { FileText } from 'lucide-react';
import { Link } from 'lucide-react';
import { Images } from 'lucide-react';

export default function GAD() {

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
              Gender and Development
            </h1>
            <p className="text-white max-w-2xl mx-auto text-lg drop-shadow-md">
              Promoting gender equality and inclusive development in Polomolok Water District.
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
              <h2 className="text-3xl text-center text-blue-800 font-bold mb-6">Gender and Development</h2>
              
              <Tabs
                defaultActiveKey="1"
                items={[
                  {
                    key: '1',
                    label: (
                      <div className="text-lg font-semibold">
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
                                    <div className="mx-24 text-lg font-bold">2025</div>
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
                                  <div className="mx-24 text-lg font-bold">
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
                                  <div className="mx-24 text-lg font-bold">
                                    Office Order for the Creation of GFPS
                                  </div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center gap-4">
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GFPS-23.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GFPS 2023 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GFPS-22.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GFPS 2022 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GFPS-21.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GFPS 2021 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GFPS-20.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GFPS 2020 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GFPS-19.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
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
                        <div className="text-lg font-semibold">GAD Strategic Framework</div>
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
                                 <div className="mx-50 text-lg font-bold">Vision & Mission</div>
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
                                <div className="mx-50 text-lg font-bold">Goals</div>
                                ),
                                children: (
                                 <div className="flex flex-col items-center gap-4">
                                    <img src="/GAD_Goals.png" alt="Goals" className="max-w-full h-auto" />
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
                      <div className="text-lg font-semibold">Gender Mainstreaming</div>
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
                                  <div className="mx-16 text-lg font-bold">Gender Mainstreaming</div>
                                ),
                                children: (
                                 <div className="flex flex-col items-center font-semibold text-2xl gap-4 mt-6 mb-6">
                                    Gender equality as the goal; gender mainstreaming as the strategy.
                                    <div className="gap-4 mt-2 mb-2"></div>
                                    <img src="/GADGM.png" alt="Gender Mainstreaming" className="max-w-full h-auto" />
                                    <div className="items-center text-2xl gap-4 mt-6 mb-6">
                                      Entry Points of Gender Mainstreaming
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
                                      <img src="/Policies.png" alt="Policies" className="max-w-full h-auto" />
                                      <img src="/People.png" alt="People" className="max-w-full h-auto" />
                                      <img src="/PAPs.png" alt="PAPs" className="max-w-full h-auto" />
                                      <img src="/EM.png" alt="Enabling Mechanisms" className="max-w-full h-auto" />
                                    </div>
                                    <div className="flex flex-col items-center text-center text-2xl gap-4 mt-6 mb-6">
                                      Levels
                                      <img src="/GADlvl.png" alt="GAD Levels" className="max-w-full h-auto" />
                                      <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
                                        <img src="/lv1.png" alt="GAD Level 1" className="max-w-full h-auto" />
                                        <img src="/lv2.png" alt="GAD Level 2" className="max-w-full h-auto" />
                                        <img src="/lv3.png" alt="GAD Level 3" className="max-w-full h-auto" />
                                        <img src="/lv4.png" alt="GAD Level 4" className="max-w-full h-auto" />
                                      </div>
                                      <div className="flex flex-col items-center text-center">
                                        <img src="/lv5.png" alt="GAD Level 5" className="max-w-full h-auto" />
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center text-center text-2xl gap-4 mt-6 mb-6">
                                      Polomolok Water District's Levels of GMEF - Scoresheet
                                      <div className="flex flex-col items-center gap-4 w-full">
                                        <div className="flex items-center gap-2 w-full">
                                          <FileText className="w-5 h-5 text-gray-800" />
                                          <a href="/GMEF2021.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                            2021 Level 3 (PDF)
                                          </a>
                                        </div>
                                        <div className="w-full border-t border-gray-300" />
                                        <div className="flex items-center gap-2 w-full">
                                          <FileText className="w-5 h-5 text-gray-800" />
                                          <a href="/GMEF2020.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                            2020 Level 3 (PDF)
                                          </a>
                                        </div>
                                        <div className="w-full border-t border-gray-300" />
                                        <div className="flex items-center gap-2 w-full">
                                          <FileText className="w-5 h-5 text-gray-800" />
                                          <a href="/GMEF2018.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                            2018 Level 2 (PDF)
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ),
                              },
                              {
                                key: '3-2',
                                label: (
                                  <div className="mx-16 text-lg font-bold">Levels  of GMEF</div>
                                ),
                                children: (
                                <div className="flex flex-col items-center text-center text-2xl font-semibold gap-4 mt-6 mb-6">
                                      2025
                                <div className="flex flex-col items-center gap-4">
                                    <img src="/GAD_GMEF2025.jpg" alt="GAD Evaluation Framework 2025" className="max-w-181 h-auto" />
                                  </div>
                                  <div className="flex flex-col items-center text-center text-2xl font-semibold gap-4">
                                    2024
                                    <img src="/GAD_GMEF2024.jpg" alt="GAD Evaluation Framework 2024" className="max-w-181 h-auto" />
                                  </div>
                                  <div className="flex flex-col items-center text-center text-2xl font-semibold gap-4">
                                    2022
                                    <img src="/GAD_GMEF2022.jpg" alt="GAD Evaluation Framework 2021" className="max-w-181 h-auto" />
                                  </div>
                                  <div className="flex flex-col items-center text-center text-2xl font-semibold gap-4">
                                    <img src="/GAD-GMEF2021.jpg" alt="GAD Evaluation Framework 2021" className="max-w-181 h-auto" />
                                  </div>
                                  <div className="flex flex-col items-center text-center text-2xl font-semibold gap-4">
                                    2020
                                  <img src="/GAD_GMEF2020.jpg" alt="GAD Evaluation Framework 2020" className="max-w-181 h-auto" />
                                  </div>
                                  <div className="flex flex-col items-center text-center text-2xl font-semibold gap-4">
                                    2014-2018
                                    <img src="/GAD_GMEF2014-2018.jpg" alt="GAD Evaluation Framework 2014-2018" className="max-w-181 h-auto" />
                                  </div>
                                </div>
                                ),
                              },
                              {
                                key: '3-3',
                                label: (
                                  <div className="mx-16 text-lg font-bold">Entry Points of Gender Mainstreaming</div>
                                ),
                                children:(
                                  <div className="flex flex-col items-center font-semibold text-2xl gap-4 mt-6 mb-6">
                                <div className="grid grid-cols-2 items-center gap-4 mt-6 mb-6">
                                <img src="/Policies.png" alt="Policies" className="max-w-full h-auto" />
                                <img src="/People.png" alt="People" className="max-w-full h-auto" />
                                <img src="/PAPs.png" alt="Programs and Projects" className="max-w-full h-auto" />
                                <img src="/EM.png" alt="Enabling Mechanisms" className="max-w-full h-auto" />
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
                    key: '4',
                    label: (
                      <div className="text-lg font-semibold">Knowledge Products</div>
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
                                <div className="mx-4 text-lg font-bold">Plans and Budgets</div>
                              ),
                                children: (
                                  <div className="flex flex-col items-center gap-4 w-full">
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GADPB2025.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GAD Plans and Budgets 2025 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GADPB2024.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GAD Plans and Budgets 2024 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GADPB2023.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                      GAD Plans and Budgets 2023 (PDF)
                                      </a>
                                      </div>
                                      <div className="w-full border-t border-gray-300" />
                                      <div className="flex items-center gap-2 w-full">
                                        <FileText className="w-5 h-5 text-gray-800" />
                                        <a href="/GADPB2022.pdf"  target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GAD Plans and Budgets 2022 (PDF)
                                        </a>
                                        </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full" >
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GADPB2021.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        GAD Plans and Budgets 2021 (PDF)
                                        </a>
                                        </div>
                                        <div className="w-full border-t border-gray-300" />
                                        <div className="flex items-center gap-2 w-full" >
                                          <FileText className="w-5 h-5 text-gray-800" />
                                          <a href="/GADPB2020.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                          GAD Plans and Budgets 2020 (PDF)
                                          </a>
                                          </div>
                                          <div className="w-full border-t border-gray-300" />
                                          <div className="flex items-center gap-2 w-full" >
                                            <FileText className="w-5 h-5 text-gray-800" />
                                            <a href="/GADPB2019.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                              GAD Plans and Budgets 2019 (PDF)
                                              </a>
                                              </div>
                                  </div>

                                ),
                              },
                              {
                                key: '4-2',
                                label: (
                                  <div className="mx-4 text-lg font-bold">Accomplishment Reports</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center gap-4 w-full">
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/2024GADAR.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        Accomplishment Report 2024 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full" >
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/2023GADAR.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                      Accomplishment Report 2023 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full" >
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/2022GADAR.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                      Accomplishment Report 2022 (PDF)
                                      </a>
                                      </div>
                                      <div className="w-full border-t border-gray-300" />
                                      <div className="flex items-center gap-2 w-full" >
                                        <FileText className="w-5 h-5 text-gray-800" />
                                        <a href="/2021GADAR.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                        Accomplishment Report 2021 (PDF)
                                        </a>
                                        </div>
                                        <div className="w-full border-t border-gray-300" />
                                        <div className="flex items-center gap-2 w-full" >
                                          <FileText className="w-5 h-5 text-gray-800"/>
                                          <a href="/2020GADAR.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                          Accomplishment Report 2020 (PDF)
                                          </a>
                                          </div>
                                          <div className="w-full border-t border-gray-300"/>
                                          <div className="flex items-center gap-2 w-full">
                                            <FileText className="w-5 h-5 text-gray-800"/>
                                            <a href="/2019GADAR.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                              Accomplishment Report 2019 (PDF)
                                              </a>
                                              </div>
                                            
                                    </div>
                                    ),
                                  },
                              {
                                key: '4-3',
                                label: (
                                  <div className="mx-4 text-lg font-bold">Agenda</div>
                                ),
                                children: (
                                  <div className="flex flex-col items-center gap-4 w-full">
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GADA2018.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                       GAD Agenda 2023 - 2028 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <FileText className="w-5 h-5 text-gray-800" />
                                      <a href="/GADA2023.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                      GAD Agenda 2018 - 2021 (PDF)
                                      </a>
                                      </div>
                                      </div>
                                    
                                    ),
                                  },  
                              {
                                key: '4-4',
                                label: (
                                  <div className="mx-4 text-lg font-bold">Advocacy Materials</div>
                                ),
                                children: (
                                <div className="flex flex-col items-center gap-4 w-full">
                                  <div className="flex items-center gap-2 w-full">
                                     <a href="https://pcw.gov.ph/faq-republic-act-7877-anti-sexual-harassment-act-of-1995/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-2 cursor-pointer">
                                              <Link className="w-4 h-4" />
                                              Republic Act 7877: Anti-Sexual Harassment Act of 1995 (Link)
                                    </a>
                                  </div>
                                  <div className="w-full border-t border-gray-300" />
                                  <div className="flex items-center gap-2 w-full">
                                    <a href="/RA-7877.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-2 cursor-pointer">
                                    <FileText className="w-4 h-4" />
                                      Republic Act 7877: Anti-Sexual Harassment Act of 1995 (PDF)
                                    </a>
                                  </div>
                                  <div className="w-full border-t border-gray-300" />
                                  <div className="flex items-center gap-2 w-full">
                                    <a href="https://pcw.gov.ph/faq-republic-act-9208/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-2 cursor-pointer">
                                      <Link className="w-4 h-4" />
                                      Republic Act 9208: Anti-Trafficking in Persons Act of 2003 (Link)
                                      </a>
                                   
                                  </div>
                                  <div className="w-full border-t border-gray-300" />
                                  <div className="flex items-center gap-2 w-full">
                                    <a href="https://pcw.gov.ph/faq-republic-act-9262/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-2 cursor-pointer">
                                    <Link className="w-4 h-4" />
                                    Republic Act 9262: Anti-Violence Against Women and their Children Act of 2004 (Link)
                                    </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <a href="/RA-9262.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-2 cursor-pointer">
                                        <FileText className="w-4 h-4" />
                                        Republic Act 9262: Anti-Violence Against Women and their Children Act of 2004 (PDF)
                                      </a>
                                    </div>
                                    <div className="w-full border-t border-gray-300" />
                                    <div className="flex items-center gap-2 w-full">
                                      <a href="https://pcw.gov.ph/faq-ra-8353-an-act-expanding-the-definition-of-crime-and-rape/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-2 cursor-pointer">
                                      <Link className="w-4 h-4" />
                                      Republic Act 8353: Anti-Rape Law of 1997 (Link)
                                      </a>
                                      </div>
                                      <div className="w-full border-t border-gray-300" />
                                      <div className="flex items-center gap-2 w-full">
                                      <a href="/RA-8353.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-2 cursor-pointer">
                                        <FileText className="w-4 h-4" />
                                        Republic Act 8353: Anti-Rape Law of 1997 (PDF)
                                        </a>
                                        </div>
                                  
                                </div>
                                ),
                              },
                              {
                                key: '4-5',
                                label: (
                                  <div className="mx-4 text-lg font-bold">Sex Disaggregated Data</div>
                                ),
                                children: (
                                  <Tabs
                                    defaultActiveKey="internal"
                                    items={[
                                      {
                                        key: 'internal',
                                        label: (
                                          <div className="text-lg font-bold mx-56">Internal</div>
                                        ),
                                        children: (
                                          <Tabs
                                            defaultActiveKey="capacity"
                                            items={[
                                              {
                                                key: 'capacity',
                                                label: (
                                                  <div className="text-lg font-bold mx-20">Capacity Development</div>
                                                ),
                                                children: (
                                                  <div className="flex flex-col gap-4">
                                                    <div className="flex items-center gap-2 mx-6 mt-4">
                                                      <FileText className="w-5 h-5 text-gray-800" />
                                                      <a href="/GFPS.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        GFPS (PDF)
                                                      </a>
                                                      </div>
                                                      <div className="w-full border-t border-gray-300" />
                                                      <div className="flex items-center gap-2 mx-6 mt-4">
                                                      <Images className="w-5 h-5 text-gray-800" />
                                                      <a href="/22-1.jpg" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        GFPS Training 2025 (Image)
                                                      </a>
                                                    </div>
                                                    <div className="w-full border-t border-gray-300" />
                                                    <div className="flex items-center gap-2 mx-6 mt-4">
                                                      <Images className="w-5 h-5 text-gray-800" />
                                                      <a href="/2024-CAP-DEV.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                      Capacity Development Of GFPS Members 2024 (Image)
                                                      </a>
                                                      </div>
                                                  </div>
                                                ),
                                              },
                                              {
                                                key: 'employee',
                                                label: (
                                                  <div className="text-lg font-bold mx-20">PolWD Employees</div>
                                                ),
                                                children: (
                                                  <div className="flex flex-col gap-4">
                                                    <div className="flex items-center gap-2 mx-6 mt-4">
                                                      <FileText className="w-5 h-5 text-gray-800" />
                                                      <a href="/Employee-SDD.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        Employee Profile (PDF)
                                                      </a>
                                                    </div>
                                                    <div className="w-full border-t border-gray-300" />
                                                    <div className="flex items-center gap-2 mx-6 mt-4">
                                                      <FileText className="w-5 h-5 text-gray-800" />
                                                      <a href="/EMPLOYEES.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        GAD Training Attended by Employees
                                                        </a>
                                                        </div>
                                                  </div>
                                                ),
                                              },
                                              {
                                                key: 'bod',
                                                label: (
                                                  <div className="text-lg font-bold mx-18">PolWD Board of Directors</div>
                                                ),
                                                children: (
                                                  <div className="flex flex-col gap-4">
                                                    <div className="flex gap-2 items-center mx-6 mt-4">
                                                    <Images className="w-5 h-5 text-gray-800" />
                                                      <a href="/24.jpg" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        Board of Directors 2025 (Image)
                                                      </a>
                                                      </div>
                                                      <div className="w-full border-t border-gray-300" />
                                                    <div className="flex items-center gap-2 mx-6 mt-4">
                                                      <Images className="w-5 h-5 text-gray-800" />
                                                      <a href="/BOD-SDD.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                      Board of Directors 2024 (Image)
                                                      </a>
                                                      </div>
                                                      <div className="w-full border-t border-gray-300" />
                                                      <div className="flex items-center gap-2 mx-6 mt-4">
                                                        <Images className="w-5 h-5 text-gray-800" />
                                                        <a href="/2023-BODs-and-Employees.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        Board of Directors 2023 (Images)
                                                        </a>
                                                        </div>
                                                        <div className="w-full border-t border-gray-300" />
                                                        <div className="flex items-center gap-2 mx-6 mt-4">
                                                          <Images className="w-5 h-5 text-gray-800" />
                                                          <a href="/2022-BODs-and-Employees.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                          Board of Directors 2022 (Images)
                                                          </a>
                                                          </div>

                                                      <div className="w-full border-t border-gray-300" />
                                                      <div className="flex items-center gap-2 mx-6 mt-4">
                                                        <FileText className="w-5 h-5 text-gray-800" />
                                                        <a href="/2021.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        Board of Directors 2021 (PDF)
                                                        </a>
                                                        </div>
                                                        <div className="w-full border-t border-gray-300" />
                                                        <div className="flex items-center gap-2 mx-6 mt-4">
                                                          <FileText className="w-5 h-5 text-gray-800" />
                                                          <a href="/2020 (1).pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                            Board of Directors 2020 (PDF)
                                                            </a>
                                                            </div>
                                                            <div className="w-full border-t border-gray-300" />
                                                            <div className="flex items-center gap-2 mx-6 mt-4">
                                                              <FileText className="w-5 h-5 text-gray-800" />
                                                              <a href="/2019 (1).pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                                Board of Directors 2019 (PDF)
                                                                </a>
                                                                </div>
                                                    </div>
                                                ),
                                              },
                                            ]}
                                          />
                                        ),
                                      },
                                      {
                                        key: 'external',
                                        label: (
                                          <div className="text-lg font-bold mx-56">External</div>
                                        ),
                                        children: (
                                          <Tabs
                                            defaultActiveKey="senior"
                                            items={[
                                              {
                                                key: 'senior',
                                                label: (
                                                  <div className="text-lg font-bold mx-48">Senior Citizen</div>
                                                ),
                                                children: (
                                                  <div className="flex flex-col gap-4">
                                                    <div className="flex items-center gap-2 mx-6 mt-4">
                                                      <Images className="w-5 h-5 text-gray-800" />
                                                      <a href="/2024-SC-Discount-and-SDD.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        Senior Citizen's Discount 2024 (Image)
                                                      </a>
                                                    </div>
                                                    <div className="w-full border-t border-gray-300" />
                                                    <div className="flex items-center gap-2 mx-6 mt-4">
                                                      <Images className="w-5 h-5 text-gray-800" />
                                                      <a href="/SCD-2015-2023.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        Senior Citizen's Discount 2015-2023 (Image)
                                                      </a>
                                                    </div>
                                                    <div className="w-full border-t border-gray-300" />
                                                    <div className="flex items-center gap-2 mx-6 mt-4">
                                                      <Images className="w-5 h-5 text-gray-800" />
                                                      <a href="/SR.-CITIZENS.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                      Senior Citizen's Discount 2015-2021 (Image)
                                                    </a>
                                                    </div>
                                                  </div>
                                                ),
                                              },
                                              {
                                                key: 'service',
                                                label: (
                                                  <div className="text-lg font-bold mx-48">Service Connections</div>
                                                ),
                                                children: (
                                                  <div className="flex flex-col gap-4">
                                                    <div className="flex items-center gap-2 mx-6 mt-4">
                                                      <Images className="w-5 h-5 text-gray-800" />
                                                      <a href="/2024-NSC" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        Installed Service Connections (2024)
                                                      </a>
                                                    </div>
                                                     <div className="w-full border-t border-gray-300" />
                                                      <div className="flex items-center gap-2 mx-6 mt-4">
                                                        <Images className="w-5 h-5 text-gray-800" />
                                                        <a href="/2023-NSC.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        Installed Service Connections (2023)
                                                        </a>
                                                        </div>
                                                        <div className="w-full border-t border-gray-300" />
                                                        <div className="flex items-center gap-2 mx-6 mt-4">
                                                        <Images className="w-5 h-5 text-gray-800" />
                                                        <a href="/2022-NSC.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                        Installed Service Connections (2022)
                                                        </a>
                                                        </div>
                                                        <div className="w-full border-t border-gray-300" />
                                                        <div className="flex items-center gap-2 mx-6 mt-4">
                                                          <Images className="w-5 h-5 text-gray-800" />
                                                          <a href="/2021-1.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                          Installed Service Connections (2021)
                                                          </a>
                                                          </div>
                                                          <div className="w-full border-t border-gray-300" />
                                                          <div className="flex items-center gap-2 mx-6 mt-4">
                                                            <Images className="w-5 h-5 text-gray-800" />
                                                            <a href="/2020-1.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                            Installed Service Connections (2020)
                                                            </a>
                                                            </div>
                                                            <div className="w-full border-t border-gray-300"/>
                                                            <div className="flex items-center gap-2 mx-6 mt-4">
                                                              <Images className="w-5 h-5 text-gray-800" />
                                                              <a href="/2019-1.pdf" target="_blank" rel="noopener noreeferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer">
                                                              Installed Service Connections (2019)
                                                              </a>
                                                              </div>
                                                        </div>
                                                ),
                                              },
                                            ]}
                                          />
                                        ),
                                      },
                                    ]}
                                  />
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
                      <div className="text-lg font-semibold">GAD Activities</div>
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
                                  <div className="mx-4 text-lg font-bold">Activities</div>
                                ),
                                children: (
                                  <div className="flex flex-col gap-4 mt-4">
                                    <div className="text-3xl font-bold text-center text-gray-800">Internal </div>
                                    <div className="grid grid-cols-3 gap-4 mx-6 mt-4">
                                      <img src="/MENTAL-HEALTH.png" alt="Mental Health" className="w-full h-auto" />
                                      <img src="/GENDER-ANALYSIS.png" alt="Gender Analysis" className="w-full h-auto" />
                                      <img src="/AGYE.png" alt="Annual GAD Yearend Evaluation" className="w-full h-auto" />
                                    </div>
                                    <div className="text-3xl font-bold text-center gap-4 mt-4 text-gray-800">External </div>
                                    <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                      <img src="/CSDD.png" alt="Collection of Sex Disaggregated Data" className="w-full h-auto"/>
                                      <img src="/COFGD.png" alt="Conduct of Focused Group Discussion" className="w-full h-auto"/>
                                    </div>
                                  </div>
                                ),
                              },
                              {
                                key: '5-2',
                                label: (
                                  <div className="mx-4 text-lg font-bold">Evaluations</div>
                                ),
                                children: (
                                  <div className="flex flex-col gap-4 mt-4">
                                    <div className="text-3xl font-bold text-center text-gray-800">2025 </div>
                                    <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                      <img src="/GYE2025.jpg" alt="GAD YearEnd Evaluation" className="w-full h-auto" />
                                      <img src="/GMYE2025.jpg" alt="GAD Mid-Year Evaluation" className="w-full h-auto" />
                                    </div>
                                    <div className="text-3xl font-bold text-center gap-4 mt-4 text-gray-800">2024 </div>
                                    <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                      <img src="/GYEE2024.jpg" alt="GAD YearEnd Evaluation" className="w-full h-auto"/>
                                      <img src="/GMYE2024.jpg" alt="GAD Mid-Year Evaluation" className="w-full h-auto"/>
                                    </div>
                                    <div className="text-3xl font-bold text-center gap-4 mt-4 text-gray-800">2023</div>
                                    <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                      <img src="/GYEE2023.jpg" alt="GAD YearEnd Evaluation" className="w-full h-auto"/>
                                      <img src="/GMYE2023.jpg" alt="GAD Mid-Year Evaluation" className="w-full h-auto"/>
                                    </div>
                                    <div className="text-3xl font-bold text-center gap-4 mt-4 text-gray-800">2022</div>
                                    <div className="items-center gap-4 mx-66 mt-4">
                                      <img src="/AGYE2022.png" alt="Annual GAD YearEnd Evaluation" className="w-181 h-auto"/>
                                    </div>
                                  </div>
                                ),
                              },
                              {
                                key: '5-3',
                                label: (
                                  <div className="mx-4 text-lg font-bold">Women's Month</div>
                                ),
                                children: (
                                  <>
                                    <div className="flex flex-col gap-4 mt-4">
                                      <div className="text-3xl font-bold text-center text-gray-800">2025 </div>
                                      <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                        <img src="/NWM2025.jpg" alt="National Women's Month Celebration" className="w-full h-auto" />
                                        <img src="/NWM2025-1.jpg" alt="Digital Literacy Awareness" className="w-full h-auto" />
                                        <img src="/NWM2025-2.jpg" alt="OSH and HIRAC" className="w-full h-auto" />
                                        <img src="/NWM2025-3.jpg" alt="Livelihood Skills" className="w-full h-auto" />
                                        <img src="/NWM2025-5.jpg" alt="Women's Day Celebration" className="w-full h-auto" />
                                        <img src="/NWM2025-6.jpg" alt="Mental Health On Work, Life and Balance" className="w-full h-auto"/>
                                      </div>
                                      <div className="items-center gap-4 mx-66 mt-4">
                                        <img src="/NWM2025-7.jpg" alt="Gender Sensitivity Training" className="w-181 h-auto" />
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-4 mt-4">
                                      <div className="text-3xl font-bold text-center text-gray-800">2024</div>
                                      <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                        <img src="/NWM2024.jpg" alt="National Women's Month Celebration" className="w-full h-auto"/>
                                        <img src="/NWM2024-1.jpg" alt="Kakayahan ng Kababaihan, Patutunayan!" className="w-full h-auto"/>
                                        <img src="/NWM2024-2.jpg" alt="Orientation to OSH and HIRAC" className="w-full h-auto"/>
                                        <img src="NWM2024-3.jpg" alt="Mobile Photography Contest" className="w-full h-auto"/>
                                        <img src="/NWM2024-4.jpg" alt="Women's Day Celebration" className="w-full h-auto"/>
                                        <img src="/NWM2024-5.jpg" alt="Women's Day Celebration-1" className="w-full h-auto"/>
                                        <img src="/NWM2024-6.jpg" alt="Distribution of Commemorative Item" className="w-full h-auto"/>
                                        <img src="/NWM2024-7.jpg" alt="Gender Sensitivity Training" className="w-full h-auto"/>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-4 mt-4">
                                      <div className="text-3xl font-bold text-center text-gray-800">2023</div>
                                      <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                        <img src="/NWM2023.jpg" alt="National Women's Month Celebration" className="w-full h-auto"/>
                                        <img src="/NWM2023-1.jpg" alt="Selebrayson para kay Juana" className="w-full h-auto"/>
                                        <img src="/NWM2023-2.jpg" alt="Health and Wellness Seminar" className="w-full h-auto"/>
                                        <img src="/NWM2023-3.jpg" alt="Stress Management and Mental Health Awareness" className="w-full h-auto"/>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-4 mt-4">
                                      <div className="text-3xl font-bold text-center text-gray-800">2022</div>
                                      <div className="items-center gap-4 mx-66 mt-4">
                                        <img src="/NWM2022.png" alt="National Women's Month Celebration" className="w-full h-auto"/>
                                      </div>
                                    </div>
                                  </>
                                ),
                              },
                              {
                                key: '5-4',
                                label: (
                                  <div className="mx-4 text-lg font-bold">18-Day Campaign to End VAW</div>
                                ),
                                children: (
                                  <div className="flex flex-col gap-4 mt-4">
                                    <div className="text-3xl font-bold text-center text-gray-800">2025 </div>
                                    <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                      <img src="/VAW2025.jpg" alt="18-Day Campaign to End VAW" className="w-full h-auto"/>
                                      <img src="/VAW2025-1.jpg" alt="Distribution" className="w-full h-auto"/>
                                      <img src="/VAW2025-2.jpg" alt="Anti-Sexual Harassment" className="w-full h-auto"/>
                                      <img src="/VAW2025-3.jpg" alt="Random Drug Testing" className="w-full h-auto"/>
                                    </div>
                                    <div className="text-3xl font-bold text-center text-gray-800">2024</div>
                                    <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                      <img src="/VAW2024.jpg" alt="Campaign to End VAW" className="w-full h-auto"/>
                                      <img src="/VAW2024-1.jpg" alt="Drug-Free Workplace Awareness Seminar" className="w-full h-auto"/>
                                      <img src="/VAW2024-2.jpg" alt="Random Drug Testing" className="w-full h-auto"/>
                                      <img src="/VAW2024-3.jpg" alt="Culmination" className="w-full h-auto"/>
                                    </div>
                                    <div className="text-3xl font-bold text-center text-gray-800">2023</div>
                                    <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                      <img src="/VAW2023.jpg" alt="Campaign to End VAW" className="w-full h-auto"/>
                                      <img src="/VAW2023-1.jpg" alt="18-Day Campaign to end VAW" className="w-full h-auto"/>
                                    </div>
                                    <div className="items-center gap-4 mx-36 mt-6">
                                      <img src="/VAW2023-2.jpg" alt="Awareness on VAW, SOGIE Bill, and Safe Spaces Act" className="w-full h-auto"/>
                                    </div>
                                    <div className="text-3xl font-bold text-center text-gray-800">2022</div>
                                    <div className="items-center gap-4 mx-36 mt-6">
                                      <img src="/VAW2022.png" alt="2022 18-Day Campaign to End VAW" className="w-full h-auto"/>
                                    </div>
                                  </div>
                                ),
                              },
                              {
                                key: '5-5',
                                label: (
                                  <div className="mx-4 text-lg font-bold">Mental Health Awareness</div>
                                ),
                                children: (
                                  <div className="text-3xl mt-4 font-bold text-center text-gray-800">
                                    2023
                                    <div className="items-center gap-4 mx-36 mt-6">
                                      <img src="/2023-SM-and-MHA.jpg" alt="2023 Stress Management and Mental Health Awareness" className="w-full h-auto"/>
                                    </div>
                                    <div className="items-center gap-4 mx-36 mt-6">
                                      <img src="/MENTAL-HEALTH-COVID-AWARENESS.png" alt="Mental Health and Covid Awareness" className="w-full h-auto"/>
                                    </div>
                                  </div>
                                ),
                              },
                    
                              {
                                key: '5-6',
                                label: (
                                  <div className="mx-4 text-lg font-bold">Gender Analysis</div>
                                ),
                                children: (
                                  <div className="items-center gap-4 mx-36 mt-6">
                                    <img src="/GENDER-ANALYSIS-1.png" alt="Gender Analysis" className="w-full h-auto"/>
                                  </div>
                                ),
                              },
                              {
                                key: '5-7',
                                label: (
                                  <div className="mx-4 text-lg font-bold">Conduct of Focused Group Discussion</div>
                                ),
                                children: (
                                  <div className="text-3xl font-bold text-center text-gray-800">2025
                                    <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                      <img src="/FGD2025.jpg" alt="Focused Group Discussion" className="w-full h-auto"/>
                                      <img src="/FGD2025-1.jpg" alt="Focused Group Discussion-1" className="w-full h-auto"/>
                                      <img src="/FGD2025-2.jpg" alt="Focused Group Discussion-2" className="w-full h-auto"/>
                                      <img src="/FGD2025-3.jpg" alt="Focused Group Discussion-3" className="w-full h-auto"/>
                                    </div>
                                    <div className="items-center gap-4 mx-36 mt-6">
                                      <img src="/FGD2025-4.jpg" alt="Focused Group Discussion-4" className="w-full h-auto"/>
                                    </div>
                                    <div className="text-3xl font-bold text-center mt-4 text-gray-800">2024
                                      <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                        <img src="/FGD2024.jpg" alt="Focused Group Discussion" className="w-full h-auto"/>
                                        <img src="/FGD2024-1.jpg" alt="Focused Group Discussion" className="w-full h-auto"/>
                                      </div>
                                    </div>
                                    <div className="text-3xl font-bold text-center mt-4 text-gray-800">2023
                                      <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
                                        <img src="/FGD2023.jpg" alt="Focused Group Discussion" className="w-full h-auto"/>
                                        <img src="/FGD2023-1.jpg" alt="Focused Group Discussion" className="w-full h-auto"/>
                                      </div>
                                    </div>
                                    <div className="text-3xl font-bold text-center mt-4 text-gray-800">2022
                                      <div className="items-center gap-4 mx-36 mt-6">
                                        <img src="/FGD2022.png" alt="Focused Group Discussion" className="w-full h-auto"/>
                                      </div>
                                    </div>
                                  </div>
                                ),
                              },
                              {
                              key: '5-8',
                                label: (
                                  <div className="mx-4 text-lg font-bold">Collection of Sex Disaggregated Data
                                  </div>
                                ),
                                children: (
                                  <div className="text-3xl font-bold text-center text-gray-800">2025
                                    <div className="items-center gap-4 mx-36 mt-6">
                                      <img src="/CSDD24-25.jpg" alt="Collections of SDD" className="w-full h-auto"/>
                                    </div>
                                    <div className="text-3xl font-bold text-center mt-4 text-gray-800">2024
                                      <div className="items-center gap-4 mx-36 mt-6">
                                        <img src="/CSDD24.jpg" alt="CSDD" className="w-full h-auto"/>
                                      </div>
                                    </div>
                                    <div className="text-3xl font-bold text-center mt-4 text-gray-800">2023
                                      <div className="items-center gap-4 mx-36 mt-6">
                                        <img src="/CSDD23.jpg" alt="CSDD" className="w-full h-auto"/>
                                      </div>
                                    </div>
                                    <div className="text-3xl font-bold text-center mt-4 text-gray-800">2022
                                      <div className="items-center gap-4 mx-36 mt-6">
                                        <img src="/CSDD22.png" alt="CSDD" className="w-full h-auto"/>
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
                    key: '6',
                    label: (
                      <div className="text-lg font-semibold">Health and Wellness Program</div>
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
                                  <div className="mx-4 text-lg font-bold">Health and Wellness Program Seminar</div>
                                ),
                                children: (
                                  <div className="text-3xl font-bold text-center text-gray-800">2023
                                    <div className="items-center gap-4 mx-36 mt-6">
                                      <img src="2023-H-and-W.jpg" alt="Health and Wellness" className="w-full h-auto"/>
                                    </div>
                                  </div>
                                ),
                              },
                              {
                                key: '6-2',
                                label: (
                                  <div className="text-lg font-bold text-center text-gray-800">Lung Cancer and Other Lung Diseases
                                  </div>
                                ),
                                children: (
                                  <div className="flex flex-col text-center font-semibold text-xl gap-4 mx-6 mt-6 mb-6">
                                    Education and information lecture of Dr. Japit Galagaran Jr. on lung cancer prevention and early detection with most women as secondhand smokers and other lung diseases.
                                    <div className="gap-4 mt-2 mb-2"></div>
                                    <img src="/cancer-awareness-campaign.jpg" alt="Lung Cancer and Other Lung Diseases" className="max-w-full h-auto" />
                                  </div>
                                ),
                              },
                              {
                                key: '6-3',
                                label: (
                                  <div className="text-lg font-bold text-center text-gray-800">Breast Cancer and Menopausal Management
                                  </div>
                                ),
                                children: (
                                  <div className="flex flex-col text-center font-semibold text-xl gap-4 mx-6 mt-6 mb-6">
                                    Dr. Rhodora Gagwis conducts Educational and Information lecture on breast cancer and menopausal management to Polomolok Water District employees.
                                    <div className="gap-4 mt-2 mb-2"></div>
                                    <img src="/breast-cancer.jpg" alt="Breast Cancer and Menopausal Management" className="max-w-full h-auto"/>
                                  </div>
                                ),
                              },
                              {
                                key: '6-4',
                                label: (
                                  <div className="text-lg font-bold text-center text-gray-800">Free Bone Density Test and Anemia Screening
                                  </div>
                                ),
                                children: (
                                  <div className="flex flex-col text-center font-semibold text-xl gap-4 mx-6 mt-6 mb-6">
                                    A technician from Bio Femme, Inc.,a subsidiary company of United Laboratories, Inc. takes a blood sample for a free bone density test.
                                    <div className="gap-4 mt-2 mb-2"></div>
                                    <img src="/bone-screening.jpg" alt="Bone Screening" className="max-w-full h-auto"/>
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
                      <div className="text-lg font-semibold">PIMME</div>
                    ),
                    children: (
                      <div className="text-3xl font-bold text-center mt-4 text-gray-800">
                        2024
                        <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
                          <img src="2024-PIMME.jpg" alt="PIMME 2024" className="max-w-full h-auto"/>
                          <img src="2024-PIMME-1.jpg" alt="PIMME 2024" className="max-w-full h-auto"/>
                        </div>
                      </div>
                    ),
                  }
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}