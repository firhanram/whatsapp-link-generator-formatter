import { StoreIcon } from "lucide-react";

const HeaderPanel = () => {
  return (
    <header className="flex py-2 px-4 items-center gap-4 bg-primary relative z-30">
      <div className="size-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
        <StoreIcon className="text-primary" />
      </div>
      <div className="text-base text-secondary">Your Business</div>
    </header>
  );
};

export default HeaderPanel;
