'use client';

import { useState } from 'react';
import SideSelector from './SideSelector';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import CommentInputBar from './CommentInputBar';

interface CommentData {
  id: string;
  author: string;
  content: string;
  side: 'for' | 'against';
  createdAt: string;
  replies?: CommentData[];
}

interface ExpandableDebateCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  forCount: number;
  againstCount: number;
  commentCount: number;
  initialComments?: CommentData[];
}

export default function ExpandableDebateCard({
  id,
  title,
  description,
  author,
  createdAt,
  forCount,
  againstCount,
  commentCount,
  initialComments = [],
}: ExpandableDebateCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSide, setSelectedSide] = useState<'for' | 'against' | null>(null);
  const [showSideSelector, setShowSideSelector] = useState(false);
  const [comments, setComments] = useState<CommentData[]>(initialComments);
  const [currentForCount, setCurrentForCount] = useState(forCount);
  const [currentAgainstCount, setCurrentAgainstCount] = useState(againstCount);

  const totalVotes = currentForCount + currentAgainstCount;
  const forPercentage = totalVotes > 0 ? (currentForCount / totalVotes) * 100 : 50;
  const againstPercentage = totalVotes > 0 ? (currentAgainstCount / totalVotes) * 100 : 50;

  const handleInputBarClick = () => {
    setShowSideSelector(true);
  };

  const handleSelectSide = (side: 'for' | 'against') => {
    setSelectedSide(side);
    setShowSideSelector(false);
  };

  const handleSideChosenFromReply = (side: 'for' | 'against') => {
    // If user hasn't chosen a side yet, set it when they reply
    if (!selectedSide) {
      setSelectedSide(side);
    }
  };

  const handleSubmitComment = (content: string) => {
    if (!selectedSide) return;

    const newComment: CommentData = {
      id: Date.now().toString(),
      author: 'You',
      content,
      side: selectedSide,
      createdAt: 'just now',
      replies: [],
    };

    setComments([...comments, newComment]);
    
    // Update vote counts
    if (selectedSide === 'for') {
      setCurrentForCount(currentForCount + 1);
    } else {
      setCurrentAgainstCount(currentAgainstCount + 1);
    }
  };

  const handleReply = (parentId: string, content: string, side: 'for' | 'against') => {
    const newReply: CommentData = {
      id: Date.now().toString(),
      author: 'You',
      content,
      side,
      createdAt: 'just now',
      replies: [],
    };

    const addReplyToComment = (comments: CommentData[]): CommentData[] => {
      return comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          };
        }
        if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: addReplyToComment(comment.replies),
          };
        }
        return comment;
      });
    };

    setComments(addReplyToComment(comments));
    
    // Update vote counts
    if (side === 'for') {
      setCurrentForCount(currentForCount + 1);
    } else {
      setCurrentAgainstCount(currentAgainstCount + 1);
    }
  };

  return (
    <article className="overflow-hidden border border-black bg-white transition-all hover:shadow-lg">
      {/* Debate Card Header */}
      <div className="p-6">
        <div className="mb-4">
          <h2 className="mb-2 text-xl font-semibold text-black">
            {title}
          </h2>
          <p className="text-black">{description}</p>
        </div>

        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-black">
              {forPercentage.toFixed(0)}% For
            </span>
            <span className="font-medium text-black">
              {againstPercentage.toFixed(0)}% Against
            </span>
          </div>

          <div className="flex h-2 overflow-hidden border border-black bg-white">
            <div
              className="bg-black transition-all"
              style={{ width: `${forPercentage}%` }}
            />
            <div
              className="bg-white border-l border-black transition-all"
              style={{ width: `${againstPercentage}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-black">
          <div className="flex items-center space-x-4">
            <span>By {author}</span>
            <span>•</span>
            <span>{createdAt}</span>
          </div>
          <button
            onClick={() => {
              if (isExpanded) {
                // Reset state when collapsing
                setSelectedSide(null);
                setShowSideSelector(false);
              }
              setIsExpanded(!isExpanded);
            }}
            className="flex items-center space-x-2 border border-black bg-white px-4 py-2 font-medium text-black transition-all hover:bg-black hover:text-white"
          >
            <svg
              className="h-5 w-5"
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
            <span>{comments.length} comments</span>
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Expandable Comments Section */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`border-t border-black bg-white p-6 transition-opacity duration-300 ${
          isExpanded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="mx-auto max-w-4xl space-y-6">
            {!selectedSide && !showSideSelector && (
              <CommentInputBar onClick={handleInputBarClick} />
            )}

            {showSideSelector && !selectedSide && (
              <SideSelector selectedSide={selectedSide} onSelectSide={handleSelectSide} />
            )}

            {selectedSide && (
              <CommentForm selectedSide={selectedSide} onSubmit={handleSubmitComment} />
            )}

            <div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Comments ({comments.length})
              </h3>
              <CommentList 
                comments={comments} 
                onReply={handleReply}
                userSide={selectedSide}
                onSideChosen={handleSideChosenFromReply}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

