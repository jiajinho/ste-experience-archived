import React, { useEffect } from 'react';
import gsap from 'gsap';

import useLoadingPhaseStore from 'store/html/useLoadingPhaseStore';

export default (wrapper: React.RefObject<HTMLDivElement>) => {
  const phase = useLoadingPhaseStore(state => state.progress);

  useEffect(() => {
    switch (phase) {
      case "idle":
        gsap.to(wrapper.current, {
          duration: 0.01,
          zIndex: 10,
          autoAlpha: 1
        });
        break;


      case "end":
        gsap.to(wrapper.current, {
          duration: 1.5,
          autoAlpha: 0
        }).eventCallback("onComplete", () => {
          wrapper.current!.style.zIndex = "1";
        })
        break;
    }
  }, [phase]);
}