import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Navbar />
      <MainContainer className="h-[92vh]">
        <section className="mt-0 flex h-full flex-col items-center justify-center p-4 md:justify-start md:p-16 md:pt-36">
          <h1 className="text-center text-4xl font-bold md:text-5xl">
            Your Engineering Diary, Simplified.
          </h1>
          <p className="mt-4 w-full text-center text-lg md:w-3/4">
            Capture what you built, learned, and fixed. A minimalist log that helps you grow beyond
            your code.
          </p>
          <Link
            href="/write"
            className="mt-8 w-36 rounded-lg bg-black px-4 py-2 text-center text-white"
          >
            Get Started
          </Link>
        </section>
      </MainContainer>
    </div>
  );
}

export default Home;
