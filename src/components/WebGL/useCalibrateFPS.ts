import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import useGLStore from 'stores/webgl/useGLStore';
import useLoadProgressStore from 'stores/useLoadProgressStore';
import useEnvStore from 'stores/useEnvStore';

export default () => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);
  const setGLStore = useGLStore(state => state.set);
  const fps = useLoadProgressStore(state => state.fps);
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  const frames = useRef(0);
  const beginTime = useRef((performance || Date).now());
  const prevTime = useRef(beginTime.current);

  const fpsSamples = useRef<number[]>([]);

  useEffect(() => {
    if (!window) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    setGLStore("dpr", dpr);
  }, [window]);

  useFrame(() => {
    if (env === 'development') return;
    if (fps.completed) return;

    begin();
    end();
  });

  /**
   * Not hook
   */
  const begin = () => {
    beginTime.current = (performance || Date).now();
  }

  const end = () => {
    frames.current++;
    const time = (performance || Date).now();

    if (time > prevTime.current + 1000) {
      const fps = Math.round((frames.current * 1000) / (time - prevTime.current));
      setGLStore("fps", fps);


      fpsSamples.current.push(fps);

      if (fpsSamples.current.length > 5) {
        const sumFps = fpsSamples.current.reduce((prev, current) => {
          return prev + current;
        });

        const avgFps = sumFps / fpsSamples.current.length;

        if (avgFps < 30) {
          setGLStore("dpr", 1);
        }

        fpsSamples.current.length = 0;

        setLoadProgressStore("fps", {
          calibrating: false,
          completed: true
        });
      }


      prevTime.current = time;
      frames.current = 0;
    }

    return time;
  }
}