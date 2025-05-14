"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export default function Testimonials({ title, subtitle, testimonials }) {
  const { language } = useLanguage()

  // Translations for the component
  const translations = {
    en: {
      defaultTitle: "What Our Guests Say",
      defaultSubtitle: "Read verified reviews from guests who have experienced the Panorama Resort difference.",
      reviewsFrom: "Reviews from TripAdvisor",
      writeReview: "Write a Review",
      defaultTestimonials: [
        {
          id: 1,
          name: "Sarah Johnson",
          location: "New York, USA",
          quote:
            "Our stay at Panorama Resort exceeded all expectations. The staff was incredibly attentive, the accommodations were luxurious, and the views were breathtaking. We can't wait to return!",
          rating: 5,
          date: "2 weeks ago",
        },
        {
          id: 2,
          name: "Michael Chen",
          location: "Toronto, Canada",
          quote:
            "From the moment we arrived, we felt like royalty. The resort's attention to detail is impeccable, and the activities were perfect for our family. It truly was a panoramic experience.",
          rating: 4,
          date: "1 month ago",
        },
        {
          id: 3,
          name: "Emma Rodriguez",
          location: "London, UK",
          quote:
            "Panorama Resort is aptly named. The serene environment, combined with world-class service and amenities, made for an unforgettable vacation. The spa treatments were particularly amazing!",
          rating: 5,
          date: "3 months ago",
        },
      ],
    },
    al: {
      defaultTitle: "Çfarë Thonë Mysafirët Tanë",
      defaultSubtitle: "Lexoni vlerësime të verifikuara nga mysafirët që kanë përjetuar diferencën e Panorama Resort.",
      reviewsFrom: "Vlerësime nga TripAdvisor",
      writeReview: "Shkruaj një Vlerësim",
      defaultTestimonials: [
        {
          id: 1,
          name: "Sara Xhonson",
          location: "Nju Jork, SHBA",
          quote:
            "Qëndrimi ynë në Panorama Resort tejkaloi të gjitha pritshmëritë. Stafi ishte jashtëzakonisht i vëmendshëm, akomodimet ishin luksoze dhe pamjet ishin mahnitëse. Nuk mund të presim të kthehemi!",
          rating: 5,
          date: "2 javë më parë",
        },
        {
          id: 2,
          name: "Majkëll Çen",
          location: "Toronto, Kanada",
          quote:
            "Nga momenti që mbërritëm, u ndjemë si mbretër. Vëmendja e resortit ndaj detajeve është e përsosur dhe aktivitetet ishin perfekte për familjen tonë. Vërtet ishte një përvojë panoramike.",
          rating: 4,
          date: "1 muaj më parë",
        },
        {
          id: 3,
          name: "Ema Rodriguez",
          location: "Londër, MB",
          quote:
            "Panorama Resort është emëruar me vend. Mjedisi i qetë, i kombinuar me shërbim dhe komoditete të klasit botëror, krijoi një pushim të paharrueshëm. Trajtimet spa ishin veçanërisht të mrekullueshme!",
          rating: 5,
          date: "3 muaj më parë",
        },
      ],
    },
  }

  // Use provided content or fallback to default translations
  const currentTranslation = translations[language] || translations.en
  const displayTitle = title || currentTranslation.defaultTitle
  const displaySubtitle = subtitle || currentTranslation.defaultSubtitle
  
  // Check if testimonials is an array and has items
  let displayTestimonials = currentTranslation.defaultTestimonials;
  
  if (testimonials && Array.isArray(testimonials) && testimonials.length > 0) {
    displayTestimonials = testimonials;
  }

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? displayTestimonials.length - 1 : prev - 1))
  }

  // Navigate to next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === displayTestimonials.length - 1 ? 0 : prev + 1))
  }

  // Render TripAdvisor-style rating circles
  const renderRating = (rating: number) => {
    const circles = []
    const maxRating = 5

    for (let i = 0; i < maxRating; i++) {
      if (i < rating) {
        circles.push(
          <CircleDot key={`circle-${i}`} className="fill-[#00aa6c] text-[#00aa6c]" size={16} aria-hidden="true" />,
        )
      } else {
        circles.push(<Circle key={`circle-empty-${i}`} className="text-gray-300" size={16} aria-hidden="true" />)
      }
    }

    return circles
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{displayTitle}</h2>
          <div className="w-24 h-1 bg-[#00aa6c] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">{displaySubtitle}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* TripAdvisor-Style Review Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 overflow-hidden border border-gray-100">
            {/* TripAdvisor Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center">
                {/* TripAdvisor-like Owl Icon */}
                <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2 text-[#00aa6c]" aria-hidden="true">
                  <path
                    d="M12.006 4.295c-4.927 0-8.938 4.011-8.938 8.938 0 4.928 4.011 8.938 8.938 8.938 4.928 0 8.938-4.01 8.938-8.938 0-4.927-4.01-8.938-8.938-8.938zm0 15.729c-3.733 0-6.79-3.057-6.79-6.791 0-3.733 3.057-6.79 6.79-6.79 3.734 0 6.79 3.057 6.79 6.79 0 3.734-3.056 6.791-6.79 6.791z"
                    fill="currentColor"
                  />
                  <circle cx="12" cy="13.233" r="2.989" fill="currentColor" />
                  <circle cx="7.576" cy="11.508" r="1.938" fill="currentColor" />
                  <circle cx="16.583" cy="11.508" r="1.938" fill="currentColor" />
                </svg>
                <span className="text-sm font-medium text-gray-700">{currentTranslation.reviewsFrom}</span>
              </div>
              <div className="flex items-center">
                <div
                  className="flex space-x-1"
                  aria-label={`Rating: ${displayTestimonials[currentTestimonial].rating} out of 5 bubbles`}
                >
                  {renderRating(displayTestimonials[currentTestimonial].rating)}
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">"{displayTestimonials[currentTestimonial].quote}"</p>
            </div>

            {/* Reviewer Info - TripAdvisor Style */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
              <div>
                <h4 className="font-medium text-gray-900">{displayTestimonials[currentTestimonial].name}</h4>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{displayTestimonials[currentTestimonial].location}</span>
                  <span className="mx-2">•</span>
                  <span>{displayTestimonials[currentTestimonial].date}</span>
                </div>
              </div>
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g774870-d8574892-Reviews-Panorama_Resort-Elbasan_Elbasan_County.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white bg-[#00aa6c] px-4 py-2 rounded hover:bg-[#008f5b] transition-colors"
              >
                {currentTranslation.writeReview}
              </a>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-[#00aa6c] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00aa6c] hover:text-white transition-colors shadow-md -ml-6 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-[#00aa6c] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00aa6c] hover:text-white transition-colors shadow-md -mr-6 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {displayTestimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-[#00aa6c] w-6" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
