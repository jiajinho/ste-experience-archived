import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import useCameraStore from 'store/webgl/useCameraStore';
import useDebug from './useDebug';
import { moveCamera } from './utils';

export default () => {
  const { camera } = useThree();
  const shadowCamera = useRef<THREE.PerspectiveCamera>(null);
  const firstTime = useRef(true);

  const { freeCam, set } = useDebug(shadowCamera);

  const zoomChoices = useCameraStore(state => state.zoomChoices);
  const currentZoom = useCameraStore(state => state.currentZoom);

  useEffect(() => {
    if (!shadowCamera.current) return;

    const { lookAt, cameraPosition } = zoomChoices[currentZoom];

    if (!lookAt || !cameraPosition) {
      console.warn("lookAt and cameraPosition is undefined");
      return;
    }

    moveCamera({
      camera,
      shadowCamera: shadowCamera.current,
      lookAt,
      cameraPosition,
      animate: !firstTime.current
    });

    set({
      x: shadowCamera.current.position.x,
      y: shadowCamera.current.position.y,
      z: shadowCamera.current.position.z,
      tx: lookAt.x,
      ty: lookAt.y,
      tz: lookAt.z
    });

    firstTime.current = false;
  }, [currentZoom]);

  return (
    <>
      <perspectiveCamera ref={shadowCamera} />
      <OrbitControls enabled={freeCam} />
    </>
  )
}