import { Collapse } from 'antd';

export function Gallery() {
  const galleryItems = [
    {
      key: '1',
      label: 'Board of Directors',
      children: <p className="text-lg text-gray-700">Board of Directors content goes here</p>,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View photos and images of Polomolok Water District
          </p>
        </div>
        <Collapse accordion defaultActiveKey={['1']} items={galleryItems} className="border-blue-200 bg-white" />
      </div>
    </div>
  );
}
