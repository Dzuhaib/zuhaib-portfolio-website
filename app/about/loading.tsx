export default function AboutLoading() {
  return (
    <div className="min-h-screen">
      {/* AboutHeroSection skeleton */}
      <section className="relative w-full min-h-[70vh] flex items-center bg-black px-4">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="h-[120px] w-[120px] bg-neutral-800 rounded-full shrink-0 animate-pulse" />
            <div className="flex-1 space-y-4">
              <div className="h-5 w-[200px] bg-neutral-800 rounded animate-pulse" />
              <div className="h-12 w-[500px] bg-neutral-800 rounded animate-pulse" />
              <div className="h-6 w-[400px] bg-neutral-800 rounded animate-pulse" />
              <div className="h-6 w-[300px] bg-neutral-800 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* WhatIDoSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl space-y-4">
            <div className="h-5 w-[100px] bg-neutral-200 rounded animate-pulse" />
            <div className="h-10 w-[500px] bg-neutral-200 rounded animate-pulse" />
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-4 bg-neutral-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ApproachSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-5 w-[100px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[400px] bg-neutral-200 rounded mb-10 animate-pulse" />
            <div className="space-y-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-8 space-y-3">
                  <div className="h-2 w-8 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-6 w-[250px] bg-neutral-200 rounded animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                    <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SkillsSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-5 w-[60px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[300px] bg-neutral-200 rounded mb-8 animate-pulse" />
            <div className="space-y-7">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <div className="h-4 w-[120px] bg-neutral-200 rounded animate-pulse" />
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div key={j} className="h-8 w-[100px] bg-neutral-200 rounded animate-pulse" />
                    ))}
                  </div>
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