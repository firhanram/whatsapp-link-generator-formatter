import { type PropsWithChildren } from "react";

const WALayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full max-w-[965px] mx-auto h-[706px] flex flex-col shadow-sm relative rounded-lg overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[url(/images/chat-panel-bg.png)] opacity-40 z-20" />
      {children}
    </div>
  );
};

export default WALayout;
