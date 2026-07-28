export default function ServicesLoading() {
  return (
    <div className="min-h-screen">
      {/* ServicesHero skeleton */}
      <section className="relative w-full min-h-[50vh] flex items-center bg-black px-4">
        <div className="container-main">
          <div className="h-5 w-[120px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-12 w-[450px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-6 w-[350px] bg-neutral-800 rounded mb-8 animate-pulse" />
          <div className="h-12 w-[200px] bg-neutral-800 rounded animate-pulse" />
        </div>
      </section>

      {/* AllServicesSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="h-5 w-[140px] bg-neutral-200 rounded mb-4 animate-pulse" />
          <div className="h-10 w-[380px] bg-neutral-200 rounded mb-10 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="border border-neutral-200 p-8 space-y-3">
                <div className="h-8 w-8 bg-neutral-200 rounded animate-pulse" />
                <div className="h-4 w-[140px] bg-neutral-200 rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                </div>
                <div className="h-4 w-[100px] bg-neutral-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhyMeSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-5 w-[160px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[500px] bg-neutral-200 rounded mb-6 animate-pulse" />
            <div className="space-y-3 mb-8">
              <div className="h-4 bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 bg-neutral-200 rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="p-6 border border-neutral-200 space-y-2">
                  <div className="h-10 w-[80px] bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 w-[140px] bg-neutral-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ProcessSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="h-5 w-[80px] bg-neutral-200 rounded mb-4 animate-pulse" />
          <div className="h-10 w-[450px] bg-neutral-200 rounded mb-10 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-14 w-[60px] bg-neutral-200 rounded animate-pulse" />
                <div className="h-6 w-[120px] bg-neutral-200 rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-5 w-[60px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[350px] bg-neutral-200 rounded mb-8 animate-pulse" />
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-6 space-y-2">
                  <div className="h-5 w-[400px] bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTASection skeleton */}
      <section className="section-padding bg-black">
        <div className="container-main text-center space-y-4">
          <div className="h-10 w-[350px] bg-neutral-800 rounded mx-auto animate-pulse" />
          <div className="h-6 w-[450px] bg-neutral-800 rounded mx-auto animate-pulse" />
          <div className="h-12 w-[200px] bg-neutral-800 rounded mx-auto animate-pulse" />
        </div>
      </section>
    </div>
  );
}