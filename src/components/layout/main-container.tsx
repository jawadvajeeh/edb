type MainContainerProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function MainContainer({ children, ...props }: MainContainerProps) {
  return (
    <div className="mx-auto max-w-6xl px-4" {...props}>
      {children}
    </div>
  );
}

export { MainContainer };
