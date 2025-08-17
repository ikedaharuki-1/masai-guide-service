import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Masai Cultural Experience</h1>
            <nav className="space-x-6">
              <Link href="#tours" className="hover:text-orange-200">Tours</Link>
              <Link href="#about" className="hover:text-orange-200">About</Link>
              <Link href="#contact" className="hover:text-orange-200">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-red-800 mb-6">
            Authentic Masai Cultural Tours
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the rich traditions, vibrant culture, and ancient wisdom of the Masai people 
            through our authentic guided tours in Tanzania and Kenya.
          </p>
          <button className="bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition">
            Book Your Experience
          </button>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-red-800 mb-12">Our Tours</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-red-800 mb-4">Half-Day Cultural Tour</h4>
              <p className="text-gray-700 mb-4">
                Visit a traditional Masai village, learn about customs, witness traditional dances, 
                and participate in daily activities.
              </p>
              <div className="text-2xl font-bold text-red-800 mb-4">$80 per person</div>
              <ul className="text-gray-600 mb-4">
                <li>• 4 hours duration</li>
                <li>• Traditional dance performance</li>
                <li>• Village tour with elder</li>
                <li>• Craft demonstration</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-red-800 mb-4">Full-Day Immersion</h4>
              <p className="text-gray-700 mb-4">
                Complete cultural immersion including traditional meals, storytelling, 
                and hands-on activities with Masai families.
              </p>
              <div className="text-2xl font-bold text-red-800 mb-4">$150 per person</div>
              <ul className="text-gray-600 mb-4">
                <li>• 8 hours duration</li>
                <li>• Traditional meal included</li>
                <li>• Storytelling session</li>
                <li>• Beadwork workshop</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-red-800 mb-4">Overnight Experience</h4>
              <p className="text-gray-700 mb-4">
                Stay overnight in a traditional Masai boma, participate in daily routines, 
                and experience authentic Masai lifestyle.
              </p>
              <div className="text-2xl font-bold text-red-800 mb-4">$250 per person</div>
              <ul className="text-gray-600 mb-4">
                <li>• 2 days, 1 night</li>
                <li>• Traditional accommodation</li>
                <li>• All meals included</li>
                <li>• Cattle herding experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-red-800 mb-8">About Your Guide</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
              <h4 className="text-2xl font-bold text-red-800 mb-4">Joseph Masai</h4>
              <p className="text-gray-700 mb-4">
                Born and raised in a traditional Masai community, Joseph has over 10 years of experience 
                sharing his culture with visitors from around the world. He speaks fluent English, Swahili, 
                and Maa (Masai language).
              </p>
              <p className="text-gray-700">
                Joseph is passionate about preserving Masai traditions while building bridges between 
                cultures. He ensures every visitor gains deep respect and understanding of Masai heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-red-800 mb-12">Contact Us</h3>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-red-800 mb-4">Get in Touch</h4>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">Phone:</span> +255 123 456 789
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span> joseph@masaiguide.com
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Location:</span> Arusha, Tanzania
                  </p>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-red-800 text-white py-3 rounded-lg hover:bg-red-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Masai Cultural Experience. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
