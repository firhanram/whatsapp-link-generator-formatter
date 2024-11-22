import { ArrowDownToLineIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { WHATSAPP_LINK } from "@/constants/ccmmon";
import { type Editor, type JSONContent } from "@tiptap/react";

const FooterPanel = ({ editor }: { editor: Editor }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const toWhatsappText = ({ content }: JSONContent) => {
    let text = "";

    content?.forEach((node) => {
      if (node.type === "text") {
        if (node.marks) {
          node.marks.forEach((mark) => {
            if (mark.type === "bold") {
              text += `*${node.text}*`;
            } else if (mark.type === "italic") {
              text += `_${node.text}_`;
            } else if (mark.type === "strike") {
              text += `~${node.text}~`;
            } else if (mark.type === "monospace") {
              text += "`" + node.text + "`";
            } else if (mark.type === "code") {
              text += "```" + node.text + "```";
            } else {
              text += node.text;
            }
          });
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
    <footer className="order-3 px-4 h-[64px] py-[9px] bg-[#f0f2f5] relative z-30 flex justify-between gap-4">
      <div className="bg-white rounded-lg flex-1" />
      <div className="flex items-center justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <ArrowDownToLineIcon />
              Generate Link
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Generate WhatsApp Link</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const phoneNumber = formData.get("phoneNumber") as string;

                const encodedText = encodeURIComponent(
                  toWhatsappText(editor.getJSON())
                );

                console.log(
                  `${WHATSAPP_LINK}${phoneNumber}?text=${encodedText}`
                );
              }}
            >
              <div className="space-y-1">
                <Input
                  placeholder="Ex: 6281234567890 or 081234567890"
                  required
                  name="phoneNumber"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  value={phoneNumber}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    const { value } = target;

                    if (
                      Number(value) !== 0 &&
                      !Number(value) &&
                      value.length > 0
                    ) {
                      target.value = value.slice(0, value.length - 1);
                    }
                  }}
                />
                <p className="text-muted-foreground font-medium text-xs">
                  Will redirect to: {`${WHATSAPP_LINK}${phoneNumber}`}
                </p>
              </div>

              <div className="flex justify-end mt-3">
                <Button>Generate</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </footer>
  );
};

export default FooterPanel;
