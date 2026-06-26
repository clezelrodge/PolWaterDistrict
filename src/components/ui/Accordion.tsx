import React, { useState } from 'react';

interface PanelProps {
  header: React.ReactNode;
  children: React.ReactNode;
  key: string;
}

interface CollapseProps {
  accordion?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({ header, children }) => {
  return (
    <div className="border border-gray-200 rounded mb-2">
      <div className="px-4 py-3 font-semibold bg-blue-600 hover:bg-blue-700 text-white">
        {header}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export const Collapse: React.FC<CollapseProps> = ({ accordion, className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const AccordionItem: React.FC<{ header: React.ReactNode; children: React.ReactNode; isOpen: boolean; onToggle: () => void }> = ({ header, children, isOpen, onToggle }) => {

  return (
    <div className="border border-gray-300 rounded mb-2">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 text-left font-semibold bg-blue-500 hover:bg-blue-700 text-white flex items-center gap-2 cursor-pointer"
      >
        <span className="text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
          {isOpen ? '▼' : '▶'}
        </span>
        {header}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};