'use client';

import AutoResizeTextarea from '@/components/ui/auto-resize-textarea';
import { ToggleGroupItem, ToggleGroupRoot } from '@/components/ui/toggle-group';
import { formatDateReadable, getGreeting } from '@/lib/utils';
import { ArrowRight, Eye, PenLine } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Markdown from 'react-markdown';

const categories = [
  {
    value: 'progress',
    label: 'Progress',
  },
  {
    value: 'challenge',
    label: 'Challenge',
  },
  {
    value: 'realization',
    label: 'Realization',
  },
  {
    value: 'reflection',
    label: 'Reflection',
  },
  {
    value: 'codeSnippet',
    label: 'Code Snippet',
  },
  {
    value: 'growthOrAchivement',
    label: 'Growth/Achievement',
  },
];

type Mode = 'write' | 'preview';

function Write() {
  const [category, setCategory] = React.useState<string | null>(null);
  const [mode, setMode] = React.useState<Mode>('write');
  const [content, setContent] = React.useState('');

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center px-2 py-2 md:py-24">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-text100 font-semibold md:text-lg">{formatDateReadable()}</h3>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-supporting100 text-center text-4xl font-semibold md:text-5xl">
              {getGreeting()}
            </h1>
            <p className="text-text100 text-lg md:text-xl">
              Take a moment to reflect on your journey.
            </p>
          </div>
        </div>
        <div className="mt-4 flex w-full justify-end gap-1 p-4">
          <Link className="text-text100 font-semibold" href="/entries">
            View all entries
          </Link>
          <ArrowRight color="hsl(41, 8%, 48%)" />
        </div>
        <div className="border-border100 flex w-full flex-col gap-4 rounded-lg border bg-white p-4 shadow-md md:p-8">
          <div>
            <h4 className="text-text500 mb-2 font-semibold">Category</h4>
            <ToggleGroupRoot
              className="flex flex-wrap gap-2"
              value={category}
              onValueChange={setCategory}
            >
              {categories.map((cat) => (
                <ToggleGroupItem
                  className="border-border100 data-[state=on]:bg-primary100 data-[state=on]:text-bg100 rounded-full border px-2 py-1 md:px-4"
                  key={cat.value}
                  value={cat.value}
                >
                  {cat.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroupRoot>
          </div>
          <div>
            <h4 className="text-text500 mb-2 font-semibold">Title</h4>
            <input
              className="my-input placeholder-text100 w-full"
              placeholder="Give your entry a meaningful title..."
            />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <h4 className="text-text500 mb-2 font-semibold">Your Thoughts</h4>
              <div className="bg-bg100 border-border100 text-text100 flex items-center gap-1 rounded-md border p-1">
                <button
                  data-mode={mode}
                  onClick={() => setMode('write')}
                  className="data-[mode=write]:bg-primary100 data-[mode=write]:text-bg100 flex items-center gap-2 rounded-md px-4"
                >
                  <PenLine size={16} />
                  Write
                </button>
                <button
                  data-mode={mode}
                  onClick={() => setMode('preview')}
                  className="data-[mode=preview]:bg-primary100 data-[mode=preview]:text-bg100 flex items-center gap-2 rounded-sm px-4"
                >
                  <Eye size={16} />
                  Preview
                </button>
              </div>
            </div>
            {mode === 'write' ? (
              <AutoResizeTextarea
                value={content}
                minHeight="180px"
                className="my-input placeholder-text100 w-full"
                placeholder="What's on your mind today?"
                onChange={(e) => setContent(e.target.value)}
              />
            ) : (
              <div className="border-border100 bg-bg100 prose min-h-[200px] max-w-none rounded-md border p-2">
                <Markdown>{content}</Markdown>
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <button className="btn-primary w-full px-4 md:w-auto">Save entry</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
