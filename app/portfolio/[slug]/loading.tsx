export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen">
      {/* ProjectHero skeleton */}
      <section className="relative w-full min-h-[60vh] flex items-center bg-black px-4">
        <div className="container-main">
          <div className="h-4 w-[120px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-12 w-[500px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-6 w-[380px] bg-neutral-800 rounded mb-8 animate-pulse" />
          <div className="h-12 w-[180px] bg-neutral-800 rounded animate-pulse" />
        </div>
      </section>

      {/* OverviewSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl space-y-4">
            <div className="h-4 w-[100px] bg-neutral-200 rounded animate-pulse" />
            <div className="h-10 w-[400px] bg-neutral-200 rounded animate-pulse" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 bg-neutral-200 rounded animate-pulse" />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              <div className="h-7 w-[80px] bg-neutral-200 rounded animate-pulse" />
              <div className="h-7 w-[100px] bg-neutral-200 rounded animate-pulse" />
              <div className="h-7 w-[70px] bg-neutral-200 rounded animate-pulse" />
              <div className="h-7 w-[90px] bg-neutral-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution section skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl space-y-4">
            <div className="h-4 w-[120px] bg-neutral-200 rounded animate-pulse" />
            <div className="h-10 w-[350px] bg-neutral-200 rounded animate-pulse" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-4 bg-neutral-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl space-y-4">
            <div className="h-4 w-[100px] bg-neutral-200 rounded animate-pulse" />
            <div className="h-10 w-[300px] bg-neutral-200 rounded animate-pulse" />
            <div className="flex flex-wrap gap-2">
              <div className="h-8 w-[90px] bg-neutral-200 rounded animate-pulse" />
              <div className="h-8 w-[110px] bg-neutral-200 rounded animate-pulse" />
              <div className="h-8 w-[80px] bg-neutral-200 rounded animate-pulse" />
              <div className="h-8 w-[100px] bg-neutral-200 rounded animate-pulse" />
              <div className="h-8 w-[70px] bg-neutral-200 rounded animate-pulse" />
              <div className="h-8 w-[120px] bg-neutral-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Results/Achievements skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-4 w-[120px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[350px] bg-neutral-200 rounded mb-6 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-6 space-y-2">
                  <div className="h-6 w-[40px] bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-5xl">
            <div className="h-4 w-[120px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[300px] bg-neutral-200 rounded mb-6 animate-pulse" />
            <div className="space-y-6">
              <div className="h-[400px] bg-neutral-200 rounded animate-pulse" />
              <div className="grid grid-cols-2 gap-6">
                <div className="h-[300px] bg-neutral-200 rounded animate-pulse" />
                <div className="h-[300px] bg-neutral-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-4 w-[60px] bg-neutral-200 rounded mb-4 animate-pulse" />
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

      {/* CTA skeleton */}
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