import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default (flipped: boolean, container: React.RefObject<HTMLDivElement>) => {
  const firstTime = useRef(true);

  useEffect(() => {
    gsap.to(container.current, {
      duration: firstTime.current ? 0 : 0.75,
      ease: "power2.out",
      rotateY: flipped ? 180 : 0
    });

    firstTime.current = false;
  }, [flipped]);
}