import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';

import useCameraStore from 'store/useCameraStore';
import config from 'config';
import { OrbitControls } from '@react-three/drei';

export default () => {
  const { camera } = useThree();

  const shadowCamera = useRef<THREE.PerspectiveCamera>(null);

  const firstTime = useRef(true);

  const hotspot = useCameraStore(state => state.hotspot);
  const object = useCameraStore(state => state.object);

  const { rx, ry, rz, x, y, z, freeCam } = useControls("camera", {
    rx: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    ry: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    rz: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    x: { min: -20, max: 20, step: 0.01, value: 0 },
    y: { min: -20, max: 20, step: 0.01, value: 0 },
    z: { min: -20, max: 20, step: 0.01, value: 0 },
    freeCam: false
  });

  useEffect(() => {
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;

    if (object) {
      camera.lookAt(object.position);
    }
  }, [rx, ry, rz, x, y, z]);

  useEffect(() => {
    if (!shadowCamera.current) return;

    const hotspotPosition = object ? object.position : new THREE.Vector3(0, 0, 0);

    shadowCamera.current.position.x = config.hotspots[hotspot][0];
    shadowCamera.current.position.y = config.hotspots[hotspot][1];
    shadowCamera.current.position.z = config.hotspots[hotspot][2];

    shadowCamera.current.lookAt(hotspotPosition);

    const endRotation = new THREE.Euler().copy(shadowCamera.current.rotation);

    const timeline = gsap.timeline({
      defaults: {
        duration: firstTime.current ? 0 : 1.5,
        ease: "power2.out"
      }
    });

    timeline
      .to(camera.position, {
        x: config.hotspots[hotspot][0],
        y: config.hotspots[hotspot][1],
        z: config.hotspots[hotspot][2]
      })
      .to(camera.rotation, {
        x: endRotation.x,
        y: endRotation.y,
        z: endRotation.z,
      }, "0");

    firstTime.current = false;
  }, [hotspot]);

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