import Image from "next/image";
import { resolveImageSrc } from "@/lib/placeholders";
import { cn } from "@/lib/utils";

/** Canvas-toned blur placeholder for instant visual feedback */
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

type SiteImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  placeholderWidth?: number;
  placeholderHeight?: number;
  brand?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
};

function isSvg(src: string) {
  return src.endsWith(".svg") || src.includes(".svg?");
}

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
  quality = 80,
}: SiteImageProps) {
  const fallbackW = placeholderWidth ?? width ?? 1200;
  const fallbackH = placeholderHeight ?? height ?? 800;
  const resolvedSrc = resolveImageSrc(src, fallbackW, fallbackH, { brand });

  if (!resolvedSrc) return null;

  const svg = isSvg(resolvedSrc);
  const blur = !svg ? { placeholder: "blur" as const, blurDataURL: BLUR_DATA_URL } : {};
  const imageQuality = svg ? undefined : quality;

  if (fill) {
    return (
      <span className="absolute inset-0 overflow-hidden bg-canvas">
        <Image
          src={resolvedSrc}
          alt={alt}
          fill
          className={cn("site-image-fade object-cover", className)}
          sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          priority={priority}
          {...(imageQuality !== undefined ? { quality: imageQuality } : {})}
          unoptimized={svg}
          {...blur}
        />
      </span>
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={width ?? fallbackW}
      height={height ?? fallbackH}
      className={cn("site-image-fade bg-canvas", className)}
      sizes={sizes ?? "(max-width: 768px) 100vw, 1200px"}
      priority={priority}
      {...(imageQuality !== undefined ? { quality: imageQuality } : {})}
      unoptimized={svg}
      {...blur}
    />
  );
}
