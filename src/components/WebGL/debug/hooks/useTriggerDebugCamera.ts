import React from 'react';
import * as THREE from 'three';

import { Camera } from 'types';
import useEnvStore from 'stores/useEnvStore';
import useDebugCameraStore from 'stores/webgl/useDebugCameraStore';

export default (box: React.RefObject<THREE.Object3D>, target: React.RefObject<THREE.Object3D>, hotspot: Camera.Hotspot) => {
  const env = useEnvStore(state => state.env);
  const setDebugCameraStore = useDebugCameraStore(state => state.set);

  const triggerControl = () => {
    if (env !== "development") return;
    setDebugCameraStore("box", box.current);
    setDebugCameraStore("target", target.current);
    setDebugCameraStore("hotspot", hotspot);

    if (!box.current) return;
    if (!target.current) return;

    const position = new THREE.Vector3();
    box.current.getWorldPosition(position);

    const lookAt = new THREE.Vector3();
    target.current.getWorldPosition(lookAt);

    console.log({
      cameraPosition: [position.x, position.y, position.z],
      lookAt: [lookAt.x, lookAt.y, lookAt.z]
    });
  }

  return triggerControl;
}