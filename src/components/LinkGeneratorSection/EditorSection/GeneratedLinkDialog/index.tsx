import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { useGeneratedLinkDialogStore, useWhatsAppPayloadStore } from "@/store";
import { ClipboardIcon } from "lucide-react";

const GeneratedLinkDialog = () => {
  const { isOpen, toggle } = useGeneratedLinkDialogStore();
  const { formattedMessage } = useWhatsAppPayloadStore();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(formattedMessage)
      .then(() => alert("Copied to clipboard"));
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => toggle()}>
      <DialogContent className="overflow-hidden rounded max-w-[calc(100%-16px)]">
        <DialogHeader>
          <DialogTitle>Generated WhatsApp Link</DialogTitle>
          <DialogDescription>
            Here is your generated WhatsApp link. Click the button below to copy
            it to your clipboard.
          </DialogDescription>
        </DialogHeader>

        <button
          className="p-2 gap-10 border items-center border-border bg-secondary rounded inline-flex overflow-hidden"
          onClick={() => handleCopy()}
        >
          <div className="line-clamp-1 text-left text-sm text-muted-foreground">
            {formattedMessage}
          </div>
          <ClipboardIcon className="text-primary shrink-0" size={14} />
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default GeneratedLinkDialog;
