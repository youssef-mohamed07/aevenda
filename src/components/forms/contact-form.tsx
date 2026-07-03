"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IconSend } from "@/components/ui/icons";
import { getMailtoUrl } from "@/lib/site-config";
import { getUiLabels } from "@/lib/ui-labels";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  locale: Locale;
  topics: string[];
  className?: string;
};

const fieldClass =
  "w-full rounded-xl border border-border/70 bg-paper/80 px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-ink/35 focus:border-accent focus:ring-2 focus:ring-accent/15";

export function ContactForm({ locale, topics, className }: ContactFormProps) {
  const labels = getUiLabels(locale);
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [topic, setTopic] = useState(topics[0] ?? "");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `${labels.formName}: ${name}`,
      `${labels.formEmail}: ${email}`,
      phone ? `${labels.formPhone}: ${phone}` : null,
      `${labels.formTopic}: ${topic}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = getMailtoUrl({
      subject: `${labels.formSubjectPrefix} — ${topic}`,
      body,
    });
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-8", className)}>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={labels.formName} name="name" required />
        <Field label={labels.formEmail} name="email" type="email" required />
      </div>

      <Field label={labels.formPhone} name="phone" type="tel" />

      <fieldset>
        <legend className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
          {labels.formTopic}
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                topic === t
                  ? "border-accent bg-accent text-white"
                  : "border-border/80 bg-paper/60 text-ink-muted hover:border-ink/20 hover:text-ink",
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/55"
        >
          {labels.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(fieldClass, "resize-none leading-relaxed")}
          placeholder={labels.formMessagePlaceholder}
        />
      </div>

      <div className="border-t border-border/60 pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {status === "sent" ? labels.formSent : labels.formSubmit}
          <IconSend className="size-4 rtl-flip" />
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/55"
      >
        {label}
      </label>
      <input id={name} name={name} type={type} required={required} className={fieldClass} />
    </div>
  );
}
