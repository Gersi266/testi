"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import SafeImage from "./safe-image"

interface PreviewModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  images: string[]
  fallbackImage: string
  details: React.ReactNode
  bookingLink?: string
}

export default function PreviewModal({
  isOpen,
  onClose,
  title,
  description,
  images,
  fallbackImage,
  details,
  bookingLink,
}: PreviewModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      } else if (e.key === "ArrowRight") {
        nextImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Prevent body scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  // Reset image index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0)
    }
  }, [isOpen])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const selectImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm transition-all duration-300">
      <div
        className="bg-white rounded-2xl overflow-hidden w-full max-w-6xl max-h-[90vh] shadow-2xl"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-[#FFF9FB] to-white">
          <h2 id="modal-title" className="text-2xl font-bold text-[#880E4F] tracking-tight">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F8BBD0] transition-colors duration-300"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-[#E91E63]" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-70px)]">
          <div className="flex flex-col md:flex-row">
            {/* Image carousel (60%) */}
            <div className="md:w-3/5 bg-gray-50">
              <div className="relative h-[350px] md:h-[450px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                  <ImageIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                </div>
                <SafeImage
                  src={images[currentImageIndex]}
                  alt={`${title} - ${currentImageIndex === 0 ? "Main view" : `Additional view ${currentImageIndex}`}`}
                  fill
                  className="object-contain transition-opacity duration-300"
                  fallbackSrc={fallbackImage}
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />

                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-full">
                  {currentImageIndex + 1} / {images.length}
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#F8BBD0] hover:text-[#E91E63]"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-800 hover:text-[#E91E63]" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#F8BBD0] hover:text-[#E91E63]"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 text-gray-800 hover:text-[#E91E63]" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="p-4 flex space-x-3 overflow-x-auto bg-white border-t border-gray-100">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`relative h-16 w-24 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 transform ${
                      index === currentImageIndex
                        ? "border-2 border-[#E91E63] scale-105 shadow-md"
                        : "border border-gray-200 opacity-70 hover:opacity-100 hover:scale-105 hover:border-[#F8BBD0]"
                    }`}
                    aria-label={`View image ${index + 1}`}
                    aria-pressed={index === currentImageIndex}
                  >
                    <SafeImage
                      src={image}
                      alt={`${title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      fallbackSrc={fallbackImage}
                      quality={80}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details (40%) */}
            <div className="md:w-2/5 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-100">
              <p className="text-[#D81B60] mb-6 leading-relaxed">{description}</p>
              {details}
              {bookingLink && (
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#F8BBD0] text-[#880E4F] hover:bg-[#E91E63] hover:text-white text-center font-semibold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  Book Now
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
