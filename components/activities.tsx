"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Activities({ title, subtitle, activities, viewAllText }) {
  const { language } = useLanguage()

  // Translations for the component
  const translations = {
    en: {
      defaultTitle: "Exciting Activities",
      defaultSubtitle:
        "Discover a world of adventure and relaxation with our wide range of activities. Whether you seek thrills or tranquility, we have something for everyone.",
      learnMore: "Learn More",
      viewAll: "View All Activities",
      defaultActivities: [
        {
          id: 1,
          name: "Swimming Pool",
          title: "Refreshing Swimming Pools",
          description: "Enjoy our refreshing swimming pool with stunning views of the surrounding landscape.",
          image: "/images/activity-1.png",
          icon: "M18 12H6M12 6V18",
        },
        {
          id: 2,
          name: "Spa & Wellness",
          title: "Luxury Spa & Wellness",
          description: "Relax and rejuvenate with our range of spa treatments and wellness activities.",
          image: "/images/activity-2.png",
          icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M6 16h.01",
        },
        {
          id: 3,
          name: "Fine Dining",
          title: "Exquisite Fine Dining",
          description: "Savor exquisite cuisine prepared by our talented chefs using the freshest local ingredients.",
          image: "/images/activity-4.png",
          icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
        },
      ],
    },
    al: {
      defaultTitle: "Aktivitete Emocionuese",
      defaultSubtitle:
        "Zbuloni një botë aventure dhe relaksimi me gamën tonë të gjerë të aktiviteteve. Nëse kërkoni emocione apo qetësi, ne kemi diçka për të gjithë.",
      learnMore: "Mëso Më Shumë",
      viewAll: "Shiko Të Gjitha Aktivitetet",
      defaultActivities: [
        {
          id: 1,
          name: "Pishinë",
          title: "Pishina Freskuese",
          description: "Shijoni pishinën tonë freskuese me pamje mahnitëse të peizazhit përreth.",
          image: "/images/activity-1.png",
          icon: "M18 12H6M12 6V18",
        },
        {
          id: 2,
          name: "Spa & Mirëqenie",
          title: "Spa & Mirëqenie Luksoze",
          description: "Relaksohuni dhe ringjalluni me gamën tonë të trajtimeve spa dhe aktiviteteve të mirëqenies.",
          image: "/images/activity-2.png",
          icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M6 16h.01",
        },
        {
          id: 3,
          name: "Kuzhinë e Sofistikuar",
          title: "Kuzhinë e Shkëlqyer",
          description:
            "Shijoni kuzhinën e shkëlqyer të përgatitur nga kuzhinierët tanë të talentuar duke përdorur përbërësit më të freskët lokalë.",
          image: "/images/activity-4.png",
          icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
        },
      ],
    },
  }

  // Use provided content or fallback to default translations
  const currentTranslation = translations[language] || translations.en
  const displayTitle = title || currentTranslation.defaultTitle
  const displaySubtitle = subtitle || currentTranslation.defaultSubtitle
  const displayViewAllText = viewAllText || currentTranslation.viewAll
  const displayActivities = activities?.length > 0 ? activities : currentTranslation.defaultActivities

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{displayTitle}</h2>
          <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">{displaySubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#F8BBD0]"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={`${activity.title || activity.name} - ${activity.description?.substring(0, 50) || "Resort activity"}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title || activity.name}</h3>
                <p className="text-gray-600">{activity.description}</p>
                <Link
                  href="/activities"
                  className="mt-4 inline-block w-full bg-[#F8BBD0] text-[#880E4F] text-center py-2 rounded-md font-medium hover:bg-[#E91E63] hover:text-white transition-colors"
                >
                  {currentTranslation.learnMore}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/activities"
            className="inline-block bg-[#F8BBD0] text-[#880E4F] px-8 py-3 rounded-lg font-semibold hover:bg-[#E91E63] hover:text-white transition-colors mt-8"
          >
            {displayViewAllText}
          </Link>
        </div>
      </div>
    </section>
  )
}
