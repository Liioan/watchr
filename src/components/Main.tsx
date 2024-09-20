import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  className?: string;
}

const Main = ({ children, className }: MainProps) => {
  return (
    <main
      className={`min-w-screen flex min-h-screen flex-col bg-background px-[10%] pt-5 font-body text-text ${className}`}
    >
      {children}
    </main>
  );
};

export default Main;
