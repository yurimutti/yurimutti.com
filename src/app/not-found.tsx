import Link from 'next/link';
import { Page } from '@/components/ui/page';

export default function NotFound() {
  return (
    <main>
      <Page className="gap-3 sm:gap-3">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="text-lg font-medium text-foreground">Page not found</h1>
        <p className="max-w-prose leading-relaxed text-muted-foreground">
          The page you are looking for does not exist, may have moved, or the
          URL might be incorrect.
        </p>
        <p className="pt-2">
          <Link
            href="/"
            className="rounded-sm text-sm text-foreground outline-none transition-colors duration-200 hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-foreground/40 motion-reduce:transition-none"
          >
            ← Back to home
          </Link>
        </p>
      </Page>
    </main>
  );
}
