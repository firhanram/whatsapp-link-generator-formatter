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
    value: "quote",
    icon: <TextQuoteIcon />,
  },
  {
    name: "Inline Code",
    value: "inlineCode",
    icon: <CodeIcon />,
  },
  {
    name: "Bulleted List",
    value: "bulletedList",
    icon: <ListIcon />,
  },
  {
    name: "Numbered List",
    value: "numberedList",
    icon: <ListOrderedIcon />,
  },
];

function FloatingToolbar() {
  return (
    <ToggleGroup
      type="single"
      className="mb-10 bg-white rounded-md inline-flex"
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
