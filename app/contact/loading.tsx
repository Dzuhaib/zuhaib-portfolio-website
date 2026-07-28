"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-black">
      {/* ContactHeroSection skeleton */}
      <section className="relative w-full min-h-[60vh] flex items-center bg-black px-4">
        <div className="container-main">
          <Skeleton height={20} width={140} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={48} width={450} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={24} width={380} baseColor="#1a1a1a" highlightColor="#333" className="mb-8" />
          <Skeleton height={48} width={200} baseColor="#1a1a1a" highlightColor="#333" />
        </div>
      </section>

      {/* ContactInfoSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <Skeleton height={20} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mx-auto mb-4" />
              <Skeleton height={40} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mx-auto mb-4" />
              <Skeleton height={24} width={450} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-8 text-center">
                  <Skeleton height={40} width={40} borderRadius="50%" baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mx-auto mb-4" />
                  <Skeleton height={16} width={80} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mx-auto mb-2" />
                  <Skeleton height={16} width={180} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mx-auto" />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Skeleton height={56} width={380} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mx-auto mb-8" />
              <div className="flex items-center justify-center gap-6">
                <Skeleton height={16} width={60} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                <Skeleton height={16} width={70} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                <Skeleton height={16} width={50} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}