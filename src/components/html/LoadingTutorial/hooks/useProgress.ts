import { useEffect, useState } from 'react';
import { useProgress as useThreeProgress } from '@react-three/drei';
import { captureMessage } from '@sentry/nextjs';

import { clamp } from '@/utils';
import useLoadAnimationStore from '@/stores/html/useLoadAnimationStore';
import useLoadProgressStore from '@/stores/useLoadProgressStore';

type Progress = {
  webgl: number,
  html: number,
  bgm: number,
  video: number,
  fps: number,
}

export default () => {
  const [progress, setProgress] = useState(0);

  const setLoadProgressStore = useLoadProgressStore(state => state.set);
  const setLoadAnimationStore = useLoadAnimationStore(state => state.set);

  useEffect(() => {
    const progress: Progress = {
      webgl: 0,
      html: 0,
      bgm: 0,
      video: 0,
      fps: 0
    }

    const pie: Progress = {
      webgl: 0.4,
      html: 0.3,
      bgm: 0.1,
      video: 0.1,
      fps: 0.1
    }

    let typewriterCompleted = false;
    let webglLoaded = false;

    const unsubThree = useThreeProgress.subscribe(({ loaded }) => {
      const value = clamp(loaded / 162, 0, 1);
      progress.webgl = value * pie.webgl;

      webglLoaded = value >= 1;

      aggregrateProgress();
      evaluateFpsCalibration();
    });

    const unsubLoadAnimation = useLoadAnimationStore.subscribe(state => {
      typewriterCompleted = state.typewriter === "end";

      evaluateFpsCalibration();
    });

    const unsubLoadProgress = useLoadProgressStore.subscribe(({ fps, html, misc }) => {
      const htmlValues = Object.values(html);
      const htmlTotal = htmlValues.length;

      const htmlLoaded = Object.values(html).reduce((prev, current) => {
        if (current) return prev + 1;
        return prev;
      }, 0);

      progress.html = (htmlLoaded / htmlTotal) * pie.html;
      progress.bgm = misc.bgm ? pie.bgm : 0;
      progress.video = misc.eventVideo ? pie.video : 0;
      progress.fps = fps.completed ? pie.fps : fps.progress * pie.fps;

      aggregrateProgress();
    });

    function aggregrateProgress() {
      const totalProgress = Object.values(progress).reduce((prev, current) => prev + current);
      const adjustedProgress = Math.round(totalProgress * 100);

      setProgress(adjustedProgress);

      if (adjustedProgress >= 100) {
        unsubscribe();
      }
    }

    function evaluateFpsCalibration() {
      if (!webglLoaded) return;
      if (!typewriterCompleted) return;

      setTimeout(() => {
        setLoadProgressStore("fps", { calibrating: true });
      }, 500);
    }

    function unsubscribe() {
      unsubThree();
      unsubLoadProgress();
      unsubLoadAnimation();
    }

    const t = setTimeout(() => {
      captureMessage(`Loading has exceeded 1min: ${JSON.stringify(progress)}`, "warning");
    }, 60 * 1000);

    return () => {
      unsubscribe();
      clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!(progress >= 100)) return;

    const t = setTimeout(() => {
      setLoadAnimationStore("progress", "end");
    }, 1000);

    return () => { clearTimeout(t) }
  }, [progress]);

  return progress;
}