'use client';

import { useRouter } from 'next/navigation';
import CreateDebateForm from '@/components/CreateDebateForm';

export default function NewDebatePage() {
  const router = useRouter();

  const handleSubmit = (data: { title: string; description: string }) => {
    // In a real app, this would make an API call
    console.log('Creating debate:', data);
    // Navigate back to home after creation
    router.push('/');
  };

  return <CreateDebateForm onSubmit={handleSubmit} />;
}

