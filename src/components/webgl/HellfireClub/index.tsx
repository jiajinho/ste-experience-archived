import React from 'react';

import config from 'config';
import useZoomStore from 'store/useZoomStore';

import Room from './components/Room';
import Coffin from './components/Coffin';
import Cupboard from './components/Cupboard';
import LongTable from './components/LongTable';
import BulletinBoard from './components/BulletinBoard';
import Curtain from './components/Curtain';
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
  const currentZoom = useZoomStore(state => state.currentZoom);
  const setZoomTarget = useZoomStore(state => state.setZoomTarget);

  const handleVintageTVClick = () => {
    if (!currentZoom)
      setZoomTarget("vintage-tv");
    else
      setZoomTarget(undefined);
  }

  return (
    <>
      {/* <VintageTV
        scale={scale}
        position={[-11.7, 2.51, 11.1]}
        onClick={handleVintageTVClick}
      /> */}

      <Coffin
        scale={config.gltf.scale}
        position={[-9.78, 4.35, -15.94]}
        rotation-y={-0.6}
      />

      <Cupboard
        scale={config.gltf.scale}
        position={[9, 0, -18.4]}
      />

      <LongTable
        scale={config.gltf.scale}
        position={[-11, -0.3, 10.72]}
      />

      <BulletinBoard
        scale={config.gltf.scale}
        position={[-12.9, 4.3, -2.76]}
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