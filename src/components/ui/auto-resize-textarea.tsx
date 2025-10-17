import * as React from 'react';

type AutoResizeTextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> & {
  /** Initial height before first measurement (e.g. "80px"). Defaults to "80px". */
  defaultHeight?: string;
  /** Minimum height the textarea can shrink to (CSS length). If omitted, uses defaultHeight. */
  minHeight?: string;
  /** Maximum height it can grow to (CSS length). Optional. */
  maxHeight?: string;
  /** Pass inline styles if you want; component will inject height/overflow. */
  style?: React.CSSProperties;
};

const AutoResizeTextarea = React.forwardRef<HTMLTextAreaElement, AutoResizeTextareaProps>(
  function AutoResizeTextarea(
    { defaultHeight = '80px', minHeight, maxHeight, onChange, onInput, style, ...props },
    forwardedRef
  ) {
    const innerRef = React.useRef<HTMLTextAreaElement | null>(null);

    // Merge refs
    React.useEffect(() => {
      if (!forwardedRef) return;
      if (typeof forwardedRef === 'function') {
        forwardedRef(innerRef.current);
      } else {
        (forwardedRef as React.MutableRefObject<HTMLTextAreaElement | null>).current =
          innerRef.current;
      }
    }, [forwardedRef]);

    const applyHeight = React.useCallback(() => {
      const el = innerRef.current;
      if (!el) return;

      // Reset to auto to recompute natural height, then set to scrollHeight
      el.style.height = 'auto';
      const next = el.scrollHeight;

      // respect min/max if provided (convert to px via el.style if possible)
      // simplest: rely on CSS min/max-height; we just set explicit height in px
      el.style.height = `${next}px`;
    }, []);

    // Adjust height on mount and when value changes (controlled) or width/ fonts change
    React.useLayoutEffect(() => {
      applyHeight();
    }, [applyHeight, props.value]);

    // React to width/font changes with ResizeObserver
    React.useEffect(() => {
      const el = innerRef.current;
      if (!el || typeof ResizeObserver === 'undefined') return;

      const ro = new ResizeObserver(() => {
        // width/font/padding changes can affect scrollHeight
        applyHeight();
      });
      ro.observe(el);
      return () => ro.disconnect();
    }, [applyHeight]);

    const handleInput: React.FormEventHandler<HTMLTextAreaElement> = (e) => {
      applyHeight();
      onInput?.(e);
    };

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      // Important for controlled parents to receive updates
      onChange?.(e);
    };

    // Ensure we start with a sensible default height (and hidden scrollbar)
    const baseStyle: React.CSSProperties = {
      height: defaultHeight,
      minHeight: minHeight ?? defaultHeight,
      maxHeight,
      overflow: 'hidden',
      resize: 'none', // users still can resize via content; remove if you want manual drag
      ...style,
    };

    return (
      <textarea
        {...props}
        ref={innerRef}
        style={baseStyle}
        onInput={handleInput}
        onChange={handleChange}
      />
    );
  }
);

export default AutoResizeTextarea;
