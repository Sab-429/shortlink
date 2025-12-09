import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-green-300  from-indigo-100 via-purple-100 to-pink-100">
      <main className="flex flex-col">
        
        <section className="py-20 text-center px-6">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            About <span className="text-purple-700">ShortLink</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            ShortLink is a modern and minimal URL shortening platform designed
            to make long, complex links simple, shareable, and easy to manage.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The mission of ShortLink is to simplify link sharing while
                maintaining speed, reliability, and security.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are a student, developer, marketer, or content
                creator, ShortLink helps you create clean and trackable links
                in seconds.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">
                Why Choose ShortLink?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>✅ Fast & reliable URL shortening</li>
                <li>✅ Clean and modern user interface</li>
                <li>✅ Secure MongoDB-based storage</li>
                <li>✅ Built with modern web technologies</li>
                <li>✅ Easy to use and beginner-friendly</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/60 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Key Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3 text-purple-700">
                  Instant Short Links
                </h3>
                <p className="text-gray-600">
                  Convert long URLs into short, easy-to-share links instantly.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3 text-purple-700">
                  MongoDB Powered
                </h3>
                <p className="text-gray-600">
                  All your links are stored securely using MongoDB for
                  reliability and performance.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3 text-purple-700">
                  Developer Friendly
                </h3>
                <p className="text-gray-600">
                  Built with Next.js and Tailwind CSS for scalability and
                  maintainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Technology Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <span className="px-6 py-3 bg-purple-100 text-purple-700 rounded-full font-medium">
              Next.js
            </span>
            <span className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-medium">
              Tailwind CSS
            </span>
            <span className="px-6 py-3 bg-green-100 text-green-700 rounded-full font-medium">
              MongoDB
            </span>
            <span className="px-6 py-3 bg-yellow-100 text-yellow-700 rounded-full font-medium">
              Node.js
            </span>
          </div>
        </section>

      </main>

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-2 text-white">
            ShortLink
          </h3>
          <p className="text-sm text-gray-400">
            A modern URL shortener built with Next.js and MongoDB.
          </p>
          <p className="text-sm mt-4 text-gray-500">
            © {new Date().getFullYear()} ShortLink. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
