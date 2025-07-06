import Link from 'next/link';
import { SocialIcons } from '../social-icons';

export const Footer = () => {
  return (
    <footer className="container flex items-center justify-between w-full gap-1 px-4 py-6 mx-auto">
      <div className="flex items-center gap-4">
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
        className="px-2 py-1 transition-colors duration-200 hover:text-primary"
      >
        Source
      </Link>
    </footer>
  );
};
