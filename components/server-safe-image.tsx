import Image, { type ImageProps } from "next/image"

interface ServerSafeImageProps extends Omit<ImageProps, "src"> {
  src: string | null | undefined
  fallbackSrc?: string
  alt: string
}

export default function ServerSafeImage({
  src,
  fallbackSrc = "/placeholder.svg",
  alt,
  ...props
}: ServerSafeImageProps) {
  // Simple logic to determine the source without using state or event handlers
  const finalSrc = src && typeof src === "string" && src.trim() !== "" ? src : fallbackSrc || "/placeholder.svg"

  // Ensure alt text is never empty
  const accessibleAlt = alt || "Panorama Resort image"

  return <Image {...props} src={finalSrc || "/placeholder.svg"} alt={accessibleAlt} />
}
