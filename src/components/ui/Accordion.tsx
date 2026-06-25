import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left font-semibold bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
      >
        {title}
        {/* Added background color and rounded shape to make white text visible */}
        <span className="text-white bg-gray-800 w-6 h-6 flex items-center justify-center rounded-full text-xs">
          {isOpen ? '▼' : '▶'}
        </span>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};