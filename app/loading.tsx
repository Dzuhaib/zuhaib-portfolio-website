export default function HomeLoading() {
  return (
    <div className="min-h-screen">
      {/* HeroSection skeleton */}
      <section className="relative w-full min-h-[80vh] flex items-center bg-black px-4">
        <div className="container-main">
          <div className="h-5 w-[180px] bg-neutral-800 rounded mb-6 animate-pulse" />
          <div className="h-14 w-[600px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-6 w-[400px] bg-neutral-800 rounded mb-8 animate-pulse" />
          <div className="h-12 w-[180px] bg-neutral-800 rounded animate-pulse" />
        </div>
      </section>

      {/* PortfolioSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="h-5 w-[120px] bg-neutral-200 rounded mb-4 animate-pulse" />
          <div className="h-10 w-[350px] bg-neutral-200 rounded mb-8 animate-pulse" />
          <div className="h-6 w-[500px] bg-neutral-200 rounded mb-10 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border border-neutral-200 p-8 space-y-4">
                <div className="h-[180px] bg-neutral-200 rounded animate-pulse" />
                <div className="h-4 w-[100px] bg-neutral-200 rounded animate-pulse" />
                <div className="h-6 w-[250px] bg-neutral-200 rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                </div>
                <div className="flex gap-2">
                  <div className="h-6 w-[60px] bg-neutral-200 rounded animate-pulse" />
                  <div className="h-6 w-[80px] bg-neutral-200 rounded animate-pulse" />
                  <div className="h-6 w-[70px] bg-neutral-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ServicesSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-5 w-[100px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[350px] bg-neutral-200 rounded mb-8 animate-pulse" />
            <div className="h-6 w-[500px] bg-neutral-200 rounded mb-10 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-6 space-y-2">
                  <div className="h-4 w-[120px] bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AboutSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-12 w-12 bg-neutral-200 rounded-full mb-4 animate-pulse" />
            <div className="h-5 w-[120px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[400px] bg-neutral-200 rounded mb-6 animate-pulse" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 bg-neutral-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SkillsSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-5 w-[100px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[300px] bg-neutral-200 rounded mb-8 animate-pulse" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-8 w-[90px] bg-neutral-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TestimonialsSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-5 w-[140px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[350px] bg-neutral-200 rounded mb-8 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-8 space-y-3">
                  <div className="space-y-2">
                    <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                  </div>
                  <div className="h-4 w-[150px] bg-neutral-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQSection skeleton */}
      <section className="section-padding bg-black">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-5 w-[60px] bg-neutral-800 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[350px] bg-neutral-800 rounded mb-10 animate-pulse" />
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border border-white/20 p-6 space-y-2">
                  <div className="h-5 w-[300px] bg-neutral-800 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-800 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-800 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}