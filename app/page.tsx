'use client';

import { useState } from 'react';
import DebateList from '@/components/DebateList';
import LayoutSelector, { LayoutType } from '@/components/LayoutSelector';

// Mock data for demonstration
const mockDebates = [
  {
    id: '1',
    title: 'Should remote work become the standard?',
    description: 'With the rise of remote work during the pandemic, many companies are considering making it permanent. This shift has sparked debates about productivity, work-life balance, company culture, and the future of office spaces. What are your thoughts on this fundamental change in how we work?',
    author: 'Alex Johnson',
    createdAt: '2 hours ago',
    forCount: 124,
    againstCount: 87,
    commentCount: 23,
    comments: [
      {
        id: '1',
        author: 'Jordan Smith',
        content: 'Remote work has significantly improved my work-life balance. I can spend more time with family and avoid the daily commute stress.',
        side: 'for' as const,
        createdAt: '1 hour ago',
        replies: [],
      },
      {
        id: '2',
        author: 'Patricia Lee',
        content: 'While remote work has benefits, I believe in-person collaboration is crucial for innovation and team building. Some of the best ideas come from spontaneous office conversations.',
        side: 'against' as const,
        createdAt: '45 minutes ago',
        replies: [],
      },
      {
        id: '3',
        author: 'David Kim',
        content: 'The key is flexibility. Companies should offer both options and let employees choose what works best for them and their role.',
        side: 'for' as const,
        createdAt: '30 minutes ago',
        replies: [],
      },
    ],
  },
  {
    id: '2',
    title: 'Is artificial intelligence a threat to human creativity?',
    description: 'As AI becomes more capable of generating art, music, and literature, some argue it threatens human creativity while others see it as a tool for enhancement.',
    author: 'Sarah Chen',
    createdAt: '5 hours ago',
    forCount: 98,
    againstCount: 156,
    commentCount: 41,
    comments: [
      {
        id: '4',
        author: 'Marcus Brown',
        content: 'AI is just a tool. True creativity comes from human experience and emotion that machines cannot replicate.',
        side: 'against' as const,
        createdAt: '3 hours ago',
        replies: [],
      },
      {
        id: '5',
        author: 'Lisa Wang',
        content: 'I worry that as AI gets better, people will stop trying to create original work. Why struggle when a machine can do it?',
        side: 'for' as const,
        createdAt: '2 hours ago',
        replies: [],
      },
    ],
  },
  {
    id: '3',
    title: 'Should social media platforms have stricter content moderation?',
    description: 'The debate over free speech versus harmful content continues. Where should platforms draw the line?',
    author: 'Michael Torres',
    createdAt: '1 day ago',
    forCount: 203,
    againstCount: 142,
    commentCount: 67,
    comments: [
      {
        id: '6',
        author: 'Chris Anderson',
        content: 'Platforms have a responsibility to protect users from harmful content, especially vulnerable populations.',
        side: 'for' as const,
        createdAt: '18 hours ago',
        replies: [],
      },
      {
        id: '7',
        author: 'Taylor Reed',
        content: 'Stricter moderation often leads to censorship of legitimate viewpoints. We need more transparency in moderation decisions.',
        side: 'against' as const,
        createdAt: '12 hours ago',
        replies: [],
      },
    ],
  },
  {
    id: '4',
    title: 'Is universal basic income the solution to economic inequality?',
    description: 'UBI has been proposed as a way to address growing economic disparities. Would it work in practice?',
    author: 'Emma Williams',
    createdAt: '2 days ago',
    forCount: 178,
    againstCount: 165,
    commentCount: 89,
    comments: [
      {
        id: '8',
        author: 'Robert Martinez',
        content: 'UBI could provide a safety net for everyone and allow people to pursue meaningful work without fear of poverty.',
        side: 'for' as const,
        createdAt: '1 day ago',
        replies: [],
      },
      {
        id: '9',
        author: 'Jennifer Park',
        content: 'The cost would be enormous and might disincentivize work. We need targeted programs instead.',
        side: 'against' as const,
        createdAt: '20 hours ago',
        replies: [],
      },
    ],
  },
];

export default function Home() {
  const [layout, setLayout] = useState<LayoutType>('single');

  return (
    <div>
      <div className="mb-8">
        <div className="mb-4">
          <div className="mb-4">
            <h1 className="mb-2 text-4xl font-bold text-black">
              Welcome to DebateHub
            </h1>
            <p className="text-lg text-black">
              Join the conversation. Share your perspective. Respect different views.
            </p>
          </div>
          <LayoutSelector selectedLayout={layout} onLayoutChange={setLayout} />
        </div>
      </div>
      <DebateList debates={mockDebates} layout={layout} />
    </div>
  );
}
