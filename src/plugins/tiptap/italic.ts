import Italic, {
  underscoreInputRegex,
  underscorePasteRegex,
} from "@tiptap/extension-italic";
import { markInputRule, markPasteRule } from "@tiptap/react";

export const CustomItalic = Italic.extend({
  addInputRules() {
    return [
      markInputRule({
        find: underscoreInputRegex,
        type: this.type,
      }),
    ];
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: underscorePasteRegex,
        type: this.type,
      }),
    ];
  },
});
