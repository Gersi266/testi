"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { language } = useLanguage()

  // Define translations
  const translations = {
    en: {
      links: {
        title: "Quick Links",
        home: "Home",
        about: "About",
        rooms: "Rooms",
        activities: "Activities",
        menu: "Menu",
        contact: "Contact",
      },
      contact: {
        title: "Contact Info",
        address: "Rruga Teqes Mengel, Elbasan 3006",
        phone: "+355 69 207 0062",
        email: "info@panoramaresortelbasan.com",
      },
      hours: {
        title: "Opening Hours",
        reception: "Reception: 24/7",
        restaurant: "Restaurant: 7:00 AM - 10:00 PM",
        spa: "Spa: 9:00 AM - 8:00 PM",
      },
      copyright: "© 2025 Paradise Resort. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    al: {
      links: {
        title: "Lidhje të Shpejta",
        home: "Kryefaqja",
        about: "Rreth Nesh",
        rooms: "Dhomat",
        activities: "Aktivitetet",
        menu: "Menu",
        contact: "Kontakt",
      },
      contact: {
        title: "Informacion Kontakti",
        address: "Rruga Teqes Mengel, Elbasan 3006",
        phone: "+355 69 207 0062",
        email: "info@panoramaresortelbasan.com",
      },
      hours: {
        title: "Orari i Punës",
        reception: "Recepsioni: 24/7",
        restaurant: "Restoranti: 7:00 - 22:00",
        spa: "Spa: 9:00 - 20:00",
      },
      copyright: "© 2025 Paradise Resort. Të gjitha të drejtat e rezervuara.",
      privacy: "Politika e Privatësisë",
      terms: "Kushtet e Përdorimit",
    },
  }

  // Get translations based on current language
  const t = translations[language]

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="mb-6">
              <div className="relative w-auto h-20 md:h-28">
                <Image
                  src="/images/panorama-logo.png"
                  alt="Panorama Resort Logo"
                  width={280}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Luxury mountain retreat offering exceptional comfort and breathtaking views.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/panorama.bar24ore/"
                className="h-10 w-10 rounded-full bg-[#3223ff] flex items-center justify-center hover:bg-[#C2185B] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g774870-d8574892-Reviews-Panorama_Resort-Elbasan_Elbasan_County.html"
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="TripAdvisor"
              >
                <Image
                  src="/images/tripadvisor.png"
                  alt="TripAdvisor"
                  width={20}
                  height={20}
                  className="object-contain"
                  unoptimized
                />
              </a>
              <a
                href="https://www.instagram.com/panorama_resort_elbasan/?hl=en"
                className="h-10 w-10 rounded-full bg-[#E91E63] flex items-center justify-center hover:bg-[#C2185B] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.links.title}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  {t.links.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  {t.links.about}
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-white/80 hover:text-white transition-colors">
                  {t.links.rooms}
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-white/80 hover:text-white transition-colors">
                  {t.links.activities}
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white/80 hover:text-white transition-colors">
                  {t.links.menu}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  {t.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.contact.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#E91E63] mt-1 mr-3 flex-shrink-0" />
                <span className="text-white/80">{t.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" />
                <span className="text-white/80">{t.contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" />
                <span className="text-white/80">{t.contact.email}</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">{t.hours.title}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" />
                <span className="text-white/80">{t.hours.reception}</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" />
                <span className="text-white/80">{t.hours.restaurant}</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-[#E91E63] mr-3 flex-shrink-0" />
                <span className="text-white/80">{t.hours.spa}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/20 text-center md:flex md:justify-between md:text-left">
          <div className="text-white/80 mb-4 md:mb-0">{t.copyright}</div>
          <div className="space-x-4">
            <Link href="/privacy-policy" className="text-white/80 hover:text-white transition-colors">
              {t.privacy}
            </Link>
            <Link href="/terms-of-service" className="text-white/80 hover:text-white transition-colors">
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
