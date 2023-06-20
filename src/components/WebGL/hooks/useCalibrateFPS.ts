import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';

import { clamp } from '@/utils';
import useGLStore from '@/stores/webgl/useGLStore';
import useLoadProgressStore from '@/stores/useLoadProgressStore';
import useEnvStore from '@/stores/useEnvStore';

const fpsStep = 0.17;
const lowerLimit = 0.7;
const maxFrameMeasure = 9;

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
    maxDpr.current = Math.min(window.devicePixelRatio, 1.5);
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
        newDpr += fpsStep;
      }
      else {
        fpsHitCounter.current = 0;
        newDpr -= fpsStep;
      }

      frameCounter.current += 1;

      const fpsProgress = clamp(frameCounter.current / maxFrameMeasure, 0, 1);
      setLoadProgressStore("fps", { progress: fpsProgress });

      newDpr = clamp(newDpr, lowerLimit, maxDpr.current);
      setGLStore("dpr", newDpr);

      if (fpsHitCounter.current >= 5 || frameCounter.current >= maxFrameMeasure) {
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