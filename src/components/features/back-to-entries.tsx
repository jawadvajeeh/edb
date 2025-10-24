'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

function BackToEntries() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.replace('/entries')}
      className="group text-cool-grey-500 group flex cursor-pointer items-center gap-2 font-medium hover:text-indigo-600"
    >
      <ArrowLeft
        strokeWidth={1.5}
        className="transition-transform duration-300 ease-out group-hover:-translate-x-1 group-hover:text-indigo-600"
      />
      Back to Journal
    </button>
  );
}

export { BackToEntries };
