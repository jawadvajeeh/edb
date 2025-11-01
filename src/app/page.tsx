import { MainContainer } from '@/components/layout/main-container';
import { Navbar } from '@/components/layout/navbar';
import { CustomLink } from '@/components/ui/custom-link';

function Home() {
  return (
    <div className="from-background-strong to-background-weak bg-gradient-to-t">
      <Navbar />
      <MainContainer className="h-[92vh]">
        <section className="mt-0 flex h-full flex-col items-center justify-center p-4 md:justify-start md:p-16 md:pt-36">
          <h1 className="text-text-strong text-center text-4xl font-medium md:text-5xl">
            Your Engineering Diary,
            <span className="relative inline-block">
              <span className="relative z-10">Simplified</span>
              <span className="absolute inset-x-1 bottom-0 h-3 bg-[var(--blue-9)] md:-bottom-0.5 md:h-4"></span>
            </span>
            .
          </h1>
          <p className="text-text-neutral mt-4 w-full text-center text-lg md:w-3/4 md:text-2xl">
            Write quick logs, organize by category, and finally see what you accomplished every
            week.
          </p>
          <CustomLink className="mt-8 text-lg font-medium" href="/write">
            Start Now
          </CustomLink>
        </section>
      </MainContainer>
    </div>
  );
}

export default Home;
