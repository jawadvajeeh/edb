type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function EntryTitleInput(props: InputProps) {
  return (
    <input
      className="text-input-text-strong placeholder-input-text-weak outline-input-border-outline inline-block w-full rounded-md bg-transparent p-2 text-3xl font-medium transition-all duration-100 ease-in-out focus:outline-2 md:text-5xl"
      placeholder="Untitled"
      maxLength={200}
      {...props}
    />
  );
}

export { EntryTitleInput };
