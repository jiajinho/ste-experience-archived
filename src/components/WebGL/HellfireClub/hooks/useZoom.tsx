import React, { useEffect } from 'react';

import { Hotspot, Vector3 } from 'types';
import useCameraStore from 'stores/webgl/useCameraStore';
import useEnvStore from 'stores/useEnvStore';

export type Zoom = {
  hotspot: Hotspot,
  cameraPosition: Vector3
}

export default (ref: React.RefObject<THREE.Group>, zoom: Zoom) => {
  const env = useEnvStore(state => state.env);

  const updateZoomSettings = useCameraStore(state => state.updateZoomSettings);
  const setCurrentZoom = useCameraStore(state => state.setCurrentZoom);

  useEffect(() => {
    updateZoomSettings(zoom.hotspot, {
      cameraPosition: zoom.cameraPosition,
      lookAt: ref.current?.position
    });
  }, [JSON.stringify(zoom), updateZoomSettings]);

  const triggerZoom = () => {
    if (env === "development") return;

    setCurrentZoom(zoom.hotspot);
  }

  return triggerZoom;
}

