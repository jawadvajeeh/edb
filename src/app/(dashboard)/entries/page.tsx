import { MainContainer } from '@/components/layout/main-container';
import { ArrowRight, PenLine } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Entries() {
  return (
    <MainContainer>
      <div className="flex flex-col items-start px-2 py-2 md:py-24">
        <div className="mb-16 flex w-full items-baseline justify-between">
          <div>
            <h1 className="text-text200 mb-4 text-4xl font-semibold">Journal Entries</h1>
            <p className="text-text100 text-lg">Your reflections and growth over time</p>
          </div>
          <div>
            <Link
              href="/write"
              className="btn-primary flex w-8 items-center justify-center gap-2 md:w-auto md:px-4"
            >
              <PenLine size={16} />
              <span className="hidden md:block">New Entry</span>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <p className="text-text200 mb-8 text-2xl font-medium">Oct 14, 2025</p>
          <div className="flex flex-col gap-8">
            <Link href="/entries/1">
              <div className="border-border100 flex border-b-1 pb-8">
                <div className="flex flex-1 items-center justify-center">
                  <p className="text-text100 p-4 font-medium">Oct 14, 2025</p>
                </div>
                <div className="flex-2">
                  <span className="bg-bg200 text-text100 rounded-full px-2 py-1 text-sm font-medium md:px-4">
                    REALIZATION
                  </span>
                  <p className="text-text200 mt-4 text-2xl font-medium">
                    Breakthrough in in uderstanding React Server Components{' '}
                  </p>
                  <p className="text-text100 mt-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, aut. Corrupti
                    mollitia ullam aliquid voluptas, consectetur quia dolores dolor quis...
                  </p>
                </div>
                <div className="flex flex-1 justify-end">
                  <ArrowRight color="hsl(41, 8%, 48%)" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default Entries;
