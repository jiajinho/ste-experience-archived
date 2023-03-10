/**
 * Animation for mask
 */
import { useEffect } from "react";
import gsap from "gsap";

import useLoadingPhaseStore from "store/html/useLoadingPhaseStore"


export default (mask: React.RefObject<HTMLDivElement>) => {
  const phase = useLoadingPhaseStore(state => state.mask);

  useEffect(() => {
    switch (phase) {
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

      case "clear":
        gsap.to(mask.current, {
          duration: 0.5,
          opacity: 0
        });
    }
  }, [phase]);
}