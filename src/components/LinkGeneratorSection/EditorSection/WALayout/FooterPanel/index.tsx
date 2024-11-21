import { CopyIcon, SendIcon, ShareIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

const FooterPanel = () => {
  return (
    <footer className="order-3 px-4 h-[64px] py-[9px] bg-[#f0f2f5] relative z-30 flex justify-between gap-4">
      <div className="bg-white rounded-lg flex-1" />
      <div className="flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger aria-label="Share Button">
            <SendIcon size={20} color="#54656f" />
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <ShareIcon />
                <span>Share Link</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CopyIcon />
                <span>Copy Text Only</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
      </div>
    </footer>
  );
};

export default FooterPanel;
