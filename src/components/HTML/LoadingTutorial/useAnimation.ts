import { useEffect } from "react";
import gsap from "gsap";

import useLoadingPhaseStore from "store/html/useLoadingPhaseStore"


export default (mask: React.RefObject<HTMLDivElement>, wrapper: React.RefObject<HTMLDivElement>) => {
  const phase = {
    mask: useLoadingPhaseStore(state => state.mask),
    wrapper: useLoadingPhaseStore(state => state.wrapper)
  }

  useEffect(() => {
    switch (phase.mask) {
      case "dark":
        gsap.to(mask.current, {
          duration: 0,
          opacity: 0.9
        });
        break;

      case "cloudy":
        gsap.to(mask.current, {
          duration: 0.5,
          opacity: 0.4
        });
        break;
    }
  }, [phase.mask]);

  useEffect(() => {
    switch (phase.wrapper) {
      case "standby":
        gsap.to(wrapper.current, {
          duration: 0,
          autoAlpha: 1
        });
        break;

      case "fade-out":
        gsap.to(wrapper.current, {
          duration: 0.5,
          ease: "power2.out",
          autoAlpha: 0
        });
        break;
    }
  }, [phase.wrapper])
}