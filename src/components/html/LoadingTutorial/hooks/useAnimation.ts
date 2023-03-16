import { useEffect } from "react";
import gsap from "gsap";

import useLoadAnimationStore from "stores/html/useLoadAnimationStore"


export default (mask: React.RefObject<HTMLDivElement>, wrapper: React.RefObject<HTMLDivElement>) => {
  const phase = {
    mask: useLoadAnimationStore(state => state.mask),
    wrapper: useLoadAnimationStore(state => state.wrapper)
  }

  const set = useLoadAnimationStore(state => state.set);

  useEffect(() => {
    switch (phase.mask) {
      case "dark":
        gsap.to(mask.current, {
          duration: 0,
          opacity: 1
        });
        break;

      case "cloudy":
        gsap.to(mask.current, {
          duration: 0.5,
          opacity: 0.65
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
        }).eventCallback("onComplete", () => {
          set("loading", false);
        });
        break;
    }
  }, [phase.wrapper])
}