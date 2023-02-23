import React, { useRef } from 'react';
import * as THREE from 'three';

import config from 'config';
import useCameraStore from 'store/useCameraStore';

import Wall from './components/Wall';
import RiftFloor from './components/RiftFloor';
import Standee from './components/Standee';
import Curtain from './components/Curtain';
import Box from './components/Box';
import Ladder from './components/Ladder';
import BulletinBoard from './components/BulletinBoard';
import Shelf from './components/Shelf';
import StandingBoard from './components/StandingBoard';
import Lamp from './components/Lamp';
import Coffin from './components/Coffin';
import Tabletop from './components/Tabletop';
import Chair from './components/Chair';
import RetroTV from './components/RetroTV';
import Candlestand from './components/Candlestand';
import QuadLightStand from './components/QuadLightStand';
import CeilingLightBar from './components/CeilingLightBar';
import HellfireSignStand from './components/HellfireSignStand';
import WallLight from './components/WallLight';

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
        position={[2.57, 2.5, -4.8]}
      />

      <Curtain.Classic
        position={[4.21, 2.46, -3.13]}
        rotation-y={-Math.PI / 2}
      />

      <Curtain.Classic
        position={[-2.17, 2.52, -4.8]}
      />

      <Box
        position={[-1.3, 0.38, 4.44]}
        rotation={[0.1, -0.29, -1.53]}
      />

      <Box
        position={[3.54, 0.23, -0.9]}
        rotation={[Math.PI / 2, 0, 0.56]}
      />

      <Box
        position={[2.77, 0.18, 1.84]}
        rotation={[Math.PI / 2, 0, 1.25]}
      />

      <Box
        position={[-1.23, 0.2, 3.98]}
        rotation={[Math.PI, 0.3, 0]}
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
        position={[0.92, 0.86, -4.31]}
        rotation-y={0.86}
      />

      <BulletinBoard
        position={[-3.22, 1.75, 0.15]}
      />

      <Shelf
        position={[2.07, 1.15, -4.29]}
      />


      <StandingBoard
        position={[-0.08, 1.35, -3.51]}
        rotation-y={1.86}
      />

      <Lamp
        position={[-2.3, 1.26, -4.13]}
      />

      <Coffin
        position={[-2.6, 1, -2.46]}
        rotation-y={-0.34}
      />

      <Tabletop.DShape
        position={[-2.7, 0.75, 3.06]}
      />

      <Tabletop.Round
        position={[3.22, 0.52, 1.38]}
      />

      <Chair.Ornamental
        position={[-2.75, 0.48, 0.69]}
        rotation-y={-2.8}
      />

      <Chair.Ornamental
        position={[3.6, 0.38, 0.1]}
        rotation-y={0.68}
      />

      <RetroTV
        position={[-2.61, 1.07, 3.13]}
      />

      <Candlestand
        position={[2.3, 0.55, 3.58]}
      />

      <QuadLightStand
        position={[-2.38, 0, 1.63]}
      />

      <CeilingLightBar
        position={[-2.68, 3.3, 1.35]}
      />

      <CeilingLightBar
        position={[-2.68, 3.3, -1.35]}
      />

      <HellfireSignStand
        position={[0, 0, -4.52]}
      />

      <WallLight
        position={[0, 0, -5]}
      />


      <Wall />
      <RiftFloor />
    </>
  );
}