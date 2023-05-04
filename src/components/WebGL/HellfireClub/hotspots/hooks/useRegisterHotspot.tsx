import { useEffect } from 'react';
import * as THREE from 'three';

import config from 'config';
import { Camera, VectorIndex } from 'types';

import useCameraStore from 'stores/webgl/useCameraStore';
import { useThree } from '@react-three/fiber';

export default (hotspot: Camera.Hotspot, cameraBox: React.RefObject<THREE.Group>, cameraTarget: React.RefObject<THREE.Group>) => {
  const currentZoom = useCameraStore(state => state.currentZoom);
  const setCameraStore = useCameraStore(state => state.set);

  const { aspect } = useThree(state => state.viewport);

  useEffect(() => {
    if (!cameraBox.current) return;
    if (!cameraTarget.current) return;

    const setting = config.zoomSettings[hotspot];

    if (setting.aspect && aspect > setting.aspect.minAspect) {
      const change = Math.min(aspect, setting.aspect.maxAspect) * setting.aspect.constant;

      let index: "x" | "y" | "z" = "x";

      switch (setting.aspect.vectorIndex) {
        case VectorIndex.y:
          index = "y";
          break;
        case VectorIndex.z:
          index = "z";
          break;
      }

      cameraBox.current.position[index] = setting.cameraBox.position[setting.aspect.vectorIndex] + change;
      cameraTarget.current.position[index] = setting.cameraBox.lookAt[setting.aspect.vectorIndex] + change;
    }
    else {
      cameraBox.current.position.x = setting.cameraBox.position[0];
      cameraBox.current.position.y = setting.cameraBox.position[1];
      cameraBox.current.position.z = setting.cameraBox.position[2];

      cameraTarget.current.position.x = setting.cameraBox.lookAt[0];
      cameraTarget.current.position.y = setting.cameraBox.lookAt[1];
      cameraTarget.current.position.z = setting.cameraBox.lookAt[2];
    }

    const position = new THREE.Vector3();
    cameraBox.current.getWorldPosition(position);

    const lookAt = new THREE.Vector3();
    cameraTarget.current.getWorldPosition(lookAt);

    setting.cameraPosition = [position.x, position.y, position.z];
    setting.lookAt = [lookAt.x, lookAt.y, lookAt.z];
  }, [aspect]);

  const triggerZoom = () => {
    if (currentZoom === hotspot) return;
    setCameraStore("currentZoom", hotspot);
  }

  return triggerZoom;
}

