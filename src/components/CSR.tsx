import { Card, CardContent } from '@/components/ui/card';

export function CSR() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Corporate Social Responsibility</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about Polomolok Water District's commitment to community service and social responsibility.
          </p>
        </div>
        <Card>
          <CardContent className="pt-2 pb-2">
            <div className="text-center">
              <h2 className="text-3xl text-blue-800 font-bold mb-6">Patubig sa Eskwela</h2>
              <p className="text-lg text-justify text-gray-600 max-w-3xl mx-auto">
                The Polomolok Water District started the “Patubig sa Eskwela Program” in 2005 during the celebration of its 25th Foundation Anniversary and has become an annual anniversary activity. The donation, construction of drinking facility and free 30 cubic meter water per month, is Polomolok Water District's way of ensuring that all public school children within the Polomolok Water District service area have access to safe drinking water. In line with the program,  a short lecture on the importance of water and how they can help conserve water and protect the environment in their own small ways is conducted to the students few days before the actual turn-over of the facility.
              </p>
              <p className="text-lg text-justify text-gray-700 mt-4">
               The following schools are the recipient  of Patubig sa Eskwela Progam:
            </p>
 
<div className="mt-6 overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
    <thead>
      <tr className="bg-blue-800 text-white">
        <th className="px-6 py-3 text-2xl text-center font-bold">Year</th>
        <th className="px-6 py-3 text-2xl text-center font-bold">Recipient</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700">2013</td>
        <td className="px-6 py-3 text-gray-700">Perfecto B. Salada Elementary School</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700"></td>
        <td className="px-6 py-3 text-gray-700">Pagalungan Elementary School</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700">2012</td>
        <td className="px-6 py-3 text-gray-700">Bentung Sulit National High School</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700">2011</td>
        <td className="px-6 py-3 text-gray-700">L.R. Morandante Elementary School</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700"></td>
        <td className="px-6 py-3 text-gray-700">Silway 8 Elementary School</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700">2010</td>
        <td className="px-6 py-3 text-gray-700">Eustacio Barcatan Elementary School</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700"></td>
        <td className="px-6 py-3 text-gray-700">Sulit Elementary School</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700">2009</td>
        <td className="px-6 py-3 text-gray-700">Dole Cannery Central Elementary School</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700">2008</td>
        <td className="px-6 py-3 text-gray-700">Polomolok National High School</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700">2007</td>
        <td className="px-6 py-3 text-gray-700">Silway 8 National High School</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700">2006</td>
        <td className="px-6 py-3 text-gray-700">Poblacion Polomolok National High School</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-3 text-gray-700">2005</td>
        <td className="px-6 py-3 text-gray-700">Polomolok Central Elementary School</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}