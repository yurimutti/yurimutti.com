import { SocialIcons } from '@/components/social-icons';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="max-w-screen-md w-full px-4 py-6 mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between sm:items-center">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
        <span
          className="text-sm font-bold tracking-wider uppercase transition-colors duration-300 font-heading"
          style={{ color: 'hsl(var(--foreground))' }}
        >
          Yuri Mutti
        </span>
        <SocialIcons />
      </div>

      <Link
        href="https://github.com/yurimutti/yurimutti.com"
        className="text-sm underline transition-colors duration-200 hover:text-primary"
      >
        Source
      </Link>
    </footer>
  );
};
