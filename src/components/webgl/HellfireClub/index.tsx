import React from 'react';
import { Stage } from '@react-three/drei';
import Tabletop from './components/Tabletop';
import VintageTV from './components/VintageTV';

export default () => {

  return (
    <Stage
      adjustCamera
      intensity={0.5}
      shadows
      environment="city"
    >
      <VintageTV />
      <Tabletop />
    </Stage>
  )
}