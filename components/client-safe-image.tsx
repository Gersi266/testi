"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ClientSafeImageProps extends Omit<ImageProps, "src"> {
  src: string | null | undefined
  fallbackSrc?: string
  alt: string
  fill?: boolean
  className?: string
}

export default function ClientSafeImage({
  src,
  fallbackSrc = "/placeholder.svg",
  alt,
  fill,
  className,
  ...props
}: ClientSafeImageProps) {
  const [error, setError] = useState(false)
  const [imgSrc, setImgSrc] = useState<string | null>(() => {
    if (src && typeof src === "string" && src.trim() !== "") {
      try {
        // Basic validation that this is a usable path
        if (src.startsWith("/") || src.startsWith("http")) {
          return src
        }
      } catch (e) {
        console.error(`Invalid image path: ${src}`)
      }
    }
    return null
  })

  // If src is empty, null, or undefined, use fallbackSrc or null
  const finalSrc = imgSrc || fallbackSrc || null

  // If we don't have a valid src, don't render the image at all
  if (finalSrc === null || error) {
    return null
  }

  const normalizeSrc = (src: string) => {
    // Remove "/Paradise-main/public" prefix if it exists
    if (src && src.startsWith("/Paradise-main/public")) {
      return src.replace("/Paradise-main/public", "")
    }
    return src
  }

  return (
    <Image
      {...props}
      src={normalizeSrc(src || "/placeholder.svg")}
      alt={alt || "Image"}
      className={cn("object-cover", className)}
      fill={fill}
      width={!fill ? props.width : undefined}
      height={!fill ? props.height : undefined}
      onError={() => setError(true)}
    />
  )
}
