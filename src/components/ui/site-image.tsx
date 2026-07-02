import Image from "next/image";
import { resolveImageSrc } from "@/lib/placeholders";
import { cn } from "@/lib/utils";

type SiteImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Dimensions used when `src` is missing or not in `public/`. */
  placeholderWidth?: number;
  placeholderHeight?: number;
  /** Logos and flags — render real assets instead of placeholders. */
  brand?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
};

/**
 * Image wrapper that uses next/image for local/optimizable assets and falls
 * back to a plain <img> for remote hosts. Missing local paths are swapped for
 * dimension-labelled placeholders automatically.
 */
export function SiteImage({
  src,
  alt,
  width,
  height,
  placeholderWidth,
  placeholderHeight,
  brand = false,
  className,
  fill,
  sizes,
  priority,
}: SiteImageProps) {
  const fallbackW = placeholderWidth ?? width ?? 1200;
  const fallbackH = placeholderHeight ?? height ?? 800;
  const resolvedSrc = resolveImageSrc(src, fallbackW, fallbackH, { brand });

  if (!resolvedSrc) return null;

  const isRemote = /^https?:\/\//.test(resolvedSrc);

  if (isRemote) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolvedSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          fill &&
            "absolute inset-0 h-full w-full max-h-full max-w-full object-cover object-center",
          className,
        )}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        className={className}
        sizes={sizes ?? "(max-width: 1200px) 100vw, 1200px"}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={width ?? fallbackW}
      height={height ?? fallbackH}
      className={className}
      sizes={sizes ?? "(max-width: 1200px) 100vw, 1200px"}
      priority={priority}
    />
  );
}
