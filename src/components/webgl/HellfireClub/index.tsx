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
import { Color } from 'three';

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

      <Candlestand glow={{ color: new Color(0xff0000), emissive: new Color(0xff0000), emissiveIntensity: 2.5 }} />
    </Stage>
  )
}