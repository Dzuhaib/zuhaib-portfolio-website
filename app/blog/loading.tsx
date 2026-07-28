import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-black">
      {/* BlogHero skeleton */}
      <section className="relative w-full min-h-[50vh] flex items-center bg-black px-4">
        <div className="container-main">
          <Skeleton height={20} width={80} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={48} width={380} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={24} width={320} baseColor="#1a1a1a" highlightColor="#333" className="mb-8" />
          <Skeleton height={48} width={180} baseColor="#1a1a1a" highlightColor="#333" />
        </div>
      </section>

      {/* PostsSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border border-neutral-200 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <Skeleton height={16} width={80} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                  <Skeleton height={16} width={60} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                </div>
                <Skeleton height={24} width="100%" baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-3" />
                <Skeleton count={2} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
                <div className="flex items-center justify-between mt-8 pt-5 border-t border-neutral-100">
                  <Skeleton height={16} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                  <Skeleton height={16} width={50} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
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
            <Skeleton height={20} width={60} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border border-neutral-200 p-6 mb-4">
                <Skeleton height={20} width={420} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-2" />
                <Skeleton count={2} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}