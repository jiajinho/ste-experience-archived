import React, { useEffect } from 'react';
import gsap from 'gsap';

import useLoadingPhaseStore from 'store/html/useLoadingPhaseStore';

export default (card: React.RefObject<HTMLDivElement>) => {

  const phase = useLoadingPhaseStore(state => state.card);

  useEffect(() => {
    switch (phase) {
      case "idle":
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
            y: "150%",
            autoAlpha: 1,
            rotateY: 0
          }, {
            duration: 1.2,
            ease: "power4.out",
            y: "0%"
          });
        break;


      case "flip":
        gsap.fromTo(card.current, {
          rotateY: 0,
          autoAlpha: 1
        }, {
          duration: 0.5,
          ease: "power2.inOut",
          rotateY: 180
        });
        break;
    }
  }, [phase]);

}