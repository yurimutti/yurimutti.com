'use client';

import { useEffect, useRef, useState } from 'react';
import { MdContentCopy, MdCheck } from 'react-icons/md';

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const label = copied ? 'Copied' : 'Copy code';

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label}
      title={label}
      data-copied={copied}
      className="group relative grid size-7 cursor-pointer place-items-center rounded-sm text-muted-foreground transition ease-out before:absolute before:-inset-2 hover:bg-foreground/5 hover:text-foreground motion-safe:active:scale-97 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
    >
      <MdContentCopy
        className="col-start-1 row-start-1 size-4 transition duration-200 ease-out group-data-[copied=true]:opacity-0 motion-safe:group-data-[copied=true]:scale-80 motion-safe:group-data-[copied=true]:blur-[2px]"
        aria-hidden="true"
      />
      <MdCheck
        className="col-start-1 row-start-1 size-4 transition duration-200 ease-out group-data-[copied=false]:opacity-0 motion-safe:group-data-[copied=false]:scale-80 motion-safe:group-data-[copied=false]:blur-[2px]"
        aria-hidden="true"
      />
    </button>
  );
}
