import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
            <TabsTrigger value="mv">Mission & Vision</TabsTrigger>
            <TabsTrigger value="qpso">Quality Policy Statement & Objectives</TabsTrigger>
            <TabsTrigger value="mf">Mandates & Functions</TabsTrigger>
        </TabsList>

    <TabsContent value="history">
        <Card>
            <CardHeader>
                <CardTitle>History</CardTitle>
            </CardHeader>
            <CardContent className="justify-center">
              <p className="text-justify">
                1980: On October 9, the Polomolok Water District was established as an independent entity under the leadership of Mayor Saturnino Calulo by virtue of Sangguniang Bayan Resolution No. 63, with Hilarion P. Visande, Jr. serving as its first General Manager. The Local Water Utilities Administration (LWUA) issued Conditional Certificate of Conformance (CCC) No. 153 on June 19, 1981. This entitled the Polomolok Water District to all rights and privileges authorized under Presidential Decree 198 as amended. In 1982, Polomolok Water District (PolWD) availed a mini loan of P100,000.00 in the form of service connection materials, pipes, fittings, plumbing tools, water meters and office equipments from the Local Water Utilities Administration (LWUA). In 1985, implemented the Interim Improvement Program for Phase IA Project worth P5.7M for the construction of 1 deep well, installation of vertical turbine pump including electro-mechanical components such as motor pump and providing a stand-by diesel engine and provision for replacement parts and installation of various sizes of pipes for transmission and distribution lines. In 1989, Construction of Sitio Cebuano Pump Station and valve appurtenances. In 1990, Construction of Polomolok WD Administration Bldg. using savings of P860,000.00 from Phase IA Project. In Sept. 27, 1991, WDs were declared as Government Owned and Controlled Corporations (GOCC) by virtue of Supreme Court En Banc Decision. In 1992, Started the exploratory well drilling for the proposed Phase II Improvement Project. In 1995 to 1996, Implemented the Phase II Expansion & Improvement Project. An ADB/LWUA Project worth P68.221M for the construction of 5 deep wells located at Brgy. Sulit, Pagalungan, Cannery and Polo, installation of vertical turbine pumps including electro-mechanical components such as motor pumps and providing a stand-by diesel engine and provision for replacement parts and installation of various sizes of pipes for transmission and distribution lines. In 2007-2008, Appointment of Engr. Andresito J. Degilla as 2nd General Manager of Polomolok WD. Implemented the Phase III Expansion & Rehabilitation and Improvement Project worth P34.4M covering 15 new Subdivisions within the Polomolok WD service area including the construction of additional deep well at Brgy. Upper Klinan. In 2009, Utilized savings of P5M from Phase III Project for the expansion & rehabilitation of mainline going to Silway-8 to increase pressure. The same year, Polomolok WD was Recategorized from Average WD to Medium WD.
              </p>
            </CardContent>
        </Card>
    </TabsContent>

    <TabsContent value="mv">
        <Card>
            <CardHeader>
                <CardTitle>Mission and Vision</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Mission & Vision content goes here...</p>
            </CardContent>
        </Card>
    </TabsContent>
    <TabsContent value="qpso">
        <Card>
            <CardHeader>
                <CardTitle>Quality Policy Statement and Objectives</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Quality Policy Statement and Objectives content goes here...</p>
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