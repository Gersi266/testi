"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { usePageContent } from "@/hooks/use-page-content"

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
}

export default function MenuPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const { language } = useLanguage()
  const { content, loading } = usePageContent("home")

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (loading || !content) {
    return (
      <section className="py-16 px-4 bg-[#FFF9FB]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="w-24 h-1 bg-gray-200 mx-auto mb-6"></div>
            <div className="h-4 bg-gray-200 rounded max-w-3xl mx-auto mb-12"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md h-80">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  const menuSection = content.menuSection || {}
  const menuItems = menuSection.menuItems || []

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleItems >= menuItems.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, menuItems.length - visibleItems) : prevIndex - 1))
  }

  // Get currently visible items
  const currentItems = menuItems.slice(currentIndex, currentIndex + visibleItems)

  // If we don't have enough items from the current index, wrap around to the beginning
  if (currentItems.length < visibleItems && menuItems.length > 0) {
    currentItems.push(...menuItems.slice(0, visibleItems - currentItems.length))
  }

  return (
    <section className="py-16 px-4 bg-[#FFF9FB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{menuSection.title || "A Taste of Our Menu"}</h2>
          <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            {menuSection.subtitle ||
              "Explore a selection of our finest dishes, crafted with fresh ingredients and culinary expertise."}
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md text-[#E91E63] hover:text-[#D81B60] transition-colors -ml-4 md:ml-0"
            aria-label="Previous menu items"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md text-[#E91E63] hover:text-[#D81B60] transition-colors -mr-4 md:mr-0"
            aria-label="Next menu items"
          >
            <ChevronRight size={24} />
          </button>

          {/* Menu Items Carousel */}
          <div className="overflow-hidden px-6">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.name} - ${item.category} dish`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          e.currentTarget.src = `/placeholder.svg?height=192&width=384&query=${encodeURIComponent(`${item.category} ${item.name} food dish`)}`
                        }}
                      />
                    </div>
                    <div className="absolute top-0 right-0 bg-[#E91E63] text-white px-3 py-1 rounded-bl-lg font-medium">
                      {item.price}
                    </div>
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white px-3 py-1 rounded-tr-lg text-sm font-medium">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-block bg-[#F8BBD0] text-[#880E4F] px-8 py-3 rounded-lg font-semibold hover:bg-[#E91E63] hover:text-white transition-colors mt-8"
          >
            {menuSection.viewMenuText || "View Full Menu"}
          </Link>
        </div>
      </div>
    </section>
  )
}
