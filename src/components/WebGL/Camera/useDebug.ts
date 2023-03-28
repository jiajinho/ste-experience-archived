import { useEffect } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';

import config from 'config';
import { moveCamera } from './utils';
import useEnvStore from 'stores/useEnvStore';
import useCameraStore from 'stores/webgl/useCameraStore';

export default (shadowCamera: React.RefObject<THREE.PerspectiveCamera>) => {
  const env = useEnvStore(state => state.env);
  const currentZoom = useCameraStore(state => state.currentZoom);

  const camera = useThree(state => state.camera);

  const [{ x, y, z, tx, ty, tz, freeCam }, set] = useControls("useDebugCamera", () => ({
    x: { min: -20, max: 20, step: 0.01, value: 0 },
    y: { min: -20, max: 20, step: 0.01, value: 0 },
    z: { min: -20, max: 20, step: 0.01, value: 0 },
    tx: { min: -100, max: 100, step: 0.5, value: -100 },
    ty: { min: -100, max: 100, step: 0.5, value: 0.5 },
    tz: { min: -200, max: 200, step: 0.5, value: 0 },
    freeCam: env === "development"
  }), {
    collapsed: true
  });

  useEffect(() => {
    if (!shadowCamera.current) return;

    moveCamera({
      camera,
      shadowCamera: shadowCamera.current,
      lookAt: new THREE.Vector3(tx, ty, tz),
      cameraPosition: [x, y, z],
      animate: false
    });
  }, [x, y, z, tx, ty, tz]);

  useEffect(() => {
    set({ freeCam: env === "development" });

    if (env === "development") return;

    const cameraSetting = config.zoomSettings[currentZoom];

    if (cameraSetting.cameraPosition) {
      camera.position.x = cameraSetting.cameraPosition[0];
      camera.position.y = cameraSetting.cameraPosition[1];
      camera.position.z = cameraSetting.cameraPosition[2];
    }

    if (cameraSetting.lookAt) {
      camera.lookAt(cameraSetting.lookAt);
    }
  }, [env]);

  return { freeCam, set };
}