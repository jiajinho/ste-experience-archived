import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

import useCameraStore from 'stores/webgl/useCameraStore';
import useDebug from './useDebug';
import useZoomHotspot from './useZoomHotspot';
import { useThree } from '@react-three/fiber';

export default () => {
  const { camera } = useThree();
  const shadowCamera = useRef<THREE.PerspectiveCamera>(null);

  const { freeCam, set } = useDebug(shadowCamera);

  const setCameraStore = useCameraStore(state => state.set);

  useZoomHotspot();

  useEffect(() => {
    if (!shadowCamera.current) return;

    setCameraStore("camera", camera as THREE.PerspectiveCamera);
    setCameraStore("shadowCamera", shadowCamera.current);
  }, []);

  return (
    <>
      <perspectiveCamera ref={shadowCamera} />
      <OrbitControls enabled={false} enableDamping={false} />
    </>
  )
}