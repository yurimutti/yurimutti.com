import { useEffect, useRef } from 'react';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

import useMousePosition from '@/hooks/useMousePosition';

export const Radial = () => {
  const { clientX, clientY } = useMousePosition();
  const radialRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (radialRef.current) {
      const { left, top } = radialRef.current.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
  }, [clientX, clientY, mouseX, mouseY]);

  return (
    <motion.div
      ref={radialRef}
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        inset: 0,
        background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
      }}
    />
  );
};
