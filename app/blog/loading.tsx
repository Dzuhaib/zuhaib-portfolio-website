export default function BlogLoading() {
  return (
    <div className="min-h-screen">
      {/* BlogHero skeleton */}
      <section className="relative w-full min-h-[50vh] flex items-center bg-black px-4">
        <div className="container-main">
          <div className="h-5 w-[80px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-12 w-[380px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-6 w-[320px] bg-neutral-800 rounded mb-8 animate-pulse" />
          <div className="h-12 w-[180px] bg-neutral-800 rounded animate-pulse" />
        </div>
      </section>

      {/* PostsSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border border-neutral-200 p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-4 w-[80px] bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 w-[60px] bg-neutral-200 rounded animate-pulse" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="h-6 w-full bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                </div>
                <div className="flex items-center justify-between mt-8 pt-5 border-t border-neutral-100">
                  <div className="h-4 w-[100px] bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 w-[50px] bg-neutral-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="h-5 w-[60px] bg-neutral-200 rounded mb-4 animate-pulse" />
            <div className="h-10 w-[350px] bg-neutral-200 rounded mb-8 animate-pulse" />
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-6 space-y-2">
                  <div className="h-5 w-[420px] bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                  <div className="h-4 bg-neutral-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}