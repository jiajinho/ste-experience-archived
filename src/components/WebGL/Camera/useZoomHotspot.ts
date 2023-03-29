import config from 'config';
import { useEffect, useRef } from 'react';

import useCameraStore from 'stores/webgl/useCameraStore';
import { moveCamera } from './utils';

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
        // set({
        //   x: shadowCamera.current!.position.x,
        //   y: shadowCamera.current!.position.y,
        //   z: shadowCamera.current!.position.z,
        //   tx: lookAt.x,
        //   ty: lookAt.y,
        //   tz: lookAt.z
        // });

        setCameraStore("mouseEvent", config.zoomSettings[currentZoom].allowEvent);
      }
    });

    firstTime.current = false;
  }, [currentZoom, camera, shadowCamera]);

}