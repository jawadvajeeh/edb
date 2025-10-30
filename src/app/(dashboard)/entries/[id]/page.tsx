'use client';

import { BackToEntries } from '@/components/features/back-to-entries';
import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { useGetEntry } from '@/hooks/use-get-entry';
import { deleteEntry } from '@/lib/utils';
import { PenLine } from 'lucide-react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { use, useMemo } from 'react';
import Markdown from 'react-markdown';

function Entry({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { entry, loading } = useGetEntry(id);
  const router = useRouter();

  const date = useMemo(() => (entry ? new Date(entry.createdAt).toLocaleString() : ''), [entry]);

  if (loading) return <p>...</p>;

  if (!entry) {
    notFound();
  }

  async function handleDelete() {
    await deleteEntry(id);
    router.push('/entries');
  }

  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className="mt-4">
          <BackToEntries />
        </div>
        <div className="mt-12">
          <div className="flex items-baseline justify-between md:items-center">
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
              <Chip>{entry.category}</Chip>
              <p className="text-text-neutral text-sm md:text-base">{date}</p>
            </div>
            <div>
              <Link
                href={`/entries/${id}/edit`}
                className="flex items-center gap-2 rounded-md border border-indigo-950 bg-indigo-100 p-2 font-medium text-indigo-900 transition-colors duration-100 ease-linear hover:border-none hover:bg-indigo-200 hover:text-indigo-50 md:px-4 md:py-2"
              >
                <PenLine size={16} />
                <span className="hidden md:block">Edit</span>
              </Link>
            </div>
          </div>
          <h1 className="text-text-strong mt-4 text-xl font-medium md:text-4xl">{entry.title}</h1>
          <div className="prose-brand mt-8 min-h-[200px] md:mt-12">
            <Markdown>{entry.content}</Markdown>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={handleDelete}
              className="bg-red-vivid-600 hover:bg-red-vivid-500 cursor-pointer font-medium text-indigo-50"
            >
              Delete Entry
            </Button>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Entry;
