/**
 * Normalizes image paths to ensure they're properly formatted
 * @param src The image source path
 * @returns Properly formatted image path
 */
export function normalizeImagePath(src: string | null | undefined): string {
  if (!src) return "/placeholder.svg"

  // Remove "/Paradise-main/public" prefix if it exists
  if (src.startsWith("/Paradise-main/public")) {
    return src.replace("/Paradise-main/public", "")
  }

  // Ensure the path starts with a slash if it's a relative path
  if (!src.startsWith("/") && !src.startsWith("http")) {
    return `/${src}`
  }

  return src
}

/**
 * Ensures an image has proper dimensions when opened directly
 * @param src The image source path
 * @returns Image path with proper dimensions
 */
export function getFullSizeImageUrl(src: string | null | undefined): string {
  const normalizedPath = normalizeImagePath(src)

  // If it's already an external URL, return as is
  if (normalizedPath.startsWith("http")) {
    return normalizedPath
  }

  // For internal images, ensure they're served at full size
  return normalizedPath
}
