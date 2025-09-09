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

  return (
    <button
      onClick={handleCopy}
      className="cursor-pointer p-1.5 rounded hover:bg-gray-700 transition-colors duration-200 text-gray-400 hover:text-gray-200"
      title={copied ? 'Copied!' : 'Copy code'}
    >
      {copied ? (
        <MdCheck className="w-4 h-4 text-green-400" />
      ) : (
        <MdContentCopy className="w-4 h-4" />
      )}
    </button>
  );
}
