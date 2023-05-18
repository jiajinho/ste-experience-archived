import React from 'react';

import { LightColor } from 'config';
import RiftFloor from './components/RiftFloor';
import Tabletop from './components/Tabletop';
import HellfireSignStand from './components/HellfireSignStand';
import WallLight from './components/WallLight';
import Chandelier from './components/Chandelier';
import CeilingLight from './components/CeilingLight';
import Lamp from './components/Lamp';
import Coffin from './components/Coffin';
import CastlewallStandee from './components/CastlewallStandee';

import PaperGroup from './groups/PaperGroup';
import CurtainGroup from './groups/CurtainGroup';
import CandlestandGroup from './groups/CandlestandGroup';
import RiftGroup from './groups/RiftGroup';
import WallGroup from './groups/WallGroup';
import ChairGroup from './groups/ChairGroup';
import TabletopGroup from './groups/TabletopGroup';
import BoxGroup from './groups/BoxGroup';
import SodaGroup from './groups/SodaGroup';
import CupGroup from './groups/CupGroup';

import ChalkboardHotspot from './hotspots/ChalkboardHotspot';
import NoticeBoardHotspot from './hotspots/NoticeBoardHotspot';
import RetroTVHotspot from './hotspots/RetroTVHotspot';
import ShelfHotspot from './hotspots/ShelfHotspot';
import DefaultViewHotspot from './hotspots/DefaultViewHotspot';
import VecnaBoardHotspot from './hotspots/VecnaBoardHotspot';
import FAQBoardHotspot from './hotspots/FAQBoardHotspot';
import MapHotspot from './hotspots/MapHotspot';
import CeilingLightGroup from './groups/CeilingLightGroup';

export default () => (
  <>
    <DefaultViewHotspot />

    <NoticeBoardHotspot
      position={[-3.16, 1.84, 0.15]}
    />

    <ShelfHotspot
      position={[1.31, 1.45, -4.29]}
      rotation-y={-Math.PI / 2}
    />

    <VecnaBoardHotspot
      position={[0, 0.835, 0.2]}
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
      position={[2.62, 0.52, -4.18]}
    />

    <HellfireSignStand position={[0, 0, -4.52]} />

    <WallLight position={[0, 0, -5]} />

    <Chandelier
      position={[2.64, 0.92, -4.24]}
      rotation={[0.45, -0.21, 0.1]}
    />

    <CastlewallStandee
      position={[-2.11, 0.92, 4.42]}
      rotation={[0.19, -0.36, 0.1]}
    />

    <Lamp position={[-1.89, 1.28, -4.39]} />

    <Coffin
      position={[-0.59, 0, -3.97]}
      rotation={[-0.31, -1.36, 0]}
    />

    <BoxGroup />
    <CeilingLightGroup />
    <TabletopGroup />
    <CurtainGroup />
    <CandlestandGroup />
    <ChairGroup />
    <RiftGroup />
    <PaperGroup />
    <WallGroup />
    <RiftFloor />
    <SodaGroup />
    <CupGroup />
  </>
);
