import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';

import useCameraStore from 'store/useCameraStore';

export default () => {
  const { camera } = useThree();

  const shadowCamera = useRef<THREE.PerspectiveCamera>(null);
  const firstTime = useRef(true);

  const zoomChoices = useCameraStore(state => state.zoomChoices);
  const currentZoom = useCameraStore(state => state.currentZoom);

  const { rx, ry, rz, x, y, z, freeCam } = useControls("Camera", {
    rx: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    ry: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    rz: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    x: { min: -20, max: 20, step: 0.01, value: 0 },
    y: { min: -20, max: 20, step: 0.01, value: 0 },
    z: { min: -20, max: 20, step: 0.01, value: 0 },
    freeCam: false
  }, {
    collapsed: true
  });

  useEffect(() => {
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
  }, [rx, ry, rz, x, y, z]);

  useEffect(() => {
    if (!shadowCamera.current) return;

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
        z: endRotation.z,
      }, "0");

    firstTime.current = false;
  }, [currentZoom]);

  useEffect(() => {
    console.log("camera position", camera.position);
  }, [camera.position.x, camera.position.y, camera.position.z]);

  return (
    <>
      <perspectiveCamera ref={shadowCamera} />
      <OrbitControls enabled={freeCam} />
    </>
  )
}