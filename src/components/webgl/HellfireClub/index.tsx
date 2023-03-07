import React from 'react';

import { LightColor } from './config';
import PaperGroup from './groups/PaperGroup';

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
import HellfireSignStand from './components/HellfireSignStand';
import WallLight from './components/WallLight';
import Chandelier from './components/Chandelier';
import MeetingTable from './components/MeetingTable';
import HellfireBanner from './components/HellfireBanner';
import CeilingLight from './components/CeilingLight';
import Book from './components/Book';
import Cup from './components/Cup';
import Map from './components/Map';
import Page from './components/Page';
import Dossier from './components/Dossier';
import Soda from './components/Soda';
import Dice from './components/Dice';
import Rift from './components/Rift';

export default () => {
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
        zoom={{
          hotspot: "bulletinBoard",
          cameraPosition: [-2.22, 1.75, 0.15]
        }}
      />

      <Shelf
        position={[2.07, 1.15, -4.29]}
        zoom={{
          hotspot: "shelf",
          cameraPosition: [2.07, 1.15, -3.29]
        }}
      />

      <StandingBoard
        position={[-0.08, 1.35, -3.51]}
        rotation-y={1.86}
        zoom={{
          hotspot: "standingBoard",
          cameraPosition: [0.2, 1.35, -2.51]
        }}
      />

      <Lamp
        position={[-2.3, 1.26, -4.13]}
      />

      <Coffin
        position={[-2.6, 0, -2.46]}
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
        position={[3.52, 0.38, 0.48]}
        rotation-y={0.2}
      />

      <Chair.Throne
        position={[0, 0.68, -1.57]}
      />

      <RetroTV
        position={[-2.61, 1.07, 3.13]}
        zoom={{
          hotspot: "retroTV",
          cameraPosition: [-2.21, 1.07, 3.13]
        }}
      />

      <Candlestand
        position={[2.3, 0.55, 3.58]}
        light={LightColor.Yellow}
      />

      <QuadLightStand
        position={[-2.38, 0, 1.63]}
        lights={[
          LightColor.Yellow,
          LightColor.Cyan,
          LightColor.Yellow,
          LightColor.Cyan
        ]}
      />

      <CeilingLight
        position={[-2.68, 4.13, 1.35]}
        lights={[
          LightColor.Yellow,
          undefined,
          LightColor.Cyan,
          undefined,
          LightColor.Teal,
          undefined,
          LightColor.Cyan,
          LightColor.Tangerine,
          LightColor.Cyan,
          undefined,
          LightColor.Tangerine
        ]}
      />

      <CeilingLight
        position={[-2.68, 4.13, -1.35]}
        lights={[
          LightColor.Yellow,
          LightColor.Teal,
          LightColor.Yellow,
          LightColor.Cyan,
          undefined,
          undefined,
          undefined,
          LightColor.Yellow,
          LightColor.Cyan,
          LightColor.Tangerine,
          undefined
        ]}
      />

      <HellfireSignStand
        position={[0, 0, -4.52]}
      />

      <WallLight
        position={[0, 0, -5]}
        lights={[
          LightColor.Cyan,
          LightColor.Cyan
        ]}
      />

      <Chandelier
        position={[3.22, 0.93, 1.4]}
        rotation={[-0.35, 0.67, 0]}
        light={LightColor.Yellow}
      />

      <MeetingTable
        position={[0, 0.68, 0]}
      />

      <HellfireBanner.Welcome
        position={[-1.76, 2.5, -4.65]}
      />

      <HellfireBanner.Hellfire
        position={[1.45, 2.5, -4.65]}
      />

      <Chair.Classic
        position={[1.12, 0.45, -0.31]}
        rotation-y={0.1}
      />

      <Chair.Classic
        position={[1.0, 0.45, 0.56]}
        rotation-y={-0.38}
      />

      <Chair.Classic
        position={[0.83, 0.45, 1.43]}
        rotation-y={-0.97}
      />

      <Chair.Classic
        position={[-0.56, 0.45, 1.37]}
        rotation-y={-1.92}
      />

      <Chair.Classic
        position={[-1.1, 0.45, 0.15]}
        rotation-y={-3.4}
      />

      <Chair.Classic
        position={[-0.84, 0.45, -0.83]}
        rotation-y={-3.37}
      />

      <Book
        position={[0, 0.83, -0.73]}
        zoom={{
          hotspot: "book",
          cameraPosition: [0, 1.2, -0.7]
        }}
      />

      <Cup
        position={[0.28, 0.89, -0.69]}
      />

      <Map
        position={[0, 0.815, 0.05]}
      />

      <Page.Rafflesia
        position={[0.27, 0.825, -0.16]}
        rotation-y={-0.1}
      />

      <Page.Rafflesia
        position={[-0.29, 0.825, 0.3]}
        rotation-y={-1.96}
      />

      <Page.Rafflesia
        position={[0.3, 0.825, 0.73]}
        rotation-y={-1.54}
      />

      <Page.Demogorgon
        position={[-0.25, 0.825, -0.31]}
        rotation-y={-0.48}
      />

      <Page.Demogorgon
        position={[0.22, 0.83, 0.63]}
        rotation-y={0.96}
      />

      <Cup
        position={[-0.27, 0.9, -0.33]}
      />

      <Cup
        position={[0.25, 0.87, 0.7]}
        rotation={[1.35, 0, -0.97]}
      />

      <Dossier.DarkBlue
        position={[0.10, 0.975, -0.45]}
        rotation-y={0.25}
      />

      <Dossier.Yellow
        position={[-0.17, 0.96, -0.45]}
        rotation-y={-0.47}
      />

      <Dossier.Violet
        position={[0.29, 0.83, 0.29]}
        rotation-y={1.6}
      />

      <Dossier.Green
        position={[-0.18, 0.83, 0.75]}
        rotation-y={3.08}
      />

      <Page.Rafflesia
        position={[0.21, 0.975, -0.50]}
        rotation={[0, 2.08, -Math.PI / 2]}
      />

      <Soda
        position={[-0.23, 0.875, 0.06]}
      />

      <Soda
        position={[0.25, 0.845, -0.3]}
        rotation={[0, 2.05, Math.PI / 2]}
      />

      <Dice
        position={[0.18, 0.835, -0.1]}
      />

      <Rift
        position={[-3.18, 0.8, -0.23]}
        rotation={[-1.15, -Math.PI / 2, 0]}
      />

      <Rift
        position={[1.03, 2.22, -4.85]}
        rotation={[0, Math.PI, -0.38]}
        scale={1.1}

      />

      <Rift
        position={[-1, 3.45, -4.9]}
        rotation={[0, Math.PI, 0.76]}
        scale={0.7}
      />

      <Rift
        position={[-3.05, 1.94, 2.75]}
        rotation={[0, -Math.PI / 2, -0.38]}
        scale={0.6}
      />

      <PaperGroup />

      <Wall />
      <RiftFloor />
    </>
  );
}