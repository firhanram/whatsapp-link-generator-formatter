import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { toast } from "@/hooks/useToast";
import { useGeneratedLinkDialogStore, useWhatsAppPayloadStore } from "@/store";
import { CircleCheckIcon, CopyIcon } from "lucide-react";

const GeneratedLinkDialog = () => {
  const { isOpen, toggle } = useGeneratedLinkDialogStore();
  const { formattedMessage } = useWhatsAppPayloadStore();

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage).then(() => {
      toggle();

      toast({
        description: (
          <div className="flex gap-2">
            <CircleCheckIcon size={20} className="shrink-0" />
            Copied to clipboard!
          </div>
        ),
      });
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => toggle()}>
      <DialogContent className="overflow-hidden rounded max-w-[calc(100vw-16px)] md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-left">
            Success! Your WhatsApp link has been generated
          </DialogTitle>
          <DialogDescription className="text-left">
            Here is your generated WhatsApp link. Click the button below to copy
            it to your clipboard.
          </DialogDescription>
        </DialogHeader>

        <div className="p-2 border border-border bg-secondary rounded overflow-hidden">
          <div className="line-clamp-1 break-all text-sm text-muted-foreground">
            {formattedMessage}
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              handleCopy();
            }}
          >
            <CopyIcon />
            Copy Link
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GeneratedLinkDialog;
