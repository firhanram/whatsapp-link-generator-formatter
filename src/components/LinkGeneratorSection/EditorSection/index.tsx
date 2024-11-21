import WALayout from "@/components/LinkGeneratorSection/EditorSection/WALayout";
import ChatPanel from "./WALayout/ChatPanel";
import FooterPanel from "./WALayout/FooterPanel";
import HeaderPanel from "./WALayout/HeaderPanel";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";

const EditorSection = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Placeholder.configure({
        placeholder: "Type a message...",
        showOnlyCurrent: true,
      }),
    ],
  });

  if (!editor) {
    return null;
  }

  return (
    <WALayout>
      <HeaderPanel />
      <ChatPanel editor={editor} />
      <FooterPanel />
    </WALayout>
  );
};

export default EditorSection;