import React, { useEffect } from 'react';
import gsap from 'gsap';

import useLoadingPhaseStore from 'store/html/useLoadingPhaseStore';

export default (wrapper: React.RefObject<HTMLDivElement>) => {
  const phase = useLoadingPhaseStore(state => state.progress);
  const set = useLoadingPhaseStore(state => state.set);

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