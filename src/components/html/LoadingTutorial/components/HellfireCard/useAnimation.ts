import React, { useEffect } from 'react';
import gsap from 'gsap';
import { button, folder, useControls } from 'leva';

import useLoadingPhaseStore from 'store/html/useLoadingPhaseStore';

const useDebug = () => {
  const set = useLoadingPhaseStore(state => state.set);

  const debug = useControls("card", {
    reset: button(() => set("card", "standby")),
    slide: folder({
      play1: button(() => set("card", "slide")),
      duration1: { min: 1, max: 3, step: 0.01, value: 1.2 }
    }),
    flip: folder({
      play2: button(() => set("card", "flip")),
      duration2: { min: 0.3, max: 2, step: 0.01, value: 0.5 }
    })
  });

  return debug;
}

export default (card: React.RefObject<HTMLDivElement>) => {
  const phase = useLoadingPhaseStore(state => state.card);
  const set = useLoadingPhaseStore(state => state.set);

  const debug = useDebug();

  useEffect(() => {
    switch (phase) {
      case "standby":
        gsap.to(card.current, {
          overwrite: true,
          duration: 0,
          y: "150%",
          autoAlpha: 0,
          rotateY: 0
        });
        break;


      case "slide":
        gsap.timeline()
          .fromTo(card.current, {
            y: "100vh",
            autoAlpha: 1,
            rotateY: 0,
          }, {
            duration: debug.duration1,
            ease: "expo.out",
            y: "0vh"
          });
        break;


      case "flip":
        gsap.fromTo(card.current, {
          rotateY: 0,
          autoAlpha: 1
        }, {
          duration: debug.duration2,
          ease: "power2.inOut",
          rotateY: 180
        });
        break;

      case "end":
        set("wrapper", "fade-out");
    }
  }, [phase, debug]);

}