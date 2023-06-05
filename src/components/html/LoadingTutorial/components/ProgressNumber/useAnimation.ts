import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import locale from '@/locale';
import useLoadAnimationStore from '@/stores/html/useLoadAnimationStore';

export default (
  wrapper: React.RefObject<HTMLDivElement>,
  data: string
): [string, string] => {
  const phase = useLoadAnimationStore(state => state.progress);
  const set = useLoadAnimationStore(state => state.set);

  const [progress, setProgress] = useState(0);

  const [ellipsis, setEllipsis] = useState(".");

  const loadingIndexRef = useRef(0);
  const [loadingText, setLoadingText] = useState(locale.loading.loadingTexts[0]);

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
      overwrite: true,
      n: Number(data),
      onUpdate: () => {
        setProgress(number.n)
      }
    });
  }, [data]);

  useEffect(() => {
    let ellipsisCount = 1;

    const t = setInterval(() => {
      let ellipsis = ".";

      for (let i = 0; i < ellipsisCount; i++) {
        ellipsis += ".";
      }

      setEllipsis(ellipsis);

      if (++ellipsisCount >= 3) {
        ellipsisCount = 0;
      }
    }, 1000);

    return () => { clearInterval(t) }
  }, []);

  useEffect(() => {
    if (++loadingIndexRef.current >= locale.loading.loadingTexts.length) {
      loadingIndexRef.current = 0;
    }

    setLoadingText(`${locale.loading.loadingTexts[loadingIndexRef.current]}`)
  }, [data]);

  return [progress.toFixed(0), `${loadingText}${ellipsis}`];
}