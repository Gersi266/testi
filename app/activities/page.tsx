"use client"

import { useState } from "react"
import { Clock, MapPin, DollarSign } from "lucide-react"
import SafeImage from "@/components/safe-image"
import PreviewModal from "@/components/preview-modal"
import { usePageContent } from "@/hooks/use-page-content"

export default function ActivitiesPage() {
  const [selectedActivity, setSelectedActivity] = useState<any>(null)
  const { content, loading, error } = usePageContent("activities")

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E91E63]"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 max-w-md bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Activities</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#E91E63] text-white rounded-lg hover:bg-[#C2185B] transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  // Booking link
  const bookingLink = content?.bookingLink || "https://www.see-albania.com/hotel/hotel-panorama-spa-elbasan"

  // Function to open activity modal
  const openActivityModal = (activity: any) => {
    setSelectedActivity(activity)
  }

  // Function to close activity modal
  const closeActivityModal = () => {
    setSelectedActivity(null)
  }

  // Activity details component for the modal
  const ActivityDetails = ({ activity }: { activity: any }) => (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#880E4F] mb-3 pb-2 border-b border-[#F8BBD0] flex items-center">
          <span className="bg-[#F8BBD0] w-1 h-6 rounded mr-2"></span>
          Details
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{activity.longDescription}</p>

        <div className="bg-gradient-to-r from-[#FFF9FB] to-[#F8BBD0] p-5 rounded-lg mb-4 space-y-4 shadow-sm">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" aria-hidden="true" />
            <div>
              <span className="font-medium text-[#880E4F]">Hours:</span>
              <span className="ml-2 text-gray-600">{activity.hours}</span>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" aria-hidden="true" />
            <div>
              <span className="font-medium text-[#880E4F]">Location:</span>
              <span className="ml-2 text-gray-600">{activity.location}</span>
            </div>
          </div>

          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" aria-hidden="true" />
            <div>
              <span className="font-medium text-[#880E4F]">Price:</span>
              <span className="ml-2 text-gray-600">{activity.price}</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href={bookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-[#E91E63] to-[#E91E63] hover:from-[#E91E63] hover:to-[#E91E63] text-white text-center font-semibold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
      >
        Book Now
      </a>
    </div>
  )

  const activities = content?.activitiesSection?.activities || []

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <SafeImage
          src={content?.hero?.image || "/images/activities-hero.png"}
          alt="Resort activities at Panorama - Adventure and relaxation experiences"
          fill
          className="object-cover"
          fallbackSrc="/tropical-infinity-pool.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              {content?.hero?.title || "Resort Activities"}
            </h1>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto">
              {content?.hero?.subtitle ||
                "Discover a world of relaxation, adventure, and entertainment at Panorama Resort"}
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFF9FB] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#880E4F] mb-4">
              {content?.activitiesSection?.title || "Explore Our Activities"}
            </h2>
            <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {content?.activitiesSection?.subtitle ||
                "Whether you're here to unwind or explore, our range of activities is designed to make every moment unforgettable."}
            </p>
          </div>

          {/* First row - 3 activities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {activities.slice(0, 3).map((activity: any) => (
              <div
                key={activity.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border border-[#F8BBD0]"
                onClick={() => openActivityModal(activity)}
                style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                  {activity.image ? (
                    <SafeImage
                      src={activity.image}
                      alt={`${activity.title || activity.name} - ${activity.description?.substring(0, 50) || "Resort activity"}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      fallbackSrc="/images/activity-1.png"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#880E4F] group-hover:text-[#880E4F] transition-colors duration-300 mb-4">
                    {activity.title || activity.name}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">{activity.description}</p>

                  <div className="bg-[#FFF9FB] p-4 rounded-lg mb-6 space-y-2.5 text-sm border border-[#F8BBD0]">
                    <div className="flex items-center text-[#880E4F]">
                      <Clock className="h-4 w-4 mr-2.5 text-[#E91E63] flex-shrink-0" aria-hidden="true" />
                      <span className="truncate">{activity.duration || activity.hours}</span>
                    </div>
                    <div className="flex items-center text-[#880E4F]">
                      <MapPin className="h-4 w-4 mr-2.5 text-[#E91E63] flex-shrink-0" aria-hidden="true" />
                      <span className="truncate">{activity.difficulty || activity.location}</span>
                    </div>
                  </div>

                  <button className="inline-block bg-[#F8BBD0] text-[#880E4F] font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform group-hover:scale-[1.02] shadow-md w-full text-center hover:bg-[#E91E63] hover:text-white">
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {activities.slice(3, 5).map((activity: any) => (
              <div
                key={activity.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border border-[#F8BBD0]"
                onClick={() => openActivityModal(activity)}
                style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                  {activity.image ? (
                    <SafeImage
                      src={activity.image}
                      alt={`${activity.title || activity.name} - ${activity.description?.substring(0, 50) || "Resort activity"}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      fallbackSrc="/images/activity-1.png"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#880E4F] group-hover:text-[#880E4F] transition-colors duration-300 mb-4">
                    {activity.title || activity.name}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">{activity.description}</p>

                  <div className="bg-[#FFF9FB] p-4 rounded-lg mb-6 space-y-2.5 text-sm border border-[#F8BBD0]">
                    <div className="flex items-center text-[#880E4F]">
                      <Clock className="h-4 w-4 mr-2.5 text-[#E91E63] flex-shrink-0" aria-hidden="true" />
                      <span className="truncate">{activity.duration || activity.hours}</span>
                    </div>
                    <div className="flex items-center text-[#880E4F]">
                      <MapPin className="h-4 w-4 mr-2.5 text-[#E91E63] flex-shrink-0" aria-hidden="true" />
                      <span className="truncate">{activity.difficulty || activity.location}</span>
                    </div>
                  </div>

                  <button className="inline-block bg-[#F8BBD0] text-[#880E4F] font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform group-hover:scale-[1.02] shadow-md w-full text-center hover:bg-[#E91E63] hover:text-white">
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Preview Modal */}
      {selectedActivity && (
        <PreviewModal
          isOpen={!!selectedActivity}
          onClose={closeActivityModal}
          title={selectedActivity.title || selectedActivity.name}
          description={selectedActivity.description}
          images={[selectedActivity.image, ...(selectedActivity.additionalImages || [])]}
          fallbackImage={`/placeholder.svg?height=600&width=800&query=${encodeURIComponent(selectedActivity.title || selectedActivity.name)}`}
          details={<ActivityDetails activity={selectedActivity} />}
        />
      )}
    </main>
  )
}
