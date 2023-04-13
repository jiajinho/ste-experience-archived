import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

import useLoadAnimationStore from 'stores/html/useLoadAnimationStore';

export default (wrapper: React.RefObject<HTMLDivElement>, data: string) => {
  const phase = useLoadAnimationStore(state => state.progress);
  const set = useLoadAnimationStore(state => state.set);

  const [progress, setProgress] = useState(0);

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

  useEffect(() => {
    const number = {
      n: progress
    }

    gsap.to(number, {
      duration: 0.75,
      ease: "power2.out",
      n: Number(data),
      onUpdate: () => {
        setProgress(number.n)
      }
    });
  }, [data]);

  return progress.toFixed(0);
}