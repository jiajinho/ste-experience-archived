import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';

import { clamp } from '@/utils';
import useGLStore from '@/stores/webgl/useGLStore';
import useLoadProgressStore from '@/stores/useLoadProgressStore';
import useEnvStore from '@/stores/useEnvStore';

export default () => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);
  const progress = useProgress(state => state.progress);

  const dpr = useGLStore(state => state.dpr);
  const setGLStore = useGLStore(state => state.set);

  const fps = useLoadProgressStore(state => state.fps);
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  const frames = useRef(0);
  const beginTime = useRef((performance || Date).now());
  const prevTime = useRef(beginTime.current);

  const maxDpr = useRef(0);
  const fpsHitCounter = useRef(0);

  const frameCounter = useRef(0);

  useEffect(() => {
    const dpr = Math.min(window.devicePixelRatio, 2);

    maxDpr.current = dpr;
    setGLStore("dpr", dpr);
  }, []);

  useFrame(() => {
    if (progress !== 100) return;
    if (env === 'development') return;
    if (env === 'staging') return;
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

      let newDpr = dpr;

      if (fps >= 30) {
        fpsHitCounter.current += 1;
        newDpr += 0.15;
      }
      else {
        fpsHitCounter.current = 0;
        newDpr -= 0.15;
      }

      frameCounter.current += 1;

      newDpr = clamp(newDpr, 0.8, maxDpr.current);
      setGLStore("dpr", newDpr);

      if (fpsHitCounter.current >= 5 || frameCounter.current >= 15) {
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