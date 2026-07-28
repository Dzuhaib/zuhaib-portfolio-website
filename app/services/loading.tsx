import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-black">
      {/* ServicesHero skeleton */}
      <section className="relative w-full min-h-[50vh] flex items-center bg-black px-4">
        <div className="container-main">
          <Skeleton height={20} width={120} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={48} width={450} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={24} width={350} baseColor="#1a1a1a" highlightColor="#333" className="mb-8" />
          <Skeleton height={48} width={200} baseColor="#1a1a1a" highlightColor="#333" />
        </div>
      </section>

      {/* AllServicesSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <Skeleton height={20} width={140} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
          <Skeleton height={40} width={380} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="border border-neutral-200 p-8">
                <Skeleton height={32} width={32} borderRadius="8px" baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-5" />
                <Skeleton height={16} width={140} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-3" />
                <Skeleton count={2} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
                <Skeleton height={16} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhyMeSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={20} width={160} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={500} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <Skeleton count={3} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="p-6 border border-neutral-200">
                  <Skeleton height={40} width={80} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-2" />
                  <Skeleton height={16} width={140} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ProcessSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <Skeleton height={20} width={80} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
          <Skeleton height={40} width={450} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>
                <Skeleton height={56} width={60} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
                <Skeleton height={24} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-2" />
                <Skeleton count={2} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={20} width={60} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border border-neutral-200 p-6 mb-4">
                <Skeleton height={20} width={400} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-2" />
                <Skeleton count={2} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTASection skeleton */}
      <section className="section-padding bg-black">
        <div className="container-main text-center">
          <Skeleton height={40} width={350} baseColor="#1a1a1a" highlightColor="#333" className="mx-auto mb-4" />
          <Skeleton height={24} width={450} baseColor="#1a1a1a" highlightColor="#333" className="mx-auto mb-8" />
          <Skeleton height={48} width={200} baseColor="#1a1a1a" highlightColor="#333" className="mx-auto" />
        </div>
      </section>
    </div>
  );
}