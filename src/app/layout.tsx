import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteAnalytics } from "@/components/analytics/site-analytics";
import { BrandTheme } from "@/components/layout/brand-theme";
import { rootFontClassName } from "@/lib/fonts";
import { ensureSiteConfig } from "@/sanity/load-site-config";
import { cn } from "@/lib/utils";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  await ensureSiteConfig();
  return {};
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  await ensureSiteConfig();

  return (
    <html suppressHydrationWarning className={cn("h-full", rootFontClassName)}>
      <body className="h-full antialiased">
        <BrandTheme />
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
