import { Chip } from '@/components/ui/chip';
import { toPlainPreview } from '@/lib/utils';
import { WeekGroup } from '@/types';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type LogProps = {
  group: WeekGroup;
};

function Log({ group: g }: LogProps) {
  return (
    <section className="mb-8">
      <p className="text-cool-grey-500 mb-8 text-xl font-medium md:text-3xl">{g.label}</p>
      <div className="flex flex-col gap-8">
        {g.entries.length > 0 ? (
          g.entries.map((entry, index) => {
            const preview = toPlainPreview(entry.content);
            const withEllipsis = preview.length === 250 ? preview + '…' : preview;

            return (
              <Link key={index} className="group inline-block" href={`/entries/${entry.id}`}>
                <div className="border-cool-grey-100 flex border-b-1 pb-8 transition-colors duration-300 ease-out group-hover:border-indigo-600">
                  <div className="flex flex-1 items-center justify-center">
                    <p className="text-cool-grey-400 p-4 font-medium">
                      {new Date(entry.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex-2">
                    <Chip>{entry.category}</Chip>
                    <p className="text-cool-grey-700 mt-4 text-lg font-medium md:text-2xl">
                      {entry.title}
                    </p>
                    <p className="text-cool-grey-400 w-full">{withEllipsis}</p>
                    <p></p>
                  </div>
                  <div className="flex flex-1 justify-end">
                    <ArrowRight className="text-indigo-700 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p>No entries yet.</p>
        )}
      </div>
    </section>
  );
}

export { Log };
