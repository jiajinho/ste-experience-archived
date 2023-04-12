import React, { useEffect } from 'react';
import gsap from 'gsap';

import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';

export default (ref: React.RefObject<HTMLDivElement>) => {
  const phase = useLoadAnimationStore(state => state.card);
  const set = useLoadAnimationStore(state => state.set);

  useEffect(() => {
    switch (phase) {
      case "standby":
        gsap.to(ref.current, {
          overwrite: true,
          duration: 0,
          top: "150vh",
          autoAlpha: 0
        });
        break;
      case "slide":
        gsap.to(ref.current, {
          duration: 0,
          autoAlpha: 1
        });

        gsap.to(ref.current, {
          duration: 0.75,
          ease: "power2.out",
          top: "50vh"
        });
        break;
      case "end":
        set("wrapper", "fade-out");
    }
  }, [phase]);
}