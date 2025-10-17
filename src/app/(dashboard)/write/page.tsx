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
          <h3 className="text-lg font-semibold">WEDNESDAY, OCTOBER 14, 2025</h3>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-center text-6xl font-bold">Good Morning.</h1>
            <p className="text-xl">Take a moment to reflect on your journey.</p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 rounded-md bg-white p-8">
          <div>
            <h4 className="text-nuetral100 mb-2 font-semibold">Category</h4>
            <ToggleGroupRoot
              className="flex flex-wrap gap-2"
              value={category}
              onValueChange={setCategory}
            >
              {categories.map((cat) => (
                <ToggleGroupItem
                  className="border-border100 data-[state=on]:bg-nuetral100 data-[state=on]:text-border100 rounded-full border px-2 py-1 md:px-4"
                  key={cat.value}
                  value={cat.value}
                >
                  {cat.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroupRoot>
          </div>
          <div>
            <h4 className="text-nuetral100 mb-2 font-semibold">Title</h4>
            <input
              className="border-border100 focus:outline-bg100 placeholder-nuetral100 w-full rounded-md border p-2 outline-none focus:outline-1 focus:outline-solid"
              placeholder="Give your entry a meaningful title..."
            />
          </div>
          <div>
            <h4 className="text-nuetral100 mb-2 font-semibold">Your Thoughts</h4>
            <AutoResizeTextarea
              className="placeholder-nuetral100 border-border100 focus:outline-bg100 w-full rounded-md border p-2 outline-none focus:outline-1 focus:outline-solid"
              placeholder="What's on your mind today?"
            />
          </div>
          <div className="flex justify-end">
            <button className="border-border100 bg-bg100 text-bgMain w-full rounded-md border px-4 py-2 md:w-auto">
              Save entry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
