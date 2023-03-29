import React, { useEffect } from 'react';

import config from 'config';
import { Camera } from 'types';

import useCameraStore from 'stores/webgl/useCameraStore';
import useEnvStore from 'stores/useEnvStore';

export default (ref: React.RefObject<THREE.Group>, hotspot: Camera.Hotspot) => {
  const env = useEnvStore(state => state.env);

  const setCameraStore = useCameraStore(state => state.set);

  useEffect(() => {
    if (!ref.current) return;

    config.zoomSettings[hotspot].lookAt = ref.current.position;
  }, [hotspot]);

  const triggerZoom = () => {
    if (env === "development") return;
    setCameraStore("currentZoom", hotspot);
  }

  return triggerZoom;
}

