import React, { useEffect } from 'react';
import gsap from 'gsap';

import useLoadAnimationStore from 'store/html/useLoadAnimationStore';

export default (wrapper: React.RefObject<HTMLDivElement>) => {
  const phase = useLoadAnimationStore(state => state.progress);
  const set = useLoadAnimationStore(state => state.set);

  useEffect(() => {
    switch (phase) {
      case "standby":
        gsap.to(wrapper.current, {
          duration: 0,
          autoAlpha: 1
        });
        break;


      case "end":
        let t: NodeJS.Timeout;

        gsap.to(wrapper.current, {
          duration: 1.5,
          autoAlpha: 0
        }).eventCallback("onComplete", () => {
          t = setTimeout(() => {
            set("typewriter", "start");
          }, 1000);
        });

        return () => { clearTimeout(t) }
    }
  }, [phase]);
}