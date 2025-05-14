"use server"

import fs from "fs"
import path from "path"

// Content cache for better performance
const contentCache = new Map<string, any>()
const CACHE_DURATION = process.env.NODE_ENV === "development" ? 1000 : 60 * 1000 // 1 second in dev, 1 minute in prod
const cacheTimestamps = new Map<string, number>()

// Hard-coded fallback content for when files are missing
const hardcodedContent: Record<string, any> = {
  rooms: {
    roomsSection: {
      rooms: [
        {
          id: 1,
          name: "Single Room",
          description: "Perfect for solo travelers",
          price: 60,
          image: "/images/room-1.png",
        },
        {
          id: 2,
          name: "Double Room",
          description: "Ideal for couples",
          price: 67,
          image: "/images/room-2.png",
        },
        {
          id: 3,
          name: "Family Room",
          description: "Spacious room for families",
          price: 80,
          image: "/images/room-3.png",
        },
      ],
    },
  },
}

/**
 * Load content for a specific page with language support
 * This function should only be called from server components or API routes
 */
export async function loadContent(page: string, language = "en") {
  try {
    // Create a cache key based on page and language
    const cacheKey = `${page}-${language}`

    // Check if cache is still valid
    const now = Date.now()
    const timestamp = cacheTimestamps.get(cacheKey) || 0
    const isCacheValid = now - timestamp < CACHE_DURATION

    // In development, always reload content from disk for menu page
    const forceReload = process.env.NODE_ENV === "development" && page === "menu"

    // Return cached content if available and valid (and not forcing reload)
    if (!forceReload && isCacheValid && contentCache.has(cacheKey)) {
      console.log(`Using cached content for ${page} (${language})`)
      return contentCache.get(cacheKey)
    }

    console.log(`Loading fresh content for ${page} (${language})`)

    // Determine the content file path based on language
    const contentKey = language === "al" ? `${page}-al` : page
    const filePath = path.join(process.cwd(), "content", `${contentKey}.json`)

    // Check if file exists
    let content
    try {
      const fileContent = fs.readFileSync(filePath, "utf8")
      content = JSON.parse(fileContent)
      console.log(`Successfully loaded content from ${filePath}`)
    } catch (error) {
      // If language-specific content doesn't exist, try to fall back to English
      if (language === "al") {
        console.warn(`Content for ${contentKey} not found, falling back to English`)
        const fallbackPath = path.join(process.cwd(), "content", `${page}.json`)
        try {
          const fallbackContent = fs.readFileSync(fallbackPath, "utf8")
          content = JSON.parse(fallbackContent)
        } catch (fallbackError) {
          // If even English content doesn't exist, use hardcoded fallback if available
          if (hardcodedContent[page]) {
            console.warn(`Using hardcoded content for ${page}`)
            content = hardcodedContent[page]
          } else {
            throw new Error(`Content for ${page} not found`)
          }
        }
      } else {
        // For English content, check if we have hardcoded fallback
        if (hardcodedContent[page]) {
          console.warn(`Using hardcoded content for ${page}`)
          content = hardcodedContent[page]
        } else {
          throw new Error(`Content for ${page} not found`)
        }
      }
    }

    // Cache the content for future use
    contentCache.set(cacheKey, content)
    cacheTimestamps.set(cacheKey, now)

    return content
  } catch (error) {
    console.error(`Error loading content for ${page}:`, error)

    // Return hardcoded fallback if available
    if (hardcodedContent[page]) {
      console.warn(`Using hardcoded content for ${page} after error`)
      return hardcodedContent[page]
    }

    throw error
  }
}

/**
 * Clear the content cache
 */
export async function clearContentCache() {
  console.log("Clearing content cache completely")
  contentCache.clear()
  cacheTimestamps.clear()
  return { success: true }
}

/**
 * Get page content with language support
 */
export async function getPageContent(page: string, language = "en") {
  return loadContent(page, language)
}

/**
 * Get a specific section from a page's content with language support
 */
export async function getContentSection(page: string, section: string, language = "en") {
  try {
    const content = await loadContent(page, language)
    if (content && content[section]) {
      return content[section]
    }
    console.warn(`Section "${section}" not found in content for page "${page}"`)
    return null
  } catch (error) {
    console.error(`Error getting content section ${section} for page ${page}:`, error)
    return null
  }
}
