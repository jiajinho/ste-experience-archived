import React from 'react';

import useZoomStore from 'store/useZoomStore';
import LongTabletop from './components/LongTable';
import VintageTV from './components/VintageTV';
import Room from './components/Room';
import Coffin from './components/Coffin';
import Cupboard from './components/Cupboard';
import Chair from './components/Chair';
import LongTable from './components/LongTable';
import BulletinBoard from './components/BulletinBoard';
import Curtain from './components/Curtain';

export default () => {
  const scale = 4;

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
        scale={scale}
        position={[-9.78, 4.35, -15.94]}
        rotation-y={-0.6}
      />

      <Cupboard
        scale={scale}
        position={[9, 0, -18.4]}
      />

      <LongTable
        scale={scale}
        position={[-11, -0.3, 10.72]}
      />

      <BulletinBoard
        scale={scale}
        position={[-12.9, 4.3, -2.76]}
      />

      <Curtain.Large
        scale={scale}
        position={[-12.5, 0.7, 11]}
      />

      <Curtain.Classic
        scale={scale}
        position={[-12.5, 0.6, -12.61]}
      />

      <Curtain.Classic
        scale={scale}
        position={[-9.3, 0.75, -19.8]}
        rotation-y={-Math.PI / 2}
      />

      <Curtain.Classic
        scale={scale}
        position={[11.6, 0.7, -19.8]}
        rotation-y={-Math.PI / 2}
      />

      <Curtain.Classic
        scale={scale}
        position={[16.8, 0.7, -14.4]}
        rotation-y={Math.PI}
      />

      {/* <Chair scale={scale} /> */}

      <Room scale={scale} />
    </>
  )
}