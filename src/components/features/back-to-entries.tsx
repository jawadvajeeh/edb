'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

function BackToEntries() {
  const router = useRouter();
  return (
    <button onClick={() => router.replace('/entries')} className="flex cursor-pointer gap-2">
      <ArrowLeft />
      Back to Journal
    </button>
  );
}

export { BackToEntries };
