import Strike from "@tiptap/extension-strike";
import { markInputRule, markPasteRule } from "@tiptap/react";

const inputRegex = /(?:^|\s)((?:~)((?:[^~]+))(?:~))$/;
const pasteRegex = /(?:^|\s)((?:~)((?:[^~]+))(?:~))/g;

export const CustomStrike = Strike.extend({
  addInputRules() {
    return [
      markInputRule({
        find: inputRegex,
        type: this.type,
      }),
    ];
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: pasteRegex,
        type: this.type,
      }),
    ];
  },
});
