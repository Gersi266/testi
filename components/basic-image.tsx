"use client"

import Image, { type ImageProps } from "next/image"

type BasicImageProps = Omit<ImageProps, "onError">

export default function BasicImage(props: BasicImageProps) {
  // Ensure alt text is never empty
  const accessibleAlt = props.alt || "Panorama Resort image"

  return <Image {...props} alt={accessibleAlt} />
}
