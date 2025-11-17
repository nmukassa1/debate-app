'use client';

import { useState } from 'react';
import SideSelector from './SideSelector';
import CommentForm from './CommentForm';

export interface CommentData {
  id: string;
  author: string;
  content: string;
  side: 'for' | 'against';
  createdAt: string;
  replies?: CommentData[];
}

interface CommentProps extends CommentData {
  onReply: (parentId: string, content: string, side: 'for' | 'against') => void;
  userSide: 'for' | 'against' | null;
  onSideChosen?: (side: 'for' | 'against') => void;
}

export default function Comment({ id, author, content, side, createdAt, replies = [], onReply, userSide, onSideChosen }: CommentProps) {
  const isFor = side === 'for';
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showSideSelector, setShowSideSelector] = useState(false);
  const [tempSelectedSide, setTempSelectedSide] = useState<'for' | 'against' | null>(null);

  const handleReplyClick = () => {
    setShowReplyForm(true);
    // If user hasn't chosen a side yet, show side selector
    if (!userSide) {
      setShowSideSelector(true);
    }
  };

  const handleSelectSide = (selectedSide: 'for' | 'against') => {
    setTempSelectedSide(selectedSide);
    setShowSideSelector(false);
    // Notify parent component that user has chosen a side
    if (onSideChosen) {
      onSideChosen(selectedSide);
    }
  };

  const handleSubmitReply = (replyContent: string) => {
    // Use userSide if available, otherwise use tempSelectedSide
    const replySide = userSide || tempSelectedSide;
    if (!replySide) return;
    
    onReply(id, replyContent, replySide);
    setShowReplyForm(false);
    setTempSelectedSide(null);
    setShowSideSelector(false);
  };

  // Determine which side to use for the form
  const formSide = userSide || tempSelectedSide;

  return (
    <div className="border-l-4 border-black bg-white">
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span
              className={`border border-black px-3 py-1 text-xs font-semibold ${
                isFor
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              }`}
            >
              {isFor ? 'FOR' : 'AGAINST'}
            </span>
            <span className="font-medium text-black">{author}</span>
          </div>
          <span className="text-sm text-black">{createdAt}</span>
        </div>
        <p className="mb-3 text-black">{content}</p>
        
        <button
          onClick={handleReplyClick}
          className="mb-3 text-sm text-black underline hover:no-underline"
        >
          Reply
        </button>

        {showReplyForm && (
          <div className="mb-4 mt-4 space-y-4 border-t border-black pt-4">
            {showSideSelector && !formSide && (
              <SideSelector selectedSide={tempSelectedSide} onSelectSide={handleSelectSide} />
            )}

            {formSide && (
              <CommentForm selectedSide={formSide} onSubmit={handleSubmitReply} />
            )}
          </div>
        )}
      </div>

      {replies.length > 0 && (
        <div className="ml-8 border-l-2 border-black">
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              {...reply}
              onReply={onReply}
              userSide={userSide}
              onSideChosen={onSideChosen}
            />
          ))}
        </div>
      )}
    </div>
  );
}

