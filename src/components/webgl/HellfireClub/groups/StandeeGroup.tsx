import React from 'react';
import config from 'config';
import Standee from '../components/Standee';

export default () => (
  <>
    <Standee.Uno
      scale={config.gltf.scale}
      position={[-10.41, 0, 18.01]}
      rotation-y={-0.65}
    />

    <Standee.Dos
      scale={config.gltf.scale}
      position={[13.42, 0, 16]}
      rotation-y={0.77}
    />

    <Standee.Tres
      scale={config.gltf.scale}
      position={[15.28, 0, -10.10]}
      rotation={[-1, -1.41, -1]}
    />
  </>
);
