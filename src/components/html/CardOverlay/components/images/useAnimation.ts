import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default (images: React.RefObject<HTMLPictureElement[]>, active: boolean) => {
  useEffect(() => {
    if (!images.current) return;
    if (!images.current.length) return;

    gsap.fromTo([...images.current], {
      autoAlpha: active ? 0 : 1,
      y: active ? 30 : 0
    }, {
      duration: active ? 0.25 : 0.1,
      ease: "power2.out",
      stagger: active ? 0.05 : 0.03,
      autoAlpha: active ? 1 : 0,
      y: 0,
      overwrite: true
    });
  }, [active]);
}