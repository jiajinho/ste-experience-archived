import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import { PerspectiveCameraProps, useThree } from '@react-three/fiber';
import { useControls } from 'leva';

import useCameraStore from 'store/useCameraStore';
import config from 'config';
import { PerspectiveCamera } from '@react-three/drei';

export default () => {
  const { camera } = useThree();

  const shadowCamera = useRef<PerspectiveCameraProps>(null);

  const hotspot = useCameraStore(state => state.hotspot);
  const object = useCameraStore(state => state.object);

  const { rx, ry, rz, x, y, z } = useControls("camera", {
    rx: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    ry: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    rz: { min: -2 * Math.PI, max: 2 * Math.PI, step: 0.01, value: 0 },
    x: { min: -20, max: 20, step: 0.01, value: 0 },
    y: { min: -20, max: 20, step: 0.01, value: 0 },
    z: { min: -20, max: 20, step: 0.01, value: 0 },
  });

  useEffect(() => {
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;

    if (object) {
      camera.lookAt(object.position);
    }

    // camera.rotation.x = rx;
    // camera.rotation.y = ry;
    // camera.rotation.z = rz;
  }, [rx, ry, rz, x, y, z]);

  useEffect(() => {
    camera.position.x = config.hotspots[hotspot][0];
    camera.position.y = config.hotspots[hotspot][1];
    camera.position.z = config.hotspots[hotspot][2];

    if (object) {
      camera.lookAt(object.position);
    }
    else {
      camera.lookAt(new Vector3(0, 0, 0));
    }
  }, [hotspot]);


  useEffect(() => {
    console.log("camera position", camera.position);
  }, [camera.position.x, camera.position.y, camera.position.z]);


  return (
    <PerspectiveCamera ref={shadowCamera} />
  )
}