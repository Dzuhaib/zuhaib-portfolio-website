export default function ContactLoading() {
  return (
    <div className="min-h-screen">
      {/* ContactHeroSection skeleton */}
      <section className="relative w-full min-h-[60vh] flex items-center bg-black px-4">
        <div className="container-main">
          <div className="h-5 w-[140px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-12 w-[450px] bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="h-6 w-[380px] bg-neutral-800 rounded mb-8 animate-pulse" />
          <div className="h-12 w-[200px] bg-neutral-800 rounded animate-pulse" />
        </div>
      </section>

      {/* ContactInfoSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14 space-y-4">
              <div className="h-5 w-[120px] bg-neutral-200 rounded mx-auto animate-pulse" />
              <div className="h-10 w-[350px] bg-neutral-200 rounded mx-auto animate-pulse" />
              <div className="h-6 w-[450px] bg-neutral-200 rounded mx-auto animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-8 text-center space-y-3">
                  <div className="h-10 w-10 bg-neutral-200 rounded-full mx-auto animate-pulse" />
                  <div className="h-4 w-[80px] bg-neutral-200 rounded mx-auto animate-pulse" />
                  <div className="h-4 w-[180px] bg-neutral-200 rounded mx-auto animate-pulse" />
                </div>
              ))}
            </div>
            <div className="text-center space-y-8">
              <div className="h-14 w-[380px] bg-neutral-200 rounded mx-auto animate-pulse" />
              <div className="flex items-center justify-center gap-6">
                <div className="h-4 w-[60px] bg-neutral-200 rounded animate-pulse" />
                <div className="h-4 w-[70px] bg-neutral-200 rounded animate-pulse" />
                <div className="h-4 w-[50px] bg-neutral-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}