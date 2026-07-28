import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ServiceDetailLoading() {
  return (
    <div className="min-h-screen bg-black">
      {/* ServiceHero skeleton */}
      <section className="relative w-full min-h-[60vh] flex items-center bg-black px-4">
        <div className="container-main">
          <Skeleton height={16} width={100} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={20} width={180} baseColor="#1a1a1a" highlightColor="#333" className="mb-6" />
          <Skeleton height={48} width={550} baseColor="#1a1a1a" highlightColor="#333" className="mb-6" />
          <Skeleton height={24} width={400} baseColor="#1a1a1a" highlightColor="#333" className="mb-8" />
          <Skeleton height={48} width={200} baseColor="#1a1a1a" highlightColor="#333" />
        </div>
      </section>

      {/* OverviewSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={16} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={450} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <Skeleton height={24} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <Skeleton count={5} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
          </div>
        </div>
      </section>

      {/* EntitySection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={16} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={400} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <Skeleton count={4} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
          </div>
        </div>
      </section>

      {/* TechnicalSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={16} width={160} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={400} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <Skeleton count={4} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
          </div>
        </div>
      </section>

      {/* FeaturesSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={16} width={140} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={300} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex items-start gap-4 p-5 border border-neutral-200">
                  <Skeleton height={20} width={20} borderRadius="50%" baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                  <Skeleton height={16} width="80%" baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhoSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={16} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={380} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <Skeleton count={3} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
          </div>
        </div>
      </section>

      {/* MidPageCTA skeleton */}
      <section className="py-12 bg-green/5 border-y border-green/10">
        <div className="container-main text-center">
          <Skeleton height={24} width={450} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mx-auto mb-5" />
          <Skeleton height={48} width={220} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mx-auto" />
        </div>
      </section>

      {/* FAQSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={16} width={60} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border border-neutral-200 p-6 mb-4">
                <Skeleton height={20} width={450} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-2" />
                <Skeleton count={2} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OtherServicesSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={16} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={300} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-6">
                  <Skeleton height={16} width={140} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-2" />
                  <Skeleton height={16} width="80%" baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTASection skeleton */}
      <section className="section-padding bg-black">
        <div className="container-main text-center">
          <Skeleton height={40} width={400} baseColor="#1a1a1a" highlightColor="#333" className="mx-auto mb-4" />
          <Skeleton height={24} width={500} baseColor="#1a1a1a" highlightColor="#333" className="mx-auto mb-8" />
          <Skeleton height={48} width={220} baseColor="#1a1a1a" highlightColor="#333" className="mx-auto" />
        </div>
      </section>
    </div>
  );
}