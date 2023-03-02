import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import useCameraStore from 'store/useCameraStore';
import useDebug from './useDebug';

export default () => {
  const { camera } = useThree();
  const freeCam = useDebug();

  const shadowCamera = useRef<THREE.PerspectiveCamera>(null);
  const firstTime = useRef(true);

  const zoomChoices = useCameraStore(state => state.zoomChoices);
  const currentZoom = useCameraStore(state => state.currentZoom);

  useEffect(() => {
    if (!shadowCamera.current) return;

    //Calculate the end rotation
    const { lookAt, cameraPosition } = zoomChoices[currentZoom];

    if (!lookAt || !cameraPosition) {
      console.warn("lookAt and cameraPosition is undefined");
      return;
    }

    shadowCamera.current.position.x = cameraPosition[0];
    shadowCamera.current.position.y = cameraPosition[1];
    shadowCamera.current.position.z = cameraPosition[2];

    shadowCamera.current.lookAt(lookAt);

    const endRotation = new THREE.Euler().copy(shadowCamera.current.rotation);


    //Animate
    const timeline = gsap.timeline({
      defaults: {
        duration: firstTime.current ? 0 : 1.5,
        ease: "power2.out"
      }
    });

    timeline
      .to(camera.position, {
        x: cameraPosition[0],
        y: cameraPosition[1],
        z: cameraPosition[2]
      })
      .to(camera.rotation, {
        x: endRotation.x,
        y: endRotation.y,
        z: currentZoom === "book" ? -endRotation.z : endRotation.z,
      }, 0);

    firstTime.current = false;
  }, [currentZoom]);

  return (
    <>
      <perspectiveCamera ref={shadowCamera} />
      <OrbitControls enabled={freeCam} />
    </>
  )
}