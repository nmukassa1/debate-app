'use client';

interface CreateDebateFormProps {
  onSubmit: (data: { title: string; description: string }) => void;
}

export default function CreateDebateForm({ onSubmit }: CreateDebateFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    
    if (title.trim() && description.trim()) {
      onSubmit({ title, description });
      e.currentTarget.reset();
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-black">
          Create a New Debate
        </h1>
        <p className="text-black">
          Start a discussion and let the community share their perspectives
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-black bg-white p-8"
      >
        <div className="mb-6">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-black"
          >
            Debate Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full border border-black bg-white px-4 py-3 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="e.g., Should remote work become the standard?"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-black"
          >
            Debate Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            required
            className="w-full border border-black bg-white px-4 py-3 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Provide context and details about the debate topic..."
          />
        </div>

        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            className="border border-black bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="border border-black bg-white px-6 py-3 font-medium text-black transition-all hover:bg-black hover:text-white"
          >
            Create Debate
          </button>
        </div>
      </form>
    </div>
  );
}

