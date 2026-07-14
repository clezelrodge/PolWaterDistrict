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

                                        <img src="/PP24.jpg" alt="SPMS" className="max-w-full h-auto"/>

                                        <img src="/PP25.jpg" alt="SPMS" className="max-w-full h-auto"/>

                                        <img src="/PP26.jpg" alt="SPMS" className="max-w-full h-auto"/>

                                        <img src="/PP27.jpg" alt="SPMS" className="max-w-full h-auto"/>

                                        <img src="/PP28.jpg" alt="SPMS" className="max-w-full h-auto"/>

                                        <img src="/PP29.jpg" alt="SPMS" className="max-w-full h-auto"/>

                                        <img src="/PP30.jpg" alt="SPMS" className="max-w-full h-auto"/>

                                        <img src="/PP31.jpg" alt="SPMS" className="max-w-full h-auto"/>

                                        <img src="/PP32.jpg" alt="SPMS" className="max-w-full h-auto"/>

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

                    label:

                    (

                      <div className="text-lg font-semibold">Employee Discipline</div>

                    ),

                    children: (
                      <div className="mt-8 mb-6 px-4">
                        <Tabs
                          defaultActiveKey="8-1"
                          items={[
                            {
                              key: '8-1',
                              label: (
                                <div className="text-lg font-semibold">CODI</div>
                              ),
                              children: (
                                <div className="max-w-4xl mx-auto text-gray-800">
                                  <div className="text-center mb-8">
                                    <h3 className="text-xl font-bold mb-2">Republic of the Philippines</h3>
                                    <h3 className="text-xl font-bold mb-2">POLOMOLOK WATER DISTRICT</h3>
                                    <p className="text-lg">Polomolok, South Cotabato</p>
                                  </div>
                                  
                                  <h4 className="text-lg font-bold text-center mb-6">ADMINISTRATIVE DISCIPLINARY RULES ON SEXUAL HARASSMENT CASES FOR POLOMOLOK WATER DISTRICT</h4>
                                  
                                  <p className="mb-4">Pursuant to the provisions of Republic Act No. 7877, mandating every head of the agency in the public and private sectors to promulgate rules and regulations prescribing the procedure for the investigation of sexual harassment cases and the administrative sanctions therefore and enunciated under Civil Service Commission Resolution No. 01-0940, promulgating the Rules and Regulations defining the administrative offense of sexual harassment and prescribing the standard procedure for the administrative investigation, prosecution and resolution of sexual harassment in the public sector, an Administrative Disciplinary Rules on Sexual Harassment Cases is hereby established for Polomolok Water District (PolWD).</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE I. TITLE</h5>
                                  <p className="mb-4"><strong>Section 1.</strong> These Rules shall be known as PolWD-Administrative Disciplinary Rules on Sexual Harassment Cases.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE II. COVERAGE</h5>
                                  <p className="mb-4"><strong>Section 2.</strong> These Rules shall apply to all officials and employees of PolWD, whether in the Career or Non-Career service and holding any level of position, regardless of status.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE III. DEFINITION</h5>
                                  <p className="mb-4"><strong>Section 3.</strong> For the purpose of these Rules, the administrative offense of sexual harassment is an act, or series of acts, involving any unwelcome sexual advance, request or demand for a sexual favor, or other verbal or physical behavior or a sexual nature, committed by a government employee or official in a work-related environment of the person complained of.</p>
                                  
                                  <p className="mb-4">Work-related sexual harassment is committed under the following circumstances:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Submission to or rejection of the act or series of acts is used as a basis for any employment decision (including, but not limited to, matters related to hiring, promotion, raise in salary, job security, benefits and any other personnel action) affecting the applicant/employee; or</li>
                                    <li>The act or series of acts have the purpose or effect of interfering with the complainant's work performance, or creating an intimidating, hostile or offensive work environment; or</li>
                                    <li>The act or series of acts might reasonably be expected to cause discrimination, insecurity, discomfort, offense or humiliation to a complainant who may be a co-employee, applicant, customer, or ward of the person complained of.</li>
                                  </ul>
                                  
                                  <p className="mb-4"><strong>Section 4.</strong> Sexual harassment may take place:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>In the premises of the workplace of PolWD;</li>
                                    <li>In any place where the parties were found as a result of work or relations;</li>
                                    <li>While on official business outside the PolWD office or during work-related travel;</li>
                                    <li>At official conferences, fora, symposia or training sessions, or</li>
                                    <li>By telephone, cellular phone, fax machine or electronic mail.</li>
                                  </ul>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE IV. FORMS OF SEXUAL HARASSMENT</h5>
                                  <p className="mb-4"><strong>Section 5.</strong> The following are illustrative forms of sexual harassment:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li><strong>A. Physical</strong> - Malicious touching, Overt sexual advances, Gestures with lewd insinuation</li>
                                    <li><strong>B. Verbal</strong> - such as but not limited to, requests or demands for sexual favors, and lurid remarks</li>
                                    <li><strong>C. Use of objects</strong> - pictures or graphics, letters or written notes with sexual underpinnings</li>
                                    <li><strong>D. Other forms</strong> - analogous to the foregoing.</li>
                                  </ul>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE V. PERSONS LIABLE FOR SEXUAL HARASSMENT</h5>
                                  <p className="mb-4"><strong>Section 6.</strong> Any official or employee of PolWD, regardless of sex, is liable for sexual harassment when he/she:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Directly participates in the execution of any act of sexual harassment as defined by the Rules;</li>
                                    <li>Induces or directs another or others to commit sexual harassment as defined by these Rules;</li>
                                    <li>Cooperates in the commission of sexual harassment by another through an act without which the sexual harassment would not have been accomplished;</li>
                                    <li>Cooperates in the commission of sexual harassment by another through previous or simultaneous acts.</li>
                                  </ul>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE VI. COMMITTEE ON DECORUM AND INVESTIGATION OF SEXUAL HARASSMENT CASES</h5>
                                  <p className="mb-4"><strong>Section 7.</strong> A Committee on Decorum and Investigation (CODI) shall be created with the following functions:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Receive complaints of sexual harassment;</li>
                                    <li>Investigate sexual harassment complaints in accordance with the prescribed procedure;</li>
                                    <li>Submit a report of its findings with the corresponding recommendation to the disciplining authority for decision;</li>
                                    <li>Lead in the conduct of discussions about sexual harassment within the PolWD to increase understanding and prevent incidents of sexual harassment.</li>
                                  </ul>
                                  <p className="mb-4">When a member of the Committee is the complainant or the person complained of in a sexual harassment case, he/she shall be disqualified from being a member of the Committee.</p>
                                  
                                  <p className="mb-4"><strong>Section 8. Composition.</strong> In a work-related environment, PolWD-Committee on Decorum and investigation shall be composed of the following:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li><strong>Chairman</strong> – The General Manager or his/her authorized representative</li>
                                    <li><strong>Member</strong> – Personnel Officer or his/her authorized representative</li>
                                    <li><strong>Member</strong> – Administrative Division Manager or his/her authorized representative</li>
                                    <li><strong>Member</strong> – Representative from accredited union, (if any),</li>
                                    <li><strong>Members</strong> – Two (2) Rank-and-File Representatives, one for first level and another for second level, duly selected by the employees concerned.</li>
                                  </ul>
                                  
                                  <p className="mb-4"><strong>Section 9. Term of Office</strong> - The PolWD-Committee on Decorum and Investigations shall serve not more than two (2) years.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE VII. PRE-FILING STANDARD OPERATING PROCEDURES IN ATTENDING TO VICTIMS OF SEXUAL HARASSMENT</h5>
                                  <p className="mb-4"><strong>Section 10.</strong> The Pre-filing Stage – The PolWD may adopt mechanisms to provide assistance to an alleged victim of sexual harassment which may include counseling, referral to an agency offering professional help and advice on options available before the filing of the complaint.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE VIII. STANDARD OF PROCEDURAL REQUIREMENTS</h5>
                                  <p className="mb-4"><strong>Section 11.</strong> The procedural rules provided hereunder are the standard requirements in handling a sexual harassment case.</p>
                                  
                                  <p className="mb-4"><strong>Section 12.</strong></p>
                                  <ol className="list-decimal pl-6 mb-4 space-y-2">
                                    <li>The complaint may be filed at anytime with the disciplining authority of PolWD or with the Committee on Decorum and Investigation. Upon receipt of the complaint by the disciplining authority of the PolWD, the same shall be transmitted to the Committee on Decorum and Investigation, if there is any. In the absence of a Committee on Decorum and Investigation, the head of PolWD shall immediately cause the creation of a Committee on Decorum and Investigation in accordance with the law and rules and transmit the complaint to the Committee.</li>
                                    <li>The complaint must be in writing, signed and sworn to by the complainant. It shall contain the following:
                                      <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>The full name and address of the complainant;</li>
                                        <li>The full name, address and position of the respondent;</li>
                                        <li>A brief statement of the relevant facts;</li>
                                        <li>Evidence, in support of the complaint, if any;</li>
                                        <li>A certification of non-forum shopping.</li>
                                      </ul>
                                    </li>
                                  </ol>
                                  
                                  <p className="mb-4">In the absence of any one of the aforementioned requirements, the complaint shall be dismissed without prejudice to its refilling.</p>
                                  <p className="mb-4">Where the complaint is not under oath, the complainant shall be summoned by the Committee to swear to the truth of the allegations in the complaint.</p>
                                  <p className="mb-4">Complaints sent by telegram, radiogram, electronic mail or similar means of communications shall be considered non-filed unless the complainant shall comply with the requirements provided in Section 12 (b) within ten (10) days from receipt of the notice for compliance.</p>
                                  <p className="mb-4">Withdrawal of the complaint at any stage of the proceedings shall not preclude the Committee from proceeding with the investigation where there is obvious truth or merit to the allegations in the complaint or where there is documentary or direct evidence that can prove the guilt of the person complained of.</p>
                                  
                                  <p className="mb-4"><strong>Section 13. Action on the complaint.</strong> Upon receipt of a complaint that is sufficient in form and substance, the Committee on Decorum and Investigation shall require a person complained of to submit a Counter Affidavit/Comment under oath within three (3) days from receipt of the notice, furnishing a copy thereof to the complainant, otherwise the Counter-Affidavit/Comment shall be considered as not filed.</p>
                                  
                                  <p className="mb-4"><strong>Section 14. Preliminary Investigation.</strong> A preliminary investigation shall be conducted by the Committee on Decorum and Investigation. The investigation involves the ex parte examination of documents submitted by the complainant and the person complained of, as well as documents readily available from other government offices.</p>
                                  <p className="mb-4">During the preliminary investigation, the parties may submit affidavits and counter-affidavits.</p>
                                  <p className="mb-4">Upon receipt of the counter-affidavit or comment under oath, the Committee on Decorum and Investigation may now recommend whether a prima facie case exists to warrant the issuance of a formal charge.</p>
                                  <p className="mb-4">During the preliminary investigation, proceedings before the Committee on Decorum and Investigation shall be held under strict confidentiality.</p>
                                  
                                  <p className="mb-4"><strong>Section 15. Duration of the Investigation.</strong> A preliminary investigation shall commence not later than five (5) days from receipt of the complaint by the Committee on Decorum and Investigation and shall be terminated within fifteen (15) days working days thereafter.</p>
                                  
                                  <p className="mb-4"><strong>Section 16. Investigation Report.</strong> Within five (5) days working days from the termination of the preliminary investigation, the Committee on Decorum and Investigation shall submit the Investigation Report and the complete records of the case to the disciplining authority of PolWD.</p>
                                  
                                  <p className="mb-4"><strong>Section 17. Decision or Resolution After Preliminary Investigation.</strong> If a prima facie case is established during the investigation, a formal charge shall be issued by the disciplining authority of PolWD within three (3) working days from receipt of the Investigation Report.</p>
                                  <p className="mb-4">In the absence of prima facie case, the complaint shall be dismissed within the same period.</p>
                                  
                                  <p className="mb-4"><strong>Section 18. Formal Charge.</strong> After finding a prima facie case, the disciplining authority of PolWD shall formally charge the person complained of. The formal charge shall contain a specification of the charge(s), a brief statement of material facts, accompanied by certified true copies of the documentary evidence, if any, sworn statements covering the testimony of witnesses. A directive to answer the charge(s) in writing under oath in not less than seventy-two hours from receipt hereof, an advice for the respondent to indicate in his/her answer whether or not he/she elects a formal investigation of the charge(s), and a notice that he/she is entitled to be assisted by a counsel of his/her choice.</p>
                                  <p className="mb-4">If the respondent has submitted his/her comment and counter-affidavits during the preliminary investigation, he/she shall be given the opportunity to submit additional evidence.</p>
                                  <p className="mb-4">The Committee on Decorum and Investigation shall not entertain requests for clarifications, bills of particulars or motions to dismiss which are obviously designed to delay the administrative proceeding. If any of these pleadings is filed by the respondent, the same shall be considered as part of his/her answer which he/she may file within the remaining period for filing the answer.</p>
                                  
                                  <p className="mb-4"><strong>Section 19. Answer.</strong> The answer, which must be in writing and under oath, shall be specific and shall contain material facts and applicable laws, if any, including documentary evidence, sworn statements covering testimonies of witnesses. If there be any, in support of respondent's case, it shall also include a statement indicating whether he/she elects a formal investigation.</p>
                                  
                                  <p className="mb-4"><strong>Section 20. Failure to file an Answer.</strong> If the respondent fails or refuses to file his/her answer to the formal charge within seventy (72) hours from receipt thereof without justifiable cause, he/she shall be considered to have waived his right thereto and formal investigation may commence.</p>
                                  
                                  <p className="mb-4"><strong>Section 21. Preventive Suspension.</strong> Upon petition of the complainant or moto propio upon the recommendation of the Committee on Decorum and Investigation, at any time after the service of the Formal Charge to the respondent, the proper disciplining authority may order the preventive suspension of the respondent during the formal investigation, if there are reasons to believe that he/she is probably guilty of the charges which would warrant his/her removal from the service.</p>
                                  <p className="mb-4">An order of preventive suspension may be issued to temporarily remove the respondent from the scene of his/her misfeasance or malfeasance and to preclude the possibility of his/her exerting undue influence or pressure on the witnesses against him/her or tampering of documentary evidence on file with this office.</p>
                                  
                                  <p className="mb-4"><strong>Section 22. Duration of Preventive Suspension.</strong> When the administrative case against the respondent under preventive suspension is not finally decided by the disciplining authority within the period of ninety (90) days after the date of his/her preventive suspension, unless otherwise provided by special law, he/she shall be automatically reinstated into the service; provided that when the delay in the disposition of the case is due to the fault, negligence or petition of the respondent, the period of delay should not be included in the ninety (90) calendar days period of preventive suspension. Provided further that should the respondent be on paternity/maternity leave, said preventive suspension shall be deferred or interrupted until such time that said leave has been fully enjoyed.</p>
                                  
                                  <p className="mb-4"><strong>Section 23. Remedies from the Order of Preventive Suspension.</strong> The respondent may file a motion for reconsideration with the disciplining authority of PolWD or may elevate the same to the Civil Service Commission by way of an appeal within fifteen (15) days from receipt thereof.</p>
                                  
                                  <p className="mb-4"><strong>Section 24. Conduct of Formal Investigation.</strong> Although the respondent does not request a formal investigation, one shall nevertheless be conducted by the Committee on Decorum and Investigation if it deems such investigation is necessary to decide the case judiciously.</p>
                                  <p className="mb-4">The investigation shall be held not earlier than five (5) days and not later than ten (10) days from receipt of the respondent's answer. Said investigation shall be finished within thirty (30) days from the issuance of the formal charge or the receipt of the answer unless the disciplining authority, in meritorious cases, extends the period.</p>
                                  
                                  <p className="mb-4"><strong>Section 25. Pre-hearing Conference.</strong> At the commencement of the formal investigation, the Committee on Decorum and Investigation may conduct a pre-hearing conference for the parties to appear, consider and agree on any of the following:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Stipulation of facts;</li>
                                    <li>Simplification of issues;</li>
                                    <li>Identification and marking of evidence of the parties;</li>
                                    <li>Waiver of objections to admissibility of evidence;</li>
                                    <li>Limiting the number of witnesses and their names;</li>
                                    <li>Dates of subsequent hearings, and</li>
                                    <li>Such other matters as may aid in the prompt and just resolution of the case.</li>
                                  </ul>
                                  <p className="mb-4">The parties may submit position papers/memoranda and submit the case for resolution based on the result of the pre-hearing conference without any need for further hearing.</p>
                                  
                                  <p className="mb-4"><strong>Section 26. Continuous Hearing until terminated; Postponement.</strong> Hearings shall be conducted on the hearing dates set by the Committee on Decorum and Investigation or as agreed upon during the pre-hearing conference.</p>
                                  <p className="mb-4">Where no hearing conference is conducted, the parties, their counsel and witnesses, if any, shall be given a notice of at least five (5) days before the first scheduled hearing specifying the time, date and place of the hearing and subsequent hearings. Thereafter, the schedule of hearings previously set shall be strictly followed without further notice. A party shall be granted only three (3) postponements upon oral or written requests. A further postponement may be granted only upon written requests and subject to the discretion of the Committee on Decorum and Investigation.</p>
                                  <p className="mb-4">If the respondent fails to appear during the scheduled hearings despite due notice, the investigation shall proceed ex-parte and the respondent is deemed to have waived his right to be present and to submit evidence in his favor during those hearings.</p>
                                  
                                  <p className="mb-4"><strong>Section 27. Preliminary Matters.</strong> At the start of the hearing, the Committee on Decorum and Investigation shall note the appearances of the parties and shall proceed with the reception of evidence for the complainant.</p>
                                  <p className="mb-4">If the respondent appears without the aid of a counsel, he/she shall be deemed to have waived his/her right to counsel.</p>
                                  <p className="mb-4">Before taking the testimony of a witness, the Committee on Decorum and Investigation shall place him/her under oath and then take his/her name, address, civil status, age, and place or employment.</p>
                                  
                                  <p className="mb-4"><strong>Section 28. Appearance of Parties.</strong> Any person representing any of the parties before any hearing or investigation shall manifest orally or in writing his/her appearance for either the respondent or complainant, stating his/her full name and exact address where he/she can be served with notices and other documents. Any pleading or appearance made without complying with the above stated requirements shall not be recognized.</p>
                                  
                                  <p className="mb-4"><strong>Section 29. Order of Hearing.</strong> Unless the Committee on Decorum and Investigation directs otherwise, the order of hearing shall be as follows:</p>
                                  <ol className="list-decimal pl-6 mb-4 space-y-2">
                                    <li>The complainant shall present evidence in support of the charge;</li>
                                    <li>The respondent shall then offer evidence in support of his/her defense;</li>
                                    <li>The complainant may then offer rebuttal evidence, and the respondent, surrebuttal evidence.</li>
                                  </ol>
                                  <p className="mb-4">Every witness may be examined in the following order:</p>
                                  <ol className="list-decimal pl-6 mb-4 space-y-2">
                                    <li>Direct examination by the proponent;</li>
                                    <li>Cross-examination by the opponent;</li>
                                    <li>Re-direct examination by the proponent;</li>
                                    <li>Re-cross examination by the opponent.</li>
                                  </ol>
                                  <p className="mb-4">A sworn statement of a witness, properly identified and affirmed by the witness before the Committee on Decorum and Investigation shall constitute his/her direct testimony.</p>
                                  <p className="mb-4">When the presentation of evidence has been concluded, the parties shall formally offer their evidence either orally or in writing and thereafter objections thereto may also be made either orally or in writing. Therafter, both parties may be given time to submit their respective memorandum which in no case shall be beyond five (5) days after the termination of the investigation. Failure to submit the memorandum within the given period shall be considered a waiver thereof.</p>
                                  
                                  <p className="mb-4"><strong>Section 30. Objections.</strong> The Committee on Decorum and Investigation shall resolve all objections raised during the hearing. However, objections cannot be ruled upon by the Committee shall be noted with the information that the same shall be included in the memorandum of the concerned party to be ruled upon by the proper disciplining authority.</p>
                                  <p className="mb-4">The Committee on Decorum and Investigation shall accept all evidence deemed material and relevant to the case. In case of doubt, the Committee on Decorum and Investigation shall allow the admission of evidence subject to the objection interposed against its admission.</p>
                                  
                                  <p className="mb-4"><strong>Section 31. Markings.</strong> All documentary evidence or exhibits shall be properly marked by letters (A,B,C, etc.) if presented by the complainant and by numbers (1,2,3, etc.) if presented by the respondent. These shall form part of the complete records of the case.</p>
                                  
                                  <p className="mb-4"><strong>Section 32. Request for Subpoena.</strong> The Committee on Decorum and Investigation may issue a subpoena and testificandum to compel the attendance of witnesses and subpoena duces tecum for the production of documents or objects.</p>
                                  
                                  <p className="mb-4"><strong>Section 33. Records of Proceedings.</strong> The proceedings of the formal investigation must be recorded either through shorthand or stenotype or by any other method.</p>
                                  
                                  <p className="mb-4"><strong>Section 34. Effect of the Pendency of an Administrative Case.</strong> The pendency of any administrative case shall not disqualify the respondent for promotion or from claiming maternity/paternity benefits. For this purpose, an administrative case shall be construed as pending when the disciplining authority has issued a formal charge.</p>
                                  
                                  <p className="mb-4"><strong>Section 35. Formal Investigation Report.</strong> Within fifteen (15) days after the conclusion of the formal investigation, a report containing a narration of the material facts established during the investigation, the findings and the evidence supporting said findings, as well as the recommendations, shall be submitted by the Committee on Decorum and Investigation to the disciplining authority. The complete records of the case shall be attached to the Report of Investigation.</p>
                                  <p className="mb-4">The complete records shall be systematically and chronologically arranged, paged and securely bound to prevent loss. A table of contents shall be prepared. Whoever is in-charge of the transmittal of the complete records shall be held responsible for any loss or suppression of pages thereof.</p>
                                  
                                  <p className="mb-4"><strong>Section 36. When Case is Decided.</strong> The disciplining authority shall render his decision on the case within thirty (30) days from receipt of the Report of Investigation.</p>
                                  
                                  <p className="mb-4"><strong>Section 37. Finality of Decisions.</strong> A decision rendered by PolWD disciplining authority where a penalty of suspension for not more than thirty (30) days or a fine in an amount not exceeding thirty (30) days salary is imposed, shall be final and executory. However, if the penalty imposed is suspension exceeding thirty (30) days or a fine exceeding thirty (30) days salary, the same shall be final and executor after the lapse of the reglementary period for filing a motion for reconsideration or an appeal and no such pleading has been filed.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE IX. REMEDIES AFTER A DECISION</h5>
                                  <p className="mb-4"><strong>Section 38. Filing of Motion for Reconsideration.</strong> The party adversely affected by the decision may file a motion for reconsideration with the disciplining authority of PolWD who rendered the decision within fifteen (15) days from receipt thereof.</p>
                                  
                                  <p className="mb-4"><strong>Section 39. When Deemed Filed.</strong> A motion for reconsideration shall be deemed filed on the date stamped on the official copy by the proper receiving authority, and in case it was sent by mail, on the date shown by the postmark on the envelope which shall be attached to the records of the case.</p>
                                  
                                  <p className="mb-4"><strong>Section 40. Grounds for Motion for Reconsideration.</strong> The motion for reconsideration shall be based on any of the following:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>New evidence has been discovered which materially affects the decision rendered; or</li>
                                    <li>The decision is not supported by the evidence on record; or</li>
                                    <li>Errors of law or irregularities have been committed prejudicial to the interest of the movant.</li>
                                  </ul>
                                  
                                  <p className="mb-4"><strong>Section 41. Limitation.</strong> Only one motion for reconsideration shall be entertained.</p>
                                  
                                  <p className="mb-4"><strong>Section 42. Effect of Filing.</strong> The filing of a motion for reconsideration within the reglementary period of fifteen (15) days shall stay the execution of the decision sought to be reconsidered.</p>
                                  
                                  <p className="mb-4"><strong>Section 43. Filing of Appeals.</strong> Decisions of PolWD head of office imposing a penalty exceeding thirty (30) days suspension or fine in an amount exceeding thirty (30) days salary, may be appealed to the Commission Proper within a period of fifteen (15) days from receipt thereof.</p>
                                  <p className="mb-4">Pending appeal, the same shall be executor except where the penalty is removal, in which case the same shall be executor only after confirmation by the appellate authority concerned.</p>
                                  <p className="mb-4">A notice of appeal including the appeal memorandum shall be filed with the appellate authority, copy furnished the disciplining office. The latter shall submit the records of the case, which shall be systematically and chronologically arranged, paged and securely bound to prevent loss with its comment, within fifteen (15) days, to the appellate authority.</p>
                                  
                                  <p className="mb-4"><strong>Section 44. When Deemed Filed.</strong> An appeal sent by mail shall be deemed filed on the date shown by the postmark on the envelope which shall be attached to the records of the case and in case of personal delivery, the date stamped thereon by the proper office.</p>
                                  
                                  <p className="mb-4"><strong>Section 45. Appeal Fee.</strong> The appellant shall pay an appeal fee of Three Hundred Pesos (P300.00) and a copy of the receipt thereof shall be attached to the appeal.</p>
                                  
                                  <p className="mb-4"><strong>Section 46. Perfection of an Appeal.</strong> To perfect an appeal, the appellant shall within fifteen (15) days from receipt of the decision submit the following:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Notice of appeal which shall specifically state the date of the decision appealed from and the date of receipt thereof;</li>
                                    <li>Three (3) copies of appeal memorandum containing the grounds relied upon for the appeal, together with the certified true copy of the decision, resolution or order appealed from, and certified copies of the documents or evidence;</li>
                                    <li>Proof of service of a copy of the appeal memorandum to the disciplining office;</li>
                                    <li>Proof of payment of the appeal fee; and</li>
                                    <li>A statement or certification of non-forum shopping.</li>
                                  </ul>
                                  <p className="mb-4">Failure to comply with any of the above requirements within the reglementary period shall be construed as failure to perfect an appeal and shall cause its dismissal.</p>
                                  
                                  <p className="mb-4"><strong>Section 47. Effect of Filing.</strong> An appeal shall not stop the decision from being executory, and in case the penalty is suspension or removal, the respondent shall be considered as having under preventive suspension during the pendency of the appeal, in the event he wins the appeal.</p>
                                  
                                  <p className="mb-4"><strong>Section 48. When Case is Remanded for Violation of Respondent's Right to Due Process.</strong> If the case on appeal with the Commission Proper is remanded to the PolWD disciplining authority for further investigation, the PolWD disciplining authority through the Committee on Decorum and Investigation shall finish the investigation within three (3) calendar months from the date of receipt of records from the Commission, unless the investigation delayed due to the fault, negligence or petition of the person complained of, or an extension is granted by the Commission Proper in meritorious cases. The period of delay shall not be included in the computation of the prescribed period.</p>
                                  <p className="mb-4">Within fifteen (15) days from the submission of the investigation report to the PolWD disciplining authority, the PolWD disciplining authority shall render its decision. If at the end of the period, the disciplining authority fails to decide the case, the Commission Proper shall vacate and set aside the appealed decision and declare the person complained of exonerated of the charge. If the person complained of is under preventive suspension, he shall be immediately reinstated.</p>
                                  
                                  <p className="mb-4"><strong>Section 49. Petition for Review.</strong> A complainant may elevate the decision of the PolWD disciplining authority dismissing a complaint for lack of a prima facie case before the Commission Proper through a Petition for Review within fifteen (15) days from the receipt of said decision.</p>
                                  
                                  <p className="mb-4"><strong>Section 50. Petition for Review with the Court of Appeals.</strong> A party may elevate a decision of the Commission before the Court of Appeals by way of Petition for Review under Rule 43 of the 1997 Revised Rules of Court.</p>
                                  
                                  <p className="mb-4"><strong>Section 51. Petition for Certiorari.</strong> When the PolWD disciplining authority has acted without or in excess of jurisdiction, or with grave abuse of discretion amounting to lack or excess of jurisdiction and there is no appeal, nor any plain, speedy and adequate remedy in the ordinary course of law, a person aggrieved thereby may file a verified petition for certiorari in the proper court under Rule 65 of the Rules of Court.</p>
                                  
                                  <p className="mb-4"><strong>Section 52.</strong> Sexual Harassment is classified as grave, less grave and light offenses.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE X. CLASSIFICATION OF ACTS OF SEXUAL HARASSMENT</h5>
                                  <p className="mb-4"><strong>A. Grave Offenses</strong> shall include but are not limited to:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Unwanted touching of private parts of the body (genitalia, buttocks, and breast);</li>
                                    <li>Sexual assault;</li>
                                    <li>Malicious touching;</li>
                                    <li>Requesting for sexual favor in exchange for employment, promotion, local or foreign travels, favorable working conditions or assignments, or the grant of benefits or payment of a stipend or allowance; and</li>
                                    <li>Other analogous cases</li>
                                  </ul>
                                  
                                  <p className="mb-4"><strong>B. Less Grave Offenses</strong> shall include but are not limited to:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Unwanted touching or brushing against a victim's body;</li>
                                    <li>Pinching not falling under grave offenses;</li>
                                    <li>Derogatory or degrading remarks or innuendos directed toward the members of one's sex or one's sexual orientation or used to describe a person;</li>
                                    <li>Verbal abuse or threats with sexual overtones; and</li>
                                    <li>Other analogous cases</li>
                                  </ul>
                                  
                                  <p className="mb-4"><strong>C. The following shall be considered Light Offenses:</strong></p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Surreptitiously looking or stealing a look at a person's private part or worn undergarments;</li>
                                    <li>Telling sexist/smutty jokes or sending these through text, electronic mail or other similar means, causing embarrassment or offense and carried out after the offender has been advised that they are offensive or embarrassing, or even without such advise, when they are, by their nature, clearly embarrassing, offensive or vulgar;</li>
                                    <li>Malicious leering or ogling;</li>
                                    <li>The display of sexually offensive pictures, materials or graffiti;</li>
                                    <li>Unwelcome inquiries or comments about a person's sexual life;</li>
                                    <li>Unwelcome sexual flirtation, advances or propositions;</li>
                                    <li>Making offensive hand or body gestures at an employee;</li>
                                    <li>Persistent unwanted attention with sexual overtones;</li>
                                    <li>Unwelcome phone calls with sexual overtones causing discomfort, embarrassment, offense or insult to the receiver; and</li>
                                    <li>Other analogous cases</li>
                                  </ul>
                                  
                                  <p className="mb-4"><strong>Section 54.</strong> Any person who is found guilty of sexual harassment shall, after the investigation, be meted the penalty corresponding to the gravity and seriousness of the offense.</p>
                                  <p className="mb-4"><strong>Section 53.</strong> The PolWD head of office who fails to act within fifteen (15) days from receipt of any complaint for sexual harassment properly filed against any employee in that office shall be charged with neglect of duty.</p>
                                  <p className="mb-4"><strong>Section 55.</strong> The penalties for light, less grave, and grave offenses are as follows:</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE XI. ADMINISTRATIVE LIABILITIES</h5>
                                  <p className="mb-4"><strong>A. For light offenses:</strong></p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>1st offense – Reprimand</li>
                                    <li>2nd offense – Fine or suspension not exceeding thirty (30) days</li>
                                    <li>3rd offense – Dismissal</li>
                                  </ul>
                                  
                                  <p className="mb-4"><strong>B. For less grave offenses:</strong></p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>1st offense – Fine or suspension not less than thirty (30) days and not exceeding six (6) months</li>
                                    <li>2nd offense – Dismissal</li>
                                  </ul>
                                  
                                  <p className="mb-4"><strong>C. For grave offenses:</strong></p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>1st offense – Dismissal</li>
                                  </ul>
                                  
                                  <p className="mb-4"><strong>Section 56.</strong> If the respondent is found guilty of two or more charges or counts, the penalty to be imposed should be that corresponding to the most serious charge or count and the rest shall be considered as aggravating circumstances.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE XII. RESPONSIBILITY</h5>
                                  <p className="mb-4"><strong>Section 57.</strong> The PolWD shall be responsible for the submission of an authenticated copy of this rules and regulations on sexual harassment to the Commission for approval within one (1) month from the date of promulgation including the submission to the Commission of the list of members of PolWD Committee on Decorum and Investigation immediately after its composition.</p>
                                  
                                  <p className="mb-4"><strong>Section 58.</strong> The PolWD shall develop an education and training program for its officials and employees and the members of Committee on Decorum and Investigation to increase understanding about sexual harassment, prevent its occurrence, and ensure proper investigation, prosecution and resolution of sexual harassment cases.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">RULE XIII. EFFECTIVITY</h5>
                                  <p className="mb-4">This PolWD Administrative Disciplinary Rules on Sexual Harassment Cases shall take effect upon its approval by the Civil Service Commission. Any subsequent changes in or amendments thereto shall be subjected to the approval of the Civil Service Commission and shall not take effect until six (6) months from the date of approval.</p>
                                  
                                  <div className="mt-12 mb-8">
                                    <p className="font-bold text-center mb-8">Approved by:</p>
                                    <div className="text-center mb-12">
                                      <p className="font-bold">ENGR. SOLITO T. TORCUATOR</p>
                                      <p>General Manager</p>
                                    </div>
                                    
                                    <p className="font-bold text-center mb-4">REVIEWED AND APPROVED BY: CIVIL SERVICE COMMISSION</p>
                                    <div className="text-center">
                                      <p className="font-bold">GRACE R. BELGADO-SAQUETON, CPA</p>
                                      <p>Director IV</p>
                                      <p className="mt-4">_______________</p>
                                      <p>Date</p>
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                            {
                              key: '8-2',
                              label: (
                                <div className="text-lg font-semibold">Grievance</div>
                              ),
                              children: (
                                <div className="max-w-4xl mx-auto text-gray-800">
                                  <h4 className="text-lg font-bold text-center mb-6">GRIEVANCE MACHINERY</h4>
                                  
                                  <p className="mb-4">In line with the Revised Policies on the Settlement of Grievance in the Public Sector contained in CSC Resolution No. 010113, dated January 10, 2001 and implemented through CSC Memorandum Circular No. 02, S. 2001, the Polomolok Water District hereby adopts the herein Grievance Machinery.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">BASIC POLICIES</h5>
                                  <ol className="list-decimal pl-6 mb-4 space-y-2">
                                    <li>A grievance shall be resolved expeditiously at all times at the lowest level possible in the agency. However, if not settled at the lowest level possible, an aggrieved party shall present his or her grievance step by step following the hierarchy of positions.</li>
                                    <li>All agencies shall establish a grievance machinery that is the best way to address grievance between or among government officials and employees.</li>
                                    <li>The aggrieved party shall be assured freedom from coercion, discrimination, reprisal and biased action on the grievance.</li>
                                    <li>Grievance proceedings shall not be bound by legal rules and technicalities. Even verbal grievance must be acted upon expeditiously. The services of a legal counsel shall not be allowed.</li>
                                    <li>A grievance shall be presented verbally or in writing in the first instance by the aggrieved party to his or her immediate supervisor. The latter shall, within three (3) working days from the date of presentation, inform verbally the aggrieved party of the corresponding action.</li>
                                    <li>If the party being complained of is the immediate supervisor, the grievance shall be presented to the next higher supervisor.</li>
                                    <li>Grievance refers to work related issues giving rise to employee dissatisfaction. The following cases shall be acted upon through the grievance machinery:
                                      <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Non-implementation of policies, practices and procedures on economic and financial issues and other terms and conditions of employment fixed by law including salaries, incentives, working hours, leave benefits, and other related terms and conditions;</li>
                                        <li>Non-implementation of policies, practices and procedures which affect employees from recruitment to promotion, detail, transfer, retirement, termination, lay-offs, and other related issues that affect them;</li>
                                        <li>Physical working conditions;</li>
                                        <li>Interpersonal relationships and linkages;</li>
                                        <li>Protest on appointments; and</li>
                                        <li>All other matters giving rise to employee dissatisfaction and discontentment outside of those cases enumerated in Item No.6.</li>
                                      </ul>
                                    </li>
                                    <li>The following cases shall not be acted upon through the grievance machinery:
                                      <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Disciplinary cases which shall be resolved pursuant to the Uniform Rules on Administrative Cases;</li>
                                        <li>Sexual harassment cases as provided for in RA 7877; and</li>
                                        <li>Union-related issues and concerns.</li>
                                      </ul>
                                    </li>
                                    <li>Only permanent officials and employees, whenever applicable, shall be appointed or elected as members of the grievance committee.</li>
                                    <li>In the appointment or election of the committee members, their integrity, probity, sincerity and credibility shall be considered.</li>
                                    <li>Agencies with regional offices shall establish separate grievance committees in their head and regional offices. For the Local Water District, the Grievance Committee shall be composed of the following:
                                      <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>One Member of top management or a representative to act as Chairman</li>
                                        <li>Two higher supervisors chosen from among themselves</li>
                                        <li>Two (2) members of the rank-and-file who shall serve for a term of two (2) years and chosen through a general assembly or any other mode of selection to be conducted for the purpose; one from the first level and another from the second level.</li>
                                        <li>The Bilis Aksyon Partner (BAP) duly designated.</li>
                                      </ul>
                                    </li>
                                    <li>The agency head shall ensure equal opportunity for men and women to be represented in the grievance committee.</li>
                                    <li>The agency grievance committee shall develop and implement pro-active measures that would prevent grievance, such as employee assembly which shall be conducted at least once every quarter, "talakayan", counseling, HRD interventions and other similar activities.</li>
                                    <li>The personnel unit, in collaboration with the agency grievance committee, shall conduct continuing information drive on grievance machinery among its officials and employees.</li>
                                    <li>The grievance committee may conduct an inquiry and hearing within ten (10) working days from receipt of the grievance and render a decision within five (5) working days after the investigation. Provided, however, that when the object of the grievance is the grievance committee, the aggrieved party may submit the grievance to the top management.</li>
                                    <li>A grievance may be elevated to the Civil Service Commission Regional Office concerned only upon submission of the Certification on the Final Action on the Grievance (CFAG) issued by the grievance committee. The CFAG shall contain, among other things, the following information: history and final action taken by the agency on the grievance.</li>
                                    <li>The personnel unit of the agency shall extend secretariat services to the grievance committee.</li>
                                    <li>The grievance committee shall establish its own internal procedures and strategies. Membership in the grievance committee shall be considered part of the members' regular duties.</li>
                                    <li>The grievance committee shall submit a quarterly report of the accomplishments and status of unresolved grievances to the Civil Service Commission Regional Office.</li>
                                    <li>Supervisors or officials who refuse to take action on a grievance brought to their attention shall be liable for neglect of duty in accordance with existing civil service law, rules and regulations.</li>
                                    <li>The agency grievance machinery shall be submitted to the Civil Service Commission Regional Office concerned for approval. Subsequent amendments shall be subject to CSC approval and shall take effect immediately.</li>
                                  </ol>
                                  
                                  <h5 className="font-bold mt-6 mb-2">I. OBJECTIVES</h5>
                                  <p className="mb-4"><strong>General</strong></p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Create a work atmosphere conducive to good supervisor-employee relations and improved employee morale.</li>
                                  </ul>
                                  
                                  <p className="mb-4"><strong>Specific</strong></p>
                                  <ol className="list-decimal pl-6 mb-4 space-y-2">
                                    <li>Activate and strengthen agency's existing grievance machinery;</li>
                                    <li>Settle grievances at the lowest possible level in the organization; and</li>
                                    <li>Serve as a catalyst for the development of capabilities of personnel on dispute settlement, especially among supervisors in the agency.</li>
                                  </ol>
                                  
                                  <h5 className="font-bold mt-6 mb-2">III. SCOPE</h5>
                                  <p className="mb-4">The Grievance Machinery applies to all levels of officials and employees in the agency. It may also apply to non-career employees whenever applicable.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">IV. DEFINITION OF TERMS</h5>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li><strong>Accredited or Recognized Employee Union</strong> – an employee union accredited pursuant to Executive Order No. 180 and its implementing rules and regulations.</li>
                                    <li><strong>Bilis Aksyon Partner</strong> – is the counterpart Action Officer of the Civil Service Commission under the Mamamayan Muna Program in every agency pursuant to CSC MC No. 3, s. 1994.</li>
                                    <li><strong>Grievance</strong> – a work-related discontentment or dissatisfaction which had been expressed verbally or in writing and which, in the aggrieved employee's opinion, has been ignored or dropped without due consideration.</li>
                                    <li><strong>Grievance Machinery</strong> – a system or method of determining and finding the best way to address the specific cause or causes of a grievance.</li>
                                    <li><strong>Public Sector Labor-Management Council (PSLMC)</strong> – the Council responsible for the promulgation, implementation and administration of the guidelines for the exercise of the right of government employees to organize pursuant to Executive Order No. 180.</li>
                                    <li><strong>Aggrieved Party</strong> – the person who presents verbally or in writing the grievance</li>
                                    <li><strong>Object of the Grievance</strong> – the person being complained of</li>
                                  </ul>
                                  
                                  <h5 className="font-bold mt-6 mb-2">V. APPLICATION OF GRIEVANCE MACHINERY</h5>
                                  <p className="mb-4">The following instances shall be acted upon through the grievance machinery:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Non-implementation of policies, practices and procedures on economic and financial issues and other terms and conditions of employment fixed by law, including salaries, incentives, working hours, leave benefits such as delay in the processing of overtime pay, unreasonable withholding of salaries and inaction on application for leave;</li>
                                    <li>Non-implementation of policies, practices and procedures which affect employees from recruitment to promotion, detail, transfer, retirement, termination, lay-offs, and other related issues that affect them, such as failure to observe selection process in appointment, and undue delay in the processing of retirement papers;</li>
                                    <li>Inadequate physical working conditions such as lack of proper ventilation in the workplace and insufficient facilities and equipment necessary for the safety and protection of employees whose nature and place of work are classified as high risk or hazardous;</li>
                                    <li>Poor interpersonal relationships and linkages such as unreasonable refusal to give official information by one employee to another;</li>
                                    <li>Protest on appointments; and</li>
                                    <li>All other matters giving rise to employee dissatisfaction and discontentment outside of those cases enumerated above.</li>
                                  </ul>
                                  
                                  <p className="mb-4">The following cases shall not be acted upon through the grievance machinery:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Disciplinary cases which shall be resolved pursuant to the Uniform Rules on Administrative Cases;</li>
                                    <li>Sexual harassment cases as provided for in RA 7877 ; and</li>
                                    <li>Union-related issues and concerns.</li>
                                  </ul>
                                  
                                  <h5 className="font-bold mt-6 mb-2">VI. GRIEVANCE PROCEDURES</h5>
                                  <p className="mb-4">The procedures for seeking redress of grievances shall be as follows:</p>
                                  
                                  <p className="mb-4"><strong>Discussion with Immediate Supervisor.</strong> At the first instance, a grievance shall be represented verbally or in writing by the aggrieved party to his or her immediate supervisor. The supervisor shall inform the aggrieved party of the corresponding action within three (3) working days from the date of presentation.</p>
                                  <p className="mb-4">Provided, however, that where the object of the grievance is the immediate supervisor, the aggrieved party may bring the grievance to the next higher supervisor.</p>
                                  
                                  <p className="mb-4"><strong>Appeal to the Higher Supervisor.</strong> If the aggrieved party is not satisfied with the verbal decision, he or she may submit the grievance in writing, within five (5) days to the next higher supervisor who shall render his or her decision within five (5) working days from receipt of the grievance.</p>
                                  
                                  <p className="mb-4"><strong>Appeal to the Grievance Committee.</strong> The decision of the next higher supervisor may be elevated to the grievance committee within five (5) working days from receipt of the decision of the next higher supervisor.</p>
                                  <p className="mb-4">The grievance committee may conduct an investigation and hearing within ten (10) working days from receipt of the grievance and render a decision within five (5) working days after the investigation. Provided, however, that where the object of the grievance is the grievance committee, the aggrieved party may submit the grievance to top management.</p>
                                  
                                  <p className="mb-4"><strong>Appeal to Top Management.</strong> If the aggrieved party is not satisfied with the decision of the grievance committee, he or she may elevate his or her grievance within five (5) working days from receipt of the decision through the committee to top management who shall make the decision within ten (10) working days after the receipt of the grievance. Provided, however, that where the object of the grievance is the top management, the aggrieved party may bring his or her grievance directly to the Civil Service Commission Regional Office.</p>
                                  
                                  <p className="mb-4"><strong>Appeal to the Civil Service Commission Regional Office.</strong> If the aggrieved party is not satisfied with the decision of top management, he or she may appeal or elevate his or her grievance to the Civil Service Commission Regional Office concerned within fifteen (15) working days from the receipt of such decision. Together with the appeal, the aggrieved party shall submit a Certification on the Final Action on the Grievance (CFAG). The Civil Service Commission Regional Office shall rule on the appeal in accordance with existing civil service law, rules and regulations.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">VII. GRIEVANCE COMMITTEE</h5>
                                  <p className="mb-4">Agencies with regional offices shall establish separate grievance committees in their head and regional offices. The composition and responsibilities are as follows:</p>
                                  
                                  <p className="mb-4"><strong>Composition</strong></p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Only permanent officials and employees, whenever applicable, shall be appointed or elected as members of the grievance committee.</li>
                                    <li>In the appointment or election of the committee members, their integrity, probity, sincerity and credibility shall be considered.</li>
                                    <li>The agency head shall ensure equal opportunity for men and women to be represented in the grievance committee.</li>
                                    <li>One Member of top management or a representative to act as Chairman</li>
                                    <li>Two higher supervisors chosen from among themselves</li>
                                    <li>Two (2) members of the rank-and-file who shall serve for a term of two (2) years and chosen through a general assembly or any other mode of selection to be conducted for the purpose; one from the first level and another from the second level.</li>
                                    <li>The Bilis Aksyon Partner (BAP) duly designated.</li>
                                    <li>The personnel unit of the agency shall extend secretariat services to the grievance committee.</li>
                                  </ul>
                                  
                                  <p className="mb-4"><strong>Responsibilities</strong></p>
                                  <p className="mb-4">In addition to finding the best way to address specific grievance, the committee shall have the following responsibilities:</p>
                                  <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Establish its own internal procedures and strategies. Membership in the grievance committee shall be considered part of the members' regular duties;</li>
                                    <li>Develop and implement pro-active measures or activities to prevent grievance such as employee assembly which shall be conducted at least once every quarter, "talakayan", counseling and other HRD interventions. Minutes of the proceedings of these activities shall be documented for audit purposes;</li>
                                    <li>Conduct continuing information drive on Grievance Machinery among officials and employees in collaboration with the personnel unit;</li>
                                    <li>Conduct dialogue between and among the parties involved;</li>
                                    <li>Conduct an inquiry and hearing within ten (10) working days from receipt of the grievance and render a decision within five (5) working days after the inquiry. Provided, however, that where the object of the grievance is the grievance committee, the aggrieved party may submit the grievance to top management;</li>
                                    <li>Direct the documentation of the grievance including the preparation and signing of written agreements reached by the parties involved;</li>
                                    <li>Issue Certification on the Final Action on the Grievance (CFAG) which shall contain, among other things, the following information: history and final action taken by the agency on the grievance;</li>
                                    <li>Submit a quarterly report of its accomplishments and status of unresolved grievances to the Civil Service Commission Regional Office concerned.</li>
                                  </ul>
                                  
                                  <h5 className="font-bold mt-6 mb-2">VII. GRIEVANCE FORMS</h5>
                                  <p className="mb-4">The following forms shall be used:</p>
                                  
                                  <p className="mb-4"><strong>1. Grievance Form</strong></p>
                                  <div className="bg-gray-100 p-4 mb-4 rounded">
                                    <p className="font-bold text-center mb-4">GRIEVANCE FORM</p>
                                    <p className="mb-2">_______________ (Date Filed)</p>
                                    <p className="mb-2">____________________ Name of Aggrieved Party ________________________</p>
                                    <p className="mb-2">Section/Division/Office</p>
                                    <p className="mb-2">___________________________ Position Title/Designation (if any) ______________________________</p>
                                    <p className="mb-2">Aggrieved Party's Higher Supervisor</p>
                                    <p className="mb-2">Nature/Subject of Grievance:</p>
                                    <p className="mb-2">__________________________________</p>
                                    <p className="mb-2">__________________________________</p>
                                    <p className="mb-2">Action Desired</p>
                                    <p className="mb-2">__________________________________</p>
                                    <p className="mb-2">__________________________________</p>
                                    <p className="mb-2">_____________________ Signature of Aggrieved Party</p>
                                  </div>
                                  
                                  <p className="mb-4"><strong>2. Grievance Agreement Form</strong></p>
                                  <div className="bg-gray-100 p-4 mb-4 rounded">
                                    <p className="font-bold text-center mb-4">GRIEVANCE AGREEMENT FORM</p>
                                    <p className="mb-2">Name of Parties to a Grievance _____________________________________</p>
                                    <p className="mb-2">Nature of the Grievance _____________________________________</p>
                                    <p className="mb-2">Steps Toward Settlement _____________________________________</p>
                                    <p className="mb-2">Agreement/s Reached</p>
                                    <p className="mb-2">_______________________________________________________________</p>
                                    <p className="mb-2">_______________________________________________________________</p>
                                    <p className="mb-4">We promised to abide by the above-stated agreement.</p>
                                    <p className="mb-2">_____________________ Aggrieved Party ________________________ Subject of Grievance</p>
                                    <p className="mb-2">___________________________ Chairman-Grievance Committee</p>
                                    <p className="mb-2">__________ Date</p>
                                  </div>
                                  
                                  <p className="mb-4"><strong>3. Certificate of Final Action on the Grievance</strong></p>
                                  <div className="bg-gray-100 p-4 mb-4 rounded">
                                    <p className="font-bold text-center mb-4">CERTIFICATE OF FINAL ACTION ON THE GRIEVANCE</p>
                                    <p className="mb-2">This certifies that the grievance filed by ____________________________________ (Aggrieved Party)</p>
                                    <p className="mb-2">on ________________ has been acted upon by this Committee on _______________.</p>
                                    <p className="mb-2">Final Action Taken: _________________________________</p>
                                    <p className="mb-2">_________________ Chairman Grievance Committee</p>
                                    <p className="mb-2">Date ___________</p>
                                  </div>
                                  
                                  <h5 className="font-bold mt-6 mb-2">IX. EFFECTIVITY</h5>
                                  <p className="mb-4">This Grievance Machinery shall take effect immediately upon approval by the Civil Service Commission Regional Office concerned.</p>
                                  
                                  <h5 className="font-bold mt-6 mb-2">X. COMMITMENT</h5>
                                  <p className="mb-4">I hereby commit to implement the provisions of this Grievance Machinery and take necessary action in accordance with existing civil service law and rules against supervisors or officials who refuse to act on a grievance brought before their attention.</p>
                                  
                                  <div className="mt-12 mb-8">
                                    <div className="text-center mb-8">
                                      <p className="font-bold">________________________</p>
                                      <p>HILARION P. VISANDE, JR.</p>
                                      <p>General Manager E</p>
                                      <p className="mt-4">________________________</p>
                                      <p>Date</p>
                                    </div>
                                    
                                    <p className="font-bold text-center mb-4">CSC Action:</p>
                                    <p className="mb-4">I have evaluated the herein agency Grievance Machinery and found it to be in accordance with the provision of CSC MC 02, s. 2001 and may now be implemented.</p>
                                    
                                    <div className="text-center">
                                      <p className="font-bold">_____________________</p>
                                      <p>ELMER R. BARTOLATA</p>
                                      <p>CSC Regional Director</p>
                                      <p className="mt-4">_____________________</p>
                                      <p>Date</p>
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                          ]}
                        />
                      </div>
                    )

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