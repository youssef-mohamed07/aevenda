import { defineField, defineType } from "sanity";

export const dictionary = defineType({
  name: "dictionary",
  title: "UI Copy",
  type: "document",
  fields: [
    defineField({
      name: "locale",
      type: "string",
      options: { list: ["en", "ar"] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteNav",
      type: "object",
      title: "Navigation",
      fields: [
        defineField({ name: "ctaLabel", type: "string", title: "Header CTA" }),
        defineField({
          name: "items",
          type: "array",
          of: [{ type: "footerLink" }],
          title: "Nav links",
        }),
      ],
    }),
    defineField({
      name: "siteFooter",
      type: "object",
      title: "Footer",
      fields: [
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({ name: "explore", type: "string" }),
        defineField({ name: "contact", type: "string" }),
        defineField({ name: "getInTouch", type: "string" }),
        defineField({ name: "rights", type: "string" }),
      ],
    }),
    defineField({
      name: "homeContact",
      type: "object",
      title: "Contact defaults",
      fields: [
        defineField({ name: "emailSubject", type: "string" }),
        defineField({ name: "messageIntro", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "content",
      type: "text",
      title: "Dictionary JSON (advanced override)",
      rows: 16,
    }),
  ],
  preview: {
    select: { locale: "locale" },
    prepare({ locale }) {
      return { title: `UI Copy (${locale?.toUpperCase() ?? "?"})` };
    },
  },
});

export const dictionaryTypes = [dictionary];
