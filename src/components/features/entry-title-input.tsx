type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function EntryTitleInput(props: InputProps) {
  return (
    <input
      className="inline-block w-full rounded-md bg-transparent p-2 text-3xl font-medium text-indigo-900 placeholder-indigo-900/50 outline-indigo-200 transition-all duration-100 ease-in-out focus:outline-2 md:text-5xl"
      placeholder="Untitled"
      maxLength={200}
      {...props}
    />
  );
}

export { EntryTitleInput };
