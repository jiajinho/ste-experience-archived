import React from 'react';
import config from 'config';
import Curtain from '../components/Curtain';

export default () => (
  <>
    <Curtain.Large
      scale={config.gltf.scale}
      position={[-12.5, 0.7, 11]}
    />

    <Curtain.Classic
      scale={config.gltf.scale}
      position={[-12.5, 0.6, -12.61]}
    />

    <Curtain.Classic
      scale={config.gltf.scale}
      position={[-9.3, 0.75, -19.5]}
      rotation-y={-Math.PI / 2}
    />

    <Curtain.Classic
      scale={config.gltf.scale}
      position={[11.6, 0.7, -19.5]}
      rotation-y={-Math.PI / 2}
    />

    <Curtain.Classic
      scale={config.gltf.scale}
      position={[16.8, 0.7, -14.4]}
      rotation-y={Math.PI}
    />
  </>
);
