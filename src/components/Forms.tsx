import { Collapse } from 'antd';

export function Forms() {
  const pdfGroups = [
    {
      category: <div className="text-lg font-semibold">Annual Reports</div>,
      files: [
        { file: '2019.pdf', label: '2019 Annual Report' },
        { file: '2020.pdf', label: '2020 Annual Report' },
        { file: '2021.pdf', label: '2021 Annual Report' },
        { file: '2022.pdf', label: '2022 Annual Report' },
        { file: '2023.pdf', label: '2023 Annual Report' },
      ]
    },
    {
      category: <div className="text-lg font-semibold">Citizens Charter</div>,
      files: [
        { file: 'Citizens-Charter-Handbook-2nd-ed.-2021.pdf', label: 'Citizens Charter Handbook 2nd Edition 2021' },
      ]
    },
    {
      category: <div className="text-lg font-semibold">Human Resources</div>,
      files: [
        { file: '2022-BODs-and-Employees.pdf', label: '2022 BODs and Employees' },
        { file: '2023-BODs-and-Employees.pdf', label: '2023 BODs and Employees' },
        { file: 'BOD-SDD.pdf', label: 'Board of Directors SDD' },
        { file: 'EMPLOYEES.pdf', label: 'Employees List' },
        { file: 'Employee-SDD.pdf', label: 'Employee SDD' },
      ]
    },
    {
      category: <div className="text-lg font-semibold">Republic Acts</div>,
      files: [
        { file: 'RA-7877.pdf', label: 'RA 7877 - Anti-Sexual Harassment Act' },
        { file: 'RA-8353.pdf', label: 'RA 8353 - Anti-Rape Law' },
      ]
    },
    {
      category: <div className="text-lg font-semibold">Service Connections</div>,
      files: [
        { file: '2022-NSC.pdf', label: '2022 New Service Connections' },
        { file: '2023-NSC.pdf', label: '2023 New Service Connections' },
        { file: '2024-NSC.pdf', label: '2024 New Service Connections' },
        { file: '2024-CAP-DEV.pdf', label: '2024 Capital Development' },
        { file: '2024-SC-Discount-and-SDD.pdf', label: '2024 SC Discount and SDD' },
      ]
    },
    {
      category: <div className="text-lg font-semibold">Sex Disaggregated Data</div>,
      files: [
        { file: '2019 (1).pdf', label: '2019 Report (1)' },
        { file: '2019-1.pdf', label: '2019 Report (2)' },
        { file: '2020 (1).pdf', label: '2020 Report (1)' },
        { file: '2020-1.pdf', label: '2020 Report (2)' },
        { file: '2021 (1).pdf', label: '2021 Report (1)' },
        { file: '2021-1.pdf', label: '2021 Report (2)' },
      ]
    },
  ];

  const formsItems = pdfGroups.map((group, groupIndex) => ({
    key: String(groupIndex),
    label: group.category,
    children: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {group.files.map((item, fileIndex) => (
          <a
            key={fileIndex}
            href={`/${item.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-800 hover:bg-blue-800 rounded-lg transition-colors border border-gray-600"
          >
            <svg className="w-6 h-6 mr-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-800 truncate">{item.label}</span>
          </a>
        ))}
      </div>
    ),
  }));

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
              Forms and Documents
            </h1>
            <p className="text-white max-w-2xl mx-auto text-lg drop-shadow-md">
              Download available forms and documents from Polomolok Water District
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

      {/* Content Section - Outside the background image */}
      <div className="container mx-auto px-4 py-12 pt-8 relative z-20">
        <Collapse defaultActiveKey={['0']} items={formsItems} className="border-blue-200 bg-white" />
      </div>

      <style jsx>{`
        @keyframes wave-slow {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wave-medium {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wave-fast {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-wave-slow {
          animation: wave-slow 25s linear infinite;
          will-change: transform;
        }
        .animate-wave-medium {
          animation: wave-medium 18s linear infinite;
          will-change: transform;
        }
        .animate-wave-fast {
          animation: wave-fast 12s linear infinite;
          will-change: transform;
        }

        .ant-collapse-expand-icon {
          color: #1f2937 !important;
        }
      `}</style>
    </div>
  );
}
