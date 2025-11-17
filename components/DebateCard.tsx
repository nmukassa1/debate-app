import Link from 'next/link';

interface DebateCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  forCount: number;
  againstCount: number;
  commentCount: number;
}

export default function DebateCard({
  id,
  title,
  description,
  author,
  createdAt,
  forCount,
  againstCount,
  commentCount,
}: DebateCardProps) {
  const totalVotes = forCount + againstCount;
  const forPercentage = totalVotes > 0 ? (forCount / totalVotes) * 100 : 50;
  const againstPercentage = totalVotes > 0 ? (againstCount / totalVotes) * 100 : 50;

  return (
    <Link href={`/debates/${id}`}>
      <article className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700">
        <div className="mb-4">
          <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {title}
          </h2>
          <p className="line-clamp-2 text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-green-600 dark:text-green-400">
              For: {forCount}
            </span>
            <span className="font-medium text-red-600 dark:text-red-400">
              Against: {againstCount}
            </span>
          </div>
          
          <div className="flex h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="bg-gradient-to-r from-green-500 to-green-600 transition-all"
              style={{ width: `${forPercentage}%` }}
            />
            <div
              className="bg-gradient-to-r from-red-500 to-red-600 transition-all"
              style={{ width: `${againstPercentage}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <span>By {author}</span>
            <span>•</span>
            <span>{createdAt}</span>
          </div>
          <span className="flex items-center space-x-1">
            <svg
              className="h-4 w-4"
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
            <span>{commentCount} comments</span>
          </span>
        </div>
      </article>
    </Link>
  );
}

