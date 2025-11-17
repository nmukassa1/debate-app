'use client';

interface SideSelectorProps {
  selectedSide: 'for' | 'against' | null;
  onSelectSide: (side: 'for' | 'against') => void;
}

export default function SideSelector({ selectedSide, onSelectSide }: SideSelectorProps) {
  return (
    <div className="border border-black bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-black">
        Choose Your Side
      </h3>
      <p className="mb-4 text-sm text-black">
        Select your position before joining the debate
      </p>
      
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onSelectSide('for')}
          className={`flex flex-col items-center justify-center border-2 border-black p-6 transition-all ${
            selectedSide === 'for'
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-black hover:text-white'
          }`}
        >
          <div className={`mb-2 flex h-12 w-12 items-center justify-center border-2 border-black ${
            selectedSide === 'for'
              ? 'bg-white'
              : 'bg-white'
          }`}>
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="font-semibold">For</span>
          <span className="text-sm">I agree</span>
        </button>

        <button
          onClick={() => onSelectSide('against')}
          className={`flex flex-col items-center justify-center border-2 border-black p-6 transition-all ${
            selectedSide === 'against'
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-black hover:text-white'
          }`}
        >
          <div className={`mb-2 flex h-12 w-12 items-center justify-center border-2 border-black ${
            selectedSide === 'against'
              ? 'bg-white'
              : 'bg-white'
          }`}>
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <span className="font-semibold">Against</span>
          <span className="text-sm">I disagree</span>
        </button>
      </div>
    </div>
  );
}

