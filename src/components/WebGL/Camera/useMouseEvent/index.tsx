import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

import config from 'config';
import { EventState } from './types';
import { disableEvent, enableEvent, executeEvent } from './utils';
import useCameraStore from 'stores/webgl/useCameraStore';

export default () => {
  const { canvas, mouseEvent, camera, shadowCamera, currentZoom } = useCameraStore(state => state);
  const { aspect } = useThree(state => state.viewport);

  useEffect(() => {
    if (!canvas) return;
    if (!camera) return;
    if (!shadowCamera) return;
    if (!mouseEvent) return;

    if (currentZoom !== "default") return;

    const setting = config.zoomSettings[currentZoom];

    const state: EventState = {
      enabled: false,

      anchorX: 0,
      anchorAzimuth: setting.allowEvent?.default.azimuth.value || 0,
      azimuth: setting.allowEvent?.default.azimuth.value || 0,

      anchorY: 0,
      anchorPolar: setting.allowEvent?.default.polar.value || 0,
      polar: setting.allowEvent?.default.polar.value || 0
    }

    function handleMouseDown(e: MouseEvent) {
      enableEvent(state, e.pageX, e.pageY);
    }

    function handleTouchStart(e: TouchEvent) {
      enableEvent(state, e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    }

    function handleMouseMove(e: MouseEvent) {
      executeEvent(state, aspect, e.pageX, e.pageY);
    }

    function handleTouchMove(e: TouchEvent) {
      executeEvent(state, aspect, e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    }

    function handleMouseUp() {
      disableEvent(state);
    }

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);

    canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
    canvas.addEventListener("touchend", handleMouseUp, { passive: true });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);

      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleMouseUp);
      canvas.removeEventListener("touchmove", handleTouchMove);
    }
  }, [camera, mouseEvent, currentZoom, aspect]);
}