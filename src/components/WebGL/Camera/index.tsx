import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import useCameraStore from 'stores/webgl/useCameraStore';
import useEnvStore from 'stores/useEnvStore';
import useControlCamera from '@webgl/debug/hooks/useControlCamera';

import useZoomHotspot from './useZoomHotspot';
import useMouseEvent from './useMouseEvent';

export default () => {
  /**
   * Hooks
   */
  const { camera } = useThree();

  const shadowCamera = useRef<THREE.PerspectiveCamera>(null);

  const env = useEnvStore(state => state.env);
  const setCameraStore = useCameraStore(state => state.set);

  useMouseEvent();
  useZoomHotspot();

  useControlCamera();

  useEffect(() => {
    if (!shadowCamera.current) return;

    setCameraStore("camera", camera as THREE.PerspectiveCamera);
    setCameraStore("shadowCamera", shadowCamera.current);
  }, []);

  /**
   * Not hook
   */
  const handleOrbitChange = () => {
    if (env !== "development") return;
    console.log(camera.position);
  }

  /**
   * Render
   */
  return (
    <>
      <perspectiveCamera ref={shadowCamera} />

      <OrbitControls
        enabled={env === "development"}
        enableDamping={false}
        onChange={handleOrbitChange}
      />
    </>
  )
}