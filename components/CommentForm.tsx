'use client';

interface CommentFormProps {
  selectedSide: 'for' | 'against' | null;
  onSubmit: (content: string) => void;
}

export default function CommentForm({ selectedSide, onSubmit }: CommentFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const content = formData.get('content') as string;
    if (content.trim()) {
      onSubmit(content);
      e.currentTarget.reset();
    }
  };

  if (!selectedSide) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="border border-black bg-white p-6">
      <div className="mb-4">
        <label
          htmlFor="comment"
          className="mb-2 block text-sm font-medium text-black"
        >
          Add Your Comment
          <span className={`ml-2 border border-black px-2 py-1 text-xs font-semibold ${
            selectedSide === 'for'
              ? 'bg-black text-white'
              : 'bg-white text-black'
          }`}>
            {selectedSide === 'for' ? 'FOR' : 'AGAINST'}
          </span>
        </label>
        <textarea
          id="comment"
          name="content"
          rows={4}
          className="w-full border border-black bg-white px-4 py-3 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Share your thoughts on this debate..."
          required
        />
      </div>
      <button
        type="submit"
        className="w-full border border-black bg-white px-6 py-3 font-medium text-black transition-all hover:bg-black hover:text-white"
      >
        Post Comment
      </button>
    </form>
  );
}

