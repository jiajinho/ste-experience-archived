import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';

import useDebugLightStore from 'stores/webgl/useDebugLightStore';

import RoomCrimsonLight from './components/RoomCrimsonLight';
import ShelfLight from './components/ShelfLight';
import RiftLights from './components/RiftLights';

export default () => {
  const light = useDebugLightStore(state => state.light);
  const ref = useRef<THREE.SpotLight | null>(null);

  const [toggle, setToggle] = useState(false);

  //@ts-ignore
  useHelper(toggle && ref, THREE.SpotLightHelper, "cyan");

  useEffect(() => {
    setToggle(false);
  }, [light]);

  useEffect(() => {
    setToggle(true);
    ref.current = light;
  }, [toggle]);

  return (
    <>
      <ambientLight intensity={0.1} />

      <RoomCrimsonLight />
      <RiftLights />


      <ShelfLight.Top />
      <ShelfLight.Bottom />
    </>
  )
}