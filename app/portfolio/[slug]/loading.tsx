"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen bg-black">
      {/* ProjectHero skeleton */}
      <section className="relative w-full min-h-[60vh] flex items-center bg-black px-4">
        <div className="container-main">
          <Skeleton height={16} width={120} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={48} width={500} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
          <Skeleton height={24} width={380} baseColor="#1a1a1a" highlightColor="#333" className="mb-8" />
          <Skeleton height={48} width={180} baseColor="#1a1a1a" highlightColor="#333" />
        </div>
      </section>

      {/* OverviewSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={16} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={400} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <Skeleton count={4} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <div className="flex flex-wrap gap-2">
              <Skeleton height={28} width={80} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              <Skeleton height={28} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              <Skeleton height={28} width={70} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              <Skeleton height={28} width={90} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution or various sections skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={16} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <Skeleton count={3} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
          </div>
        </div>
      </section>

      {/* Tech stack skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={16} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={300} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <div className="flex flex-wrap gap-2">
              <Skeleton height={32} width={90} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              <Skeleton height={32} width={110} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              <Skeleton height={32} width={80} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              <Skeleton height={32} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              <Skeleton height={32} width={70} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              <Skeleton height={32} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
            </div>
          </div>
        </div>
      </section>

      {/* Results/Achievements skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={16} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border border-neutral-200 p-6">
                  <Skeleton height={24} width={40} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-2" />
                  <Skeleton count={2} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-5xl">
            <Skeleton height={16} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={300} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-6" />
            <div className="space-y-6">
              <Skeleton height={400} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              <div className="grid grid-cols-2 gap-6">
                <Skeleton height={300} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                <Skeleton height={300} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <Skeleton height={16} width={60} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
          <Skeleton height={40} width={350} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border border-neutral-200 p-6 mb-4">
              <Skeleton height={20} width={400} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-2" />
              <Skeleton count={2} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA skeleton */}
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