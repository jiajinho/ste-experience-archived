import React, { useEffect } from 'react';
import { differenceInMilliseconds } from "date-fns";

import useLoadAnimationStore from '@/stores/html/useLoadAnimationStore';

export default (skipableRef: React.RefObject<boolean>) => {
  const setLoadAnimationStore = useLoadAnimationStore(state => state.set);

  useEffect(() => {
    let prevTap: Date;

    function skipToEnd() {
      if (!skipableRef.current) return;

      setLoadAnimationStore("typewriter", "skipped");

      window.removeEventListener("dblclick", skipToEnd);
      window.addEventListener("touchstart", checkDoubleTap);
    }

    function checkDoubleTap() {
      const now = new Date();

      if (prevTap && differenceInMilliseconds(now, prevTap) < 200)
        skipToEnd();
      else
        prevTap = now;
    }

    window.addEventListener("dblclick", skipToEnd);
    window.addEventListener("touchstart", checkDoubleTap);

    return () => {
      window.removeEventListener("dblclick", skipToEnd);
      window.addEventListener("touchstart", checkDoubleTap);
    }
  }, []);
}