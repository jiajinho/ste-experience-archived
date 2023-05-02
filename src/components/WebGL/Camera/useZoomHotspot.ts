import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';

import config from 'config';
import { Vector3 } from 'types';
import { moveCamera } from './utils';
import useCameraStore from 'stores/webgl/useCameraStore';
import useCardStore from 'stores/html/useCardStore';

export default () => {
  const firstTime = useRef(true);
  const { aspect } = useThree(state => state.viewport);

  const cardHtmlEvent = useCardStore(state => state.htmlEvent);
  const cardWebglEvent = useCardStore(state => state.webglEvent);
  const { shadowCamera, currentZoom, camera } = useCameraStore(state => state);
  const setCameraStore = useCameraStore(state => state.set);

  useEffect(() => {
    if (!shadowCamera) return;
    if (!camera) return;
    if (!!cardHtmlEvent) return;
    if (!!cardWebglEvent) return;

    const setting = config.zoomSettings[currentZoom];

    if (!setting.lookAt || !setting.cameraPosition) return;

    const cameraPosition: Vector3 = [...setting.cameraPosition];

    if (setting.aspect && aspect > setting.aspect.minAspect) {
      const change = Math.min(aspect, setting.aspect.maxAspect) * setting.aspect.constant;
      cameraPosition[setting.aspect.vectorIndex] += change;
    }


    setCameraStore("mouseEvent", undefined);

    moveCamera({
      camera,
      shadowCamera: shadowCamera,
      lookAt: setting.lookAt,
      cameraPosition: cameraPosition,
      up: setting.cameraUp,
      animate: !firstTime.current,
      callback: () => {
        setCameraStore("mouseEvent", config.zoomSettings[currentZoom].allowEvent?.name);
      }
    });

    firstTime.current = false;
  }, [currentZoom, camera, shadowCamera, aspect]);

}