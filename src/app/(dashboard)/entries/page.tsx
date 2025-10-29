'use client';

import { Logs } from '@/components/features/entries/logs';
import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
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
              <Link
                href="/write"
                className="flex items-center gap-2 rounded-md border border-indigo-950 bg-indigo-100 p-2 font-medium text-indigo-900 transition-colors duration-100 ease-linear hover:border-none hover:bg-indigo-200 hover:text-indigo-50"
              >
                <PenLine size={16} />
                <span className="hidden md:block">New Entry</span>
              </Link>
            </div>
          </div>
          <Logs />
        </div>
      </MainContainer>
    </div>
  );
}

export default Entries;
