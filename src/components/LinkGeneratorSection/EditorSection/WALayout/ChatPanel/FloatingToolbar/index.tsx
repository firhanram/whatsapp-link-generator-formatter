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
import {
  ToggleGroup,
  ToggleGroupItemTooltip,
} from "@/components/ui/ToggleGroup";
import { type Editor } from "@tiptap/react";

const TOOLBAR_ITEMS = (editor: Editor) => [
  {
    name: "Bold",
    value: "bold",
    icon: <BoldIcon />,
    toggle: () => editor.chain().focus().toggleBold().run(),
  },
  {
    name: "Italic",
    value: "italic",
    icon: <ItalicIcon />,
    toggle: () => editor.chain().focus().toggleItalic().run(),
  },
  {
    name: "Strikethrough",
    value: "strikethrough",
    icon: <StrikethroughIcon />,
    toggle: () => editor.chain().focus().toggleStrike().run(),
  },
  {
    name: "Monospace",
    value: "monospace",
    icon: <TypeIcon />,
    toggle: () => editor.chain().focus().toggleMonospace().run(),
  },
  {
    name: "Quote",
    value: "blockquote",
    icon: <TextQuoteIcon />,
    toggle: () => editor.chain().focus().toggleBlockquote().run(),
  },
  {
    name: "Inline Code",
    value: "code",
    icon: <CodeIcon />,
    toggle: () => editor.chain().focus().toggleCode().run(),
  },
  {
    name: "Bulleted list",
    value: "bulletList",
    icon: <ListIcon />,
    toggle: () => editor.chain().focus().toggleBulletList().run(),
  },
  {
    name: "Numbered List",
    value: "orderedList",
    icon: <ListOrderedIcon />,
    toggle: () => editor.chain().focus().toggleOrderedList().run(),
  },
];

function FloatingToolbar({ editor }: { editor: Editor }) {
  const items = TOOLBAR_ITEMS(editor);

  const selectedValue = items
    .filter((item) => editor.isActive(item.value))
    .map((item) => item.value);

  return (
    <ToggleGroup
      type="multiple"
      className="mb-10 bg-white rounded-md inline-flex"
      value={selectedValue}
      onValueChange={(value) => {
        const isActive = items.some((item) => value.includes(item.value));

        if (value && isActive) {
          for (const item of items) {
            if (value.includes(item.value)) {
              item.toggle();
            } else {
              if (editor.isActive(item.value)) {
                item.toggle();
              }
            }
          }
        }
      }}
    >
      {items.map((item) => {
        return (
          <ToggleGroupItemTooltip
            value={item.value}
            tooltipContent={item.name}
            key={item.name}
          >
            {item.icon}
          </ToggleGroupItemTooltip>
        );
      })}
    </ToggleGroup>
  );
}

export default FloatingToolbar;
