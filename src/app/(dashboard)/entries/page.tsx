import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import { ArrowRight, PenLine } from 'lucide-react';
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
            <p className="text-cool-grey-500 mb-8 text-xl font-medium md:text-3xl">Oct 2025</p>
            <div className="flex flex-col gap-8">
              <Link className="group inline-block" href="/entries/1">
                <div className="border-cool-grey-100 flex border-b-1 pb-8 transition-colors duration-300 ease-out group-hover:border-indigo-600">
                  <div className="flex flex-1 items-center justify-center">
                    <p className="text-cool-grey-400 p-4 font-medium">Oct 14, 2025</p>
                  </div>
                  <div className="flex-2">
                    <span className="rounded-full border border-indigo-900 bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-900 transition-colors md:px-4 md:text-base">
                      REALIZATION
                    </span>
                    <p className="text-cool-grey-700 mt-4 text-lg font-medium md:text-2xl">
                      Breakthrough in in uderstanding React Server Components
                    </p>
                    <p className="text-cool-grey-400 mt-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, aut. Corrupti
                      mollitia ullam aliquid voluptas, consectetur quia dolores dolor quis...
                    </p>
                  </div>
                  <div className="flex flex-1 justify-end">
                    <ArrowRight className="text-indigo-700 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Entries;
