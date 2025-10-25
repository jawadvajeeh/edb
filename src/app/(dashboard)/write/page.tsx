'use client';

import React, { useState } from 'react';
import { EntryTitleInput } from '@/components/features/entry-title-input';
import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, SendHorizontal } from 'lucide-react';
import Link from 'next/link';
import { ELogEntry, Mode } from '@/types';
import { useIsValidEntry } from '@/hooks/use-valid-entry';
import { Editor } from '@/components/features/write/editor';
import { EntryCategories } from '@/components/features/write/entry-categories';
import { ToggleEditorMode } from '@/components/features/write/toggle-editor-mode';

function Write() {
  const [mode, setMode] = React.useState<Mode>('write');

  const [logEntry, setLogEntry] = useState<ELogEntry>({
    category: null,
    content: '',
    title: '',
  });

  const { category, content, title } = logEntry;

  const isLogEntryValid = useIsValidEntry(logEntry);

  function handleEntryChange<K extends keyof typeof logEntry>(key: K, value: (typeof logEntry)[K]) {
    setLogEntry((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {
    const entry = {
      id: String(Date.now()),
      title,
      category,
      content,
      createdAt: new Date().toISOString(),
    };
    const existingEntries = JSON.parse(localStorage.getItem('entries') ?? '[]') || [];
    existingEntries.push(entry);
    localStorage.setItem('entries', JSON.stringify(existingEntries));

    setLogEntry({ category: null, content: '', title: '' });
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
                onClick={handleSubmit}
                disabled={!isLogEntryValid}
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

export default Write;
