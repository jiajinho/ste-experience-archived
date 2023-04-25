import React from 'react';

import { LightColor } from '@webgl/config';
import RiftFloor from './components/RiftFloor';
import Tabletop from './components/Tabletop';
import HellfireSignStand from './components/HellfireSignStand';
import WallLight from './components/WallLight';
import Chandelier from './components/Chandelier';
import CeilingLight from './components/CeilingLight';
import Ladder from './components/Ladder';
import Lamp from './components/Lamp';
import Coffin from './components/Coffin';

import PaperGroup from './groups/PaperGroup';
import CurtainGroup from './groups/CurtainGroup';
import CandlestandGroup from './groups/CandlestandGroup';
import RiftGroup from './groups/RiftGroup';
import WallGroup from './groups/WallGroup';
import ChairGroup from './groups/ChairGroup';
import StandeeGroup from './groups/StandeeGroup';
import TabletopGroup from './groups/TabletopGroup';
import BoxGroup from './groups/BoxGroup';

import ChalkboardHotspot from './hotspots/ChalkboardHotspot';
import NoticeBoardHotspot from './hotspots/NoticeBoardHotspot';
import RetroTVHotspot from './hotspots/RetroTVHotspot';
import ShelfHotspot from './hotspots/ShelfHotspot';
import DefaultViewHotspot from './hotspots/DefaultViewHotspot';
import VecnaBoardHotspot from './hotspots/VecnaBoardHotspot';
import FAQBoardHotspot from './hotspots/FAQBoardHotspot';
import MapHotspot from './hotspots/MapHotspot';

export default () => (
  <>
    <DefaultViewHotspot />

    <NoticeBoardHotspot
      position={[-3.22, 1.75, 0.15]}
    />

    <ShelfHotspot
      position={[2.07, 1.15, -4.29]}
      rotation-y={-Math.PI / 2}
    />

    <VecnaBoardHotspot
      position={[0, 0.83, 0.2]}
    />

    <FAQBoardHotspot
      position={[0, 0.825, -0.42]}
      rotation-y={0.08}
    />

    <MapHotspot
      position={[0, 0.82, -0.73]}
      rotation-y={-0.06}
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

    {/* <Cup
        position={[0.28, 0.89, -0.69]}
      /> */}

    {/* <Map
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
      /> */}

    {/* <Soda
        position={[-0.23, 0.875, 0.06]}
      />

      <Soda
        position={[0.25, 0.845, -0.3]}
        rotation={[0, 2.05, Math.PI / 2]}
      /> */}

    <Ladder
      position={[0.83, 0.85, -3.93]}
      rotation-y={0.62}
    />

    <Lamp
      position={[-1.89, 1.19, -4.39]}
    />

    <Coffin
      position={[-0.59, 0, -3.97]}
      rotation-y={-1.36}
    />

    <BoxGroup />

    <TabletopGroup />

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
