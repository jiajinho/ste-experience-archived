import React, { useEffect } from 'react';
import * as THREE from 'three';

import config from 'config';
import { Camera } from 'types';

import useCameraStore from 'stores/webgl/useCameraStore';
import useEnvStore from 'stores/useEnvStore';
import useDebugCameraStore from 'stores/webgl/useDebugCameraStore';

export default (
  hotspot: Camera.Hotspot,
  cameraBox: React.RefObject<THREE.Mesh>,
  cameraTarget: React.RefObject<THREE.Group>
) => {
  const env = useEnvStore(state => state.env);
  const setCameraStore = useCameraStore(state => state.set);

  const debug = {
    cameraBox: useDebugCameraStore(state => state.box),
    cameraTarget: useDebugCameraStore(state => state.target)
  }

  useEffect(() => {
    setupZoomConfig();
  }, [JSON.stringify(debug.cameraBox?.position), JSON.stringify(debug.cameraTarget?.position)]);

  const setupZoomConfig = () => {
    if (!cameraBox.current) return;
    if (!cameraTarget.current) return;

    const position = new THREE.Vector3();
    cameraBox.current.getWorldPosition(position);

    const lookAt = new THREE.Vector3();
    cameraTarget.current.getWorldPosition(lookAt);

    config.zoomSettings[hotspot].cameraPosition = [position.x, position.y, position.z];
    config.zoomSettings[hotspot].lookAt = lookAt;
  }

  const triggerZoom = () => {
    if (env === "development") return;

    setupZoomConfig();
    setCameraStore("currentZoom", hotspot);
  }

  return triggerZoom;
}

