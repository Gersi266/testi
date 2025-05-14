"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { normalizeImagePath } from "@/lib/image-utils"

interface SafeImageProps extends Omit<ImageProps, "src"> {
  src: string | null | undefined
  fallbackSrc?: string
  alt: string
  fill?: boolean
  className?: string
  quality?: number
  sizes?: string
}

export default function SafeImage({
  src,
  fallbackSrc = "/placeholder.svg",
  alt,
  fill,
  className,
  width,
  height,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false)

  const finalSrc =
    !error && src && typeof src === "string" && src.trim() !== "" ? src : fallbackSrc || "/placeholder.svg"

  if (!finalSrc) return null

  try {
    new URL(finalSrc, window.location.origin)
  } catch (e) {
    console.error(`Invalid image path: ${finalSrc}`)
    return null
  }

  const accessibleAlt = alt || "Panorama Resort image"

  return (
    <Image
      src={normalizeImagePath(finalSrc) || "/placeholder.svg"}
      alt={accessibleAlt}
      className={cn("object-cover", className)}
      fill={fill}
      width={!fill ? width || 1200 : undefined}
      height={!fill ? height || 800 : undefined}
      onError={() => setError(true)}
      quality={props.quality || 85}
      sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      priority={props.priority}
      {...props}
    />
  )
}
