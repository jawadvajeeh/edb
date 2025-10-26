'use client';

import { EntryTitleInput } from '@/components/features/entry-title-input';
import { Editor } from '@/components/features/write/editor';
import { EntryCategories } from '@/components/features/write/entry-categories';
import { ToggleEditorMode } from '@/components/features/write/toggle-editor-mode';
import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { useGetEntry } from '@/hooks/use-get-entry';
import { useIsEditValid } from '@/hooks/use-is-edit-valid';
import { updateEntryById } from '@/lib/utils';
import { ELogEntry, Mode } from '@/types';
import { ArrowRight, SendHorizontal } from 'lucide-react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';

function Edit({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { entry, loading } = useGetEntry(id);
  const [mode, setMode] = useState<Mode>('write');

  const router = useRouter();

  const [logEntry, setLogEntry] = useState<ELogEntry>({
    category: null,
    content: '',
    title: '',
  });

  const { title, category, content } = logEntry;
  useEffect(() => {
    if (entry) {
      setLogEntry({
        category: entry.category,
        content: entry.content,
        title: entry.title,
      });
    }
  }, [entry]);

  const isEditValid = useIsEditValid(
    {
      title: entry?.title ?? '',
      content: entry?.content ?? '',
      category: entry?.category ?? null,
    },
    { title, category, content }
  );

  function handleEntryChange<K extends keyof typeof logEntry>(key: K, value: (typeof logEntry)[K]) {
    setLogEntry((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSave() {
    await new Promise((r) => setTimeout(r, 300)); // same delay
    updateEntryById(id, { ...logEntry });
    router.push('/entries');
  }

  if (loading) return <p>...</p>;

  if (!entry) {
    notFound();
  }
  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className="mb-4 flex w-full justify-end">
          <Link
            className="text-cool-grey-500 group flex items-center gap-2 font-medium hover:text-indigo-600"
            href="/entries"
          >
            <span>View Entries</span>
            <ArrowRight
              strokeWidth={1.5}
              className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-indigo-600"
            />
          </Link>
        </div>
        <EntryTitleInput
          type="text"
          value={title}
          onChange={(e) => handleEntryChange('title', e.target.value)}
        />
        <div className="mt-8">
          <EntryCategories category={category} handleChange={handleEntryChange} />
        </div>
        <div className="my-8">
          <ToggleEditorMode mode={mode} setMode={setMode} />
          <div>
            <Editor mode={mode} content={content} handleChange={handleEntryChange} />
            <div className="flex justify-end">
              <Button
                onClick={handleSave}
                disabled={!isEditValid}
                className="flex cursor-pointer items-center gap-2 px-4 font-medium"
              >
                <SendHorizontal color="#19216c" className="md:hidden" strokeWidth={1.5} size={16} />
                <span className="hidden md:block">Publish</span>
              </Button>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Edit;
