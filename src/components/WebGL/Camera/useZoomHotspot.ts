import config from 'config';
import { useEffect, useRef } from 'react';

import { moveCamera } from './utils';
import useCameraStore from 'stores/webgl/useCameraStore';
import useCardStore from 'stores/html/useCardStore';

export default () => {
  const firstTime = useRef(true);

  const cardHtmlEvent = useCardStore(state => state.htmlEvent);
  const cardWebglEvent = useCardStore(state => state.webglEvent);
  const { shadowCamera, currentZoom, camera } = useCameraStore(state => state);
  const setCameraStore = useCameraStore(state => state.set);

  useEffect(() => {
    if (!shadowCamera) return;
    if (!camera) return;
    if (!!cardHtmlEvent) return;
    if (!!cardWebglEvent) return;

    const { lookAt, cameraPosition, cameraUp } = config.zoomSettings[currentZoom];

    if (!lookAt || !cameraPosition) return;

    setCameraStore("mouseEvent", undefined);

    moveCamera({
      camera,
      shadowCamera: shadowCamera,
      lookAt,
      cameraPosition,
      up: cameraUp,
      animate: !firstTime.current,
      callback: () => {
        setCameraStore("mouseEvent", config.zoomSettings[currentZoom].allowEvent?.name);
      }
    });

    firstTime.current = false;
  }, [currentZoom, camera, shadowCamera]);

}