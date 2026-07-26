import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-6">
        <p className="text-green text-sm font-mono tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-neutral-400 leading-relaxed max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-green text-black text-sm font-semibold hover:bg-green/90 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
