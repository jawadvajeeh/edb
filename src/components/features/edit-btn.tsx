'use client';

import { FilePenLine } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Edit() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/entries/1/edit')}
      className="flex cursor-pointer items-center gap-2 rounded-md border p-1 px-2 text-xs md:text-base"
    >
      <FilePenLine size={16} />
      Edit
    </button>
  );
}

export { Edit };
