import React from 'react';
import { Stage } from '@react-three/drei';
import Tabletop from './components/LongTabletop';
import VintageTV from './components/VintageTV';
import Chair from './components/Chair';
import CoffeeTabletop from './components/CoffeeTabletop';
import Coffin from './components/Coffin';
import Cupboard from './components/Cupboard';
import Curtain from './components/Curtain';
import Candlestand from './components/Candlestand';

export default () => {

  return (
    <Stage
      intensity={0.5}
      shadows
      environment="city"
    >
      {/* <VintageTV /> */}
      {/* <Tabletop /> */}
      {/* <Coffin /> */}

      {/* <Cupboard /> */}

      <Candlestand />
    </Stage>
  )
}