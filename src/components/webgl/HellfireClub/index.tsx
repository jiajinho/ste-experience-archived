import React, { useRef } from 'react';
import * as THREE from 'three';

import config from 'config';
import useCameraStore from 'store/useCameraStore';

import Room from './components/Room';
import Coffin from './components/Coffin';
import Cupboard from './components/Cupboard';
import LongTable from './components/LongTable';
import BulletinBoard from './components/BulletinBoard';
import Banner from './components/Banner';
import WallRack from './components/WallRack';
import CoffeeTable from './components/CoffeeTable';
import Chandelier from './components/Chandelier';
import MeetingTable from './components/MeetingTable';
import Throne from './components/Throne';
import ChairGroup from './groups/ChairGroup';
import CurtainGroup from './groups/CurtainGroup';
import CandlestandGroup from './groups/CandlestandGroup';
import StandeeGroup from './groups/StandeeGroup';

export default () => {

  const set = useCameraStore(state => state.set);

  const cupboard = useRef<THREE.Group>(null);
  const bulletin = useRef<THREE.Group>(null);

  return (
    <>
      <Coffin
        scale={config.gltf.scale}
        position={[-9.78, 4.35, -15.94]}
        rotation-y={-0.6}
      />

      <Cupboard
        ref={cupboard}
        scale={config.gltf.scale}
        position={[9, 4.45, -18.4]}
        onClick={() => set(cupboard.current, new THREE.Vector3(9, 4.45, -13.4))}
      />

      <LongTable
        scale={config.gltf.scale}
        position={[-11, -0.3, 10.72]}
      />

      <BulletinBoard
        ref={bulletin}
        scale={config.gltf.scale}
        position={[-12.9, 8.1, -2.76]}
        onClick={() => set(bulletin.current, new THREE.Vector3(-7.9, 8.1, -2.76))}
      />

      <Banner
        scale={config.gltf.scale}
        position={[-6.35, 9.79, -18.8]}
      />

      <Banner
        scale={config.gltf.scale}
        position={[6.13, 9.79, -18.8]}
      />


      <WallRack
        scale={config.gltf.scale}
        position={[0.9, 1.84, -19.9]}
      />

      <CoffeeTable
        scale={config.gltf.scale}
        position={[13.38, -0.92, 4.6]}
      />

      <Chandelier
        scale={config.gltf.scale}
        position={[13.38, 2.23, 4.61]}
        rotation-x={-0.2}
        emissive="red"
        color={0xff7777}
      />

      <MeetingTable
        scale={config.gltf.scale}
        position={[0, -0.15, 0]}
      />

      <Throne
        scale={config.gltf.scale}
        position={[0, 0, -6.44]}
      />

      <CurtainGroup />
      <ChairGroup />
      <CandlestandGroup />
      <StandeeGroup />

      <Room scale={config.gltf.scale} />
    </>
  )
}