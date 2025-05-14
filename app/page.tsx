"use client"

import { useState, useEffect } from "react"
import HeroSlider from "@/components/hero-slider"
import Link from "next/link"
import SafeImage from "@/components/safe-image"
import Activities from "@/components/activities"
import MenuPreview from "@/components/menu-preview"
import Testimonials from "@/components/testimonials"
// Remove this import
// import { loadContent } from "@/lib/content-loader"
import { useLanguage } from "@/contexts/language-context"
import GoogleMap from "@/components/google-map"

export const dynamic = "force-dynamic"

export default function HomePage() {
  const [content, setContent] = useState<any>(null)
  const [contactContent, setContactContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  useEffect(() => {
    // Update the fetchContent function to use the API route
    async function fetchContent() {
      setLoading(true)
      try {
        const [homeResponse, contactResponse] = await Promise.all([
          fetch(`/api/content?page=home&language=${language}`, { cache: "no-store" }),
          fetch(`/api/content?page=contact&language=${language}`, { cache: "no-store" }),
        ])

        const homeContent = await homeResponse.json()
        const contactData = await contactResponse.json()

        // Normalize image paths in the content
        if (homeContent.hero?.slides) {
          homeContent.hero.slides = homeContent.hero.slides.map((slide: any) => ({
            ...slide,
            image: slide.image?.startsWith("/Paradise-main/public")
              ? slide.image.replace("/Paradise-main/public", "")
              : slide.image,
          }))
        }

        if (homeContent.roomsSection?.rooms) {
          homeContent.roomsSection.rooms = homeContent.roomsSection.rooms.map((room: any) => ({
            ...room,
            image: room.image?.startsWith("/Paradise-main/public")
              ? room.image.replace("/Paradise-main/public", "")
              : room.image,
          }))
        }

        if (homeContent.ctaSection?.backgroundImage?.startsWith("/Paradise-main/public")) {
          homeContent.ctaSection.backgroundImage = homeContent.ctaSection.backgroundImage.replace(
            "/Paradise-main/public",
            "",
          )
        }

        // Update testimonials section text
        if (homeContent.testimonialsSection) {
          homeContent.testimonialsSection = {
            ...homeContent.testimonialsSection,
            title: "What Our Guests Say",
            subtitle:
              "Don't just take our word for it — see what our visitors have to say about their stay at Panorama Resort.",
          }
        }

        setContent(homeContent)
        setContactContent(contactData)
      } catch (error) {
        console.error("Error fetching content:", error)
        // Set fallback content with more complete structure
        setContent({
          hero: {
            slides: [
              {
                id: 1,
                image: "/images/hero-1.jpg",
                title: "Welcome to Panorama Resort",
                subtitle: "Experience luxury and comfort in a breathtaking location",
              },
            ],
          },
          welcome: {
            title: "Welcome to Panorama Resort",
            description:
              "Nestled in a pristine location, our resort offers the perfect blend of luxury, comfort, and natural beauty.",
            button: "Explore More",
          },
          features: {
            title: "Resort Features",
            subtitle: "Discover what makes our resort special",
            items: [],
          },
          roomsSection: {
            title: "Comfort & Elegance for Every Guest",
            subtitle:
              "Our rooms are designed to offer a relaxing and comfortable stay, whether you're traveling solo, as a couple, or with your family. Every space reflects warmth, functionality, and the calming atmosphere of our natural surroundings. Each room includes comfortable beds, a private bathroom, free Wi-Fi, and beautiful views of the surrounding area — everything you need for a peaceful and pleasant stay.",
            viewAllText: "View All Rooms",
            rooms: [],
          },
          activitiesSection: {
            title: "Resort Activities",
            subtitle: "Explore the many activities available at our resort",
            viewAllText: "View All Activities",
            activities: [],
          },
          menuSection: {
            title: "Dining Experience",
            subtitle: "Savor exquisite cuisine prepared by our talented chefs",
            viewMenuText: "View Full Menu",
            categories: [],
          },
          testimonialsSection: {
            title: "What Our Guests Say",
            subtitle:
              "Don't just take our word for it — see what our visitors have to say about their stay at Panorama Resort.",
            testimonials: [],
          },
          ctaSection: {
            title: "Ready for an Unforgettable Experience?",
            subtitle: "Book your stay now and discover why our guests keep coming back year after year.",
            buttonText: "Book Your Stay",
            buttonLink: "https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan",
            backgroundImage: "/tropical-resort-poolside.png",
          },
        })

        // Fallback contact content
        setContactContent({
          map: {
            title: "Where to Find Us",
            description:
              "Panorama Resort is set in a peaceful and scenic area of Elbasan — close to local attractions, yet perfectly tucked away for moments of true relaxation.",
          },
          mapLocation: {
            lat: 41.1141,
            lng: 20.0822,
            zoom: 15,
          },
        })
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [language])

  if (loading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E91E63]"></div>
      </div>
    )
  }

  const heroSlides = content.hero?.slides || []
  const welcome = content.welcome || {}
  const features = content.features || {}
  const roomsSection = content.roomsSection || {}
  const activitiesSection = content.activitiesSection || {}
  const menuSection = content.menuSection || {}
  const testimonialsSection = content.testimonialsSection || {}
  const ctaSection = content.ctaSection || {}
  const mapInfo = contactContent?.map || {}
  const mapLocation = contactContent?.mapLocation || { lat: 41.1141, lng: 20.0822, zoom: 15 }

  return (
    <main className="min-h-screen">
      <HeroSlider
        slides={heroSlides.map((slide) => ({
          ...slide,
          image: slide.image?.startsWith("/Paradise-main/public")
            ? slide.image.replace("/Paradise-main/public", "")
            : slide.image,
        }))}
        language={language}
      />

      {/* Welcome Section with Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">{welcome.title}</h2>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-8 leading-relaxed">{welcome.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.items?.map((feature: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#E91E63] text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-[#880E4F]">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 px-4 bg-[#FFF9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#880E4F]">Rooms & Amenities</h2>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Description Box - Top Left */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#F8BBD0] p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-[#880E4F]">Comfort & Elegance for Every Guest</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{roomsSection.subtitle}</p>
              <Link
                href="/rooms"
                className="inline-block bg-[#E91E63] text-white px-4 py-2 rounded-md hover:bg-[#C2185B] transition-colors mt-auto"
              >
                {roomsSection.viewAllText}
              </Link>
            </div>

            {/* Three Rooms - Remaining Cells */}
            {roomsSection.rooms?.slice(0, 3).map((room: any) => (
              <div
                key={room.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#F8BBD0]"
              >
                <div className="relative h-64">
                  <SafeImage
                    src={room.image || room.mainImage}
                    alt={room.name}
                    fill
                    className="object-cover"
                    fallbackSrc="/opulent-suite.png"
                  />
                  <div className="absolute top-4 right-4 bg-[#F8BBD0] text-[#880E4F] px-3 py-1 rounded-full text-sm font-medium">
                    {room.price} / {language === "al" ? "natë" : "night"}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#880E4F]">{room.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                  <Link
                    href="/rooms"
                    className="inline-block bg-[#F8BBD0] text-[#880E4F] px-4 py-2 rounded-md hover:bg-[#E91E63] hover:text-white transition-colors"
                  >
                    {language === "al" ? "Shiko Detajet" : "View Details"}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/rooms"
              className="inline-block bg-[#E91E63] text-white px-6 py-3 rounded-md hover:bg-[#C2185B] transition-colors"
            >
              {roomsSection.viewAllText}
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <MenuPreview
        title={menuSection.title}
        subtitle={menuSection.subtitle}
        categories={menuSection.categories || []}
        viewMenuText={menuSection.viewMenuText}
      />

      {/* Activities Section */}
      <Activities
        title={activitiesSection.title}
        subtitle={activitiesSection.subtitle}
        activities={activitiesSection.activities || []}
        viewAllText={activitiesSection.viewAllText}
      />

      {/* Testimonials Section - Updated text as requested */}
      <Testimonials
        title="What Our Guests Say"
        subtitle="Don't just take our word for it — see what our visitors have to say about their stay at Panorama Resort."
        testimonials={testimonialsSection.testimonials || []}
      />

      {/* Find Us Section */}
      <section className="py-16 px-4 bg-[#FFF9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#880E4F]">Where to Find Us</h2>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-bold mb-4">Find Us in the Heart of Elbasan</h2>
            <p className="text-gray-600 mb-8">
              Panorama Resort is set in a peaceful and scenic area of Elbasan — close to local attractions, yet
              perfectly tucked away for moments of true relaxation.
            </p>

            {/* Full-width map */}
            <div className="h-[500px] w-full rounded-lg overflow-hidden">
              <GoogleMap location={mapLocation} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${
            ctaSection.backgroundImage?.startsWith("/Paradise-main/public")
              ? ctaSection.backgroundImage.replace("/Paradise-main/public", "")
              : ctaSection.backgroundImage || "/tropical-resort-poolside.png"
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{ctaSection.title}</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white text-opacity-90">{ctaSection.subtitle}</p>
            <a
              href={ctaSection.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E91E63] text-white px-8 py-4 rounded-lg hover:bg-[#C2185B] transition-colors transform hover:scale-105"
            >
              {ctaSection.buttonText}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
