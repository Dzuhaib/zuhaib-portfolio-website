export default function BlogPostLoading() {
  return (
    <div className="min-h-screen">
      {/* BlogPostHero skeleton */}
      <section className="relative w-full min-h-[50vh] flex items-center bg-black px-4">
        <div className="container-main">
          <div className="h-4 w-[100px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-12 w-[600px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-6 w-[350px] bg-neutral-800 rounded mb-6 animate-pulse" />
          <div className="flex items-center gap-4">
            <div className="h-4 w-[120px] bg-neutral-800 rounded animate-pulse" />
            <div className="h-4 w-[80px] bg-neutral-800 rounded animate-pulse" />
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            {Array.from({ length: 5 }).map((_, section) => (
              <div key={section} className="mb-12">
                <div className="h-8 w-[300px] bg-neutral-200 rounded mb-4 animate-pulse" />
                <div className="space-y-3">
                  {Array.from({ length: section === 2 ? 7 : 5 }).map((_, line) => (
                    <div key={line} className={`h-4 bg-neutral-200 rounded animate-pulse ${line === 0 ? '' : ''}`} style={line === 0 ? {} : {}} />
                  ))}
                </div>
              </div>
            ))}
            <div className="mb-12">
              <div className="h-8 w-[250px] bg-neutral-200 rounded mb-4 animate-pulse" />
              <div className="space-y-3">
                {Array.from({ length: 6 }).map((_, line) => (
                  <div key={line} className="h-4 bg-neutral-200 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div className="h-5 w-[200px] bg-neutral-200 rounded animate-pulse" />
            <div className="h-5 w-[200px] bg-neutral-200 rounded animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}