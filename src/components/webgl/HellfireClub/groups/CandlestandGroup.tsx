import React from 'react';
import config from 'config';
import Candlestand from '../components/Candlestand';

export default () => {
  const emissive = "red";
  const color = 0xff7777;

  return (
    <>
      <Candlestand
        scale={config.gltf.scale}
        position={[-3.72, 0, -4.72]}
        emissive={emissive}
        color={color}
      />

      <Candlestand
        scale={config.gltf.scale}
        position={[3.37, 0, -7.83]}
        emissive={emissive}
        color={color}
      />

      <Candlestand
        scale={config.gltf.scale}
        position={[7.32, 0, 8.27]}
        emissive={emissive}
        color={color}
      />
    </>
  );
}
