"use client"

import { useState } from "react"
import { Check, Clock } from "lucide-react"
import SafeImage from "@/components/safe-image"
import PreviewModal from "@/components/preview-modal"
import { usePageContent } from "@/hooks/use-page-content"

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const { content, loading: isLoading } = usePageContent("rooms")

  // If content is loading, show a simple loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E91E63]"></div>
      </div>
    )
  }

  // Get rooms from the correct path in the content structure
  const rooms = content?.roomsSection?.rooms || []

  // Booking link
  const bookingLink = "https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan"

  // Function to open room modal
  const openRoomModal = (room: any) => {
    setSelectedRoom(room)
  }

  // Function to close room modal
  const closeRoomModal = () => {
    setSelectedRoom(null)
  }

  // Room details component for the modal
  const RoomDetails = ({ room }: { room: any }) => (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div className="text-2xl font-bold text-[#E91E63] flex items-baseline">
          {room.price} <span className="text-sm font-normal text-gray-500 ml-1">/ night</span>
        </div>
        <div className="bg-gradient-to-r from-[#FFF9FB] to-[#F8BBD0] px-4 py-3 rounded-lg shadow-sm">
          <div className="flex items-center text-sm text-[#880E4F]">
            <Clock className="h-4 w-4 mr-2 text-[#E91E63]" aria-hidden="true" />
            <span>Check-in: {content?.checkTimes?.checkIn || "12:00"}</span>
          </div>
          <div className="flex items-center text-sm text-[#880E4F] mt-1.5">
            <Clock className="h-4 w-4 mr-2 text-[#E91E63]" aria-hidden="true" />
            <span>Check-out: {content?.checkTimes?.checkOut || "11:00"}</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#880E4F] mb-3 pb-2 border-b border-[#F8BBD0] flex items-center">
          <span className="bg-[#F8BBD0] w-1 h-6 rounded mr-2"></span>
          Room Details
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#880E4F] mb-3 pb-2 border-b border-[#F8BBD0] flex items-center">
          <span className="bg-[#F8BBD0] w-1 h-6 rounded mr-2"></span>
          Room Features
        </h3>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
          {room.features?.map((feature: string, index: number) => (
            <li key={index} className="text-gray-600 flex items-center">
              <div className="h-5 w-5 rounded-full bg-[#F8BBD0] flex items-center justify-center mr-2 flex-shrink-0">
                <Check className="h-3.5 w-3.5 text-[#D81B60]" aria-hidden="true" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={bookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-[#E91E63] to-[#C2185B] hover:from-[#C2185B] hover:to-[#B71C1C] text-white text-center font-semibold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
      >
        {content?.ctaSection?.buttonText || "Book Now"}
      </a>
    </div>
  )

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <SafeImage
          src={content?.heroImage || "/images/room-1.png"}
          alt="Luxury accommodations at Panorama Resort - Comfortable rooms with mountain views"
          fill
          className="object-cover"
          quality={90}
          sizes="100vw"
          fallbackSrc="/opulent-suite.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              {content?.title || "Comfort That Feels Like Home"}
            </h1>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto">
              {content?.subtitle ||
                "Enjoy relaxing, thoughtfully designed rooms with all the essentials for a peaceful and pleasant stay — where comfort, calm, and nature come together."}
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFF9FB] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">
              {content?.roomsSection?.title || "Our Accommodations"}
            </h2>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {content?.roomsSection?.subtitle || "Choose from our selection of comfortable and luxurious rooms"}
            </p>
          </div>

          {/* Room cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room: any) => (
              <div
                key={room.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border border-[#F8BBD0]"
                onClick={() => openRoomModal(room)}
                style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <SafeImage
                    src={room.image || room.mainImage}
                    alt={`${room.name} - ${room.description?.substring(0, 50) || "Luxury accommodation"}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    fallbackSrc="/opulent-suite.png"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-[#F8BBD0] text-[#880E4F] px-4 py-1.5 rounded-full font-semibold shadow-lg">
                    {room.price} / night
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#880E4F] mb-2 group-hover:text-[#D81B60] transition-colors duration-300">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-5">{room.description}</p>

                  <div className="flex flex-wrap gap-y-3 mb-6">
                    {room.features &&
                      room.features.slice(0, 4).map((feature: string, index: number) => (
                        <div key={index} className="w-1/2 flex items-center text-gray-700">
                          <div className="h-4 w-4 rounded-full bg-[#F8BBD0] flex items-center justify-center mr-2 flex-shrink-0">
                            <Check className="h-3 w-3 text-[#D81B60]" aria-hidden="true" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                  </div>

                  <button className="block w-full bg-[#F8BBD0] text-[#880E4F] text-center font-semibold py-3 rounded-lg transition-all duration-300 transform group-hover:scale-[1.02] shadow-md hover:bg-[#E91E63] hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Preview Modal */}
      {selectedRoom && (
        <PreviewModal
          isOpen={!!selectedRoom}
          onClose={closeRoomModal}
          title={selectedRoom.name}
          description={selectedRoom.description}
          images={[
            selectedRoom.image || selectedRoom.mainImage,
            ...(selectedRoom.additionalImages || selectedRoom.gallery || []),
          ]}
          fallbackImage="/opulent-suite.png"
          details={<RoomDetails room={selectedRoom} />}
        />
      )}

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">
              {content?.facilitiesSection?.title || "Most Popular Facilities"}
            </h2>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {content?.facilitiesSection?.subtitle || "Enjoy our premium amenities during your stay"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Use facilities from content if available, otherwise use default facilities */}
            {(
              content?.facilitiesSection?.facilities || [
                { name: "2 Swimming Pools", icon: "check" },
                { name: "Non-smoking Rooms", icon: "ban" },
                { name: "Spa and Wellness", icon: "smile" },
                { name: "Restaurant", icon: "shopping-cart" },
                { name: "Family Rooms", icon: "users" },
                { name: "Free Parking", icon: "archive" },
                { name: "Room Service", icon: "home" },
                { name: "Free WiFi", icon: "wifi" },
                { name: "Bar", icon: "monitor" },
                { name: "Breakfast", icon: "sun" },
              ]
            ).map((facility: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-[#F8BBD0] rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#E91E63]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-center text-[#880E4F]">{facility.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#E91E63] to-[#C2185B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {content?.ctaSection?.title || "Ready to Book Your Stay?"}
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white text-opacity-90">
              {content?.ctaSection?.subtitle ||
                "Contact us now to reserve your room and experience the luxury of Panorama Resort."}
            </p>
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#E91E63] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
            >
              {content?.ctaSection?.buttonText || "Book Now"}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
