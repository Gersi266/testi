/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove any experimental features that might be causing issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [''],
  },
  // Disable static optimization during development
  reactStrictMode: true,
  // Disable caching during development
  ...(process.env.NODE_ENV === 'development' && {
    onDemandEntries: {
      // Keep the pages in memory for a shorter time
      maxInactiveAge: 10 * 1000, // 10 seconds
      // Don't dispose of pages
      pagesBufferLength: 2,
    },
  }),
}

export default nextConfig
