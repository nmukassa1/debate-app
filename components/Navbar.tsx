import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-black bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center border border-black bg-black">
              <span className="text-lg font-bold text-white">D</span>
            </div>
            <span className="text-xl font-bold text-black">
              DebateHub
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              href="/debates/new"
              className="border border-black bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-black hover:text-white"
            >
              New Debate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

