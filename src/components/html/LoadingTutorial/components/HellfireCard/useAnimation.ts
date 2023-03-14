import React, { useEffect } from 'react';
import gsap from 'gsap';

import useLoadAnimationStore from 'store/html/useLoadAnimationStore';

export default (wrapper: React.RefObject<HTMLDivElement>, card: React.RefObject<HTMLDivElement>) => {
  const phase = useLoadAnimationStore(state => state.card);
  const set = useLoadAnimationStore(state => state.set);

  useEffect(() => {
    switch (phase) {
      case "standby":
        gsap.to(wrapper.current, {
          overwrite: true,
          duration: 0,
          autoAlpha: 0,
        });

        gsap.to(card.current, {
          overwrite: true,
          duration: 0,
          y: "100vh",
          rotateY: 0
        });
        break;


      case "slide":
        gsap.to(wrapper.current, {
          duration: 0.01,
          autoAlpha: 1
        });

        gsap.fromTo(card.current, {
          y: "100vh",
          rotateY: 0,
        }, {
          duration: 1.2,
          ease: "power4.out",
          y: "0vh"
        });
        break;


      case "flip":
        gsap.fromTo(card.current, {
          rotateY: 0,
        }, {
          duration: 0.5,
          ease: "power2.inOut",
          rotateY: 180
        });
        break;

      case "end":
        set("wrapper", "fade-out");
    }
  }, [phase]);
}