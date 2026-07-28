import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-black">
      {/* BlogPostHero skeleton */}
      <section className="relative w-full min-h-[50vh] flex items-center bg-black px-4">
        <div className="container-main">
          <Skeleton height={16} width={100} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={48} width={600} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={24} width={350} baseColor="#1a1a1a" highlightColor="#333" className="mb-6" />
          <div className="flex items-center gap-4">
            <Skeleton height={16} width={120} baseColor="#1a1a1a" highlightColor="#333" />
            <Skeleton height={16} width={80} baseColor="#1a1a1a" highlightColor="#333" />
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <Skeleton height={32} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4 mt-8" />
            <Skeleton count={6} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />

            <Skeleton height={32} width={300} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4 mt-12" />
            <Skeleton count={5} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />

            <Skeleton height={32} width={280} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4 mt-12" />
            <Skeleton count={7} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />

            <Skeleton height={32} width={320} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4 mt-12" />
            <Skeleton count={5} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />

            <Skeleton height={200} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />

            <Skeleton height={32} width={250} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4 mt-12" />
            <Skeleton count={6} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
          </div>
        </div>
      </section>

      {/* Navigation skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <Skeleton height={20} width={200} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
            <Skeleton height={20} width={200} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
          </div>
        </div>
      </section>
    </div>
  );
}