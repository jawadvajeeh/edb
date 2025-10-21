import { BackToEntries } from '@/components/features/back-to-entries';
import { Edit } from '@/components/features/edit-btn';
import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import { Chip } from '@/components/ui/chip';
import Markdown from 'react-markdown';

function Entry() {
  const markdown = '# Hello';
  return (
    <>
      <Navbar />
      <MainContainer>
        <div className="mt-4">
          <BackToEntries />
        </div>
        <div className="mt-12">
          <div className="flex items-baseline justify-between md:items-center">
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
              <Chip>REALIZATION</Chip>
              <p className="text-sm md:text-base">Tuesday, October 14, 2025</p>
            </div>
            <Edit />
          </div>
          <h1 className="mt-4 text-xl md:text-4xl">
            Breakthrough in understanding React Server Components{' '}
          </h1>
          <div className="prose mt-8 min-h-[200px] max-w-none md:mt-12">
            <Markdown>{markdown}</Markdown>
          </div>
        </div>
      </MainContainer>
    </>
  );
}

export default Entry;
