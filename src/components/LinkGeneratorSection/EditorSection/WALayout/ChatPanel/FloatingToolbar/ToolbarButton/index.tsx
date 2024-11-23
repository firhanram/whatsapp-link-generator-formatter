import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { cn } from "@/lib/utils";
import type { PropsWithChildren, ReactNode } from "react";

const ToolbarButton = ({
  children,
  className,
  active,
  onClick,
  tooltipContent,
}: PropsWithChildren<{
  className?: string;
  active: boolean;
  onClick: () => void;
  tooltipContent: ReactNode;
}>) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={cn(
            "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            "hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors inline-flex items-center justify-center p-1 rounded-sm",
            {
              "bg-accent text-accent-foreground": active,
              "bg-transparent": !active,
            },
            className
          )}
          onClick={() => onClick()}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolbarButton;
