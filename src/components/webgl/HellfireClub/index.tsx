import React, { useRef } from 'react';
import * as THREE from 'three';

import config from 'config';
import useCameraStore from 'store/useCameraStore';

import Coffin from './components/Coffin';
import LongTable from './components/LongTable';
import Banner from './components/Banner';
import WallRack from './components/WallRack';
import CoffeeTable from './components/CoffeeTable';
import Chandelier from './components/Chandelier';
import MeetingTable from './components/MeetingTable';
import Throne from './components/Throne';
import Wall from '../components/Wall';
import RiftFloor from '../components/RiftFloor';

import Standee from './components2/Standee';
import Curtain from './components2/Curtain';
import Box from './components2/Box';
import Ladder from './components2/Ladder';
import BulletinBoard from './components2/BulletinBoard';
import Shelf from './components2/Shelf';
import StandingBoard from './components2/StandingBoard';
import Lamp from './components2/Lamp';

export default () => {
  const set = useCameraStore(state => state.set);

  return (
    <>
      <Curtain.Large
        position={[-3.14, 2.53, -2.76]}
        rotation-y={Math.PI / 2}
      />

      <Curtain.Large
        position={[-3.14, 2.52, 3.06]}
        rotation-y={Math.PI / 2}
      />

      <Curtain.Classic
        position={[2.57, 2.5, -4.95]}
      />

      <Curtain.Classic
        position={[4.21, 2.46, -3.13]}
        rotation-y={-Math.PI / 2}
      />

      <Curtain.Classic
        position={[-2.17, 2.52, -4.95]}
      />

      <Box
        position={[-1.3, 0.38, 4.44]}
        rotation={[0.1, -0.29, -1.53]}
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

      <Ladder
        position={[1.22, 0.86, -4]}
        rotation-y={0.67}
      />

      <BulletinBoard
        position={[-3.22, 2.06, 0.15]}
      />

      <Shelf
        position={[2.38, 1.15, -4.29]}
      />


      <StandingBoard
        position={[-0.08, 1.35, -3.51]}
        rotation-y={1.86}
      />

      <Lamp
        position={[-2.76, 1.26, -4.44]}
      />

      <Wall />
      <RiftFloor />
    </>
  );
}