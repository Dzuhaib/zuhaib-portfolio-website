"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-6">
        <p className="text-green text-sm font-mono tracking-widest uppercase mb-4">
          Error
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Something went wrong
        </h1>
        <p className="text-neutral-400 leading-relaxed max-w-md mx-auto mb-10">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 bg-green text-black text-sm font-semibold hover:bg-green/90 transition-colors cursor-pointer"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
