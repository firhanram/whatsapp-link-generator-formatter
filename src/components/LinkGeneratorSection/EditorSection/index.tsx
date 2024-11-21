import WALayout from "@/components/LinkGeneratorSection/EditorSection/WALayout";
import ChatPanel from "./WALayout/ChatPanel";
import FooterPanel from "./WALayout/FooterPanel";
import HeaderPanel from "./WALayout/HeaderPanel";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";
import { CustomBold } from "@/plugins/tiptap/bold";
import { CustomStrike } from "@/plugins/tiptap/strike";
import { CustomItalic } from "@/plugins/tiptap/italic";
import Blockquote from "@tiptap/extension-blockquote";

const EditorSection = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      CustomBold,
      CustomStrike,
      CustomItalic,
      Blockquote,
      Placeholder.configure({
        placeholder: "Type a message...",
        showOnlyCurrent: true,
      }),
    ],
    immediatelyRender: false,
  });

  return (
    <WALayout>
      {editor && (
        <>
          <HeaderPanel />
          <ChatPanel editor={editor} />
          <FooterPanel />
        </>
      )}
    </WALayout>
  );
};

export default EditorSection;
