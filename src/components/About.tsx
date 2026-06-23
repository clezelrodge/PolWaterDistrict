import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AccordionItem } from '@/components/ui/Accordion';

const HistoryAccordion: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto ">
      <h2 className="text-3xl text-blue-800 font-bold mb-4">History</h2>
      
      <AccordionItem title="1980">
        <p className="text-lg text-gray-700">On October 9, the Polomolok Water District was came into as an independent entity under the aegis of the late Hon. Mayor Saturnino Calulo by virtue of Sangguniang Bayan Res. No. 63 with Hilarion P. Visande, Jr. as its 1st General Manager.</p>
      </AccordionItem>

      <AccordionItem title="1981">
        <p className="text-lg text-gray-700">The Local Water Utilities Administration (LWUA) issued Conditional Certificate of Conformance (CCC) No. 153 on June 19, 1981. This entitled the Polomolok Water District to all rights and privileges authorized under Presidential Decree 198 as amended.</p>
      </AccordionItem>

      <AccordionItem title="1982">
        <p className="text-lg text-gray-700">Polomolok Water District (PolWD) availed a mini loan of P100,000.00 in the form of service connection materials, pipes, fittings, plumbing tools, water meters and office equipments from the Local Water Utilities Administration (LWUA).</p>
      </AccordionItem>

      <AccordionItem title="1985">
        <p className="text-lg text-gray-700">Implemented the Interim Improvement Program for Phase IA Project worth P5.7M for the construction of 1 deep well, installation of vertical turbine pump including electro-mechanical components such as motor pump and providing a stand-by diesel engine and provision for replacement parts and installation of various sizes of pipes for transmission and distribution lines.</p>
      </AccordionItem>
      
      <AccordionItem title="1989">
        <p className="text-lg text-gray-700">Construction of Sitio Cebuano Pump Station and valve appurtenances.</p>
      </AccordionItem>

      <AccordionItem title="1990">
        <p className="text-lg text-gray-700">Construction of Polomolok WD Administration Bldg. using savings of P860,000.00 from Phase IA Project.</p>
      </AccordionItem>

      <AccordionItem title="1991">
        <p className="text-lg text-gray-700">On September 27, Water Districts were declared as Government Owned and Controlled Corporations (GOCC) by virtue of Supreme Court En Banc Decision.</p>
      </AccordionItem>

      <AccordionItem title="1992">
        <p className="text-lg text-gray-700">Started the exploratory well drilling for the proposed Phase II Improvement Project.</p>
      </AccordionItem>

      <AccordionItem title="1995-1996">
        <p className="text-lg text-gray-700">Implemented the Phase II Expansion & Improvement Project. An ADB/LWUA Project worth P68.221M for the construction of 5 deep wells located at Brgy. Sulit, Pagalungan, Cannery and Polo, installation of vertical turbine pumps including electro-mechanical components such as motor pumps and providing a stand-by diesel engine and provision for replacement parts and installation of various sizes of pipes for transmission and distribution lines.</p>
      </AccordionItem>

      <AccordionItem title="2007-2008">
        <p className="text-lg text-gray-700">Appointment of Engr. Andresito J. Degilla as 2nd General Manager of Polomolok WD. Implemented the Phase III Expansion & Rehabilitation and Improvement Project worth P34.4M covering 15 new Subdivisions within the Polomolok WD service area including the construction of additional deep well at Brgy. Upper Klinan.</p>
      </AccordionItem>

      <AccordionItem title="2009">
        <p className="text-lg text-gray-700">Utilized savings of P5M from Phase III Project for the expansion & rehabilitation of mainline going to Silway-8 to increase pressure. The same year, Polomolok WD was recategorized from Average Water District to Medium Water District.</p>
      </AccordionItem>
    </div>
  );
};

export function About() {
    return (
        <div>
            <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Discover more about Polomolok Water District.
          </p>
    <Tabs defaultValue="history" className="w-full">
        <TabsList className="grid w-full max-w-6xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="mv">Vision & Mission Statement</TabsTrigger>
            <TabsTrigger value="qpso">Quality Policy Statement & Objectives</TabsTrigger>
            <TabsTrigger value="mf">Mandates & Functions</TabsTrigger>
        </TabsList>

    <TabsContent value="history">
        <Card>
            <CardContent className="justify-center">
              <p className="text-justify">
              </p>
              <HistoryAccordion />
            </CardContent>
        </Card>
    </TabsContent>

    <TabsContent value="mv">
        <Card>
            <CardContent className="flex flex-col items-center justify-center py-8">
                <h2 className="text-3xl text-blue-800 font-bold mb-6">Vision and Mission Statement</h2>
                <img src="/vms.png" alt="Vision and Mission" className="max-w-full h-auto" />
            </CardContent>
        </Card>
    </TabsContent>
    <TabsContent value="qpso">
        <Card>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <h2 className="text-3xl text-blue-800 font-bold mb-6">Quality Policy Statement and Objectives</h2>
              <img src="/Quality_statement.png" alt="Quality Policy Statement and Objectives" className="max-w-full h-auto" />
            </CardContent>
        </Card>
    </TabsContent>
    <TabsContent value="mf">
        <Card>
            <CardHeader>
                <CardTitle>Mandates and Functions</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Mandates and Functions content goes here...</p>
            </CardContent>
        </Card>
    </TabsContent>

    </Tabs>
        </div>
        </div>
        </div>
        </div>
    );

  }