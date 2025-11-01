import AutoResizeTextarea from '@/components/ui/auto-resize-textarea';
import { ELogEntry, Mode } from '@/types';
import Markdown from 'react-markdown';

type EditorProps = {
  mode?: Mode;
  content?: string;
  handleChange: <K extends keyof ELogEntry>(key: K, value: ELogEntry[K]) => void;
};

function Editor({ mode = 'write', content = '', handleChange = () => {} }: EditorProps) {
  return (
    <div>
      {mode === 'write' ? (
        <AutoResizeTextarea
          onChange={(e) => handleChange('content', e.target.value)}
          value={content}
          minHeight="300px"
          placeholder="Your Thoughts..."
          className="text-input-text-neutral placeholder-input-text-weak w-full rounded-md bg-transparent p-2 text-xl outline-none md:text-2xl"
        />
      ) : (
        <div className="prose-brand min-h-[300px] w-full rounded-md">
          {content ? (
            <Markdown>{content}</Markdown>
          ) : (
            <div className="min-h-[300px]">
              <p className="text-text-weak p-4 text-center text-xl italic md:text-2xl">
                Start writing to preview your content
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export { Editor };
