import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import locale from '@/locale';
import useLoadAnimationStore from '@/stores/html/useLoadAnimationStore';

export default (
  wrapper: React.RefObject<HTMLDivElement>,
  data: string
): [string, string] => {
  const phase = useLoadAnimationStore(state => state.progress);

  const [progress, setProgress] = useState(0);

  const [ellipsis, setEllipsis] = useState(".");

  const loadingIndexRef = useRef(0);
  const [loadingText, setLoadingText] = useState(locale.loading.loadingTexts[0]);

  const ellipsisIntervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    switch (phase) {
      case "standby":
        gsap.to(wrapper.current, {
          duration: 0,
          autoAlpha: 0
        });
        break;

      case "visible":
        gsap.to(wrapper.current, {
          duration: 0,
          autoAlpha: 1
        });
        break;


      case "end":
        let t: NodeJS.Timeout;

        gsap.to(wrapper.current, {
          duration: 0.5,
          autoAlpha: 0,
          overwrite: true
        });

        return () => {
          clearTimeout(t);
          ellipsisIntervalRef.current && clearInterval(ellipsisIntervalRef.current);
        }
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

    ellipsisIntervalRef.current = setInterval(() => {
      let ellipsis = ".";

      for (let i = 0; i < ellipsisCount; i++) {
        ellipsis += ".";
      }

      setEllipsis(ellipsis);

      if (++ellipsisCount >= 3) {
        ellipsisCount = 0;
      }
    }, 1000);

    return () => {
      ellipsisIntervalRef.current && clearInterval(ellipsisIntervalRef.current)
    }
  }, []);

  useEffect(() => {
    if (++loadingIndexRef.current >= locale.loading.loadingTexts.length) {
      loadingIndexRef.current = 0;
    }

    setLoadingText(`${locale.loading.loadingTexts[loadingIndexRef.current]}`)
  }, [data]);

  return [progress.toFixed(0), `${loadingText}${ellipsis}`];
}