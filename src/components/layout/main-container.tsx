type MainContainerProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function MainContainer({ children }: MainContainerProps) {
  return <div className="mx-auto h-screen max-w-6xl px-4">{children}</div>;
}

export { MainContainer };
