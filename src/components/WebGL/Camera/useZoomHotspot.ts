import config from 'config';
import { useEffect, useRef } from 'react';

import { moveCamera } from './utils';
import useCameraStore from 'stores/webgl/useCameraStore';

export default () => {
  const firstTime = useRef(true);

  const { shadowCamera, currentZoom, camera } = useCameraStore(state => state);
  const setCameraStore = useCameraStore(state => state.set);

  useEffect(() => {
    if (!shadowCamera) return;
    if (!camera) return;

    const { lookAt, cameraPosition } = config.zoomSettings[currentZoom];

    if (!lookAt || !cameraPosition) return;

    setCameraStore("mouseEvent", undefined);

    moveCamera({
      camera,
      shadowCamera: shadowCamera,
      lookAt,
      cameraPosition,
      animate: !firstTime.current,
      callback: () => {
        setCameraStore("mouseEvent", config.zoomSettings[currentZoom].allowEvent?.name);
      }
    });

    firstTime.current = false;
  }, [currentZoom, camera, shadowCamera]);

}