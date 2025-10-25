import { Button } from '@/components/ui/button';
import { Mode } from '@/types';
import { Eye, PenLine } from 'lucide-react';

type ToggleEditorModeProps = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

function ToggleEditorMode({ mode, setMode }: ToggleEditorModeProps) {
  return (
    <div className="flex w-full justify-end">
      <div className="flex rounded-md">
        <Button
          onClick={() => setMode('write')}
          data-mode={mode}
          className="flex items-center gap-2 rounded-r-none font-medium data-[mode=preview]:bg-indigo-50"
        >
          <PenLine size={16} />
          <span className="hidden md:block">Write</span>
        </Button>
        <Button
          onClick={() => setMode('preview')}
          data-mode={mode}
          className="flex items-center gap-2 rounded-l-none font-medium data-[mode=write]:bg-indigo-50"
        >
          <Eye size={16} />
          <span className="hidden md:block">Preview</span>
        </Button>
      </div>
    </div>
  );
}

export { ToggleEditorMode };
