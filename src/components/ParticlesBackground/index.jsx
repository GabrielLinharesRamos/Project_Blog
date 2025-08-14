'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <div className="w-full h-full">
      <Particles
        className="w-full h-full"
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: { value: "#111111" },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 20,
              density: { enable: true, area: 800 }
            },
            color: { value: "#888888" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: { min: 2, max: 2 } },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              outMode: "bounce"
            },
            links: {
              enable: false,
              distance: 150,
              color: "#888888",
              opacity: 0.4,
              width: 1
            }
          },
          interactivity: {
            events: {
              onHover: { enable: false, mode: "repulse" },
              onClick: { enable: true, mode: "push" }
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 }
            }
          },
          detectRetina: true
        }}
      />
    </div>
  );
}
