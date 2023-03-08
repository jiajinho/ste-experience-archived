import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';

import useDebugLightStore from 'store/useDebugLightStore';
import BulletinLight from './components/BulletinLight';
import TVLight from './components/TVLight';
import RoomCrimsonLight from './components/RoomCrimsonLight';
import TVBlueLight from './components/TVBlueLight';
import LampBlueLight from './components/LampBlueLight';
import ShelfLight from './components/ShelfLight';
import DnDLight from './components/DnDLight';
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
      <ambientLight intensity={0.05} />

      <RoomCrimsonLight />
      <RiftLights />

      {/* <BulletinLight /> */}

      {/* <TVLight /> */}
      {/* <TVBlueLight /> */}

      {/* <LampBlueLight /> */}

      {/* <ShelfLight /> */}

      {/* <DnDLight /> */}
    </>
  )
}