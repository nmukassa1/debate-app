'use client';

import { useState } from 'react';
import DebateHeader from '@/components/DebateHeader';
import SideSelector from '@/components/SideSelector';
import CommentForm from '@/components/CommentForm';
import CommentList from '@/components/CommentList';

// Mock data - in a real app, this would come from an API
const mockDebate = {
  id: '1',
  title: 'Should remote work become the standard?',
  description: 'With the rise of remote work during the pandemic, many companies are considering making it permanent. This shift has sparked debates about productivity, work-life balance, company culture, and the future of office spaces. What are your thoughts on this fundamental change in how we work?',
  author: 'Alex Johnson',
  createdAt: '2 hours ago',
  forCount: 124,
  againstCount: 87,
};

const mockComments = [
  {
    id: '1',
    author: 'Jordan Smith',
    content: 'Remote work has significantly improved my work-life balance. I can spend more time with family and avoid the daily commute stress.',
    side: 'for' as const,
    createdAt: '1 hour ago',
  },
  {
    id: '2',
    author: 'Patricia Lee',
    content: 'While remote work has benefits, I believe in-person collaboration is crucial for innovation and team building. Some of the best ideas come from spontaneous office conversations.',
    side: 'against' as const,
    createdAt: '45 minutes ago',
  },
  {
    id: '3',
    author: 'David Kim',
    content: 'The key is flexibility. Companies should offer both options and let employees choose what works best for them and their role.',
    side: 'for' as const,
    createdAt: '30 minutes ago',
  },
  {
    id: '4',
    author: 'Rachel Green',
    content: 'Remote work makes it harder to maintain company culture and onboard new employees. There\'s something valuable about being physically present.',
    side: 'against' as const,
    createdAt: '15 minutes ago',
  },
];

export default function DebateDetailPage({ params }: { params: { id: string } }) {
  const [selectedSide, setSelectedSide] = useState<'for' | 'against' | null>(null);
  const [comments, setComments] = useState(mockComments);

  const handleSelectSide = (side: 'for' | 'against') => {
    setSelectedSide(side);
  };

  const handleSubmitComment = (content: string) => {
    if (!selectedSide) return;
    
    const newComment = {
      id: Date.now().toString(),
      author: 'You',
      content,
      side: selectedSide,
      createdAt: 'just now',
    };
    
    setComments([...comments, newComment]);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <DebateHeader {...mockDebate} />
      
      <SideSelector selectedSide={selectedSide} onSelectSide={handleSelectSide} />
      
      {selectedSide && (
        <CommentForm selectedSide={selectedSide} onSubmit={handleSubmitComment} />
      )}
      
      <div>
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Comments ({comments.length})
        </h2>
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

