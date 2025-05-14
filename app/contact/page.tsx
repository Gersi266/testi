"use client"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import GoogleMap from "@/components/google-map"
import { usePageContent } from "@/hooks/use-page-content"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const { content, loading, error } = usePageContent("contact")

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
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Contact Information</h2>
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

  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-gray-900">
        <Image
          src={content?.hero?.image || "/images/hero-1.jpg"}
          alt="Contact Panorama Resort - Get in touch with our team"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content?.hero?.title || "Contact Us"}</h1>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content?.getInTouch?.title || "Get in Touch"}</h2>
          <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            {content?.getInTouch?.subtitle ||
              "We're here to help make your stay perfect. Contact us with any questions or to book your reservation."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {content?.getInTouch?.contactInfo?.map((info: any, index: number) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-4">
                {info.icon === "phone" && <Phone className="h-6 w-6 text-[#E91E63]" aria-hidden="true" />}
                {info.icon === "mail" && <Mail className="h-6 w-6 text-[#E91E63]" aria-hidden="true" />}
                {info.icon === "mapPin" && <MapPin className="h-6 w-6 text-[#E91E63]" aria-hidden="true" />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              {info.lines?.map((line: string, i: number) => (
                <p key={i} className="text-gray-600">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content?.faq?.title || "Frequently Asked Questions"}</h2>
          <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-8">
            {content?.faq?.subtitle ||
              "Find answers to our most commonly asked questions. If you don't see what you're looking for, please contact us."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <Accordion type="single" collapsible className="w-full">
            {content?.faq?.questions?.map((item: any, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Find Us Section - Simplified */}
      <section className="py-16 px-4 bg-[#FFF9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-bold mb-4">{content?.map?.title || "Find Us"}</h2>
            <p className="text-gray-600 mb-8">
              {content?.map?.description ||
                "Located in the beautiful city of Elbasan, Panorama Resort offers easy access to local attractions. Our resort is nestled in a serene environment that provides the perfect balance of relaxation and adventure."}
            </p>

            {/* Full-width map */}
            <div className="h-[500px] w-full rounded-lg overflow-hidden">
              <GoogleMap location={content?.mapLocation} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
