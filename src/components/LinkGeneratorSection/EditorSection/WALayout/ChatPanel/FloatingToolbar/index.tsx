import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  StrikethroughIcon,
  TextQuoteIcon,
  TypeIcon,
} from "lucide-react";
import { type Editor } from "@tiptap/react";
import ToolbarButton from "./ToolbarButton";

const TOOLBAR_ITEMS = (editor: Editor) => [
  {
    name: "Bold",
    value: "bold",
    icon: <BoldIcon />,
    toggle: () => {
      editor.chain().focus().toggleBold().run();
    },
  },
  {
    name: "Italic",
    value: "italic",
    icon: <ItalicIcon />,
    toggle: () => {
      editor.chain().focus().toggleItalic().run();
    },
  },
  {
    name: "Strikethrough",
    value: "strikethrough",
    icon: <StrikethroughIcon />,
    toggle: () => {
      editor.chain().focus().toggleStrike().run();
    },
  },
  {
    name: "Monospace",
    value: "monospace",
    icon: <TypeIcon />,
    toggle: () => {
      editor.chain().focus().toggleMonospace().run();
    },
  },
  {
    name: "Quote",
    value: "blockquote",
    icon: <TextQuoteIcon />,
    toggle: () => {
      editor.chain().focus().toggleBlockquote().run();
    },
  },
  {
    name: "Inline Code",
    value: "code",
    icon: <CodeIcon />,
    toggle: () => {
      editor.chain().focus().toggleCode().run();
    },
  },
  {
    name: "Bulleted list",
    value: "bulletList",
    icon: <ListIcon />,
    toggle: () => {
      editor.chain().focus().toggleBulletList().run();
    },
  },
  {
    name: "Numbered List",
    value: "orderedList",
    icon: <ListOrderedIcon />,
    toggle: () => {
      editor.chain().focus().toggleOrderedList().run();
    },
  },
];

function FloatingToolbar({ editor }: { editor: Editor }) {
  const items = TOOLBAR_ITEMS(editor);

  return (
    <div className="flex rounded-md gap-3 bg-white shadow p-1 mb-10">
      {items.map((item) => {
        return (
          <ToolbarButton
            tooltipContent={item.name}
            active={editor.isActive(item.value)}
            onClick={() => {
              item.toggle();
            }}
            key={item.value}
          >
            {item.icon}
          </ToolbarButton>
        );
      })}
    </div>
  );
}

export default FloatingToolbar;
