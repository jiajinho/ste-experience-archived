import { useEffect } from 'react';

import config from 'config';
import { EventState } from './types';
import { enableEvent, executeEvent } from './utils';
import useCameraStore from 'stores/webgl/useCameraStore';

export default () => {
  const { canvas, mouseEvent, camera, shadowCamera, currentZoom } = useCameraStore(state => state);

  useEffect(() => {
    if (!canvas) return;
    if (!camera) return;
    if (!shadowCamera) return;
    if (!mouseEvent) return;

    const setting = config.zoomSettings[currentZoom];

    const state: EventState = {
      enabled: false,
      anchorX: 0,
      anchorAzimuth: setting.allowEvent?.default.azimuth || 0,
      azimuth: setting.allowEvent?.default.azimuth || 0
    }

    function handleMouseDown(e: MouseEvent) {
      enableEvent(state, e.pageX);
    }

    function handleTouchStart(e: TouchEvent) {
      enableEvent(state, e.targetTouches[0].pageX);
    }

    function disableEvent() {
      state.enabled = false;
      state.anchorAzimuth = state.azimuth;
    }

    function handleMouseMove(e: MouseEvent) {
      executeEvent(state, e.pageX);
    }

    function handleTouchMove(e: TouchEvent) {
      executeEvent(state, e.targetTouches[0].pageX);
    }

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", disableEvent);
    canvas.addEventListener("mousemove", handleMouseMove);

    canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
    canvas.addEventListener("touchend", disableEvent, { passive: true });
    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", disableEvent);
      canvas.removeEventListener("mousemove", handleMouseMove);

      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", disableEvent);
      canvas.removeEventListener("touchmove", handleTouchMove);
    }
  }, [camera, mouseEvent, currentZoom]);
}