import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Navbar />
      <MainContainer className="h-[92vh]">
        <section className="mt-0 flex h-full flex-col items-center justify-center p-4 md:justify-start md:p-16 md:pt-36">
          <h1 className="text-center text-4xl font-bold text-indigo-900 md:text-5xl">
            Your Engineering Diary,{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Simplified</span>
              <span className="absolute -inset-x-1 bottom-0 h-4 bg-indigo-100 md:-bottom-0.5 md:h-4"></span>
            </span>
            .
          </h1>
          <p className="text-cool-grey-700 mt-4 w-full text-center text-lg md:w-3/4 md:text-2xl">
            Capture what you built, learned, and fixed. A minimalist log that helps you grow beyond
            your code.
          </p>
          <Link
            href="/write"
            className="mt-8 inline-block rounded-full border-2 bg-indigo-100 px-8 py-2 text-lg font-medium text-indigo-900"
          >
            Get Started
          </Link>
        </section>
      </MainContainer>
    </div>
  );
}

export default Home;
