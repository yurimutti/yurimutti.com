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
      className="pressable grid size-7 cursor-pointer place-items-center rounded-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
    >
      <MdContentCopy
        className="copy-icon copy-icon-copy size-4"
        aria-hidden="true"
      />
      <MdCheck
        className="copy-icon copy-icon-check size-4"
        aria-hidden="true"
      />
    </button>
  );
}
