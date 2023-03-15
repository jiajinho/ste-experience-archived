import React, { useEffect } from 'react';

import { Hotspot, Vector3 } from 'types';
import useCameraStore from 'store/webgl/useCameraStore';
import useEnvStore from 'store/useEnvStore';

export type Zoom = {
  hotspot: Hotspot,
  cameraPosition: Vector3
}

export default (ref: React.RefObject<THREE.Group>, zoom: Zoom) => {
  const env = useEnvStore(state => state.env);

  const updateZoomChoices = useCameraStore(state => state.updateZoomChoices);
  const setCurrentZoom = useCameraStore(state => state.setCurrentZoom);

  useEffect(() => {
    updateZoomChoices(zoom.hotspot, {
      cameraPosition: zoom.cameraPosition,
      lookAt: ref.current?.position
    });
  }, [JSON.stringify(zoom), updateZoomChoices]);

  const triggerZoom = () => {
    if (env === "development") return;

    setCurrentZoom(zoom.hotspot);
  }

  return triggerZoom;
}

