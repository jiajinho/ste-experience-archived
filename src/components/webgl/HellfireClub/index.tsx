import React, { useRef } from 'react';
import * as THREE from 'three';

import config from 'config';
import useCameraStore from 'store/useCameraStore';

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
import Wall from '../components/Wall';
import RiftFloor from '../components/RiftFloor';
import Curtain from '../components/Curtain';
import Box from '../components/Box';

import Standee from './components2/Standee';

export default () => {
  const set = useCameraStore(state => state.set);

  return (
    <>
      <Curtain.Large position={[-3.12, 2.54, 2.86]} />
      <Curtain.Large position={[-3.17, 2.52, -2.52]} />

      <Curtain.Classic position={[-2.22, 2.59, -4.96]} />
      <Curtain.Classic position={[2.57, 2.48, -4.95]} />
      <Curtain.Classic
        position={[4.15, 2.58, -3.51]}
        rotation-y={-Math.PI / 2}
      />

      <Box

      />

      <Standee.CastleWall
        position={[-2, 0.9, 4.59]}
        rotation={[0.19, -0.52, 0.1]}
      />

      <Standee.CastleWall
        position={[2.72, 0.31, 4.44]}
        rotation={[0.19, 0.5, -0.1]}
      />

      <Standee.Forest
        position={[3.91, 0.58, -1.91]}
        rotation={[-0.19, 2.02, 0.19]}
      />

      <Wall />
      <RiftFloor />
    </>
  );
}