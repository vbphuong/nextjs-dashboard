export default function MekongDeltaHero() {
    return (
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Mekong_Delta_Vietnam.jpg"
            alt="Mekong Delta"
          />
          <div className="absolute inset-0 bg-green-900 bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Discover the Heart of the Mekong Delta
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Explore the vibrant culture, floating markets, and lush landscapes of Vietnam’s southern treasure.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/explore"
                className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
              >
                Explore Now
              </a>
              <a href="/learn-more" className="text-sm font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  