import { useEffect } from 'react';
import { differenceInMilliseconds } from "date-fns";

import useLoadAnimationStore from '@/stores/html/useLoadAnimationStore';

export default () => {
  const phase = useLoadAnimationStore(state => state.typewriter);
  const setLoadAnimationStore = useLoadAnimationStore(state => state.set);

  useEffect(() => {
    if (phase !== 'start') return;

    let prevTap: Date;

    function skipToEnd() {
      setLoadAnimationStore("typewriter", "skipped");
    }

    function checkDoubleTap() {
      const now = new Date();

      if (prevTap && differenceInMilliseconds(now, prevTap) < 200)
        skipToEnd();
      else
        prevTap = now;
    }

    window.addEventListener("dblclick", skipToEnd, { once: true });
    window.addEventListener("touchstart", checkDoubleTap, { once: true });

    return () => {
      window.removeEventListener("dblclick", skipToEnd);
      window.addEventListener("touchstart", checkDoubleTap);
    }
  }, [phase]);
}