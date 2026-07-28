export default function ServiceDetailLoading() {
  return (
    <div className="min-h-screen">
      {/* ServiceHero skeleton */}
      <section className="relative w-full min-h-[60vh] flex items-center bg-black px-4">
        <div className="container-main">
          <div className="h-4 w-[100px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-5 w-[180px] bg-neutral-800 rounded mb-6 animate-pulse" />
          <div className="h-12 w-[550px] bg-neutral-800 rounded mb-6 animate-pulse" />
          <div className="h-6 w-[400px] bg-neutral-800 rounded mb-8 animate-pulse" />
          <div className="h-12 w-[200px] bg-neutral-800 rounded animate-pulse" />
        </div>
      </section>

      {/* OverviewSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl space-y-4">
            <div className="h-4 w-[100px] bg-neutral-200 rounded animate-pulse" />
            <div className="h-10 w-[450px] bg-neutral-200 rounded animate-pulse" />
            <div className="h-6 w-[350px] bg-neutral-200 rounded animate-pulse" />
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-4 bg-neutral-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EntitySection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl space-y-4">
            <div className="h-4 w-[100px] bg-neutral-200 rounded animate-pulse" />
            <div className="h-10 w-[400px] bg-neutral-200 rounded animate-pulse" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 bg-neutral-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TechnicalSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl space-y-4">
            <div className="h-4 w-[160px] bg-neutral-200 rounded animate-pulse" />
            <div className="h-10 w-[400px] bg-neutral-200 rounded animate-pulse" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 bg-neutral-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FeaturesSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-4 w-[140px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[300px] bg-neutral-200 rounded mb-8 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex items-start gap-4 p-5 border border-neutral-200">
                  <div className="h-5 w-5 bg-neutral-200 rounded-full shrink-0 animate-pulse" />
                  <div className="h-4 flex-1 bg-neutral-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhoSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl space-y-4">
            <div className="h-4 w-[120px] bg-neutral-200 rounded animate-pulse" />
            <div className="h-10 w-[380px] bg-neutral-200 rounded animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 bg-neutral-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* MidPageCTA skeleton */}
      <section className="py-12 bg-green/5 border-y border-green/10">
        <div className="container-main text-center space-y-4">
          <div className="h-6 w-[450px] bg-green/20 rounded mx-auto animate-pulse" />
          <div className="h-12 w-[220px] bg-green/30 rounded mx-auto animate-pulse" />
        </div>
      </section>

      {/* FAQSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-4 w-[60px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[350px] bg-neutral-200 rounded mb-8 animate-pulse" />
            <div className="space-y-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-6 space-y-2">
                  <div className="h-5 w-[450px] bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OtherServicesSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-4 w-[120px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[300px] bg-neutral-200 rounded mb-8 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-6 space-y-2">
                  <div className="h-4 w-[140px] bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTASection skeleton */}
      <section className="section-padding bg-black">
        <div className="container-main text-center space-y-4">
          <div className="h-10 w-[400px] bg-neutral-800 rounded mx-auto animate-pulse" />
          <div className="h-6 w-[500px] bg-neutral-800 rounded mx-auto animate-pulse" />
          <div className="h-12 w-[220px] bg-neutral-800 rounded mx-auto animate-pulse" />
        </div>
      </section>
    </div>
  );
}