import React, { useEffect } from 'react';

import { Hotspot, Vector3 } from 'types';
import useCameraStore from 'stores/webgl/useCameraStore';
import useEnvStore from 'stores/useEnvStore';
import config from 'config';

export type Zoom = {
  hotspot: Hotspot,
  cameraPosition: Vector3
}

export default (ref: React.RefObject<THREE.Group>, zoom: Zoom) => {
  const env = useEnvStore(state => state.env);

  const setCameraStore = useCameraStore(state => state.set);

  useEffect(() => {
    config.zoomSettings[zoom.hotspot] = {
      cameraPosition: zoom.cameraPosition,
      lookAt: ref.current?.position
    }
  }, [JSON.stringify(zoom)]);

  const triggerZoom = () => {
    if (env === "development") return;

    setCameraStore("currentZoom", zoom.hotspot);
  }

  return triggerZoom;
}

