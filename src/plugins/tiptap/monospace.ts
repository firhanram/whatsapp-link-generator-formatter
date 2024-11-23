import {
  Mark,
  markInputRule,
  markPasteRule,
  mergeAttributes,
} from "@tiptap/react";

export const inputRegex = /(?:^|\s)(```(?!\s+```)((?:[^`]+))```(?!\s+```))$/;
export const pasteRegex = /(?:^|\s)(```(?!\s+```)((?:[^`]+))```(?!\s+```))/g;

declare module "@tiptap/react" {
  interface Commands<ReturnType> {
    monospace: {
      setMonospace: () => ReturnType;
      toggleMonospace: () => ReturnType;
      unsetMonospace: () => ReturnType;
    };
  }
}

export const Monospace = Mark.create({
  name: "monospace",
  addOptions() {
    return {
      HTMLAttributes: {
        class: "font-mono",
      },
    };
  },

  excludes: "_",

  parseHTML() {
    return [
      {
        tag: "code",
        class: "font-mono",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "code",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },

  addCommands() {
    return {
      setMonospace:
        () =>
        ({ commands }) => {
          return commands.setMark(this.name);
        },
      toggleMonospace:
        () =>
        ({ commands }) => {
          return commands.toggleMark(this.name);
        },
      unsetMonospace:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },

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
