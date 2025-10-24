import { BackToEntries } from '@/components/features/back-to-entries';
import { Edit } from '@/components/features/edit-btn';
import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import { Chip } from '@/components/ui/chip';
import { PenLine } from 'lucide-react';
import Link from 'next/link';
import Markdown from 'react-markdown';

function Entry() {
  const markdown = '# Hello';
  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className="mt-4">
          <BackToEntries />
        </div>
        <div className="mt-12">
          <div className="flex items-baseline justify-between md:items-center">
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
              <Chip>REALIZATION</Chip>
              <p className="text-cool-grey-500 text-sm md:text-base">Tuesday, October 14, 2025</p>
            </div>
            <div>
              <Link
                href="/write"
                className="flex items-center gap-2 rounded-md border border-indigo-950 bg-indigo-100 p-2 font-medium text-indigo-900 transition-colors duration-100 ease-linear hover:border-none hover:bg-indigo-200 hover:text-indigo-50 md:h-12"
              >
                <PenLine size={16} />
                <span className="hidden md:block">Edit</span>
              </Link>
            </div>
          </div>
          <h1 className="mt-4 text-xl font-medium text-indigo-900 md:text-4xl">
            Breakthrough in understanding React Server Components
          </h1>
          <div className="prose-brand mt-8 min-h-[200px] md:mt-12">
            <Markdown>{markdown}</Markdown>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Entry;
