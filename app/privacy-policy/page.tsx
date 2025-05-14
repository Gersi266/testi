import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Panorama Resort",
  description: "Our commitment to protecting your privacy and personal information",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-300">Our commitment to protecting your privacy and personal information</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">Introduction</h2>
            <p className="mb-4">Last Updated: April 27, 2025</p>
            <p className="mb-4">
              At Panorama Resort, we respect your privacy and are committed to protecting your personal data. This
              privacy policy will inform you about how we look after your personal data when you visit our website and
              tell you about your privacy rights and how the law protects you.
            </p>
            <p>Please read this privacy policy carefully before using our services.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">Information We Collect</h2>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped
              together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Identity Data</strong> includes first name, last name, username or similar identifier, title,
                date of birth.
              </li>
              <li>
                <strong>Contact Data</strong> includes billing address, delivery address, email address and telephone
                numbers.
              </li>
              <li>
                <strong>Financial Data</strong> includes payment card details.
              </li>
              <li>
                <strong>Transaction Data</strong> includes details about payments to and from you and other details of
                products and services you have purchased from us.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type
                and version, time zone setting and location, browser plug-in types and versions, operating system and
                platform, and other technology on the devices you use to access this website.
              </li>
              <li>
                <strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your
                interests, preferences, feedback and survey responses.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you use our website, products and services.
              </li>
              <li>
                <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from
                us and our third parties and your communication preferences.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal
              data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>
                Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                fundamental rights do not override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            <p>
              Generally, we do not rely on consent as a legal basis for processing your personal data although we will
              get your consent before sending third party direct marketing communications to you via email or text
              message. You have the right to withdraw consent to marketing at any time by contacting us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">Data Security</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally
              lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your
              personal data to those employees, agents, contractors and other third parties who have a business need to
              know. They will only process your personal data on our instructions and they are subject to a duty of
              confidentiality.
            </p>
            <p>
              We have put in place procedures to deal with any suspected personal data breach and will notify you and
              any applicable regulator of a breach where we are legally required to do so.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">Your Legal Rights</h2>
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data,
              including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Request access</strong> to your personal data.
              </li>
              <li>
                <strong>Request correction</strong> of your personal data.
              </li>
              <li>
                <strong>Request erasure</strong> of your personal data.
              </li>
              <li>
                <strong>Object to processing</strong> of your personal data.
              </li>
              <li>
                <strong>Request restriction of processing</strong> your personal data.
              </li>
              <li>
                <strong>Request transfer</strong> of your personal data.
              </li>
              <li>
                <strong>Right to withdraw consent</strong>.
              </li>
            </ul>
            <p>
              You will not have to pay a fee to access your personal data (or to exercise any of the other rights).
              However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive.
              Alternatively, we could refuse to comply with your request in these circumstances.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
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
