'use client';

import { BackToEntries } from '@/components/features/back-to-entries';
import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import { Chip } from '@/components/ui/chip';
import { PenLine } from 'lucide-react';
import Link from 'next/link';
import { use, useEffect, useMemo, useState } from 'react';
import Markdown from 'react-markdown';

function Entry({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [entry, setEntry] = useState<{
    id: string;
    title: string;
    category: string;
    content: string;
    createdAt: string;
  } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored: {
      id: string;
      title: string;
      category: string;
      content: string;
      createdAt: string;
    }[] = JSON.parse(localStorage.getItem('entries') || '[]');
    const found = stored.find((e) => e.id === id) || null;
    setEntry(found);
  }, [id]);

  const date = useMemo(() => (entry ? new Date(entry.createdAt).toLocaleString() : ''), [entry]);

  if (!mounted) return null;

  if (!entry) {
    return (
      <div className="mx-auto max-w-2xl p-6">
        <p className="text-red-600">Entry not found.</p>
        <Link href="/entries" className="text-blue-600 underline">
          Back to entries
        </Link>
      </div>
    );
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
              <p className="text-cool-grey-500 text-sm md:text-base">{date}</p>
            </div>
            <div>
              <Link
                href="/write"
                className="flex items-center gap-2 rounded-md border border-indigo-950 bg-indigo-100 p-2 font-medium text-indigo-900 transition-colors duration-100 ease-linear hover:border-none hover:bg-indigo-200 hover:text-indigo-50 md:h-12"
              >
                <PenLine size={16} />
                <span className="hidden md:block">Edit</span>
              </Link>
            </div>
          </div>
          <h1 className="mt-4 text-xl font-medium text-indigo-900 md:text-4xl">{entry.title}</h1>
          <div className="prose-brand mt-8 min-h-[200px] md:mt-12">
            <Markdown>{entry.content}</Markdown>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Entry;
