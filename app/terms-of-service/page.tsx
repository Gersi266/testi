import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Panorama Resort",
  description: "Terms and conditions for using Panorama Resort services",
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-300">Please read these terms carefully before using our services</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">1. Introduction</h2>
            <p className="mb-4">Last Updated: April 27, 2025</p>
            <p className="mb-4">
              These terms and conditions ("Terms") govern your use of the Panorama Resort website and services
              (collectively, the "Services") operated by Panorama Resort ("we," "us," or "our"). By accessing or using
              our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may
              not access the Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">2. Reservations and Bookings</h2>
            <p className="mb-4">By making a reservation at Panorama Resort, you agree to the following:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You must be at least 18 years of age to make a reservation.</li>
              <li>You agree to provide accurate, current, and complete information during the reservation process.</li>
              <li>Reservations are subject to availability and confirmation by Panorama Resort.</li>
              <li>
                Rates are per room, per night, based on single or double occupancy, and are subject to change without
                notice.
              </li>
              <li>Additional charges may apply for extra guests, amenities, or services.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">3. Cancellation and Refund Policy</h2>
            <p className="mb-4">Our cancellation and refund policy is as follows:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Standard Reservations:</strong> Cancellations made 7 or more days prior to the arrival date will
                receive a full refund.
              </li>
              <li>
                <strong>Late Cancellations:</strong> Cancellations made less than 7 days but more than 48 hours prior to
                the arrival date will be charged 50% of the total reservation amount.
              </li>
              <li>
                <strong>Last-Minute Cancellations:</strong> Cancellations made less than 48 hours prior to the arrival
                date, as well as no-shows, will be charged the full reservation amount.
              </li>
              <li>
                <strong>Early Departure:</strong> No refunds will be provided for early departures.
              </li>
              <li>
                <strong>Special Events and Peak Seasons:</strong> Different cancellation policies may apply during
                special events or peak seasons. These will be communicated at the time of booking.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">4. Resort Rules and Regulations</h2>
            <p className="mb-4">While staying at Panorama Resort, guests must adhere to the following rules:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Check-in time is 3:00 PM and check-out time is 11:00 AM.</li>
              <li>Quiet hours are from 10:00 PM to 8:00 AM.</li>
              <li>Smoking is prohibited in all indoor areas. Designated smoking areas are provided outdoors.</li>
              <li>Pets are not allowed unless specifically booked in a pet-friendly room.</li>
              <li>Guests are responsible for any damage to resort property caused by them or their visitors.</li>
              <li>
                The resort reserves the right to refuse service to anyone and to evict any guest who creates a
                disturbance.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              Panorama Resort shall not be liable for any direct, indirect, incidental, special, consequential, or
              punitive damages, including but not limited to, personal injury, wrongful death, property damage, loss of
              data, loss of income or profit, or any other damages arising out of or in connection with your stay at our
              resort, whether based on warranty, contract, tort, or any other legal theory, and whether or not the
              resort is advised of the possibility of such damages.
            </p>
            <p>
              Panorama Resort is not responsible for any lost, stolen, or damaged personal belongings. Guests are
              encouraged to use in-room safes for valuables.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              The content on our website, including but not limited to text, graphics, logos, images, audio clips,
              digital downloads, and data compilations, is the property of Panorama Resort or its content suppliers and
              is protected by international copyright laws. The compilation of all content on this site is the exclusive
              property of Panorama Resort and is protected by international copyright laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">7. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
              Panorama Resort is located, without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising under or in connection with these Terms shall be subject to the exclusive
              jurisdiction of the courts located within the jurisdiction in which Panorama Resort is located.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Services after any revisions become effective, you agree to be bound by
              the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">9. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
           <div className="bg-gray-50 p-4 rounded-md">
              <p>
                <strong>Panorama Resort</strong>
              </p>
              <p>Rruga Teqes Mendel</p>
              <p>Elbasan 3006</p>
              <p>Email: privacy@panoramaresortelbasan.com</p>
              <p>Phone: +355 69 207 0062</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
