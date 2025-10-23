'use client';

import React from 'react';
import { EntryTitleInput } from '@/components/features/entry-title-input';
import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import AutoResizeTextarea from '@/components/ui/auto-resize-textarea';
import { ToggleGroupItem, ToggleGroupRoot } from '@/components/ui/toggle-group';
import Markdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Eye, PenLine, SendHorizontal } from 'lucide-react';

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
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState<string | null>(null);
  const [mode, setMode] = React.useState<Mode>('write');
  const [content, setContent] = React.useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = React.useState(false);

  React.useEffect(() => {
    if (category !== null && content !== '' && title !== '') {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  }, [category, content, title]);

  function handleSubmit() {
    alert('Submit');
  }

  return (
    <div>
      <Navbar />
      <MainContainer>
        <EntryTitleInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className="mt-8">
          <ToggleGroupRoot
            value={category}
            onValueChange={setCategory}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <ToggleGroupItem
                className="border-cool-grey-500 text-cool-grey-500 rounded-full border px-2 py-1 transition-colors data-[state=on]:border-indigo-900 data-[state=on]:bg-indigo-100 data-[state=on]:font-medium data-[state=on]:text-indigo-900 md:px-4"
                key={cat.value}
                value={cat.value}
              >
                {cat.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroupRoot>
        </div>
        <div className="my-8">
          <div className="flex w-full justify-end">
            <div className="flex rounded-md">
              <Button
                onClick={() => setMode('write')}
                data-mode={mode}
                className="flex items-center gap-2 rounded-r-none font-medium data-[mode=preview]:bg-indigo-50"
              >
                <PenLine size={16} />
                <span className="hidden md:block">Write</span>
              </Button>
              <Button
                onClick={() => setMode('preview')}
                data-mode={mode}
                className="flex items-center gap-2 rounded-l-none font-medium data-[mode=write]:bg-indigo-50"
              >
                <Eye size={16} />
                <span className="hidden md:block">Preview</span>
              </Button>
            </div>
          </div>
          <div>
            {mode === 'write' ? (
              <AutoResizeTextarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                minHeight="300px"
                placeholder="Your Thoughts..."
                className="text-cool-grey-800 w-full rounded-md bg-transparent p-2 text-xl placeholder-indigo-900/50 outline-none md:text-2xl"
              />
            ) : (
              <div className="prose-brand min-h-[300px] w-full rounded-md p-2">
                {content ? (
                  <Markdown>{content}</Markdown>
                ) : (
                  <p className="text-cool-grey-300 p-4 text-center text-xl italic md:text-2xl">
                    Start writing to preview your content
                  </p>
                )}
              </div>
            )}
            <div className="flex justify-end">
              <Button
                onClick={handleSubmit}
                disabled={!isSubmitEnabled}
                className="flex items-center gap-2 px-4 font-medium"
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
