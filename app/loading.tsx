import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HomeLoading() {
  return (
    <div className="min-h-screen bg-black">
      {/* HeroSection skeleton */}
      <section className="relative w-full min-h-[80vh] flex items-center bg-black px-4">
        <div className="container-main">
          <Skeleton height={20} width={180} baseColor="#1a1a1a" highlightColor="#333" className="mb-6" />
          <Skeleton height={56} width={600} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={24} width={400} baseColor="#1a1a1a" highlightColor="#333" className="mb-8" />
          <Skeleton height={48} width={180} baseColor="#1a1a1a" highlightColor="#333" />
        </div>
      </section>

      {/* PortfolioSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <Skeleton height={20} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
          <Skeleton height={40} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
          <Skeleton height={24} width={500} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border border-neutral-200 p-8">
                <Skeleton height={180} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
                <Skeleton height={16} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-2" />
                <Skeleton height={24} width={250} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-2" />
                <Skeleton count={2} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
                <div className="flex gap-2">
                  <Skeleton height={24} width={60} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                  <Skeleton height={24} width={80} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                  <Skeleton height={24} width={70} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
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
            <Skeleton height={20} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
            <Skeleton height={24} width={500} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-6">
                  <Skeleton height={16} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-2" />
                  <Skeleton height={16} width="100%" baseColor="#e5e7eb" highlightColor="#f3f4f6" />
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
            <Skeleton height={48} width={48} borderRadius="50%" baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={20} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={400} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <Skeleton count={4} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
          </div>
        </div>
      </section>

      {/* SkillsSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={20} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={300} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <Skeleton key={i} height={32} width={90} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TestimonialsSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={20} width={140} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-8">
                  <Skeleton count={4} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
                  <Skeleton height={16} width={150} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
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
            <Skeleton height={20} width={60} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
            <Skeleton height={40} width={350} baseColor="#1a1a1a" highlightColor="#333" className="mb-10" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border border-white/20 p-6 mb-4">
                <Skeleton height={20} width={300} baseColor="#1a1a1a" highlightColor="#333" className="mb-2" />
                <Skeleton count={2} baseColor="#1a1a1a" highlightColor="#333" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}