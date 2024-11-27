import { gsap } from 'gsap';

export const twinkling = (element: HTMLElement) => {
  gsap.to(element, {
    opacity: Math.random(),
    duration: 0.5 + Math.random() * 1.5,
    repeat: -1,
    yoyo: true,
  });
};

export const blinkingLights = (element: HTMLElement) => {
  gsap.to(element, {
    opacity: 0.5 + Math.random() * 0.5,
    duration: 0.3 + Math.random() * 0.7,
    repeat: -1,
    yoyo: true,
  });
};

export const confettiExplosion = (x: number, y: number) => {
  // Implementation using a confetti library
  // This is a placeholder and would need to be implemented with a specific confetti library
};

