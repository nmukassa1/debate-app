import Comment, { CommentData } from './Comment';

interface CommentListProps {
  comments: CommentData[];
  onReply: (parentId: string, content: string, side: 'for' | 'against') => void;
  userSide: 'for' | 'against' | null;
  onSideChosen?: (side: 'for' | 'against') => void;
}

export default function CommentList({ comments, onReply, userSide, onSideChosen }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <div className="border border-black bg-white p-8 text-center">
        <p className="text-black">
          No comments yet. Be the first to share your thoughts!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Comment 
          key={comment.id} 
          {...comment} 
          onReply={onReply}
          userSide={userSide}
          onSideChosen={onSideChosen}
        />
      ))}
    </div>
  );
}

