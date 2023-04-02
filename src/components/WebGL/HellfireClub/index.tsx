import React from 'react';

import { LightColor } from './config';
import PaperGroup from './groups/PaperGroup';
import CurtainGroup from './groups/CurtainGroup';
import CandlestandGroup from './groups/CandlestandGroup';
import RiftGroup from './groups/RiftGroup';
import WallGroup from './groups/WallGroup';
import ChairGroup from './groups/ChairGroup';
import StandeeGroup from './groups/StandeeGroup';

import Wall from './components/Wall';
import RiftFloor from './components/RiftFloor';
import Standee from './components/Standee';
import Box from './components/Box';
import Ladder from './components/Ladder';
import Shelf from './components/Shelf';
import Lamp from './components/Lamp';
import Coffin from './components/Coffin';
import Tabletop from './components/Tabletop';
import Chair from './components/Chair';
import RetroTV from './components/RetroTV';
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
import ChalkBoard from './components/ChalkBoard';
import ChalkboardHotspot from './hotspots/ChalkboardHotspot';
import NoticeBoardHotspot from './hotspots/NoticeBoardHotspot';
import RetroTVHotspot from './hotspots/RetroTVHotspot';


export default () => {
  return (
    <>
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

      <NoticeBoardHotspot
        position={[-3.22, 1.75, 0.15]}
      />

      <Shelf
        position={[2.07, 1.15, -4.29]}
      />

      <RetroTVHotspot
        position={[-2.61, 1.07, 3.13]}
      />

      <ChalkboardHotspot
        position={[-2.13, 1.35, -3.11]}
        rotation-y={0.63}
      />

      <Tabletop.DShape
        position={[-2.7, 0.75, 3.06]}
      />

      <Tabletop.Round
        position={[3.22, 0.52, -4.18]}
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
        position={[3.31, 0.92, -4.24]}
        rotation={[0.45, -0.21, 0.1]}
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

      <CurtainGroup />

      <CandlestandGroup />
      <StandeeGroup />
      <ChairGroup />

      <RiftGroup />
      <PaperGroup />
      <WallGroup />

      <RiftFloor />
    </>
  );
}