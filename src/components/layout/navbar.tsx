import Link from 'next/link';
import { ThemeChanger } from '../features/theme-changer';

function Navbar() {
  return (
    <nav className="mx-auto flex h-[8vh] w-full max-w-6xl items-center justify-between">
      <div>
        <Link className="text-text-strong px-4 text-sm font-bold md:text-xl" href={`/`} replace>
          Engineering Diary
        </Link>
      </div>
      <ThemeChanger />
    </nav>
  );
}

export { Navbar };
