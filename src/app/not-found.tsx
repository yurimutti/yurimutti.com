import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="max-w-screen-md mx-auto grid gap-8 px-4 my-8 sm:my-10">
        <section className="grid gap-3">
          <p className="text-sm font-semibold tracking-wide uppercase text-accent">
            404
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Page not found
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            The page you are looking for does not exist, may have moved, or the
            URL might be incorrect.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/30"
            >
              Back to home
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
