import Link from 'next/link';
import { cn } from '../../libs/utils';

interface TagProps {
  tag: string;
  variant?: 'default' | 'small';
  className?: string;
}

export function Tag({ tag, variant = 'default', className }: TagProps) {
  const baseClasses =
    'inline-flex items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  const variantClasses = {
    default:
      'px-3 py-1 text-sm border-border bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground',
    small:
      'px-2 py-0.5 text-xs border-border bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground',
  };

  return (
    <Link
      href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {tag}
    </Link>
  );
}

interface TagListProps {
  tags: string[];
  variant?: 'default' | 'small';
  className?: string;
}

export function TagList({
  tags,
  variant = 'default',
  className,
}: TagListProps) {
  if (!tags?.length) return null;

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} variant={variant} />
      ))}
    </div>
  );
}
