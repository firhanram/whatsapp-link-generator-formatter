import BubleChatEditor from "./BubleChatEditor";
import FloatingToolbar from "./FloatingToolbar";
import TimeBadge from "./TimeBadge";
import { type Editor } from "@tiptap/react";

const ChatPanel = ({ editor }: { editor: Editor }) => {
  return (
    <div className="bg-conversation-panel flex-grow flex-shrink order-2 relative">
      <div className="absolute inset-0 z-30 h-full w-full pb-2 overflow-x-hidden overflow-y-scroll">
        <div className="min-h-3 w-full" />
        <div className="px-[63px]">
          <TimeBadge />

          <div className="flex justify-center sticky top-4 z-10">
            <FloatingToolbar editor={editor} />
          </div>

          <BubleChatEditor editor={editor} />
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
