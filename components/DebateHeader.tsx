interface DebateHeaderProps {
  title: string;
  description: string;
  author: string;
  createdAt: string;
  forCount: number;
  againstCount: number;
}

export default function DebateHeader({
  title,
  description,
  author,
  createdAt,
  forCount,
  againstCount,
}: DebateHeaderProps) {
  const totalVotes = forCount + againstCount;
  const forPercentage = totalVotes > 0 ? (forCount / totalVotes) * 100 : 50;
  const againstPercentage = totalVotes > 0 ? (againstCount / totalVotes) * 100 : 50;

  return (
    <div className="border border-black bg-white p-8">
      <div className="mb-6">
        <h1 className="mb-4 text-3xl font-bold text-black">
          {title}
        </h1>
        <p className="text-lg text-black">{description}</p>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-black">
                {forCount}
              </div>
              <div className="text-sm text-black">For</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">
                {againstCount}
              </div>
              <div className="text-sm text-black">Against</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex h-4 overflow-hidden border border-black bg-white">
            <div
              className="bg-black transition-all"
              style={{ width: `${forPercentage}%` }}
            />
            <div
              className="bg-white border-l border-black transition-all"
              style={{ width: `${againstPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-black">
            <span>{forPercentage.toFixed(1)}% For</span>
            <span>{againstPercentage.toFixed(1)}% Against</span>
          </div>
        </div>
      </div>

      <div className="border-t border-black pt-4">
        <div className="flex items-center justify-between text-sm text-black">
          <span>
            Posted by <span className="font-medium text-black">{author}</span>
          </span>
          <span>{createdAt}</span>
        </div>
      </div>
    </div>
  );
}

