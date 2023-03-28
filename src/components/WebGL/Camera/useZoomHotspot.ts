import { useEffect, useRef } from 'react';

import useCameraStore from 'stores/webgl/useCameraStore';
import { moveCamera } from './utils';

export default () => {
  const firstTime = useRef(true);

  const { shadowCamera, zoomSettings, currentZoom, camera } = useCameraStore(state => state);
  const setCameraStore = useCameraStore(state => state.set);

  useEffect(() => {
    if (!shadowCamera) return;
    if (!camera) return;

    const { lookAt, cameraPosition } = zoomSettings[currentZoom];

    if (!lookAt || !cameraPosition) {
      console.warn("lookAt and cameraPosition is undefined");
      return;
    }

    if (currentZoom !== "default") {
      setCameraStore("cameraPan", false);
    }

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

        if (currentZoom === "default") {
          setCameraStore("cameraPan", true);
        }
      }
    });

    firstTime.current = false;
  }, [currentZoom, camera, shadowCamera]);

}