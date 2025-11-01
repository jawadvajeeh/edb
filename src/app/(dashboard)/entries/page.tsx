'use client';

import { Logs } from '@/components/features/entries/logs';
import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import { CustomLink } from '@/components/ui/custom-link';
import { PenLine } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Entries() {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className="flex flex-col items-start py-2 md:px-4">
          <div className="mb-8 flex w-full items-baseline justify-between md:mb-12">
            <div>
              <h1 className="text-text-strong mb-2 text-3xl font-semibold md:text-5xl">
                Progress Made Visible.
              </h1>
              <p className="text-text-neutral text-base md:text-xl">
                Capture today’s work and build your personal engineering story over time.
              </p>
            </div>
            <div>
              <CustomLink
                className="flex items-center gap-2 px-2 text-lg"
                variant={`ghost`}
                href={`/write`}
              >
                <PenLine size={16} />
                <span className="hidden md:block">New Entry</span>
              </CustomLink>
            </div>
          </div>
          <Logs />
        </div>
      </MainContainer>
    </div>
  );
}

export default Entries;
