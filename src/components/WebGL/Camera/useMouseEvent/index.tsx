import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

import config from '@/config';
import { EventState } from './types';
import { disableEvent, enableEvent, executeEvent, resetEventState } from './utils';

import useCameraStore from '@/stores/webgl/useCameraStore';
import useEnvStore from '@/stores/useEnvStore';
import useLoadAnimationStore from '@/stores/html/useLoadAnimationStore';
import useLoadProgressStore from '@/stores/useLoadProgressStore';

const eventState: EventState = {
  enabled: false,

  anchorX: 0,
  anchorAzimuth: config.zoomSettings.default.allowEvent?.default.azimuth.value || 0,
  azimuth: config.zoomSettings.default.allowEvent?.default.azimuth.value || 0,

  anchorY: 0,
  anchorPolar: config.zoomSettings.default.allowEvent?.default.polar.value || 0,
  polar: config.zoomSettings.default.allowEvent?.default.polar.value || 0
};

export default () => {
  const { aspect } = useThree(state => state.viewport);

  const env = useEnvStore(state => state.env);

  const canvas = useCameraStore(state => state.canvas);
  const camera = useCameraStore(state => state.camera);
  const shadowCamera = useCameraStore(state => state.shadowCamera);
  const loading = useLoadAnimationStore(state => state.loading);
  const fps = useLoadProgressStore(state => state.fps);

  useEffect(() => {
    if (env === "development") return;
    if (!canvas) return;
    if (!camera) return;
    if (!shadowCamera) return;

    if (fps.calibrating) {
      enableEvent(eventState, 0, 0);
      executeEvent(eventState, aspect, 0, 0);
      disableEvent(eventState);
      resetEventState(eventState);
    }

    const unsubscribe = useCameraStore.subscribe(state => {
      if (state.currentZoom === "default") {
        resetEventState(eventState);
      }
    });

    function handleMouseDown(e: MouseEvent) {
      if (loading) return;
      enableEvent(eventState, e.pageX, e.pageY);
    }

    function handleTouchStart(e: TouchEvent) {
      if (loading) return;
      enableEvent(eventState, e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    }

    function handleMouseMove(e: MouseEvent) {
      executeEvent(eventState, aspect, e.pageX, e.pageY);
    }

    function handleTouchMove(e: TouchEvent) {
      executeEvent(eventState, aspect, e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    }

    function handleTouchEndMouseUp() {
      disableEvent(eventState);
    }

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleTouchEndMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);

    canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
    canvas.addEventListener("touchend", handleTouchEndMouseUp, { passive: true });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      unsubscribe();

      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleTouchEndMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);

      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEndMouseUp);
      canvas.removeEventListener("touchmove", handleTouchMove);
    }
  }, [env, canvas, camera, shadowCamera, aspect, loading, fps]);
}