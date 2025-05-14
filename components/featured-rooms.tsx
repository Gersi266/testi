"use client"
import Link from "next/link"
import SafeImage from "./safe-image"
import { useLanguage } from "@/contexts/language-context"
import { usePageContent } from "@/hooks/use-page-content"

export default function FeaturedRooms() {
  const { language } = useLanguage()
  const { content, loading, error } = usePageContent("rooms")

  const fallbackContent = {
    roomsSection: {
      rooms: [
        {
          id: 1,
          name: language === "al" ? "Dhomë Teke" : "Single Room",
          description: language === "al" ? "Perfekte për udhëtarët e vetëm" : "Perfect for solo travelers",
          price: 60,
          image: "/images/room-1.png",
        },
        {
          id: 2,
          name: language === "al" ? "Dhomë Dyshe" : "Double Room",
          description: language === "al" ? "Ideale për çifte" : "Ideal for couples",
          price: 67,
          image: "/images/room-2.png",
        },
        {
          id: 3,
          name: language === "al" ? "Dhomë Familjare" : "Family Room",
          description: language === "al" ? "Dhomë e gjerë për familje" : "Spacious room for families",
          price: 80,
          image: "/images/room-3.png",
        },
      ],
    },
  }

  const roomsContent = loading || error ? fallbackContent : content
  const featuredRooms = roomsContent?.roomsSection?.rooms?.slice(0, 3) || []

  if (featuredRooms.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-4 bg-[#FFF9FB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "al" ? "Akomodimet Tona" : "Our Accommodations"}
          </h2>
          <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            {language === "al"
              ? "Përjetoni komoditet dhe luks në dhomat tona të dizajnuara me kujdes me pajisje premium"
              : "Experience comfort and luxury in our carefully designed rooms with premium amenities"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#F8BBD0] p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-[#880E4F]">
              {language === "al" ? "Përjetoni Luksin" : "Experience Luxury"}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === "al"
                ? "Dhomat tona ofrojnë një kombinim perfekt të komoditetit, stilit dhe funksionalitetit. Secila dhomë është e pajisur me pajisje moderne dhe është e dizajnuar për të siguruar një qëndrim të paharrueshëm."
                : "Our rooms offer the perfect combination of comfort, style, and functionality. Each room is equipped with modern amenities and is designed to ensure an unforgettable stay."}
            </p>
            <Link
              href="/rooms"
              className="inline-block bg-[#E91E63] text-white px-4 py-2 rounded-md hover:bg-[#C2185B] transition-colors mt-auto"
            >
              {language === "al" ? "Eksploro Më Shumë" : "Explore More"}
            </Link>
          </div>

          {featuredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#F8BBD0]"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <SafeImage
                  src={room.image || room.mainImage}
                  alt={room.name}
                  width={400}
                  height={192}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  fallbackSrc="/opulent-suite.png"
                />
                <div className="absolute top-4 right-4 bg-[#F8BBD0] text-[#880E4F] px-3 py-1 rounded-full text-sm font-medium">
                  {room.price} {language === "al" ? "ALL / natë" : "ALL / night"}
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
            {language === "al" ? "Shiko Të Gjitha Dhomat" : "View All Rooms"}
          </Link>
        </div>
      </div>
    </section>
  )
}
