'use client';

import { useEffect, useState } from 'react';

/**
 * A frosted strip along the top edge of the viewport, shown only after the
 * page has been scrolled. The header itself is not sticky; this just softens
 * whatever content is passing under the top edge. Styles live in globals.css
 * (`.top-fade`).
 */
export const TopFade = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setVisible(window.scrollY > 0);
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div aria-hidden="true" className="top-fade" data-visible={visible} />;
};
