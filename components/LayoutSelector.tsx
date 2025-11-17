'use client';
import React from 'react';

export type LayoutType = 'single' | 'double' | 'three' | 'four';

interface LayoutSelectorProps {
  selectedLayout: LayoutType;
  onLayoutChange: (layout: LayoutType) => void;
}


export default function LayoutSelector({ selectedLayout, onLayoutChange }: LayoutSelectorProps) {
  const layouts: { type: LayoutType; label: string; icon: React.ReactNode }[] = [
    {
      type: 'single',
      label: 'Single',
      icon: (
        <div className="flex gap-1">
          <div className="h-4 w-full border border-black bg-black"></div>
        </div>
      ),
    },
    {
      type: 'double',
      label: 'Double',
      icon: (
        <div className="flex gap-1">
          <div className="h-4 w-full border border-black bg-black"></div>
          <div className="h-4 w-full border border-black bg-black"></div>
        </div>
      ),
    },
    {
      type: 'three',
      label: 'Three',
      icon: (
        <div className="flex gap-1">
          <div className="h-4 w-full border border-black bg-black"></div>
          <div className="h-4 w-full border border-black bg-black"></div>
          <div className="h-4 w-full border border-black bg-black"></div>
        </div>
      ),
    },
    {
      type: 'four',
      label: 'Four',
      icon: (
        <div className="flex gap-1">
          <div className="h-4 w-full border border-black bg-black"></div>
          <div className="h-4 w-full border border-black bg-black"></div>
          <div className="h-4 w-full border border-black bg-black"></div>
          <div className="h-4 w-full border border-black bg-black"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-2 border border-black bg-white p-2">
      <span className="text-sm font-medium text-black">Layout:</span>
      <div className="flex gap-1">
        {layouts.map((layout) => (
          <button
            key={layout.type}
            onClick={() => onLayoutChange(layout.type)}
            className={`flex flex-col items-center gap-1 border border-black px-3 py-2 transition-all ${
              selectedLayout === layout.type
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-black hover:text-white'
            }`}
            title={layout.label}
          >
            {layout.icon}
            <span className="text-xs">{layout.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

