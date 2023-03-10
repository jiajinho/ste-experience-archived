import React, { useEffect } from 'react';
import gsap from 'gsap';

import useLoadingPhaseStore from 'store/html/useLoadingPhaseStore';

export default (wrapper: React.RefObject<HTMLDivElement>) => {
  const phase = useLoadingPhaseStore(state => state.ste);

  useEffect(() => {
    switch (phase) {
      case "idle":
        gsap.to(wrapper.current, {
          duration: 0.01,
          autoAlpha: 1
        });
        break;

      case "end":
        gsap.to(wrapper.current, {
          duration: 0.25,
          ease: "power2.out",
          autoAlpha: 0
        });
        break;
    }
  }, [phase]);
}