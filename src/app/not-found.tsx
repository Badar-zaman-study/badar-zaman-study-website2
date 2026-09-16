import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mt-5">
      <div className="glass-panel rounded-[34px] px-6 py-16 text-center md:px-10">
        <span className="section-label">404</span>
        <h1 className="heading-lg mt-5 text-slate-950">This page has taken a different flight path</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
          The page you&apos;re looking for does not exist or may have been moved. Let&apos;s guide you back to the main journey.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Return Home
        </Link>
      </div>
    </section>
  );
}
