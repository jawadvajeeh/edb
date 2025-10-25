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
          className="border-cool-grey-500 text-cool-grey-500 rounded-full border px-2 py-1 transition-colors data-[state=on]:border-indigo-900 data-[state=on]:bg-indigo-100 data-[state=on]:font-medium data-[state=on]:text-indigo-900 md:px-4"
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
