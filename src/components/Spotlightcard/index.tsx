'use client'

import { motion, useMotionValue, useTransform, useSpring  } from 'framer-motion';
import { useRef, useEffect } from 'react';

export function SpotlightCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 40 });

  const maskX = useTransform(springX, (x) => `${x}px`);
  const maskY = useTransform(springY, (y) => `${y}px`);
  
  //função quando o mouse se move dentro do componenete
  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  }

  // 👉 Gera uma posição inicial aleatória dentro do componente
  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const randomX = Math.random() * rect.width;
    const randomY = Math.random() * rect.height;

    mouseX.set(randomX);
    mouseY.set(randomY);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-xl group h-full cursor-pointer"
    >
      {(
        <motion.div
          className="absolute w-60 h-60 bg-white/10 rounded-full blur-3xl z-0 pointer-events-none transition-opacity duration-300 opacity-100"
          style={{
            left: maskX,
            top: maskY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      )}
      <div className="z-10 h-full">{children}</div>
    </div>
  );
}
