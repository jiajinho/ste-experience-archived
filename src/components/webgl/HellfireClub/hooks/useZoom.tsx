import React, { useEffect } from 'react';
import useCameraStore from 'store/useCameraStore';
import { Hotspot, Vector3 } from 'types';

export type Zoom = {
  hotspot: Hotspot,
  cameraPosition: Vector3
}

export default (ref: React.RefObject<THREE.Group>, zoom: Zoom) => {
  const updateZoomChoices = useCameraStore(state => state.updateZoomChoices);
  const setCurrentZoom = useCameraStore(state => state.setCurrentZoom);

  useEffect(() => {
    updateZoomChoices(zoom.hotspot, {
      cameraPosition: zoom.cameraPosition,
      lookAt: ref.current?.position
    });
  }, [JSON.stringify(zoom), updateZoomChoices]);

  const triggerZoom = () => {
    setCurrentZoom(zoom.hotspot);
  }

  return triggerZoom;
}

