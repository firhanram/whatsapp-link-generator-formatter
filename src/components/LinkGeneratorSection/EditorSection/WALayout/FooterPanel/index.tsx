import { ArrowDownToLineIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { MARKS, WHATSAPP_LINK } from "@/constants/common";
import { type Editor, type JSONContent } from "@tiptap/react";
import { useGeneratedLinkDialogStore, useWhatsAppPayloadStore } from "@/store";

const FooterPanel = ({ editor }: { editor: Editor }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { toggle } = useGeneratedLinkDialogStore();
  const { setFormattedMessage } = useWhatsAppPayloadStore();

  const toWhatsappText = ({ content }: JSONContent) => {
    let text = "";

    console.log(content);

    content?.forEach((node) => {
      if (node.type === "text") {
        if (node.marks) {
          /**
           * If there are multiple marks, we need to reduce them to a single string
           * ex: `*~_text_*~`
           */
          const reducedText = node.marks.reduce((acc, mark) => {
            const markType = mark.type as keyof typeof MARKS;

            return MARKS[markType].replace("{text}", acc);
          }, node.text ?? "");

          text += reducedText;
        } else {
          text += node.text;
        }
      } else if (node.type === "paragraph") {
        text += toWhatsappText(node) + "\n";
      } else if (node.type === "orderedList") {
        const start = node.attrs?.start ?? 0;
        node.content?.forEach((listItem, index) => {
          text += `${index + start}. ${toWhatsappText(listItem)}`;
        });
      } else if (node.type === "bulletList") {
        node.content?.forEach((listItem) => {
          text += `- ${toWhatsappText(listItem)}`;
        });
      } else if (node.type === "blockquote") {
        text += `> ${toWhatsappText(node)}`;
      }
    });

    return text;
  };

  return (
    <footer className="order-3 px-4 min-h-[64px] py-[9px] bg-white relative z-30">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const phoneNumber = formData.get("phoneNumber") as string;

          const encodedText = encodeURIComponent("Salam Kenal👋🏻");

          console.log(toWhatsappText(editor.getJSON()));

          setFormattedMessage(
            `${WHATSAPP_LINK}?phone=${phoneNumber}&text=${encodedText}`
          );

          toggle();
        }}
        className="flex justify-between flex-col md:flex-row gap-4"
      >
        <div className="flex-1 space-y-1">
          <Input
            placeholder="Input your phone number here"
            required
            name="phoneNumber"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              const { value } = target;

              if (Number(value) !== 0 && !Number(value) && value.length > 0) {
                target.value = value.slice(0, value.length - 1);
              }
            }}
            className="text-sm lg:text-base"
          />
          <p className="text-muted-foreground text-xs">
            Enter your phone number to generate a WhatsApp link. Example:
            6281234567890 or 081234567890
          </p>
        </div>
        <Button type="submit">
          <ArrowDownToLineIcon />
          Generate Link
        </Button>
      </form>
    </footer>
  );
};

export default FooterPanel;
