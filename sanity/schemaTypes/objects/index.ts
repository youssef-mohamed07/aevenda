import { defineField, defineType } from "sanity";

export const seoMeta = defineType({
  name: "seoMeta",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "Meta title" }),
    defineField({ name: "description", type: "text", rows: 3, title: "Meta description" }),
    defineField({
      name: "keywords",
      type: "array",
      of: [{ type: "string" }],
      title: "Keywords",
    }),
    defineField({
      name: "ogImage",
      type: "image",
      title: "Open Graph image",
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt text" }),
        defineField({ name: "caption", type: "string", title: "Caption" }),
      ],
    }),
    defineField({ name: "canonicalUrl", type: "url", title: "Canonical URL" }),
    defineField({ name: "noIndex", type: "boolean", title: "No index" }),
    defineField({
      name: "robots",
      type: "string",
      title: "Robots directive",
      description: "e.g. index,follow or noindex,nofollow",
    }),
  ],
});

export const socialLink = defineType({
  name: "socialLink",
  title: "Social link",
  type: "object",
  fields: [
    defineField({ name: "platform", type: "string", title: "Platform" }),
    defineField({ name: "url", type: "url", title: "URL" }),
    defineField({ name: "label", type: "string", title: "Label" }),
  ],
});

export const footerLink = defineType({
  name: "footerLink",
  title: "Footer link",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", title: "Label" }),
    defineField({ name: "href", type: "string", title: "Href" }),
  ],
});

export const objectTypes = [seoMeta, socialLink, footerLink];
