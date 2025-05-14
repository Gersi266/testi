"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function TripAdvisorReviews({ title, subtitle }) {
  const { language } = useLanguage()

  // Translations for the component
  const translations = {
    en: {
      defaultTitle: "What Our Guests Say",
      defaultSubtitle: "Read verified reviews from guests who have experienced the Panorama Resort difference.",
    },
    al: {
      defaultTitle: "Çfarë Thonë Mysafirët Tanë",
      defaultSubtitle: "Lexoni vlerësime të verifikuara nga mysafirët që kanë përjetuar diferencën e Panorama Resort.",
    },
  }

  // Use provided content or fallback to default translations
  const currentTranslation = translations[language] || translations.en
  const displayTitle = title || currentTranslation.defaultTitle
  const displaySubtitle = subtitle || currentTranslation.defaultSubtitle

  // Load TripAdvisor widget script
  useEffect(() => {
    // Check if script is already loaded
    if (!document.getElementById("tripadvisor-widget-script")) {
      const script = document.createElement("script")
      script.id = "tripadvisor-widget-script"
      script.src =
        "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=846&locationId=8574892&lang=" +
        (language === "al" ? "sq_AL" : "en_US") +
        "&rating=true&nreviews=5&writereviewlink=true&popIdx=true&iswide=false&border=true"
      script.async = true
      script.defer = true

      // Add script to document
      document.body.appendChild(script)
    }

    // Cleanup function
    return () => {
      const script = document.getElementById("tripadvisor-widget-script")
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [language]) // Re-run when language changes

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{displayTitle}</h2>
          <div className="w-24 h-1 bg-[#00aa6c] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-8">{displaySubtitle}</p>
        </div>

        {/* TripAdvisor Widget Container */}
        <div className="flex justify-center">
          <div id="TA_selfserveprop846" className="TA_selfserveprop" style={{ width: "100%", maxWidth: "800px" }}>
            <ul id="8UDfZn" className="TA_links vr9Grp9">
              <li id="Wd0rBEJ" className="ndQmxI7">
                <a
                  target="_blank"
                  href="https://www.tripadvisor.com/Restaurant_Review-g774870-d8574892-Reviews-Panorama_Resort-Elbasan_Elbasan_County.html"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.tripadvisor.com/img/cdsi/img2/branding/150_logo-11900-2.png"
                    alt="TripAdvisor"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Note about TripAdvisor Widget */}
        <div className="text-center mt-8 text-sm text-gray-500">
          {language === "en"
            ? "Reviews are loaded directly from TripAdvisor. If you don't see reviews, please ensure you're connected to the internet."
            : "Vlerësimet ngarkohen drejtpërdrejt nga TripAdvisor. Nëse nuk shihni vlerësime, sigurohuni që jeni të lidhur me internetin."}
        </div>
      </div>
    </section>
  )
}
