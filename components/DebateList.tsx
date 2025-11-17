'use client';

import ExpandableDebateCard from './ExpandableDebateCard';
import { LayoutType } from './LayoutSelector';

interface CommentData {
  id: string;
  author: string;
  content: string;
  side: 'for' | 'against';
  createdAt: string;
}

interface Debate {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  forCount: number;
  againstCount: number;
  commentCount: number;
  comments?: CommentData[];
}

interface DebateListProps {
  debates: Debate[];
  layout: LayoutType;
}

export default function DebateList({ debates, layout }: DebateListProps) {
  if (debates.length === 0) {
    return (
      <div className="border border-black bg-white p-12 text-center">
        <p className="text-black">
          No debates yet. Be the first to start one!
        </p>
      </div>
    );
  }

  const gridClasses = {
    single: 'grid-cols-1',
    double: 'grid-cols-1 md:grid-cols-2',
    three: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    four: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={`grid ${gridClasses[layout]} gap-4`}>
      {debates.map((debate) => (
        <ExpandableDebateCard
          key={debate.id}
          id={debate.id}
          title={debate.title}
          description={debate.description}
          author={debate.author}
          createdAt={debate.createdAt}
          forCount={debate.forCount}
          againstCount={debate.againstCount}
          commentCount={debate.commentCount}
          initialComments={debate.comments || []}
        />
      ))}
    </div>
  );
}
