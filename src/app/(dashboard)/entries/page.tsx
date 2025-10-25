'use client';

import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import { Chip } from '@/components/ui/chip';
import { useEntries } from '@/hooks/use-entries';
import { groupEntriesByWeek } from '@/lib/utils';
import { ArrowRight, PenLine } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Entry = {
  id: string;
  title: string;
  category: string;
  content: string;
  createdAt: string;
};

const toPlainPreview = (md: string) =>
  md
    .replace(/`{1,3}[\s\S]*?`{1,3}/g, '') // strip inline/blocks of code
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '') // strip images
    .replace(/\[[^\]]*\]\([^)]+\)/g, '') // strip links (keep text below if you want)
    .replace(/[#>*_~\-`]+/g, '') // strip markdown tokens
    .replace(/\n+/g, ' ') // collapse new lines
    .trim()
    .slice(0, 250);

type Entries = Entry[];

function Entries() {
  const { entries, loading } = useEntries();

  if (loading) return <p>Loading...</p>;

  const groups = groupEntriesByWeek(entries);
  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className="flex flex-col items-start py-2 md:px-4">
          <div className="mb-8 flex w-full items-baseline justify-between md:mb-12">
            <div>
              <h1 className="mb-2 text-3xl font-semibold text-indigo-900 md:text-5xl">
                Journal Entries
              </h1>
              <p className="text-cool-grey-500 text-base md:text-xl">
                Your reflections and growth over time
              </p>
            </div>
            <div>
              <Link
                href="/write"
                className="flex items-center gap-2 rounded-md border border-indigo-950 bg-indigo-100 p-2 font-medium text-indigo-900 transition-colors duration-100 ease-linear hover:border-none hover:bg-indigo-200 hover:text-indigo-50"
              >
                <PenLine size={16} />
                <span className="hidden md:block">New Entry</span>
              </Link>
            </div>
          </div>
          <div className="w-full">
            {groups.map((g) => {
              return (
                <section key={g.key}>
                  <p className="text-cool-grey-500 mb-8 text-xl font-medium md:text-3xl">
                    {g.label}
                  </p>
                  <div className="flex flex-col gap-8">
                    {g.entries.length > 0 ? (
                      g.entries.map((entry, index) => {
                        const preview = toPlainPreview(entry.content);
                        const withEllipsis = preview.length === 250 ? preview + '…' : preview;

                        return (
                          <Link
                            key={index}
                            className="group inline-block"
                            href={`/entries/${entry.id}`}
                          >
                            <div className="border-cool-grey-100 flex border-b-1 pb-8 transition-colors duration-300 ease-out group-hover:border-indigo-600">
                              <div className="flex flex-1 items-center justify-center">
                                <p className="text-cool-grey-400 p-4 font-medium">
                                  {new Date(entry.createdAt).toLocaleString()}
                                </p>
                              </div>
                              <div className="flex-2">
                                <Chip>{entry.category}</Chip>
                                <p className="text-cool-grey-700 mt-4 text-lg font-medium md:text-2xl">
                                  {entry.title}
                                </p>
                                <p className="text-cool-grey-400 w-full">{withEllipsis}</p>
                                <p></p>
                              </div>
                              <div className="flex flex-1 justify-end">
                                <ArrowRight className="text-indigo-700 transition-all duration-300 ease-out group-hover:translate-x-1" />
                              </div>
                            </div>
                          </Link>
                        );
                      })
                    ) : (
                      <p>No entries yet.</p>
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Entries;
