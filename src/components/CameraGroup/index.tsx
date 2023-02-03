import React, { useEffect, useRef } from 'react';
import THREE from 'three';
import { useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import config from 'config';
import useCameraStore from 'store/useCameraStore';

export default () => {
  const setCameras = useCameraStore(state => state.setCameras);

  const current = useCameraStore(state => state.current);
  const setCurrent = useCameraStore(state => state.setCurrent);

  const cameras = useRef<THREE.PerspectiveCamera[]>([]);
  const { set } = useThree();

  useEffect(() => {
    setCurrent(cameras.current[0]);
    setCameras(cameras.current);
  }, []);

  useEffect(() => {
    if (!current) return;
    set({ camera: current });
  }, [set, current]);

  cameras.current.length = 0;

  return (
    <>
      {config.cameras.map((c, i) =>
        <PerspectiveCamera
          ref={c => c && cameras.current.push(c as THREE.PerspectiveCamera)}
          key={i}
          fov={75}
          near={0.1}
          far={500}
          focus={10}
          position={c.position}
        />
      )}
    </>
  )
}