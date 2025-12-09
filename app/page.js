import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-amber-200 from-purple-100 via-pink-100 to-indigo-100">

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Simplify Your Links with{" "}
            <span className="text-purple-700">ShortLink</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            ShortLink is a fast, secure, and user-friendly URL shortening
            platform. Turn long, complex links into short and shareable URLs
            in seconds.
          </p>

          <p className="text-gray-600 max-w-xl">
            Built using modern web technologies like Next.js and MongoDB,
            ShortLink helps you manage and track your links with ease.
          </p>

          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
                Get Started
              </button>
            </Link>

            <Link href="/about">
              <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[350px] md:h-[420px]">
          <Image
            src="/vector.jpg"
            alt="URL shortening illustration"
            fill
            className="object-contain mix-blend-darken"
            priority
          />
        </div>
      </section>

      <section className="bg-white/70 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose ShortLink?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                Fast & Reliable
              </h3>
              <p className="text-gray-600">
                Generate short links instantly with a high-performance backend
                powered by MongoDB.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                Easy to Use
              </h3>
              <p className="text-gray-600">
                Minimal and intuitive interface designed for both beginners
                and professionals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                Modern Tech Stack
              </h3>
              <p className="text-gray-600">
                Built using Next.js, Tailwind CSS, and MongoDB for scalability
                and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Shorten Your Links?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Start creating short links today and make your URLs cleaner,
          smarter, and easier to share.
        </p>

        <Link href="/shorten">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition">
            Try ShortLink Now
          </button>
        </Link>
      </section>
    </main>
  );
}
