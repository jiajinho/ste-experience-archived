import React from 'react';

import useZoomStore from 'store/useZoomStore';
import LongTabletop from './components/LongTabletop';
import VintageTV from './components/VintageTV';
import Room from './components/Room';
import POCHtml from './POCHtml';

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
      <VintageTV
        scale={scale}
        position={[-11.7, 2.51, 11.1]}
        onClick={handleVintageTVClick}
      />

      <LongTabletop
        scale={scale}
        position={[-11.47, 0, 11.15]}
      />

      <POCHtml />


      <Room scale={scale} />
    </>
  )
}