import { create } from "zustand";

export type GeneratedLinkDialogState = {
  isOpen: boolean;
  toggle: () => void;
};

export const useGeneratedLinkDialogStore = create<GeneratedLinkDialogState>(
  (set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  })
);

export type WhatsAppPayload = {
  formattedMessage: string;
  setFormattedMessage: (formattedMessage: string) => void;
};

export const useWhatsAppPayloadStore = create<WhatsAppPayload>((set) => ({
  formattedMessage: "",
  setFormattedMessage: (formattedMessage: string) => set({ formattedMessage }),
}));
