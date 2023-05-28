import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

import useCardStore from 'stores/html/useCardStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';
import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';

type Frameloop = "never" | "always";

export default () => {
  const setFrameloop = useThree(state => state.setFrameloop);

  const fps = useLoadProgressStore(state => state.fps);
  const loading = useLoadAnimationStore(state => state.loading);

  useEffect(() => useCardStore.subscribe(state => {
    if (!!state.htmlEvent) {
      setFrameloop("never");
    }
    else {
      setFrameloop("always");
    }
  }), [setFrameloop]);

  useEffect(() => {
    const determineFrameloop = () => {
      let fl: Frameloop = "never";

      if (fps.calibrating) fl = "always";
      if (fps.completed) fl = "never";
      if (!loading) fl = "always";

      setFrameloop(fl);
    }

    const neverFrameloop = () => {
      setFrameloop("never");
    }

    determineFrameloop();

    window.addEventListener("blur", neverFrameloop);
    window.addEventListener("focus", determineFrameloop);

    return () => {
      window.removeEventListener("blur", neverFrameloop);
      window.removeEventListener("focus", determineFrameloop);
    }
  }, [fps, loading]);
}