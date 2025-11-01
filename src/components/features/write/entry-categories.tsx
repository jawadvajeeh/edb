import { ToggleGroupItem, ToggleGroupRoot } from '@/components/ui/toggle-group';
import { categories } from '@/lib/constants';
import { CategoryEnum, ELogEntry } from '@/types';

type EntryCategoriesProps = {
  category: CategoryEnum | null;
  handleChange?: <K extends keyof ELogEntry>(key: K, value: ELogEntry[K]) => void;
};

function EntryCategories({ category, handleChange = () => {} }: EntryCategoriesProps) {
  return (
    <ToggleGroupRoot
      value={category}
      onValueChange={(value) => handleChange('category', value ? (value as CategoryEnum) : null)}
      className="flex flex-wrap gap-2"
    >
      {categories.map((cat) => (
        <ToggleGroupItem
          className="text-on-surface bg-surface data-[state=on]:border-border-primary data-[state=on]:bg-primary data-[state=on]:text-on-primary border-on-surface rounded-2xl border px-2 py-1 text-sm transition-colors data-[state=on]:font-medium md:px-2 md:py-0 md:text-base"
          key={cat.value}
          value={cat.value}
        >
          {cat.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroupRoot>
  );
}

export { EntryCategories };
