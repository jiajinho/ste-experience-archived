import React, { useEffect } from 'react';
import gsap from 'gsap';

import config from '@html/LoadingTutorial/config';
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
          ...config.progress.end,
          zIndex: 1,
          autoAlpha: 0
        });
        break;
    }
  }, [phase]);
}