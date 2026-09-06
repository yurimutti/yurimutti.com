'use client';

import { useState } from 'react';
import { MdContentCopy, MdCheck } from 'react-icons/md';

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
      className="flex size-7 cursor-pointer items-center justify-center rounded-sm text-muted-foreground outline-none transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/40 motion-reduce:transition-none"
    >
      {copied ? (
        <MdCheck className="size-4" aria-hidden="true" />
      ) : (
        <MdContentCopy className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
