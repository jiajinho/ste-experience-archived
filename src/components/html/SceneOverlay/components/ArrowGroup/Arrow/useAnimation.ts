import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default (ref: React.RefObject<HTMLParagraphElement>, active: boolean) => {
  useEffect(() => {
    gsap.to(ref.current, {
      duration: 0.15,
      ease: "power2.out",
      rotateX: active ? 0 : 90
    });
  }, [active]);
}