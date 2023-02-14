import React from 'react';
import config from 'config';
import Chair from '../components/Chair';

export default () => {
  return (
    <>
      <Chair
        scale={config.gltf.scale}
        rotation-y={-Math.PI / 2}
        position={[3.67, 0, -1.53]}
      />

      <Chair
        scale={config.gltf.scale}
        rotation-y={-Math.PI / 2}
        position={[3.67, 0, 1.53]}
      />

      <Chair
        scale={config.gltf.scale}
        rotation-y={Math.PI / 2}
        position={[-3.36, 0, -1.22]}
      />

      <Chair
        scale={config.gltf.scale}
        rotation-y={Math.PI / 2}
        position={[-3.58, 0, 1.47]}
      />

      <Chair
        scale={config.gltf.scale}
        rotation-y={Math.PI}
        position={[-1.22, 0, 5.21]}
      />

      <Chair
        scale={config.gltf.scale}
        rotation-y={Math.PI}
        position={[1.18, 0, 5.21]}
      />
    </>
  )
}