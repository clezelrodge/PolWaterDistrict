import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Card, CardContent } from '@/components/ui/card';

import { Collapse, Panel, AccordionItem } from '@/components/ui/Accordion';

import { Divider } from '@/components/ui/divider';

import { Link as LinkIcon, FileText } from 'lucide-react';

import { Dot as Dot } from 'lucide-react';



const HistoryAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (

    <div className="max-w-2xl mx-auto ">

      <h2 className="text-3xl text-blue-800 text-center font-bold mb-4">History</h2>

      

      <AccordionItem header={<span className="text-xl">1980</span>} isOpen={openIndex === 0} onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}>
        <p className="text-lg text-justify text-gray-700">On October 9, the Polomolok Water District was came into as an independent entity under the aegis of the late Hon. Mayor Saturnino Calulo by virtue of Sangguniang Bayan Res. No. 63 with Hilarion P. Visande, Jr. as its 1st General Manager.</p>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">1981</span>} isOpen={openIndex === 1} onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}>
        <p className="text-lg text-justify text-gray-700">The Local Water Utilities Administration (LWUA) issued Conditional Certificate of Conformance (CCC) No. 153 on June 19, 1981. This entitled the Polomolok Water District to all rights and privileges authorized under Presidential Decree 198 as amended.</p>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">1982</span>} isOpen={openIndex === 2} onToggle={() => setOpenIndex(openIndex === 2 ? null : 2)}>
        <p className="text-lg text-justify text-gray-700">Polomolok Water District (PolWD) availed a mini loan of P100,000.00 in the form of service connection materials, pipes, fittings, plumbing tools, water meters and office equipments from the Local Water Utilities Administration (LWUA).</p>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">1985</span>} isOpen={openIndex === 3} onToggle={() => setOpenIndex(openIndex === 3 ? null : 3)}>
        <p className="text-lg text-justify text-gray-700">Implemented the Interim Improvement Program for Phase IA Project worth P5.7M for the construction of 1 deep well, installation of vertical turbine pump including electro-mechanical components such as motor pump and providing a stand-by diesel engine and provision for replacement parts and installation of various sizes of pipes for transmission and distribution lines.</p>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">1989</span>} isOpen={openIndex === 4} onToggle={() => setOpenIndex(openIndex === 4 ? null : 4)}>
        <p className="text-lg text-justify text-gray-700">Construction of Sitio Cebuano Pump Station and valve appurtenances.</p>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">1990</span>} isOpen={openIndex === 5} onToggle={() => setOpenIndex(openIndex === 5 ? null : 5)}>
        <p className="text-lg text-justify text-gray-700">Construction of Polomolok WD Administration Bldg. using savings of P860,000.00 from Phase IA Project.</p>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">1991</span>} isOpen={openIndex === 6} onToggle={() => setOpenIndex(openIndex === 6 ? null : 6)}>
        <p className="text-lg text-justify text-gray-700">On September 27, Water Districts were declared as Government Owned and Controlled Corporations (GOCC) by virtue of Supreme Court En Banc Decision.</p>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">1992</span>} isOpen={openIndex === 7} onToggle={() => setOpenIndex(openIndex === 7 ? null : 7)}>
        <p className="text-lg text-justify text-gray-700">Started the exploratory well drilling for the proposed Phase II Improvement Project.</p>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">1995-1996</span>} isOpen={openIndex === 8} onToggle={() => setOpenIndex(openIndex === 8 ? null : 8)}>
        <p className="text-lg text-justify text-gray-700">Implemented the Phase II Expansion and Improvement Project. An ADB/LWUA Project worth P68.221M for the construction of 5 deep wells located at Brgy. Sulit, Pagalungan, Cannery and Polo, installation of vertical turbine pumps including electro-mechanical components such as motor pumps and providing a stand-by diesel engine and provision for replacement parts and installation of various sizes of pipes for transmission and distribution lines.</p>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">2007-2008</span>} isOpen={openIndex === 9} onToggle={() => setOpenIndex(openIndex === 9 ? null : 9)}>
        <p className="text-lg text-justify text-gray-700">Appointment of Engr. Andresito J. Degilla as 2nd General Manager of Polomolok WD. Implemented the Phase III Expansion and Rehabilitation and Improvement Project worth P34.4M covering 15 new Subdivisions within the Polomolok WD service area including the construction of additional deep well at Brgy. Upper Klinan.</p>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">2009</span>} isOpen={openIndex === 10} onToggle={() => setOpenIndex(openIndex === 10 ? null : 10)}>
        <p className="text-lg text-justifytext-gray-700">Utilized savings of P5M from Phase III Project for the expansion and rehabilitation of mainline going to Silway-8 to increase pressure. The same year, Polomolok WD was recategorized from Average Water District to Medium Water District.</p>
      </AccordionItem>

    </div>

  );

};



const MandatesAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (

    <div className="max-w-2xl mx-auto ">

      <h2 className="text-3xl text-center text-blue-800 font-bold mb-4">Mandates</h2>

      

      <AccordionItem header={<span className="text-xl">Legal Basis on the creation of Polomolok Water District</span>} isOpen={openIndex === 0} onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}>
        <a href="https://lawphil.net/statutes/presdecs/pd1973/pd_198_1973.html" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 hover:text-blue-800 underline flex items-center gap-2 cursor-pointer">
          <LinkIcon className="w-4 h-4" />
          https://lawphil.net/statutes/presdecs/pd1973/pd_198_1973.html
        </a>
        <Divider />
        <div className="flex items-center gap-2 mt-2">
          <FileText className="w-4 h-4 text-gray-600" />
          <p className="text-lg text-left text-justify text-gray-700">Sangguniang Bayan Resolution No.  63 Series of 1980.</p>
        </div>  
        <Divider />
        <div className="flex items-center gap-2 mt-2">
          <FileText className="w-4 h-4 text-gray-600" />
          <p className="text-lg text-gray-700">LWUA Certificate of Conformance No. 153 Dated June 19, 1981.</p>
        </div>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">System of Operation</span>} isOpen={openIndex === 1} onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}>
        <div className="flex items-center gap-2 mt-2">
          <Dot size={26} className="mt-2" />
          <p className="text-lg text-left text-justify text-gray-700">Private Entity (1980 - 1990)</p>
        </div>
        <Divider />
        <div className="flex items-center gap-2 mt-2"> 
          <Dot size={26} className="mt-2" />
          <p className="text-lg text-left text-justify text-gray-700">Government Owned and Controlled Corporation (1991 - Present)</p>
        </div>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">Purpose and Formation (PD 198 Chapter II Sec. 5)</span>} isOpen={openIndex === 2} onToggle={() => setOpenIndex(openIndex === 2 ? null : 2)}>
        <p className="text-xl font-bold text-gray-700">Local water district may be formed pursuant to this title for the purpose of:</p>
        <div className="flex items-start gap-2 mt-2">
          <Dot size={76} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Acquiring, installing, improving, maintaining and operating water supply and distribution systems for domestic, industrial, municipal and agricultural uses for residents and lands within the boundaries of such districts.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={36} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Providing, maintaining and operating wastewater collection, treatment and disposal facilities, and</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={74} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Conducting such other functions and operations incident to water resources development, utilization and disposal within such districts, as are necessary or incidental to said purpose.</p>
        </div>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">Watershed Management (PD 198 Chapter VII-Sec. 31-e)</span>} isOpen={openIndex === 3} onToggle={() => setOpenIndex(openIndex === 3 ? null : 3)}>
        <div className="flex items-start gap-2 mt-2">
          <Dot size={76} className="mt-2" />
          <p className="text-lg text-justify text-gray-700"> A district shall have the right to: Take over the management, administration, operation, and maintenance of all watersheds within its territorial boundaries.</p>
        </div>
      </AccordionItem>

    </div>

  );

};



const FunctionsAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (

    <div className="max-w-2xl mx-auto ">

      <h2 className="text-3xl text-center text-blue-800 font-bold mb-4">Functions</h2>

      

      <AccordionItem header={<span className="text-xl">Office of the Board of Directors</span>} isOpen={openIndex === 0} onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}>
        <div className="flex items-start gap-2 mt-2">
          <Dot size={26} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Appoints General Manager and the Legal Officer;</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={80} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Approves the Water District's rules and regulations, corporate plan, annual budget, contracts, loans, acquisition of real property at pre-determined amounts and nature, organizational structure, compensation and benefits, water rates and charges;</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={25} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">The policy making body of Water District.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={28} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Responsible for the operation of the District and its long term and short-term planning.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={102} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Recommends organizational structure and manpower level, compensation and benefits schedules, water rates and charges, acquisition of real property, construction contracts, acceptance of completed projects, management strategies appropriate for the district, executes payment for approved projects and programs.</p>
        </div>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">Office of the General Manager</span>} isOpen={openIndex === 1} onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}>
        <div className="flex items-start gap-2 mt-2">
          <Dot size={30} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Responsible for the operation of the District and its long term and short-term planning.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={102} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Recommends organizational structure and manpower level, compensation and benefits schedules, water rates and charges, acquisition of real property, construction contracts, acceptance of completed projects, management strategies appropriate for the district, executes payment for approved projects and programs.</p>
        </div>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">Administrative and General Services Division</span>} isOpen={openIndex === 2} onToggle={() => setOpenIndex(openIndex === 2 ? null : 2)}>
        <div className="flex items-start gap-2 mt-2">
          <Dot size={36} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Formulates and implements human resource programs, policies and procedures pursuant to Civil Service laws and rules;</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={36} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Formulates and implements procedures on procurement of adequate supply of quality materials, equipment and services;</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={28} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Formulates and implements policies on records management for the whole organization.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={38} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Formulates and implements policies related to security measures of building, grounds and people in the organization.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={54} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Formulates and implements systems on warehousing and maintenance of materials, supplies, vehicles and equipment in accordance with the regulations and policies.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={26} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Procurement, Personnel, and Gen. Services ( 3 Sections).</p>
        </div>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">Finance Division</span>} isOpen={openIndex === 3} onToggle={() => setOpenIndex(openIndex === 3 ? null : 3)}>
        <div className="flex items-start gap-2 mt-2">
          <Dot size={60} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Responsible for the maintenance of the corporate books of accounts and all accounting records, documents and the preparation of Financial and Accounting reports and Analysis.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={46} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Implements procedures and policies on cash management particularly on safekeeping, disbursement, control of water districts funds. </p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={44} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Also implements procedures and policies on collection of water bills, cash funds and other monies or income of the District.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={60} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Coordinates with concerned departments in the preparation of the annual budget and prepares and monitors projected financial reports based on approved annual budget.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={26} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Cash, Budget, and Accounting Services ( 3 Sections)</p>
        </div>
      </AccordionItem>

      <AccordionItem header={<span className="text-xl">Engineering and Operations Division</span>} isOpen={openIndex === 4} onToggle={() => setOpenIndex(openIndex === 4 ? null : 4)}>
        <div className="flex items-start gap-2 mt-2">
          <Dot size={36} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Determines water production requirements and ensures the steady supply of water to the service area;</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={68} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Maintains water pumps and water treatment facilities and water quality in accordance with the standards set by the Philippine National Standards for Drinking Water and World Health Organization;</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={28} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Conducts preventive maintenance and repair of equipment and facilities.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={32} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Initiates programs for protection and development of water resources and watershed areas.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={70} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Implements programs for extension, expansion, and improvement of water supply system and undertakes repair and maintenance of transmission and distribution pipelines, including appurtenances.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={34} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Formulates and implements corrective maintenance of water meters and other measuring devices;</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={42} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Plans and designs mainline extension, including mainline improvement, water supply system, pumping facilities and other structures.</p>
        </div>
        <Divider />
        <div className="flex items-start gap-2 mt-2">
          <Dot size={24} className="mt-2" />
          <p className="text-lg text-justify text-gray-700">Production and Construction, and Maintenance Services (2 Sections).</p>
        </div>
      </AccordionItem>

    </div>

  );

};





export function About() {

  return (

    <div className="min-h-screen bg-gray-50">

      {/* Hero Section with Background Image */}

      <div 

        className="relative -mt-[80px]" 

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

            <h1 className="text-4xl lg:text-5xl font-bold text-blue-100 mb-4 drop-shadow-lg">

              About Us

            </h1>

            <p className="text-blue-100 max-w-2xl mx-auto text-lg drop-shadow-md">

              Discover more about Polomolok Water District.

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

        

      {/* Tabs Section - Outside the background image */}

      <div className="container mx-auto px-4 py-12 pt-20">

        <div className="max-w-6xl mx-auto -mt-16">

          <Tabs defaultValue="history" className="w-full">

            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white shadow-lg border p-1">

              <TabsTrigger value="history">History</TabsTrigger>

              <TabsTrigger value="mv">Vision & Mission Statement</TabsTrigger>

              <TabsTrigger value="qpso">Quality Policy Statement & Objectives</TabsTrigger>

              <TabsTrigger value="mf">Mandates & Functions</TabsTrigger>

            </TabsList>



            <TabsContent value="history">

              <Card className="shadow-xl">

                <CardContent className="justify-center pt-6">

                  <HistoryAccordion />

                </CardContent>

              </Card>

            </TabsContent>



            <TabsContent value="mv">

              <Card className="shadow-xl">

                <CardContent className="flex flex-col items-center justify-center py-8">

                  <h2 className="text-3xl text-blue-800 font-bold mb-6">Vision and Mission Statement</h2>

                  <img src="/vms.png" alt="Vision and Mission" className="max-w-full h-auto" />

                </CardContent>

              </Card>

            </TabsContent>



            <TabsContent value="qpso">

              <Card className="shadow-xl">

                <CardContent className="flex flex-col items-center justify-center py-8">

                  <h2 className="text-3xl text-blue-800 font-bold mb-6">Quality Policy Statement and Objectives</h2>

                  <img src="/Quality_statement.png" alt="Quality Policy Statement and Objectives" className="max-w-full h-auto" />

                </CardContent>

              </Card>

            </TabsContent>



            <TabsContent value="mf">

              <Card className="shadow-xl">

                <CardContent className="justify-center pt-6">

                  <MandatesAccordion />

                  <div className="mt-8">

                    <FunctionsAccordion />

                  </div>

                </CardContent>

              </Card>

            </TabsContent>

          </Tabs>

        </div>

      </div>

    </div>

  );

}