import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';

import useDebugLightStore from 'store/useDebugLightStore';
import BulletinLight from './components/BulletinLight';
import TVLight from './components/TVLight';
import RoomCrimsonLight from './components/RoomCrimsonLight';
import TVBlueLight from './components/TVBlueLight';

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
      <BulletinLight />

      <TVLight />
      <TVBlueLight />
    </>
  )
}