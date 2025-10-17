'use client';

import AutoResizeTextarea from '@/components/ui/auto-resize-textarea';
import { ToggleGroupItem, ToggleGroupRoot } from '@/components/ui/toggle-group';
import React from 'react';

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

function Write() {
  const [category, setCategory] = React.useState<string | null>(null);

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center gap-12 px-2 py-24">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-text100 font-semibold md:text-lg">WEDNESDAY, OCTOBER 14, 2025</h3>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-text400 text-center text-4xl font-semibold md:text-5xl">
              Good Morning.
            </h1>
            <p className="text-text100 text-lg md:text-xl">
              Take a moment to reflect on your journey.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 md:p-8">
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
            <h4 className="text-text500 mb-2 font-semibold">Your Thoughts</h4>
            <AutoResizeTextarea
              minHeight="180px"
              className="my-input placeholder-text100 w-full"
              placeholder="What's on your mind today?"
            />
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
