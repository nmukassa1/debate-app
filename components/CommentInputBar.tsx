'use client';

interface CommentInputBarProps {
  onClick: () => void;
}

export default function CommentInputBar({ onClick }: CommentInputBarProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer border border-black bg-white p-4 transition-all hover:bg-black"
    >
      <div className="flex items-center space-x-3">
        <svg
          className="h-5 w-5 text-black transition-colors group-hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span className="text-black transition-colors group-hover:text-white">
          Add a comment... (Click to choose your side)
        </span>
      </div>
    </div>
  );
}

