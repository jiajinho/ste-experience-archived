import React from 'react';
import config from 'config';
import Candlestand from '../components/Candlestand';

export default () => (
  <>
    <Candlestand
      scale={config.gltf.scale}
      position={[-3.72, 0, -4.72]}
    />

    <Candlestand
      scale={config.gltf.scale}
      position={[3.37, 0, -7.83]}
    />

    <Candlestand
      scale={config.gltf.scale}
      position={[7.32, 0, 8.27]}
    />
  </>
);
