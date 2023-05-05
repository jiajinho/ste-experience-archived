import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';

import config from 'config';
import { moveCamera } from './utils';
import useCameraStore from 'stores/webgl/useCameraStore';
import useCardStore from 'stores/html/useCardStore';
import useEnvStore from 'stores/useEnvStore';

export default () => {
  const firstTime = useRef(true);
  const { aspect } = useThree(state => state.viewport);

  const env = useEnvStore(state => state.env);
  const cardHtmlEvent = useCardStore(state => state.htmlEvent);
  const cardWebglEvent = useCardStore(state => state.webglEvent);
  const { shadowCamera, currentZoom, camera } = useCameraStore(state => state);
  const setCameraStore = useCameraStore(state => state.set);

  useEffect(() => {
    if (env === "development") return;
    if (!shadowCamera) return;
    if (!camera) return;
    if (!!cardHtmlEvent) return;
    if (!!cardWebglEvent) return;

    const setting = config.zoomSettings[currentZoom];

    if (!setting.lookAt || !setting.cameraPosition) return;

    setCameraStore("mouseEvent", undefined);

    moveCamera({
      camera,
      shadowCamera: shadowCamera,
      lookAt: setting.lookAt,
      cameraPosition: setting.cameraPosition,
      up: setting.cameraUp,
      animate: !firstTime.current,
      callback: () => {
        setCameraStore("mouseEvent", config.zoomSettings[currentZoom].allowEvent?.name);
      }
    });

    firstTime.current = false;
  }, [currentZoom, camera, shadowCamera, aspect, env]);

}