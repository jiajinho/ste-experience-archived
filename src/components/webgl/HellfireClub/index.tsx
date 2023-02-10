import React from 'react';

import LongTabletop from './components/LongTabletop';
import VintageTV from './components/VintageTV';
import Room from './components/Room';

export default () => {
  const scale = 4;

  return (
    <>
      <VintageTV scale={scale} position={[-11.7, 2.78, 11.1]} />
      <LongTabletop scale={scale} position={[-11.47, 0, 11.15]} />

      <Room scale={scale} />
    </>
  )
}