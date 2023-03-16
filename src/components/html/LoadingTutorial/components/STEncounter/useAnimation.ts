import React, { useEffect } from 'react';
import gsap from 'gsap';

import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';

export default (wrapper: React.RefObject<HTMLDivElement>) => {
  const phase = useLoadAnimationStore(state => state.ste);

  useEffect(() => {
    switch (phase) {
      case "standby":
        gsap.to(wrapper.current, {
          duration: 0.01,
          autoAlpha: 1
        });
        break;

      case "end":
        gsap.to(wrapper.current, {
          duration: 0.5,
          ease: "power2.out",
          autoAlpha: 0
        });
        break;
    }
  }, [phase]);
}