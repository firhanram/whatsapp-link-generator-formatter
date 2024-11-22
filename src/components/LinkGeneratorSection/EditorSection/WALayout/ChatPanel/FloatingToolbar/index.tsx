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

const TOOLBAR_ITEMS = [
  {
    name: "Bold",
    value: "bold",
    icon: <BoldIcon />,
  },
  {
    name: "Italic",
    value: "italic",
    icon: <ItalicIcon />,
  },
  {
    name: "Strikethrough",
    value: "strikethrough",
    icon: <StrikethroughIcon />,
  },
  {
    name: "Monospace",
    value: "monospace",
    icon: <TypeIcon />,
  },
  {
    name: "Quote",
    value: "blockquote",
    icon: <TextQuoteIcon />,
  },
  {
    name: "Inline Code",
    value: "inlineCode",
    icon: <CodeIcon />,
  },
  {
    name: "Bulleted list",
    value: "bulletList",
    icon: <ListIcon />,
  },
  {
    name: "Numbered List",
    value: "orderedList",
    icon: <ListOrderedIcon />,
  },
];

function FloatingToolbar({ editor }: { editor: Editor }) {
  return (
    <ToggleGroup
      type="single"
      className="mb-10 bg-white rounded-md inline-flex"
      value={TOOLBAR_ITEMS.find((item) => editor.isActive(item.value))?.value}
    >
      {TOOLBAR_ITEMS.map((item) => {
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
