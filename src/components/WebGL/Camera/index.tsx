import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';

import { moveCamera } from './utils';
import useCameraStore from 'stores/webgl/useCameraStore';
import useDebug from './useDebug';

export default () => {
  const { camera } = useThree();

  const shadowCamera = useRef<THREE.PerspectiveCamera>(null);
  const firstTime = useRef(true);

  const { freeCam, set } = useDebug(shadowCamera);

  const zoomSettings = useCameraStore(state => state.zoomSettings);
  const currentZoom = useCameraStore(state => state.currentZoom);
  const setShadowCamera = useCameraStore(state => state.setShadowCamera);
  const setCameraPan = useCameraStore(state => state.setCameraPan);

  useEffect(() => {
    setShadowCamera(shadowCamera.current!);
  }, []);


  useEffect(() => {
    if (!shadowCamera.current) return;

    const { lookAt, cameraPosition } = zoomSettings[currentZoom];

    if (!lookAt || !cameraPosition) {
      console.warn("lookAt and cameraPosition is undefined");
      return;
    }

    if (currentZoom !== "default") {
      setCameraPan(false);
    }

    moveCamera({
      camera,
      shadowCamera: shadowCamera.current,
      lookAt,
      cameraPosition,
      animate: !firstTime.current,
      callback: () => {
        set({
          x: shadowCamera.current!.position.x,
          y: shadowCamera.current!.position.y,
          z: shadowCamera.current!.position.z,
          tx: lookAt.x,
          ty: lookAt.y,
          tz: lookAt.z
        });

        if (currentZoom === "default" && !freeCam) {
          setCameraPan(true);
        }
      }
    });

    firstTime.current = false;
  }, [currentZoom, freeCam]);

  return (
    <>
      <perspectiveCamera ref={shadowCamera} />
      <OrbitControls enabled={freeCam} enableDamping={false} />
    </>
  )
}