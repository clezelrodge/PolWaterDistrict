import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-blue-200 rounded mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left font-bold text-white bg-blue-800 hover:bg-blue-800 flex items-center text-lg cursor-pointer"
      >
        <span className="mr-4 text-white">{isOpen ? '▼' : '▶'}</span>
          {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};
