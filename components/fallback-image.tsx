import Image, { type ImageProps } from "next/image"

interface FallbackImageProps extends Omit<ImageProps, "src"> {
  src: string | null | undefined
  fallbackSrc?: string
  alt: string
}

export default function FallbackImage({ src, fallbackSrc = "/placeholder.svg", alt, ...props }: FallbackImageProps) {
  // Simple logic to determine the source without using state or event handlers
  const finalSrc = src && typeof src === "string" && src.trim() !== "" ? src : fallbackSrc || "/placeholder.svg"

  if (!finalSrc) {
    return null
  }

  return (
    <Image
      {...props}
      src={finalSrc || "/placeholder.svg"}
      alt={alt || "Image"}
      // No onError handler
    />
  )
}
