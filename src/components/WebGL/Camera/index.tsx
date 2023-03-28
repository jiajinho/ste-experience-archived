import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import useCameraStore from 'stores/webgl/useCameraStore';
import useDebug from './useDebug';
import useZoomHotspot from './useZoomHotspot';
import useMouseEvent from './useMouseEvent';

export default () => {
  const { camera } = useThree();
  const shadowCamera = useRef<THREE.PerspectiveCamera>(null);

  const setCameraStore = useCameraStore(state => state.set);

  const { freeCam, set } = useDebug(shadowCamera);
  useMouseEvent();
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