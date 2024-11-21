import { EditorContent, type Editor } from "@tiptap/react";

const BubleChatEditor = ({ editor }: { editor: Editor }) => {
  return (
    <div className="flex w-full justify-end">
      <div className="rounded-lg w-[65%] shadow-[rgba(11,20,26,0.13)_0px_1px_0.5px_0px] bg-chat-buble overflow-hidden pb-2 pt-1.5 pl-[9px] pr-[7px]">
        <div className="text-sm leading-[19px] text-[#111b21]">
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
};

export default BubleChatEditor;
