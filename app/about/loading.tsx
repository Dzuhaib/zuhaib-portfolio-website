"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-black">
      {/* AboutHeroSection skeleton */}
      <section className="relative w-full min-h-[70vh] flex items-center bg-black px-4">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Skeleton height={120} width={120} borderRadius="50%" baseColor="#1a1a1a" highlightColor="#333" />
            <div className="flex-1">
              <Skeleton height={20} width={200} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
              <Skeleton height={48} width={500} baseColor="#1a1a1a" highlightColor="#333" className="mb-4" />
              <Skeleton height={24} width={400} baseColor="#1a1a1a" highlightColor="#333" className="mb-6" />
              <Skeleton height={24} width={300} baseColor="#1a1a1a" highlightColor="#333" />
            </div>
          </div>
        </div>
      </section>

      {/* WhatIDoSection skeleton */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={20} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={500} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
            <Skeleton count={5} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
          </div>
        </div>
      </section>

      {/* ApproachSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={20} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={400} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-10" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border border-neutral-200 p-8 mb-6">
                <Skeleton height={8} width={32} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
                <Skeleton height={24} width={250} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-3" />
                <Skeleton count={3} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SkillsSection skeleton */}
      <section className="section-padding bg-neutral-50">
        <div className="container-main">
          <div className="max-w-3xl">
            <Skeleton height={20} width={60} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-4" />
            <Skeleton height={40} width={300} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-8" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="mb-7">
                <Skeleton height={16} width={120} baseColor="#e5e7eb" highlightColor="#f3f4f6" className="mb-3" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <Skeleton key={j} height={32} width={100} baseColor="#e5e7eb" highlightColor="#f3f4f6" />
                  ))}
                </div>
              </div>
            ))}
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