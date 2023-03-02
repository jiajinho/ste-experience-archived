import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';

import useDebugLightStore from 'store/useDebugLightStore';
import BulletinSpotLight from './components/BulletinSpotLight';
import TVSpotLight from './components/TVSpotLight';
import RoomSpotLight from './components/RoomSpotLight';
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

      <RoomSpotLight />
      <BulletinSpotLight />

      <TVSpotLight />
      <TVBlueLight />
    </>
  )
}