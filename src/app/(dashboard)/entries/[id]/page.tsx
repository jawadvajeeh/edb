'use client';

import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { CustomLink } from '@/components/ui/custom-link';
import { useGetEntry } from '@/hooks/use-get-entry';
import { deleteEntry } from '@/lib/utils';
import { ArrowLeft, PenLine, Trash } from 'lucide-react';
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
        <div className="mt-4 flex">
          {/* <BackToEntries /> */}
          <CustomLink className="group flex gap-2 px-0" href={`/entries`} replace variant={`ghost`}>
            <ArrowLeft
              className="group-hover:text-text-strong transition-transform duration-300 ease-out group-hover:-translate-x-1"
              strokeWidth={1.5}
            />
            Back to journal
          </CustomLink>
        </div>
        <div className="mt-12">
          <div className="flex items-baseline justify-between md:items-center">
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
              <Chip>{entry.category}</Chip>
              <p className="text-text-neutral text-sm md:text-base">{date}</p>
            </div>
            <div>
              <CustomLink
                className="flex items-center gap-2 px-2"
                variant={`ghost`}
                href={`/entries/${id}/edit`}
              >
                <PenLine size={16} />
                Edit
              </CustomLink>
            </div>
          </div>
          <h1 className="text-text-strong mt-4 text-xl font-medium md:text-4xl">{entry.title}</h1>
          <div className="prose-brand mt-8 min-h-[200px] md:mt-12">
            <Markdown>{entry.content}</Markdown>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={handleDelete}
              className="bg-button-background-error text-button-content-error flex cursor-pointer items-center gap-2 font-medium"
            >
              <Trash strokeWidth={3} size={16} />
              Delete Entry
            </Button>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Entry;
