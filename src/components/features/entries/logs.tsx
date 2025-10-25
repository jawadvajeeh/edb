'use client';

import { useEntries } from '@/hooks/use-entries';
import { groupEntriesByWeek } from '@/lib/utils';
import { Log } from './log';
import { WeekGroup } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

function ShowLogs({ groups }: { groups: WeekGroup[] }) {
  if (groups.length === 0) {
    return (
      <div className="text-cool-grey-500 mt-16 flex w-full flex-col items-center gap-2 md:text-lg">
        <p>Nothing here yet.</p>
        <p className="text-center">
          Capture today’s work and build your personal engineering story over time.
        </p>
        <Image
          src="/no_log.svg"
          alt="Nothing here yet."
          width={200}
          height={200}
          className="mt-12 rounded-md"
        />
        <Link
          href="/write"
          className="mt-18 inline-block rounded-full border-1 bg-indigo-100 px-8 py-2 text-lg font-medium text-indigo-900 transition-colors hover:bg-indigo-300 hover:text-indigo-50"
        >
          Start Capturing
        </Link>
      </div>
    );
  }
  return groups.map((g) => {
    return <Log key={g.key} group={g} />;
  });
}

function Logs() {
  const { entries, loading } = useEntries();
  const groups = groupEntriesByWeek(entries);
  return (
    <div className="w-full">
      {loading && <p>...</p>}
      {!loading && <ShowLogs groups={groups} />}
    </div>
  );
}

export { Logs };
